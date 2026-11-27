// Cloudflare Worker for the Iyun site, the hosted counterpart of server.js.
// Data lives in D1, live events go through a Durable Object (Hub), and /api/* is the API.
// Every other path is served from the R2 bucket bound as SITE.
// Keep the API behaviour in step with server.js.
const enc = new TextEncoder();
// Small helpers: JSON responses, hex and base64url encoding, hashing and random tokens.
const json = (status, data, headers = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...headers,
    },
  });
const fail = (status, message) => json(status, { error: message });
const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
const unhex = (h) => Uint8Array.from(h.match(/../g) || [], (x) => parseInt(x, 16));
const sha = async (v) => hex(await crypto.subtle.digest('SHA-256', enc.encode(v)));
const rand = (n) => hex(crypto.getRandomValues(new Uint8Array(n)).buffer);
const b64url = (bytes) =>
  btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
// Workers have no scrypt, so passwords are hashed with PBKDF2 here. server.js uses scrypt,
// so a hash made by one server cannot be checked by the other.
async function hashPw(pw, saltHex) {
  const key = await crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveBits']);
  return hex(
    await crypto.subtle.deriveBits(
      { name: 'PBKDF2', hash: 'SHA-256', salt: unhex(saltHex), iterations: 100000 },
      key,
      512
    )
  );
}
// Compares strings in constant time, so a timing attack cannot reveal a secret.
function same(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
// Reads and parses the JSON body. Bodies over about 256 KB are rejected.
async function body(req) {
  const text = await req.text();
  if (text.length > 256000) throw Object.assign(Error('Request too large'), { status: 413 });
  try {
    return JSON.parse(text || '{}');
  } catch {
    throw Object.assign(Error('Invalid JSON'), { status: 400 });
  }
}
// Returns one cookie value from the Cookie header, or null.
function cookie(req, name) {
  for (const part of (req.headers.get('cookie') || '').split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return null;
}
const COOKIE = 'iyun_session';
// Returns the signed-in user for this request, or null.
async function currentUser(env, req) {
  const t = cookie(req, COOKIE);
  if (!t) return null;
  return (
    (await env.DB.prepare(
      'SELECT u.id,u.email,u.name FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>?'
    )
      .bind(await sha(t), Date.now())
      .first()) || null
  );
}
// Creates a 30-day session and returns the sign-in response with the cookie set.
// Only a hash of the token is stored, so a leaked database cannot be used to sign in.
async function startSession(env, u) {
  const token = b64url(crypto.getRandomValues(new Uint8Array(32))),
    expires = Date.now() + 30 * 86400e3;
  await env.DB.prepare('INSERT INTO sessions(token_hash,user_id,expires_at) VALUES(?,?,?)')
    .bind(await sha(token), u.id, expires)
    .run();
  return json(
    200,
    { user: u },
    {
      'set-cookie':
        COOKIE + '=' + token + '; HttpOnly; SameSite=Lax; Path=/; Max-Age=2592000; Secure',
    }
  );
}
// Rate limiter kept in D1. Returns true when the caller is over the limit.
// Pass `who` to count by something other than the client IP.
async function limited(env, req, scope, max = 12, windowMs = 60000, who) {
  const key = scope + ':' + (who || req.headers.get('cf-connecting-ip') || 'local'),
    now = Date.now();
  await env.DB.prepare('DELETE FROM attempts WHERE key=? AND ts<?')
    .bind(key, now - windowMs)
    .run();
  // Occasionally delete old rows for every key, so the table does not grow without limit.
  if (Math.random() < 0.02)
    await env.DB.prepare('DELETE FROM attempts WHERE ts<?')
      .bind(now - 3600000)
      .run();
  const { n } = await env.DB.prepare('SELECT COUNT(*) AS n FROM attempts WHERE key=?')
    .bind(key)
    .first();
  if (n >= max) return true;
  await env.DB.prepare('INSERT INTO attempts(key,ts) VALUES(?,?)').bind(key, now).run();
  return false;
}
const bad = (m) => Object.assign(Error(m), { status: 400 });
// Sheets are stored as plain text because the client renders them with textContent.
// Passage links are limited to our own book and gemara pages, so a sheet cannot send readers elsewhere.
function cleanSheet(d) {
  const title = String(d.title || '')
    .trim()
    .slice(0, 120);
  if (!title) throw bad('Give the sheet a title.');
  const blocks = (Array.isArray(d.blocks) ? d.blocks.slice(0, 60) : [])
    .map((b) => {
      if (b && b.type === 'note') {
        const text = String(b.text || '')
          .trim()
          .slice(0, 4000);
        return text ? { type: 'note', text } : null;
      }
      if (b && b.type === 'passage') {
        const ref = String(b.ref || '')
            .trim()
            .slice(0, 160),
          he = String(b.he || '').slice(0, 4000),
          en = String(b.en || '').slice(0, 4000);
        if (!ref || (!he && !en)) return null;
        let url = String(b.url || '').slice(0, 400);
        if (!/^(book|gemara)\.html\?/.test(url)) url = '';
        return {
          type: 'passage',
          ref,
          he,
          en,
          url,
          license: String(b.license || '').slice(0, 240),
        };
      }
      return null;
    })
    .filter(Boolean);
  if (!blocks.length) throw bad('Add at least one note or passage.');
  const serialized = JSON.stringify(blocks);
  if (serialized.length > 120000) throw bad('This sheet is too large.');
  return { title, json: serialized };
}
// Admin routes accept only the ADMIN_KEY secret, sent as a bearer token.
const adminOk = (env, req) =>
  !!env.ADMIN_KEY && same(req.headers.get('authorization') || '', 'Bearer ' + env.ADMIN_KEY);
// Only our own book and gemara pages may be linked from shared content.
const safeUrl = (s) => (/^(book|gemara)\.html\?/.test(s) ? s : '');
// True when at least one of the user's tabs has an open event stream.
async function isOnline(env, userId) {
  try {
    const r = await env.HUB.get(env.HUB.idFromName(userId)).fetch('https://hub/status');
    return (await r.json()).online === true;
  } catch {
    return false;
  }
}
// Pushes one event to every open tab of a user. Failures are ignored: a missed live update is acceptable.
async function emit(env, userId, type, data) {
  const stub = env.HUB.get(env.HUB.idFromName(userId));
  await stub
    .fetch('https://hub/emit', { method: 'POST', body: JSON.stringify({ type, data }) })
    .catch(() => {});
}
// Room membership and ownership lookups.
const isMember = (env, rid, uid) =>
  env.DB.prepare('SELECT 1 AS x FROM room_members WHERE room_id=? AND user_id=?')
    .bind(rid, uid)
    .first();
const isOwner = (env, rid, uid) =>
  env.DB.prepare('SELECT 1 AS x FROM rooms WHERE id=? AND owner_id=?').bind(rid, uid).first();
const roomUsers = async (env, rid) =>
  (
    await env.DB.prepare('SELECT user_id FROM room_members WHERE room_id=?').bind(rid).all()
  ).results.map((x) => x.user_id);

// Handles /api/* requests. Each route is matched by path and method, in the order below.
async function api(req, env) {
  const url = new URL(req.url),
    p = url.pathname,
    m = req.method;
  if (p === '/api/status' && m === 'GET')
    return json(200, { server: true, ai: !!env.OPENAI_API_KEY });
  if (p === '/api/auth/me' && m === 'GET') return json(200, { user: await currentUser(env, req) });
  if (p === '/api/auth/signup' && m === 'POST') {
    if (await limited(env, req, 'auth')) return fail(429, 'Try again shortly.');
    const d = await body(req),
      email = String(d.email || '')
        .trim()
        .toLowerCase(),
      name = String(d.name || '').trim(),
      password = String(d.password || '');
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      name.length < 1 ||
      name.length > 80 ||
      password.length < 8 ||
      password.length > 200
    )
      return fail(400, 'Enter a name, valid email, and password of at least eight characters.');
    if (await env.DB.prepare('SELECT 1 AS x FROM users WHERE email=?').bind(email).first())
      return fail(409, 'An account with this email already exists.');
    const salt = rand(24),
      hash = await hashPw(password, salt),
      u = { id: crypto.randomUUID(), email, name };
    await env.DB.prepare(
      'INSERT INTO users(id,email,name,salt,hash,created_at) VALUES(?,?,?,?,?,?)'
    )
      .bind(u.id, email, name, salt, hash, new Date().toISOString())
      .run();
    return startSession(env, u);
  }
  if (p === '/api/auth/signin' && m === 'POST') {
    if (await limited(env, req, 'auth')) return fail(429, 'Try again shortly.');
    const d = await body(req),
      email = String(d.email || '')
        .trim()
        .toLowerCase(),
      password = String(d.password || '');
    const row = await env.DB.prepare('SELECT * FROM users WHERE email=?').bind(email).first();
    // Hash even when the email is unknown, so response time does not reveal which accounts exist.
    const actual = await hashPw(password, row?.salt || '00'.repeat(24)),
      expected = row?.hash || '00'.repeat(64);
    if (!row || !same(actual, expected)) return fail(401, 'Invalid email or password.');
    return startSession(env, { id: row.id, email: row.email, name: row.name });
  }
  if (p === '/api/auth/signout' && m === 'POST') {
    const t = cookie(req, COOKIE);
    if (t)
      await env.DB.prepare('DELETE FROM sessions WHERE token_hash=?')
        .bind(await sha(t))
        .run();
    return json(
      200,
      { ok: true },
      { 'set-cookie': COOKIE + '=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0; Secure' }
    );
  }
  // Sheets are public: anyone with the link can read one, and anyone can report one.
  const sheetMatch = /^\/api\/sheets\/([0-9a-f]{12,40})(\/report)?$/.exec(p);
  if (sheetMatch && m === 'GET' && !sheetMatch[2]) {
    const row = await env.DB.prepare(
      'SELECT s.id,s.title,s.body,s.created_at,s.hidden,s.user_id,u.name FROM sheets s JOIN users u ON u.id=s.user_id WHERE s.id=?'
    )
      .bind(sheetMatch[1])
      .first();
    if (!row) return fail(404, 'This sheet does not exist or was deleted.');
    const me = await currentUser(env, req);
    // Hidden sheets stay visible to their author and to the admin.
    if (row.hidden && !(me && me.id === row.user_id) && !adminOk(env, req))
      return fail(410, 'This sheet was hidden after reports and is waiting for review.');
    return json(200, {
      sheet: {
        id: row.id,
        title: row.title,
        author: row.name,
        created_at: row.created_at,
        blocks: JSON.parse(row.body),
        hidden: !!row.hidden,
        mine: !!(me && me.id === row.user_id),
      },
    });
  }
  if (sheetMatch && sheetMatch[2] && m === 'POST') {
    // Signed-out reporters are keyed by a hash of their IP, so one person can report a sheet only once.
    const me = await currentUser(env, req),
      who = me
        ? 'u:' + me.id
        : 'ip:' + (await sha(req.headers.get('cf-connecting-ip') || 'local')).slice(0, 16);
    if (await limited(env, req, 'report', 10, 3600e3, who))
      return fail(429, 'Too many reports. Try again later.');
    const row = await env.DB.prepare('SELECT id,hidden FROM sheets WHERE id=?')
      .bind(sheetMatch[1])
      .first();
    if (!row) return fail(404, 'This sheet does not exist.');
    const d = await body(req),
      reason = String(d.reason || '')
        .trim()
        .slice(0, 300);
    const ins = await env.DB.prepare(
      'INSERT OR IGNORE INTO sheet_reports(sheet_id,reporter,reason,created_at) VALUES(?,?,?,?)'
    )
      .bind(row.id, who, reason || '(no reason given)', new Date().toISOString())
      .run();
    if (ins.meta && ins.meta.changes) {
      await env.DB.prepare('UPDATE sheets SET report_count=report_count+1 WHERE id=?')
        .bind(row.id)
        .run();
      // Three distinct reports hide the sheet until someone reviews it.
      await env.DB.prepare('UPDATE sheets SET hidden=1 WHERE id=? AND report_count>=3')
        .bind(row.id)
        .run();
    }
    return json(200, { ok: true });
  }
  // Moderation needs the ADMIN_KEY secret. Without it these routes return 404, so they look absent.
  if (p === '/api/admin/reports' && m === 'GET') {
    if (!adminOk(env, req)) return fail(404, 'API route not found.');
    const rows = (
      await env.DB.prepare(
        'SELECT s.id,s.title,s.hidden,s.report_count,s.created_at,u.name AS author FROM sheets s JOIN users u ON u.id=s.user_id WHERE s.report_count>0 ORDER BY s.report_count DESC,s.created_at DESC LIMIT 100'
      ).all()
    ).results;
    for (const r of rows)
      r.reports = (
        await env.DB.prepare(
          'SELECT reason,created_at FROM sheet_reports WHERE sheet_id=? ORDER BY created_at DESC LIMIT 20'
        )
          .bind(r.id)
          .all()
      ).results;
    return json(200, { sheets: rows });
  }
  const adminMatch = /^\/api\/admin\/sheets\/([0-9a-f]{12,40})$/.exec(p);
  if (adminMatch && m === 'POST') {
    if (!adminOk(env, req)) return fail(404, 'API route not found.');
    const d = await body(req),
      action = String(d.action || '');
    if (action === 'hide')
      await env.DB.prepare('UPDATE sheets SET hidden=1 WHERE id=?').bind(adminMatch[1]).run();
    else if (action === 'restore')
      await env.DB.batch([
        env.DB.prepare('UPDATE sheets SET hidden=0,report_count=0 WHERE id=?').bind(adminMatch[1]),
        env.DB.prepare('DELETE FROM sheet_reports WHERE sheet_id=?').bind(adminMatch[1]),
      ]);
    else if (action === 'delete')
      await env.DB.prepare('DELETE FROM sheets WHERE id=?').bind(adminMatch[1]).run();
    else return fail(400, 'Action must be hide, restore or delete.');
    return json(200, { ok: true });
  }
  // Everything below needs a signed-in user.
  const u = await currentUser(env, req);
  if (!u) return fail(401, 'Sign in to use this feature.');
  if (p === '/api/account' && m === 'DELETE') {
    if (await limited(env, req, 'auth')) return fail(429, 'Try again shortly.');
    const d = await body(req),
      row = await env.DB.prepare('SELECT * FROM users WHERE id=?').bind(u.id).first();
    if (!row || !same(await hashPw(String(d.password || ''), row.salt), row.hash))
      return fail(401, 'Password is incorrect.');
    // Find the other members of rooms this user owns, so they can be told once the delete succeeds.
    const owned = (
      await env.DB.prepare('SELECT id FROM rooms WHERE owner_id=?').bind(u.id).all()
    ).results.map((x) => x.id);
    const mates = [];
    for (const rid of owned)
      for (const x of await roomUsers(env, rid)) if (x !== u.id) mates.push([x, rid]);
    // Messages and owned rooms are not removed by a cascade from users, so delete them by hand.
    // batch() runs the deletes in one transaction.
    await env.DB.batch([
      env.DB.prepare('DELETE FROM messages WHERE user_id=?').bind(u.id),
      env.DB.prepare('DELETE FROM rooms WHERE owner_id=?').bind(u.id),
      env.DB.prepare('DELETE FROM users WHERE id=?').bind(u.id),
    ]);
    await Promise.all(mates.map(([x, rid]) => emit(env, x, 'roomgone', { roomId: rid })));
    return json(
      200,
      { ok: true },
      { 'set-cookie': COOKIE + '=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0; Secure' }
    );
  }
  // Lists the signed-in user's own sheets, newest first.
  if (p === '/api/sheets' && m === 'GET')
    return json(200, {
      sheets: (
        await env.DB.prepare(
          'SELECT id,title,created_at,hidden,report_count FROM sheets WHERE user_id=? ORDER BY created_at DESC LIMIT 200'
        )
          .bind(u.id)
          .all()
      ).results,
    });
  if (p === '/api/sheets' && m === 'POST') {
    if (await limited(env, req, 'sheet', 20, 3600e3, u.id))
      return fail(429, 'You have published many sheets recently. Try again later.');
    const d = await body(req),
      clean = cleanSheet(d),
      id = rand(8);
    await env.DB.prepare('INSERT INTO sheets(id,user_id,title,body,created_at) VALUES(?,?,?,?,?)')
      .bind(id, u.id, clean.title, clean.json, new Date().toISOString())
      .run();
    return json(201, { id, url: '/s/' + id });
  }
  const ownSheetMatch = /^\/api\/sheets\/([0-9a-f]{12,40})$/.exec(p);
  if (ownSheetMatch && m === 'DELETE') {
    const r = await env.DB.prepare('DELETE FROM sheets WHERE id=? AND user_id=?')
      .bind(ownSheetMatch[1], u.id)
      .run();
    return r.meta && r.meta.changes
      ? json(200, { ok: true })
      : fail(404, 'No such sheet of yours.');
  }
  // Per-user settings stored as key and value rows. Keys must be in the iyun. namespace.
  if (p === '/api/state' && m === 'GET') {
    const rows = (
      await env.DB.prepare('SELECT key,value,updated_at FROM user_state WHERE user_id=?')
        .bind(u.id)
        .all()
    ).results;
    return json(200, {
      items: rows.map((x) => ({ key: x.key, value: JSON.parse(x.value), updatedAt: x.updated_at })),
    });
  }
  if (p === '/api/state' && m === 'PUT') {
    const d = await body(req),
      key = String(d.key || '');
    // Only keys in the iyun. namespace, and no control characters.
    if (!key.startsWith('iyun.') || key.length > 150 || /[\x00-\x1f]/.test(key))
      return fail(400, 'Invalid state key.');
    const value = JSON.stringify(d.value);
    if (value === undefined || value.length > 150000) return fail(400, 'State item is too large.');
    const now = Date.now();
    await env.DB.prepare(
      'INSERT INTO user_state(user_id,key,value,updated_at) VALUES(?,?,?,?) ON CONFLICT(user_id,key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at'
    )
      .bind(u.id, key, value, now)
      .run();
    return json(200, { ok: true, updatedAt: now });
  }
  // Groups the signed-in user belongs to, with their role and member count.
  if (p === '/api/rooms' && m === 'GET') {
    const rows = (
      await env.DB.prepare(
        "SELECT r.id,r.name,r.code,r.created_at,CASE WHEN r.owner_id=m.user_id THEN 'owner' ELSE 'member' END AS role,(SELECT COUNT(*) FROM room_members x WHERE x.room_id=r.id) AS members FROM rooms r JOIN room_members m ON r.id=m.room_id WHERE m.user_id=? ORDER BY r.created_at DESC"
      )
        .bind(u.id)
        .all()
    ).results;
    return json(200, { rooms: rows });
  }
  if (p === '/api/rooms' && m === 'POST') {
    const d = await body(req),
      name = String(d.name || '').trim();
    if (name.length < 1 || name.length > 80)
      return fail(400, 'Enter a group name up to 80 characters.');
    const id = crypto.randomUUID(),
      code = b64url(crypto.getRandomValues(new Uint8Array(6))),
      now = new Date().toISOString();
    await env.DB.batch([
      env.DB.prepare('INSERT INTO rooms(id,name,code,owner_id,created_at) VALUES(?,?,?,?,?)').bind(
        id,
        name,
        code,
        u.id,
        now
      ),
      env.DB.prepare('INSERT INTO room_members(room_id,user_id) VALUES(?,?)').bind(id, u.id),
    ]);
    return json(201, { room: { id, name, code, created_at: now } });
  }
  if (p === '/api/rooms/join' && m === 'POST') {
    const d = await body(req),
      room = await env.DB.prepare('SELECT * FROM rooms WHERE code=?')
        .bind(String(d.code || '').trim())
        .first();
    if (!room) return fail(404, 'Invite code not found.');
    await env.DB.prepare('INSERT OR IGNORE INTO room_members(room_id,user_id) VALUES(?,?)')
      .bind(room.id, u.id)
      .run();
    await Promise.all(
      (await roomUsers(env, room.id)).map((x) => emit(env, x, 'roomchange', { roomId: room.id }))
    );
    return json(200, { room: { id: room.id, name: room.name, code: room.code } });
  }
  // Group routes: /api/rooms/:id, with optional /members, /live or /messages below it.
  const roomMatch =
    /^\/api\/rooms\/([0-9a-f-]+)(?:\/(members|live|messages)(?:\/([0-9a-f-]+))?)?$/.exec(p);
  if (roomMatch) {
    const [, rid, sub, uid] = roomMatch;
    if (!(await isMember(env, rid, u.id))) return fail(403, 'This group is private.');
    if (!sub && m === 'PATCH') {
      if (!(await isOwner(env, rid, u.id))) return fail(403, 'Only the group owner can rename it.');
      const d = await body(req),
        name = String(d.name || '').trim();
      if (name.length < 1 || name.length > 80)
        return fail(400, 'Enter a group name up to 80 characters.');
      await env.DB.prepare('UPDATE rooms SET name=? WHERE id=?').bind(name, rid).run();
      return json(200, { ok: true, name });
    }
    if (!sub && m === 'DELETE') {
      if (!(await isOwner(env, rid, u.id))) return fail(403, 'Only the group owner can delete it.');
      const users = await roomUsers(env, rid);
      await env.DB.prepare('DELETE FROM rooms WHERE id=?').bind(rid).run();
      await Promise.all(users.map((x) => emit(env, x, 'roomgone', { roomId: rid })));
      return json(200, { ok: true });
    }
    if (sub === 'members' && !uid && m === 'GET') {
      const rows = (
        await env.DB.prepare(
          "SELECT u.id,u.name,CASE WHEN r.owner_id=u.id THEN 'owner' ELSE 'member' END AS role FROM room_members m JOIN users u ON u.id=m.user_id JOIN rooms r ON r.id=m.room_id WHERE m.room_id=? ORDER BY role DESC,u.name"
        )
          .bind(rid)
          .all()
      ).results;
      return json(200, {
        members: await Promise.all(
          rows.map(async (r) => ({ ...r, online: await isOnline(env, r.id) }))
        ),
      });
    }
    if (sub === 'members' && uid && m === 'DELETE') {
      if (uid !== u.id && !(await isOwner(env, rid, u.id)))
        return fail(403, 'Only the group owner can remove other members.');
      if (await isOwner(env, rid, uid))
        return fail(400, 'The owner cannot leave; delete the group instead.');
      await env.DB.prepare('DELETE FROM room_members WHERE room_id=? AND user_id=?')
        .bind(rid, uid)
        .run();
      await emit(env, uid, 'roomgone', { roomId: rid });
      await Promise.all(
        (await roomUsers(env, rid)).map((x) => emit(env, x, 'roomchange', { roomId: rid }))
      );
      return json(200, { ok: true });
    }
    // Tells every group member which passage the sender is reading.
    if (sub === 'live' && m === 'POST') {
      const d = await body(req),
        ref = String(d.ref || '').slice(0, 160),
        segment = Number(d.segment);
      if (!ref || !Number.isInteger(segment) || segment < 0 || segment > 100000)
        return fail(400, 'Invalid passage.');
      const link = safeUrl(String(d.url || '').slice(0, 400)),
        users = await roomUsers(env, rid);
      await Promise.all(
        users.map((x) =>
          emit(env, x, 'live', { ref, segment, roomId: rid, from: u.name, fromId: u.id, url: link })
        )
      );
      return json(200, { ok: true });
    }
    // Newest 100 messages, filtered by passage ref when one is given, returned oldest first.
    if (sub === 'messages' && m === 'GET') {
      const ref = new URL(req.url).searchParams.get('ref'),
        rows = (
          await (
            ref
              ? env.DB.prepare(
                  'SELECT m.id,m.ref,m.body,m.created_at,u.name,m.user_id AS userId FROM messages m JOIN users u ON u.id=m.user_id WHERE m.room_id=? AND m.ref=? ORDER BY m.created_at DESC LIMIT 100'
                ).bind(rid, ref.slice(0, 160))
              : env.DB.prepare(
                  'SELECT m.id,m.ref,m.body,m.created_at,u.name,m.user_id AS userId FROM messages m JOIN users u ON u.id=m.user_id WHERE m.room_id=? ORDER BY m.created_at DESC LIMIT 100'
                ).bind(rid)
          ).all()
        ).results.reverse();
      return json(200, { messages: rows });
    }
    if (sub === 'messages' && m === 'POST') {
      const d = await body(req),
        ref = String(d.ref || '').slice(0, 160),
        message = String(d.body || '').trim();
      if (!message || message.length > 4000) return fail(400, 'Message must be 1–4000 characters.');
      const item = {
        id: crypto.randomUUID(),
        ref,
        body: message,
        name: u.name,
        userId: u.id,
        created_at: new Date().toISOString(),
      };
      await env.DB.prepare(
        'INSERT INTO messages(id,room_id,user_id,ref,body,created_at) VALUES(?,?,?,?,?,?)'
      )
        .bind(item.id, rid, u.id, ref, message, item.created_at)
        .run();
      const users = await roomUsers(env, rid);
      await Promise.all(users.map((x) => emit(env, x, 'message', { roomId: rid, message: item })));
      return json(201, { message: item });
    }
  }
  if (p === '/api/events' && m === 'GET')
    return env.HUB.get(env.HUB.idFromName(u.id)).fetch('https://hub/subscribe', {
      signal: req.signal,
      headers: { 'x-user-id': u.id },
    });
  // Sends a reading position to the user's own open tabs.
  if (p === '/api/live' && m === 'POST') {
    const d = await body(req),
      ref = String(d.ref || '').slice(0, 160),
      segment = Number(d.segment);
    if (!ref || !Number.isInteger(segment) || segment < 0 || segment > 100000)
      return fail(400, 'Invalid passage.');
    await emit(env, u.id, 'live', { ref, segment });
    return json(200, { ok: true });
  }
  // Optional AI answer about a passage. Off unless OPENAI_API_KEY is set.
  if (p === '/api/ai' && m === 'POST') {
    if (!env.OPENAI_API_KEY) return fail(503, 'AI is not configured on this server.');
    const d = await body(req),
      question = String(d.question || '')
        .trim()
        .slice(0, 1000),
      passage = String(d.passage || '')
        .trim()
        .slice(0, 12000);
    if (!question || !passage) return fail(400, 'Provide a question and passage.');
    const r = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + env.OPENAI_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: env.OPENAI_MODEL || 'gpt-4.1-mini',
        instructions:
          'Answer questions about the supplied Torah passage. Ground the answer in that passage. State uncertainty clearly and do not invent quotations or citations.',
        input: 'Passage:\n' + passage + '\n\nQuestion:\n' + question,
        max_output_tokens: 700,
      }),
    });
    const out = await r.json();
    if (!r.ok) return fail(502, 'AI service is unavailable.');
    const answer =
      out.output_text ||
      (out.output || [])
        .flatMap((x) => x.content || [])
        .filter((x) => x.type === 'output_text')
        .map((x) => x.text)
        .join('\n');
    return json(200, { answer: answer || 'No answer returned.' });
  }
  return fail(404, 'API route not found.');
}
// Static site: files live in the R2 bucket bound as SITE.
// Content types for uploads, keyed by file extension.
const TYPES = {
  html: 'text/html; charset=utf-8',
  css: 'text/css; charset=utf-8',
  js: 'text/javascript; charset=utf-8',
  json: 'application/json; charset=utf-8',
  woff2: 'font/woff2',
  svg: 'image/svg+xml',
  png: 'image/png',
  ico: 'image/x-icon',
  webp: 'image/webp',
  txt: 'text/plain; charset=utf-8',
  webmanifest: 'application/manifest+json',
  xml: 'application/xml; charset=utf-8',
};
// texts/names.json is the built library index. It is kept in memory for ten minutes per isolate.
// If R2 has no copy, the last one loaded is kept and served.
let NAMES = null,
  NAMES_AT = 0;
async function libraryIndex(env) {
  if (NAMES && Date.now() - NAMES_AT < 600000) return NAMES;
  const o = await env.SITE.get('texts/names.json');
  if (!o) return NAMES;
  const raw =
    o.httpMetadata && o.httpMetadata.contentEncoding === 'gzip'
      ? o.body.pipeThrough(new DecompressionStream('gzip'))
      : o.body;
  NAMES = await new Response(raw).json();
  NAMES_AT = Date.now();
  return NAMES;
}
// Drops the six-character content hash at the end of a file name.
const stripHash = (f) => f.replace(/-[0-9a-f]{6}$/, '');
// Headers for the generated texts index. Public and cached briefly.
const jsonHeaders = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'public, max-age=300',
  'access-control-allow-origin': '*',
};
// Directory URLs under /texts/ have no file behind them, so answer with a small JSON index instead of a 404.
async function textsIndex(key, env) {
  const n = await libraryIndex(env);
  if (!n) return null;
  if (key === 'texts/')
    return {
      name: 'Torah study library',
      files: {
        index: '/texts/names.json',
        calendar: '/texts/calendar.json',
        books: '/texts/b/',
        tractates: '/texts/daf/',
      },
      books: Object.keys(n.books).length,
      tractates: Object.keys(n.dafs || {}).length,
      source: n.source,
      generated: n.generated,
      note: 'Hebrew text with the license of each edition recorded inside each file; English only where the dataset has an openly licensed translation. See /about.html#credits.',
    };
  if (key === 'texts/b/')
    return {
      count: Object.keys(n.books).length,
      books: Object.entries(n.books).map(([title, file]) => ({
        title,
        file: '/texts/b/' + file + '.json',
        alias: '/texts/b/' + stripHash(file) + '.json',
      })),
    };
  if (key === 'texts/daf/')
    return {
      count: Object.keys(n.dafs || {}).length,
      tractates: Object.entries(n.dafs || {}).map(([title, file]) => ({
        title,
        file: '/texts/daf/' + file + '.json',
        alias: '/texts/daf/' + stripHash(file) + '.json',
      })),
    };
  return null;
}
// Security headers added to every static response.
const SECURITY = {
  'x-content-type-options': 'nosniff',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'x-frame-options': 'SAMEORIGIN',
  'permissions-policy': 'camera=(), microphone=(), geolocation=()',
};
// Friendly 404 page for browsers. Inline, so serving it needs no R2 read.
const NOT_FOUND_PAGE =
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found · Torah study</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#050a31;color:#e8ecff;font:16px/1.6 "Open Sans",system-ui,sans-serif;text-align:center;padding:24px}a{color:#8fc4ff}h1{font-weight:400;font-size:2rem;margin:0 0 .5rem}</style></head><body><main><h1>We couldn’t find that page</h1><p>The address may be mistyped, or the text isn’t in the open library.</p><p><a href="/">Home</a> · <a href="/#library">Browse the library</a> · <a href="/about.html">About</a></p></main></body></html>';
// Serves files from R2, plus the JSON index and lookups under /texts/.
async function serveStatic(req, env) {
  if (req.method !== 'GET' && req.method !== 'HEAD')
    return new Response('Method not allowed', { status: 405 });
  let key;
  try {
    key = decodeURIComponent(new URL(req.url).pathname.slice(1));
  } catch {
    return new Response('Bad request', { status: 400 });
  }
  // Keys starting with __ are reserved for internal routes like /__upload.
  if (key.includes('..') || key.startsWith('__')) return new Response('Not found', { status: 404 });
  if (key === 'texts/' || key === 'texts/b/' || key === 'texts/daf/' || key === 'texts') {
    const idx = await textsIndex(key === 'texts' ? 'texts/' : key, env);
    if (idx)
      return new Response(req.method === 'HEAD' ? null : JSON.stringify(idx), {
        headers: { ...jsonHeaders, ...SECURITY },
      });
  }
  if (key.startsWith('s/') && key.length > 2) key = 'sheet.html'; // /s/<id> is a shared sheet
  if (key === '' || key.endsWith('/')) key += 'index.html';
  let obj = await env.SITE.get(key, { onlyIf: req.headers });
  // /about -> about.html
  if (!obj && !/\.[a-z0-9]+$/i.test(key))
    obj = await env.SITE.get(key + '.html', { onlyIf: req.headers });
  // /texts/b/genesis.json -> the hashed filename it really lives under
  if (!obj) {
    const m = /^texts\/(b|daf)\/([a-z0-9-]+)\.json$/.exec(key);
    if (m) {
      const n = await libraryIndex(env);
      const file =
        m[1] === 'b'
          ? n?.aliases?.[m[2]]
          : Object.values(n?.dafs || {}).find((f) => stripHash(f) === m[2]);
      if (file)
        obj = await env.SITE.get('texts/' + m[1] + '/' + file + '.json', { onlyIf: req.headers });
    }
  }
  if (!obj) {
    // Unknown texts paths get a JSON 404 that points at the index.
    if (key.startsWith('texts/'))
      return new Response(
        JSON.stringify({
          error: 'not-found',
          message: 'No such text file. The index of available texts is at /texts/.',
          index: '/texts/',
        }),
        { status: 404, headers: { ...jsonHeaders, ...SECURITY, 'cache-control': 'no-store' } }
      );
    // Browsers asking for a page get the HTML 404. Other requests get plain text.
    const wantsHtml =
      /text\/html/.test(req.headers.get('accept') || '') || !/\.[a-z0-9]+$/i.test(key);
    return new Response(wantsHtml ? NOT_FOUND_PAGE : 'Not found', {
      status: 404,
      headers: {
        'content-type': wantsHtml ? 'text/html; charset=utf-8' : 'text/plain; charset=utf-8',
        'cache-control': 'no-store',
        ...SECURITY,
      },
    });
  }
  const headers = new Headers();
  obj.writeHttpMetadata(headers);
  headers.set('etag', obj.httpEtag);
  headers.append('vary', 'accept-encoding');
  for (const [k, v] of Object.entries(SECURITY)) headers.set(k, v);
  if (!('body' in obj)) return new Response(null, { status: 304, headers });
  // Files are uploaded already gzipped. encodeBody 'manual' stops Cloudflare from compressing them again.
  return new Response(req.method === 'HEAD' ? null : obj.body, {
    headers,
    encodeBody: 'manual',
  });
}
// Used by scripts/upload-site.mjs to push the site into R2. Does nothing unless the UPLOAD_KEY secret is set.
async function upload(req, env) {
  const auth = req.headers.get('authorization') || '';
  if (!env.UPLOAD_KEY || !same(auth, 'Bearer ' + env.UPLOAD_KEY))
    return new Response('Not found', { status: 404 });
  const url = new URL(req.url),
    key = url.searchParams.get('key') || '';
  if (!key || key.includes('..') || key.startsWith('/') || key.startsWith('__'))
    return fail(400, 'Bad key.');
  if (req.method === 'GET') {
    const o = await env.SITE.head(key);
    return o ? json(200, { sha1: o.customMetadata?.sha1 || '', size: o.size }) : json(404, {});
  }
  if (req.method === 'PUT') {
    const ext = key.split('.').pop().toLowerCase(),
      contentType = TYPES[ext] || 'application/octet-stream',
      contentEncoding = url.searchParams.get('enc') || undefined;
    // sw.js must not be cached for long, or service worker updates stall.
    const cacheControl =
      key === 'sw.js'
        ? 'no-cache'
        : /^(texts|fonts|icons)\//.test(key)
          ? 'public, max-age=86400'
          : 'public, max-age=300';
    await env.SITE.put(key, await req.arrayBuffer(), {
      httpMetadata: { contentType, contentEncoding, cacheControl },
      customMetadata: { sha1: url.searchParams.get('sha1') || '' },
    });
    return json(200, { ok: true });
  }
  return fail(405, 'Method not allowed.');
}
// Entry point. API calls, the upload hook and static files are routed from here.
export default {
  async fetch(req, env) {
    const p = new URL(req.url).pathname;
    try {
      if (p.startsWith('/api/')) return await api(req, env);
      if (p === '/__upload') return await upload(req, env);
      return await serveStatic(req, env);
    } catch (e) {
      if (!e.status) console.error('Error:', e.message);
      return fail(e.status || 500, e.status ? e.message : 'Server error.');
    }
  },
};
// One Hub per user. It pushes server-sent events to all of that user's open tabs.
export class Hub {
  constructor(state, env) {
    // Open event streams for this user, one per tab.
    this.clients = new Set();
    this.env = env;
    this.uid = null;
  }
  // Tell everyone who shares a group with this user that they came online or went offline.
  async announce(online) {
    if (!this.uid) return;
    try {
      const rows = (
        await this.env.DB.prepare(
          'SELECT DISTINCT m2.user_id AS id FROM room_members m1 JOIN room_members m2 ON m1.room_id=m2.room_id WHERE m1.user_id=? AND m2.user_id<>?'
        )
          .bind(this.uid, this.uid)
          .all()
      ).results;
      await Promise.all(
        rows.map((r) =>
          this.env.HUB.get(this.env.HUB.idFromName(r.id))
            .fetch('https://hub/emit', {
              method: 'POST',
              body: JSON.stringify({ type: 'presence', data: { userId: this.uid, online } }),
            })
            .catch(() => {})
        )
      );
    } catch {
      /* Presence is best effort, so a failure here must not break the request. */
    }
  }
  // Forgets a closed stream. When the last tab closes, the user is announced as offline.
  drop(client) {
    clearInterval(client.ping);
    if (this.clients.delete(client) && this.clients.size === 0) this.announce(false);
  }
  // Internal routes called by the Worker: /status, /subscribe (event stream) and /emit.
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/status') {
      // Ping every open stream now, so dead connections are noticed here and not at the next keep-alive.
      await Promise.all(
        [...this.clients].map((c) => c.w.write(enc.encode(': ping\n\n')).catch(() => this.drop(c)))
      );
      return new Response(JSON.stringify({ online: this.clients.size > 0 }), {
        headers: { 'content-type': 'application/json' },
      });
    }
    // Opens a long-lived event stream for one tab.
    if (url.pathname === '/subscribe') {
      this.uid = req.headers.get('x-user-id') || this.uid;
      const { readable, writable } = new TransformStream(),
        w = writable.getWriter(),
        client = { w },
        firstClient = this.clients.size === 0;
      this.clients.add(client);
      const send = (text) => w.write(enc.encode(text)).catch(() => this.drop(client));
      // Keep-alive, so proxies do not close an idle stream.
      const ping = setInterval(() => send(': ping\n\n'), 25000);
      client.ping = ping;
      send(': connected\n\n');
      if (firstClient) this.announce(true);
      req.signal?.addEventListener('abort', () => {
        this.drop(client);
        w.close().catch(() => {});
      });
      return new Response(readable, {
        headers: { 'content-type': 'text/event-stream', 'cache-control': 'no-cache,no-transform' },
      });
    }
    // Sends one event to every open stream of this user.
    if (url.pathname === '/emit') {
      const { type, data } = await req.json(),
        msg = 'event: ' + type + '\ndata: ' + JSON.stringify(data) + '\n\n';
      for (const c of [...this.clients])
        c.w.write(enc.encode(msg)).catch(() => this.clients.delete(c));
      return new Response('ok');
    }
    return new Response('not found', { status: 404 });
  }
}
