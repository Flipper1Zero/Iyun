// Node server for Iyun. It mirrors the Cloudflare Worker API so the site can run on a
// plain machine: it serves the static files and the /api routes, and keeps its data in
// one SQLite file. Settings come from HOST, PORT, IYUN_DATA_DIR, ADMIN_KEY,
// OPENAI_API_KEY and OPENAI_MODEL.
'use strict';
const http = require('node:http'),
  fs = require('node:fs'),
  path = require('node:path'),
  crypto = require('node:crypto');
const { promisify } = require('node:util'),
  { DatabaseSync } = require('node:sqlite');
const scrypt = promisify(crypto.scrypt),
  root = __dirname,
  host = process.env.HOST || '127.0.0.1',
  port = Number(process.env.PORT || 8000);
const storeDir = process.env.IYUN_DATA_DIR || path.join(root, 'data');
fs.mkdirSync(storeDir, { recursive: true, mode: 0o700 });
const db = new DatabaseSync(path.join(storeDir, 'iyun.sqlite'));
db.exec('PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON');
// Every statement uses IF NOT EXISTS, so running them on each start is safe.
[
  'CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY,email TEXT NOT NULL UNIQUE,name TEXT NOT NULL,salt TEXT NOT NULL,hash TEXT NOT NULL,created_at TEXT NOT NULL)',
  'CREATE TABLE IF NOT EXISTS sessions(token_hash TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,expires_at INTEGER NOT NULL)',
  'CREATE TABLE IF NOT EXISTS user_state(user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,key TEXT NOT NULL,value TEXT NOT NULL,updated_at INTEGER NOT NULL,PRIMARY KEY(user_id,key))',
  'CREATE TABLE IF NOT EXISTS rooms(id TEXT PRIMARY KEY,name TEXT NOT NULL,code TEXT NOT NULL UNIQUE,owner_id TEXT NOT NULL REFERENCES users(id),created_at TEXT NOT NULL)',
  'CREATE TABLE IF NOT EXISTS room_members(room_id TEXT NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,PRIMARY KEY(room_id,user_id))',
  'CREATE TABLE IF NOT EXISTS messages(id TEXT PRIMARY KEY,room_id TEXT NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,user_id TEXT NOT NULL REFERENCES users(id),ref TEXT NOT NULL,body TEXT NOT NULL,created_at TEXT NOT NULL)',
  'CREATE INDEX IF NOT EXISTS messages_room_idx ON messages(room_id,created_at)',
  'CREATE TABLE IF NOT EXISTS sheets(id TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,title TEXT NOT NULL,body TEXT NOT NULL,created_at TEXT NOT NULL,hidden INTEGER NOT NULL DEFAULT 0,report_count INTEGER NOT NULL DEFAULT 0)',
  'CREATE INDEX IF NOT EXISTS sheets_user_idx ON sheets(user_id,created_at)',
  'CREATE TABLE IF NOT EXISTS sheet_reports(sheet_id TEXT NOT NULL REFERENCES sheets(id) ON DELETE CASCADE,reporter TEXT NOT NULL,reason TEXT NOT NULL,created_at TEXT NOT NULL,PRIMARY KEY(sheet_id,reporter))',
  'CREATE INDEX IF NOT EXISTS room_members_user_idx ON room_members(user_id)',
].forEach((sql) => db.exec(sql));

// Content types for the static files we serve.
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};
const CLEAR_SESSION_COOKIE = 'iyun_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0';

// Kept in memory: open event streams per user, and recent request times for rate limits.
const events = new Map(),
  attempts = new Map();

// Runs the work in one SQLite transaction. Any error rolls everything back and is rethrown.
function inTransaction(work) {
  db.exec('BEGIN');
  try {
    work();
    db.exec('COMMIT');
  } catch (e) {
    db.exec('ROLLBACK');
    throw e;
  }
}
function send(res, status, data, headers = {}) {
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    ...headers,
  });
  res.end(JSON.stringify(data));
}
function error(res, status, message) {
  send(res, status, { error: message });
}
// Reads the request body as JSON. An empty body counts as {}. Reading stops as soon as
// the body passes 256 KB, so a large upload is refused early.
async function body(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 256000) throw Object.assign(Error('Request too large'), { status: 413 });
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString() || '{}');
  } catch {
    throw Object.assign(Error('Invalid JSON'), { status: 400 });
  }
}
// Session tokens are stored only as SHA-256 hashes, so a copy of the database cannot be
// used to sign in.
function sha(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}
function cookie(req) {
  return Object.fromEntries(
    (req.headers.cookie || '')
      .split(';')
      .map((x) => x.trim().split('=').map(decodeURIComponent))
      .filter((x) => x.length === 2)
  );
}
// Returns the signed-in user for this request, or null. Expired sessions do not count.
function user(req) {
  const token = cookie(req).iyun_session;
  if (!token) return null;
  return (
    db
      .prepare(
        'SELECT u.id,u.email,u.name FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>?'
      )
      .get(sha(token), Date.now()) || null
  );
}
// Like user(), but sends a 401 when nobody is signed in.
function requireUser(req, res) {
  const u = user(req);
  if (!u) error(res, 401, 'Sign in to use this feature.');
  return u;
}
// Starts a 30-day session and sets its cookie.
function setSession(req, res, u) {
  const token = crypto.randomBytes(32).toString('base64url'),
    expires = Date.now() + 30 * 86400e3;
  db.prepare('INSERT INTO sessions(token_hash,user_id,expires_at) VALUES(?,?,?)').run(
    sha(token),
    u.id,
    expires
  );
  const secure = req.socket.encrypted || req.headers['x-forwarded-proto'] === 'https';
  send(
    res,
    200,
    { user: u },
    {
      'set-cookie':
        'iyun_session=' +
        token +
        '; HttpOnly; SameSite=Lax; Path=/; Max-Age=2592000' +
        (secure ? '; Secure' : ''),
    }
  );
}
// Sends an event to every open stream of one user. A stream that fails to write is
// skipped here, and its close handler removes it.
function emit(userId, type, data) {
  for (const res of events.get(userId) || []) {
    try {
      res.write('event: ' + type + '\ndata: ' + JSON.stringify(data) + '\n\n');
    } catch {}
  }
}
function roomMember(roomId, userId) {
  return db.prepare('SELECT 1 FROM room_members WHERE room_id=? AND user_id=?').get(roomId, userId);
}
// The groups a user belongs to, with their role and member count.
function roomList(userId) {
  return db
    .prepare(
      "SELECT r.id,r.name,r.code,r.created_at,CASE WHEN r.owner_id=m.user_id THEN 'owner' ELSE 'member' END AS role,(SELECT COUNT(*) FROM room_members x WHERE x.room_id=r.id) AS members FROM rooms r JOIN room_members m ON r.id=m.room_id WHERE m.user_id=? ORDER BY r.created_at DESC"
    )
    .all(userId);
}
function roomOwner(roomId, userId) {
  return db.prepare('SELECT 1 FROM rooms WHERE id=? AND owner_id=?').get(roomId, userId);
}
function roomUsers(roomId) {
  return db
    .prepare('SELECT user_id FROM room_members WHERE room_id=?')
    .all(roomId)
    .map((x) => x.user_id);
}
// Sliding-window rate limit. Each allowed hit is kept as a timestamp, and once `max`
// hits fall inside the window, further hits are refused.
function limiter(key, max = 12, windowMs = 60000) {
  const now = Date.now(),
    recent = (attempts.get(key) || []).filter((t) => now - t < windowMs);
  if (recent.length >= max) return false;
  recent.push(now);
  attempts.set(key, recent);
  return true;
}
// Builds a validation error. api() sends any error with a status as that HTTP status.
const bad = (message) => Object.assign(Error(message), { status: 400 });
// Passage links may only point at our own book or gemara pages, so a shared sheet
// cannot send readers to another site.
function passageUrl(value) {
  return /^(book|gemara)\.html\?/.test(value) ? value : '';
}
// Sheets are stored as plain text, because the client renders them with textContent.
function cleanNote(b) {
  const text = String(b.text || '')
    .trim()
    .slice(0, 4000);
  return text ? { type: 'note', text } : null;
}
function cleanPassage(b) {
  const ref = String(b.ref || '')
      .trim()
      .slice(0, 160),
    he = String(b.he || '').slice(0, 4000),
    en = String(b.en || '').slice(0, 4000);
  if (!ref || (!he && !en)) return null;
  return {
    type: 'passage',
    ref,
    he,
    en,
    url: passageUrl(String(b.url || '').slice(0, 400)),
    license: String(b.license || '').slice(0, 240),
  };
}
function cleanBlock(b) {
  if (b && b.type === 'note') return cleanNote(b);
  if (b && b.type === 'passage') return cleanPassage(b);
  return null;
}
function cleanSheet(d) {
  const title = String(d.title || '')
    .trim()
    .slice(0, 120);
  if (!title) throw bad('Give the sheet a title.');
  const blocks = (Array.isArray(d.blocks) ? d.blocks.slice(0, 60) : [])
    .map(cleanBlock)
    .filter(Boolean);
  if (!blocks.length) throw bad('Add at least one note or passage.');
  const json = JSON.stringify(blocks);
  if (json.length > 120000) throw bad('This sheet is too large.');
  return { title, json };
}
// Checks the ref and segment of a passage position. Returns null when either is invalid.
function passagePosition(d) {
  const ref = String(d.ref || '').slice(0, 160),
    segment = Number(d.segment);
  if (!ref || !Number.isInteger(segment) || segment < 0 || segment > 100000) return null;
  return { ref, segment };
}
// A user counts as online while they have at least one open event stream. When that
// changes, everyone who shares a group with them is told.
const isOnline = (id) => (events.get(id)?.size || 0) > 0;
function announcePresence(userId, online) {
  const groupmates = db
    .prepare(
      'SELECT DISTINCT m2.user_id AS id FROM room_members m1 JOIN room_members m2 ON m1.room_id=m2.room_id WHERE m1.user_id=? AND m2.user_id<>?'
    )
    .all(userId, userId);
  for (const row of groupmates) emit(row.id, 'presence', { userId, online });
}
// Admin routes need ADMIN_KEY to be set and sent as a bearer token. Without a key they
// answer 404, so they do not reveal that they exist.
const adminOk = (req) =>
  !!process.env.ADMIN_KEY &&
  (req.headers.authorization || '') === 'Bearer ' + process.env.ADMIN_KEY;

// Routes everything under /api/. Public routes come first. The rest need a signed-in user.
async function api(req, res, url) {
  const method = req.method,
    pathname = url.pathname;
  if (pathname === '/api/status' && method === 'GET')
    return send(res, 200, { server: true, ai: !!process.env.OPENAI_API_KEY });
  if (pathname === '/api/auth/me' && method === 'GET') return send(res, 200, { user: user(req) });
  if (pathname === '/api/auth/signup' && method === 'POST') return signUp(req, res);
  if (pathname === '/api/auth/signin' && method === 'POST') return signIn(req, res);
  if (pathname === '/api/auth/signout' && method === 'POST') return signOut(req, res);

  // Shared sheets are public: anyone with the link can read one, and anyone can report one.
  const sheetRoute = /^\/api\/sheets\/([0-9a-f]{12,40})(\/report)?$/.exec(pathname);
  if (sheetRoute && method === 'GET' && !sheetRoute[2]) return readSheet(req, res, sheetRoute[1]);
  if (sheetRoute && sheetRoute[2] && method === 'POST') return reportSheet(req, res, sheetRoute[1]);
  if (pathname === '/api/admin/reports' && method === 'GET') return listReports(req, res);
  const adminSheetRoute = /^\/api\/admin\/sheets\/([0-9a-f]{12,40})$/.exec(pathname);
  if (adminSheetRoute && method === 'POST') return moderateSheet(req, res, adminSheetRoute[1]);

  const u = requireUser(req, res);
  if (!u) return;
  if (pathname === '/api/account' && method === 'DELETE') return deleteAccount(req, res, u);
  if (pathname === '/api/sheets' && method === 'GET') return listMySheets(res, u);
  if (pathname === '/api/sheets' && method === 'POST') return createSheet(req, res, u);
  const ownSheetRoute = /^\/api\/sheets\/([0-9a-f]{12,40})$/.exec(pathname);
  if (ownSheetRoute && method === 'DELETE') return deleteMySheet(res, u, ownSheetRoute[1]);
  if (pathname === '/api/state' && method === 'GET') return listState(res, u);
  if (pathname === '/api/state' && method === 'PUT') return saveState(req, res, u);
  if (pathname === '/api/rooms' && method === 'GET')
    return send(res, 200, { rooms: roomList(u.id) });
  if (pathname === '/api/rooms' && method === 'POST') return createRoom(req, res, u);
  if (pathname === '/api/rooms/join' && method === 'POST') return joinRoom(req, res, u);
  const roomPath = /^\/api\/rooms\/([0-9a-f-]+)(?:\/(members|live)(?:\/([0-9a-f-]+))?)?$/.exec(
    pathname
  );
  if (roomPath && (await roomRoute(req, res, u, method, roomPath))) return;
  const messagesPath = /^\/api\/rooms\/([0-9a-f-]+)\/messages$/.exec(pathname);
  if (messagesPath && method === 'GET') return listMessages(res, u, messagesPath[1], url);
  if (messagesPath && method === 'POST') return postMessage(req, res, u, messagesPath[1]);
  if (pathname === '/api/events' && method === 'GET') return openEventStream(req, res, u);
  if (pathname === '/api/live' && method === 'POST') return publishLive(req, res, u);
  if (pathname === '/api/ai' && method === 'POST') return askAi(req, res);
  return error(res, 404, 'API route not found.');
}

async function signUp(req, res) {
  if (!limiter('auth:' + req.socket.remoteAddress)) return error(res, 429, 'Try again shortly.');
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
    return error(res, 400, 'Enter a name, valid email, and password of at least eight characters.');
  if (db.prepare('SELECT 1 FROM users WHERE email=?').get(email))
    return error(res, 409, 'An account with this email already exists.');
  const salt = crypto.randomBytes(24).toString('hex'),
    hash = (await scrypt(password, salt, 64)).toString('hex'),
    u = { id: crypto.randomUUID(), email, name };
  db.prepare('INSERT INTO users(id,email,name,salt,hash,created_at) VALUES(?,?,?,?,?,?)').run(
    u.id,
    email,
    name,
    salt,
    hash,
    new Date().toISOString()
  );
  return setSession(req, res, u);
}

async function signIn(req, res) {
  if (!limiter('auth:' + req.socket.remoteAddress)) return error(res, 429, 'Try again shortly.');
  const d = await body(req),
    email = String(d.email || '')
      .trim()
      .toLowerCase(),
    password = String(d.password || '');
  const row = db.prepare('SELECT * FROM users WHERE email=?').get(email),
    // An unknown email still runs scrypt, against a dummy salt, so response time does not
    // reveal whether the account exists.
    salt = row?.salt || '00000000000000000000000000000000',
    expected = row?.hash || '00'.repeat(64),
    actual = (await scrypt(password, salt, 64)).toString('hex');
  if (!row || !crypto.timingSafeEqual(Buffer.from(actual, 'hex'), Buffer.from(expected, 'hex')))
    return error(res, 401, 'Invalid email or password.');
  return setSession(req, res, { id: row.id, email: row.email, name: row.name });
}

function signOut(req, res) {
  const token = cookie(req).iyun_session;
  if (token) db.prepare('DELETE FROM sessions WHERE token_hash=?').run(sha(token));
  return send(res, 200, { ok: true }, { 'set-cookie': CLEAR_SESSION_COOKIE });
}

// Returns a shared sheet. Hidden sheets are visible only to their author and the admin.
function readSheet(req, res, id) {
  const row = db
    .prepare(
      'SELECT s.id,s.title,s.body,s.created_at,s.hidden,s.user_id,u.name FROM sheets s JOIN users u ON u.id=s.user_id WHERE s.id=?'
    )
    .get(id);
  if (!row) return error(res, 404, 'This sheet does not exist or was deleted.');
  const me = user(req);
  if (row.hidden && !(me && me.id === row.user_id) && !adminOk(req))
    return error(res, 410, 'This sheet was hidden after reports and is waiting for review.');
  return send(res, 200, {
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

// Anyone can report a sheet. Three distinct reporters hide it until an admin reviews it.
async function reportSheet(req, res, id) {
  const me = user(req),
    // Signed-out reporters are keyed by a hashed IP, so one person can only report a sheet once.
    who = me ? 'u:' + me.id : 'ip:' + sha(String(req.socket.remoteAddress || '')).slice(0, 16);
  if (!limiter('report:' + who, 10, 3600e3))
    return error(res, 429, 'Too many reports. Try again later.');
  const row = db.prepare('SELECT id,hidden FROM sheets WHERE id=?').get(id);
  if (!row) return error(res, 404, 'This sheet does not exist.');
  const d = await body(req),
    reason = String(d.reason || '')
      .trim()
      .slice(0, 300);
  const ins = db
    .prepare(
      'INSERT OR IGNORE INTO sheet_reports(sheet_id,reporter,reason,created_at) VALUES(?,?,?,?)'
    )
    .run(row.id, who, reason || '(no reason given)', new Date().toISOString());
  if (ins.changes) {
    db.prepare('UPDATE sheets SET report_count=report_count+1 WHERE id=?').run(row.id);
    db.prepare('UPDATE sheets SET hidden=1 WHERE id=? AND report_count>=3').run(row.id);
  }
  return send(res, 200, { ok: true });
}

function listReports(req, res) {
  if (!adminOk(req)) return error(res, 404, 'API route not found.');
  return send(res, 200, {
    sheets: db
      .prepare(
        'SELECT s.id,s.title,s.hidden,s.report_count,s.created_at,u.name AS author FROM sheets s JOIN users u ON u.id=s.user_id WHERE s.report_count>0 ORDER BY s.report_count DESC,s.created_at DESC LIMIT 100'
      )
      .all()
      .map((r) => ({
        ...r,
        reports: db
          .prepare(
            'SELECT reason,created_at FROM sheet_reports WHERE sheet_id=? ORDER BY created_at DESC LIMIT 20'
          )
          .all(r.id),
      })),
  });
}

async function moderateSheet(req, res, id) {
  if (!adminOk(req)) return error(res, 404, 'API route not found.');
  const d = await body(req),
    action = String(d.action || '');
  if (action === 'hide') db.prepare('UPDATE sheets SET hidden=1 WHERE id=?').run(id);
  else if (action === 'restore') {
    db.prepare('UPDATE sheets SET hidden=0,report_count=0 WHERE id=?').run(id);
    db.prepare('DELETE FROM sheet_reports WHERE sheet_id=?').run(id);
  } else if (action === 'delete') db.prepare('DELETE FROM sheets WHERE id=?').run(id);
  else return error(res, 400, 'Action must be hide, restore or delete.');
  return send(res, 200, { ok: true });
}

async function deleteAccount(req, res, u) {
  if (!limiter('auth:' + req.socket.remoteAddress)) return error(res, 429, 'Try again shortly.');
  const d = await body(req),
    row = db.prepare('SELECT * FROM users WHERE id=?').get(u.id),
    actual = (await scrypt(String(d.password || ''), row.salt, 64)).toString('hex');
  if (!crypto.timingSafeEqual(Buffer.from(actual, 'hex'), Buffer.from(row.hash, 'hex')))
    return error(res, 401, 'Password is incorrect.');
  // Messages and owned groups do not cascade from the user row, so remove them by hand.
  inTransaction(() => {
    db.prepare('DELETE FROM messages WHERE user_id=?').run(u.id);
    db.prepare('DELETE FROM rooms WHERE owner_id=?').run(u.id);
    db.prepare('DELETE FROM users WHERE id=?').run(u.id);
  });
  return send(res, 200, { ok: true }, { 'set-cookie': CLEAR_SESSION_COOKIE });
}

function listMySheets(res, u) {
  return send(res, 200, {
    sheets: db
      .prepare(
        'SELECT id,title,created_at,hidden,report_count FROM sheets WHERE user_id=? ORDER BY created_at DESC LIMIT 200'
      )
      .all(u.id),
  });
}

async function createSheet(req, res, u) {
  if (!limiter('sheet:' + u.id, 20, 3600e3))
    return error(res, 429, 'You have published many sheets recently. Try again later.');
  const d = await body(req),
    clean = cleanSheet(d),
    id = crypto.randomBytes(8).toString('hex');
  db.prepare('INSERT INTO sheets(id,user_id,title,body,created_at) VALUES(?,?,?,?,?)').run(
    id,
    u.id,
    clean.title,
    clean.json,
    new Date().toISOString()
  );
  return send(res, 201, { id, url: '/s/' + id });
}

function deleteMySheet(res, u, id) {
  const r = db.prepare('DELETE FROM sheets WHERE id=? AND user_id=?').run(id, u.id);
  return r.changes ? send(res, 200, { ok: true }) : error(res, 404, 'No such sheet of yours.');
}

function listState(res, u) {
  const rows = db.prepare('SELECT key,value,updated_at FROM user_state WHERE user_id=?').all(u.id);
  return send(res, 200, {
    items: rows.map((x) => ({ key: x.key, value: JSON.parse(x.value), updatedAt: x.updated_at })),
  });
}

async function saveState(req, res, u) {
  const d = await body(req),
    key = String(d.key || '');
  // Only keys in our own namespace, and no control characters.
  if (!key.startsWith('iyun.') || key.length > 150 || /[\x00-\x1f]/.test(key))
    return error(res, 400, 'Invalid state key.');
  const value = JSON.stringify(d.value);
  if (value === undefined || value.length > 150000)
    return error(res, 400, 'State item is too large.');
  const now = Date.now();
  db.prepare(
    'INSERT INTO user_state(user_id,key,value,updated_at) VALUES(?,?,?,?) ON CONFLICT(user_id,key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at'
  ).run(u.id, key, value, now);
  return send(res, 200, { ok: true, updatedAt: now });
}

async function createRoom(req, res, u) {
  const d = await body(req),
    name = String(d.name || '').trim();
  if (name.length < 1 || name.length > 80)
    return error(res, 400, 'Enter a group name up to 80 characters.');
  const id = crypto.randomUUID(),
    code = crypto.randomBytes(6).toString('base64url'),
    now = new Date().toISOString();
  inTransaction(() => {
    db.prepare('INSERT INTO rooms(id,name,code,owner_id,created_at) VALUES(?,?,?,?,?)').run(
      id,
      name,
      code,
      u.id,
      now
    );
    db.prepare('INSERT INTO room_members(room_id,user_id) VALUES(?,?)').run(id, u.id);
  });
  return send(res, 201, { room: { id, name, code, created_at: now } });
}

async function joinRoom(req, res, u) {
  const d = await body(req),
    room = db.prepare('SELECT * FROM rooms WHERE code=?').get(String(d.code || '').trim());
  if (!room) return error(res, 404, 'Invite code not found.');
  db.prepare('INSERT OR IGNORE INTO room_members(room_id,user_id) VALUES(?,?)').run(room.id, u.id);
  roomUsers(room.id).forEach((x) => emit(x, 'roomchange', { roomId: room.id }));
  return send(res, 200, { room: { id: room.id, name: room.name, code: room.code } });
}

// Group routes: rename or delete a group, list or remove members, and share a live
// position. Returns false when no route matches, so api() can keep looking.
async function roomRoute(req, res, u, method, match) {
  const [, rid, sub, uid] = match;
  if (!roomMember(rid, u.id)) {
    error(res, 403, 'This group is private.');
    return true;
  }
  if (!sub && method === 'PATCH') await renameRoom(req, res, u, rid);
  else if (!sub && method === 'DELETE') deleteRoom(res, u, rid);
  else if (sub === 'members' && !uid && method === 'GET') listMembers(res, rid);
  else if (sub === 'members' && uid && method === 'DELETE') removeMember(res, u, rid, uid);
  else if (sub === 'live' && method === 'POST') await shareLive(req, res, u, rid);
  else return false;
  return true;
}

async function renameRoom(req, res, u, rid) {
  if (!roomOwner(rid, u.id)) return error(res, 403, 'Only the group owner can rename it.');
  const d = await body(req),
    name = String(d.name || '').trim();
  if (name.length < 1 || name.length > 80)
    return error(res, 400, 'Enter a group name up to 80 characters.');
  db.prepare('UPDATE rooms SET name=? WHERE id=?').run(name, rid);
  return send(res, 200, { ok: true, name });
}

function deleteRoom(res, u, rid) {
  if (!roomOwner(rid, u.id)) return error(res, 403, 'Only the group owner can delete it.');
  const users = roomUsers(rid);
  db.prepare('DELETE FROM rooms WHERE id=?').run(rid);
  users.forEach((x) => emit(x, 'roomgone', { roomId: rid }));
  return send(res, 200, { ok: true });
}

function listMembers(res, rid) {
  const rows = db
    .prepare(
      "SELECT u.id,u.name,CASE WHEN r.owner_id=u.id THEN 'owner' ELSE 'member' END AS role FROM room_members m JOIN users u ON u.id=m.user_id JOIN rooms r ON r.id=m.room_id WHERE m.room_id=? ORDER BY role DESC,u.name"
    )
    .all(rid);
  return send(res, 200, { members: rows.map((m) => ({ ...m, online: isOnline(m.id) })) });
}

// Members may leave on their own. The owner may remove anyone, but cannot leave.
function removeMember(res, u, rid, uid) {
  const owner = roomOwner(rid, u.id);
  if (uid !== u.id && !owner)
    return error(res, 403, 'Only the group owner can remove other members.');
  if (roomOwner(rid, uid))
    return error(res, 400, 'The owner cannot leave; delete the group instead.');
  db.prepare('DELETE FROM room_members WHERE room_id=? AND user_id=?').run(rid, uid);
  emit(uid, 'roomgone', { roomId: rid });
  roomUsers(rid).forEach((x) => emit(x, 'roomchange', { roomId: rid }));
  return send(res, 200, { ok: true });
}

// Tells everyone in the group which passage a member is reading.
async function shareLive(req, res, u, rid) {
  const d = await body(req),
    position = passagePosition(d);
  if (!position) return error(res, 400, 'Invalid passage.');
  const link = passageUrl(String(d.url || '').slice(0, 400));
  roomUsers(rid).forEach((x) =>
    emit(x, 'live', {
      ref: position.ref,
      segment: position.segment,
      roomId: rid,
      from: u.name,
      fromId: u.id,
      url: link,
    })
  );
  return send(res, 200, { ok: true });
}

function listMessages(res, u, roomId, url) {
  if (!roomMember(roomId, u.id)) return error(res, 403, 'This group is private.');
  const ref = url.searchParams.get('ref'),
    rows = (
      ref
        ? db
            .prepare(
              'SELECT m.id,m.ref,m.body,m.created_at,u.name,m.user_id AS userId FROM messages m JOIN users u ON u.id=m.user_id WHERE m.room_id=? AND m.ref=? ORDER BY m.created_at DESC LIMIT 100'
            )
            .all(roomId, ref.slice(0, 160))
        : db
            .prepare(
              'SELECT m.id,m.ref,m.body,m.created_at,u.name,m.user_id AS userId FROM messages m JOIN users u ON u.id=m.user_id WHERE m.room_id=? ORDER BY m.created_at DESC LIMIT 100'
            )
            .all(roomId)
    ).reverse();
  return send(res, 200, { messages: rows });
}

async function postMessage(req, res, u, roomId) {
  if (!roomMember(roomId, u.id)) return error(res, 403, 'This group is private.');
  const d = await body(req),
    ref = String(d.ref || '').slice(0, 160),
    message = String(d.body || '').trim();
  if (!message || message.length > 4000)
    return error(res, 400, 'Message must be 1–4000 characters.');
  const item = {
    id: crypto.randomUUID(),
    ref,
    body: message,
    name: u.name,
    userId: u.id,
    created_at: new Date().toISOString(),
  };
  db.prepare(
    'INSERT INTO messages(id,room_id,user_id,ref,body,created_at) VALUES(?,?,?,?,?,?)'
  ).run(item.id, roomId, u.id, ref, message, item.created_at);
  roomUsers(roomId).forEach((x) => emit(x, 'message', { roomId, message: item }));
  return send(res, 201, { message: item });
}

// Opens a server-sent event stream for this user. A ping every 25 seconds keeps proxies
// from closing an idle connection.
function openEventStream(req, res, u) {
  res.writeHead(200, {
    'content-type': 'text/event-stream',
    'cache-control': 'no-cache,no-transform',
    connection: 'keep-alive',
  });
  res.write(': connected\n\n');
  if (!events.has(u.id)) events.set(u.id, new Set());
  const isFirstStream = events.get(u.id).size === 0;
  events.get(u.id).add(res);
  if (isFirstStream) announcePresence(u.id, true);
  const timer = setInterval(() => {
    try {
      res.write(': ping\n\n');
    } catch {}
  }, 25000);
  req.on('close', () => {
    clearInterval(timer);
    events.get(u.id)?.delete(res);
    if (!isOnline(u.id)) announcePresence(u.id, false);
  });
}

// Sends a passage position to the user's own streams, so other tabs can follow along.
async function publishLive(req, res, u) {
  const d = await body(req),
    position = passagePosition(d);
  if (!position) return error(res, 400, 'Invalid passage.');
  emit(u.id, 'live', { ref: position.ref, segment: position.segment });
  return send(res, 200, { ok: true });
}

// Answers a question about a passage with OpenAI. Needs OPENAI_API_KEY on the server.
async function askAi(req, res) {
  if (!process.env.OPENAI_API_KEY) return error(res, 503, 'AI is not configured on this server.');
  const d = await body(req),
    question = String(d.question || '')
      .trim()
      .slice(0, 1000),
    passage = String(d.passage || '')
      .trim()
      .slice(0, 12000);
  if (!question || !passage) return error(res, 400, 'Provide a question and passage.');
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + process.env.OPENAI_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
      instructions:
        'Answer questions about the supplied Torah passage. Ground the answer in that passage. State uncertainty clearly and do not invent quotations or citations.',
      input: 'Passage:\n' + passage + '\n\nQuestion:\n' + question,
      max_output_tokens: 700,
    }),
  });
  const out = await response.json();
  if (!response.ok) return error(res, 502, 'AI service is unavailable.');
  return send(res, 200, { answer: answerText(out) || 'No answer returned.' });
}

// Pulls the text out of a Responses API reply.
function answerText(out) {
  return (
    out.output_text ||
    (out.output || [])
      .flatMap((x) => x.content || [])
      .filter((x) => x.type === 'output_text')
      .map((x) => x.text)
      .join('\n')
  );
}

// Directory listings the deployed Worker also serves under /texts/.
const libraryPaths = new Set(['/texts/', '/texts/b/', '/texts/daf/']);
function libraryListing(names, pathname) {
  if (pathname === '/texts/')
    return {
      name: 'Torah study library',
      files: {
        index: '/texts/names.json',
        calendar: '/texts/calendar.json',
        books: '/texts/b/',
        tractates: '/texts/daf/',
      },
      books: Object.keys(names.books).length,
      tractates: Object.keys(names.dafs || {}).length,
    };
  if (pathname === '/texts/b/')
    return {
      count: Object.keys(names.books).length,
      books: Object.entries(names.books).map(([title, file]) => ({
        title,
        file: '/texts/b/' + file + '.json',
      })),
    };
  return {
    count: Object.keys(names.dafs || {}).length,
    tractates: Object.entries(names.dafs || {}).map(([title, file]) => ({
      title,
      file: '/texts/daf/' + file + '.json',
    })),
  };
}
function sendLibraryListing(res, pathname) {
  let listing;
  try {
    listing = libraryListing(
      JSON.parse(fs.readFileSync(path.join(root, 'texts', 'names.json'), 'utf8')),
      pathname
    );
  } catch {
    return error(res, 404, 'The text library has not been built. Run: npm run build');
  }
  return send(res, 200, listing);
}

// Never serve dotfiles, the database folder or our own source.
function isBlockedPath(decoded) {
  return (
    decoded.includes('\0') ||
    decoded.split('/').some((x) => x.startsWith('.') && x.length > 1) ||
    decoded.startsWith('/data/') ||
    decoded === '/server.js'
  );
}
// Streams a file from disk. HEAD gets the headers only.
function sendFile(req, res, file) {
  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) return error(res, 404, 'Not found.');
    res.writeHead(200, {
      'content-type': mime[path.extname(file)] || 'application/octet-stream',
      'content-length': stat.size,
      'cache-control': 'no-cache',
      'x-content-type-options': 'nosniff',
    });
    if (req.method === 'HEAD') res.end();
    else fs.createReadStream(file).pipe(res);
  });
}
// Serves the site's files. Short URLs such as /about and /s/<id> are mapped to their
// HTML pages first.
function staticFile(req, res, url) {
  if (req.method !== 'GET' && req.method !== 'HEAD') return error(res, 405, 'Method not allowed.');
  let decoded;
  try {
    decoded = decodeURIComponent(url.pathname);
  } catch {
    return error(res, 400, 'Invalid path.');
  }
  if (decoded === '/' || decoded === '/app/') decoded = '/index.html';
  else if (/^\/s\/[0-9a-f]{12,40}$/.test(decoded))
    decoded = '/sheet.html'; // /s/<id> is a shared sheet
  else if (/^\/(about|privacy|terms|notes|chavruta|sheet|book|gemara|markup)$/.test(decoded))
    decoded += '.html'; // so /about works without the extension
  else if (libraryPaths.has(decoded)) return sendLibraryListing(res, decoded);
  if (isBlockedPath(decoded)) return error(res, 404, 'Not found.');
  const file = path.resolve(root, '.' + decoded);
  // Stop path traversal out of the project folder.
  if (!file.startsWith(root + path.sep)) return error(res, 404, 'Not found.');
  sendFile(req, res, file);
}
http
  .createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    if (url.pathname.startsWith('/api/'))
      api(req, res, url).catch((e) => {
        console.error('API error:', e.message);
        if (!res.headersSent) error(res, e.status || 500, e.status ? e.message : 'Server error.');
      });
    else staticFile(req, res, url);
  })
  .listen(port, host, () => console.log('Iyun listening on http://' + host + ':' + port));
