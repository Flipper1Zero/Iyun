// End-to-end smoke test. It starts server.js against a temporary data folder, drives
// Chromium through the main user flows, saves screenshots to .smoke/ and exits 1 if
// anything fails. It needs the built text library first (npm run build:texts && npm run build:dapim)
// and Playwright (npm i --no-save playwright, or point NODE_PATH at an install).
// Run: node scripts/smoke.mjs
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'),
  shots = path.join(root, '.smoke');
fs.mkdirSync(shots, { recursive: true });
// Playwright is optional for the project, so fail with install instructions, not a stack trace.
let chromium;
try {
  ({ chromium } = createRequire(import.meta.url)('playwright'));
} catch {
  console.error(
    'Playwright is not installed. Run: npm i --no-save playwright && npx playwright install chromium'
  );
  process.exit(1);
}
if (!fs.existsSync(path.join(root, 'texts', 'names.json'))) {
  console.error('texts/ is missing. Run: npm run build:texts && npm run build:dapim');
  process.exit(1);
}
const PORT = 8190 + Math.floor(Math.random() * 50),
  BASE = 'http://127.0.0.1:' + PORT,
  data = fs.mkdtempSync(path.join(os.tmpdir(), 'smoke-'));
// Random port and a throwaway data folder, so a run never collides with a dev server or real data.
const srv = spawn(process.execPath, ['server.js'], {
  cwd: root,
  env: {
    ...process.env,
    PORT: String(PORT),
    HOST: '127.0.0.1',
    IYUN_DATA_DIR: data,
    ADMIN_KEY: 'smoke-admin',
  },
  stdio: 'ignore',
});
// Wait up to ~10s for the server to answer.
for (let i = 0; i < 50; i++) {
  try {
    if ((await fetch(BASE + '/api/status')).ok) break;
  } catch {}
  await new Promise((r) => setTimeout(r, 200));
}
const results = [];
let failed = 0;
const ok = (name, cond, detail = '') => {
  results.push([cond ? 'PASS' : 'FAIL', name, detail]);
  if (!cond) failed++;
  console.log((cond ? '  ✓ ' : '  ✗ ') + name + (detail && !cond ? '  → ' + detail : ''));
};
const browser = await chromium.launch(),
  errors = [],
  externals = new Set();
// Every browser context reports script errors and any request to a host other than ours.
async function ctx(opts = {}) {
  const c = await browser.newContext({ viewport: { width: 1300, height: 900 }, ...opts });
  c.on('page', (p) => {
    p.on('pageerror', (e) => errors.push(p.url().replace(BASE, '') + ': ' + e.message));
    p.on('request', (q) => {
      const h = new URL(q.url());
      if (h.host !== new URL(BASE).host && !/^(data|blob):/.test(q.url())) externals.add(h.host);
    });
  });
  return c;
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
// Emails get a random suffix so repeated runs never hit "already registered".
async function signup(page, name) {
  return page.evaluate(async (n) => {
    try {
      await window.IYUN_CLOUD.signUp(
        n,
        n + Date.now() + Math.floor(Math.random() * 1e6) + '@example.com',
        'password-' + n
      );
      return 'ok';
    } catch (e) {
      return e.message;
    }
  }, name);
}
try {
  // Protects against a broken page, a stray script error, or a page quietly pulling in
  // a third-party host (this is a privacy promise), plus the static files and review page.
  console.log('Pages load, no script errors, no third-party hosts');
  const c1 = await ctx();
  let p = await c1.newPage();
  for (const u of [
    '/',
    '/book.html?name=Bereishit&category=Tanach&ref=1',
    '/gemara.html?daf=2a',
    '/gemara.html?tractate=Shabbat&daf=2a',
    '/markup.html',
    '/about.html',
    '/review.html',
    '/privacy.html',
    '/terms.html',
    '/notes.html',
    '/chavruta.html',
    '/s/0123456789abcdef',
  ]) {
    const r = await p.goto(BASE + u);
    await wait(700);
    ok('loads ' + u, r.status() < 400 || u.startsWith('/s/'), 'status ' + r.status());
  }
  ok(
    'about page says it is open source and independent',
    /free, open-source software/i.test(
      await (
        await c1.newPage().then(async (q) => {
          await q.goto(BASE + '/about.html');
          return q;
        })
      ).textContent('body')
    )
  );
  ok(
    'every page has OG/Twitter meta + manifest',
    await (async () => {
      const q = await c1.newPage();
      let all = true;
      for (const u of [
        '/',
        '/book.html',
        '/gemara.html',
        '/about.html',
        '/privacy.html',
        '/terms.html',
      ]) {
        await q.goto(BASE + u);
        const n = await q.$$eval(
          'meta[property="og:image"],meta[name="twitter:card"],link[rel=manifest],link[rel=icon]',
          (x) => x.length
        );
        if (n < 4) all = false;
      }
      return all;
    })()
  );
  for (const f of [
    '/manifest.webmanifest',
    '/icons/icon-192.png',
    '/icons/icon-512.png',
    '/icons/og-image.png',
    '/robots.txt',
    '/sitemap.xml',
  ])
    ok('serves ' + f, (await fetch(BASE + f)).ok);
  ok(
    'text index directory answers (no 404)',
    (await fetch(BASE + '/texts/b/')).status === 200 &&
      (await fetch(BASE + '/texts/daf/')).status === 200
  );
  {
    const q = await c1.newPage();
    await q.goto(BASE + '/review.html');
    await wait(1200);
    ok(
      'review page shows progress',
      /machine-assisted drafts awaiting review/.test(await q.textContent('#overallText')),
      await q.textContent('#overallText')
    );
    ok(
      'review page lists the tractates',
      (await q.$$eval('#tractates button', (x) => x.length)) >= 36
    );
    await q.click('#tractates button:has-text("Shabbat")');
    await wait(300);
    ok(
      'a tractate opens its dapim as links to the reader',
      (await q.$$eval('#dafList a', (x) => x.length)) > 100 &&
        ((await q.getAttribute('#dafList a', 'href')) || '').includes(
          'gemara.html?tractate=Shabbat'
        )
    );
    await q.fill('#soDaf', '10a');
    await q.fill('#soName', 'Test Reviewer');
    await q.check('#soConfirm');
    const [dl] = await Promise.all([
      q.waitForEvent('download'),
      q.click('#signoff button[type=submit]'),
    ]);
    ok(
      'sign-off downloads a JSON file naming the reviewer',
      /signoff-Shabbat-10a\.json/.test(dl.suggestedFilename())
    );
    await q.close();
  }
  {
    const q = await c1.newPage();
    await q.goto(BASE + '/');
    await wait(500);
    await q.click('#searchToggle');
    for (const [term, want] of [
      ['בראשית', 'Bereishit'],
      ['Bamidbr', 'Bamidbar'],
      ['shmuel', 'Shmuel I'],
      ['שְׁמוֹת', 'Shemot'],
    ]) {
      await q.fill('#searchInput', term);
      await wait(900);
      const names = await q.$$eval('#searchResults a strong', (x) => x.map((e) => e.textContent));
      ok('search "' + term + '" finds ' + want, names.includes(want), names.slice(0, 5).join(','));
    }
    await q.close();
  }

  // The home page library: category tabs, search, and titles the dataset lacks being
  // labelled instead of leading to an error page.
  console.log('Library menu');
  await p.goto(BASE + '/');
  await wait(500);
  await p.click('#menuToggle');
  await wait(400);
  ok('15 category tabs', (await p.$$eval('#libraryTabs button', (x) => x.length)) === 15);
  let unavailableCount = 0;
  for (const tab of await p.$$eval('#libraryTabs button', (x) => x.map((b) => b.textContent))) {
    await p.click('#libraryTabs button:has-text("' + tab + '")');
    await wait(120);
    unavailableCount += await p.$$eval('.book-button.unavailable', (x) => x.length);
  }
  // Yerushalmi lives under the Talmud toggle
  await p.click('#libraryTabs button:has-text("Talmud")');
  await p.click('.library-subtabs button:has-text("Yerushalmi")');
  await wait(150);
  unavailableCount += await p.$$eval('.book-button.unavailable', (x) => x.length);
  ok(
    'titles missing from the open dataset are marked, not dead ends',
    unavailableCount === 6,
    'marked: ' + unavailableCount
  );
  await p.click('#libraryTabs button:has-text("Halacha")');
  await wait(150);
  await p.click('.book-button.unavailable');
  await wait(500);
  ok(
    'clicking an unavailable title explains why',
    /unavailable here/.test(await p.textContent('.book-detail'))
  );
  await p.screenshot({ path: path.join(shots, 'library-unavailable.png') });

  // Regression list of titles that once failed to load. Each must show real text.
  console.log('Titles that used to fail now open');
  const titles = [
    ['Bereishit', 'Tanach', '1'],
    ['Nechemiah', 'Tanach', '1'],
    ['Tzefaniah', 'Tanach', '1'],
    ['Pirkei Avot', 'Mishnah', ''],
    ["Ma'aserot", 'Mishnah', '1'],
    ['Rambam on Pirkei Avot', 'Mishnah', ''],
    ['Mishneh Torah, Torah Study', 'Halacha', ''],
    ['Arukh HaShulchan', 'Halacha', ''],
    ['Midrash Tanchuma', 'Midrash', ''],
    ['Siddur Ashkenaz', 'Tefilla', ''],
    ['Nineteen Letters', 'Machshava', ''],
  ];
  for (const [n, cat, ref] of titles) {
    await p.goto(
      BASE +
        '/book.html?name=' +
        encodeURIComponent(n) +
        '&category=' +
        encodeURIComponent(cat) +
        (ref ? '&ref=' + ref : '')
    );
    await wait(1100);
    const body = (await p.textContent('#bookText')).replace(/\s+/g, ' ');
    ok('book: ' + n, body.length > 40 && !/could not be loaded/.test(body), body.slice(0, 60));
  }
  for (const [t, d] of [
    ["Me'ilah", '3a'],
    ['Zevahim', '2a'],
    ['Betzah', '2a'],
    ['Keretot', '2a'],
    ['Tamid', '26a'],
  ]) {
    await p.goto(BASE + '/gemara.html?tractate=' + encodeURIComponent(t) + '&daf=' + d);
    await wait(1600);
    ok('daf: ' + t + ' ' + d, (await p.$$eval('#colMain .w', (x) => x.length)) > 20);
  }
  await p.goto(BASE + '/gemara.html?tractate=Shabbat&daf=2a');
  await wait(1800);
  ok(
    'Vilna layout has Rashi and Tosafot columns',
    (await p.$$eval('#colRashi span', (x) => x.length)) > 20 &&
      (await p.$$eval('#colTosafot span', (x) => x.length)) > 20
  );
  await p.screenshot({ path: path.join(shots, 'daf-shabbat-2a.png') });
  await p.goto(BASE + '/gemara.html?tractate=Bava%20Batra&daf=40b');
  await wait(1800);
  ok(
    'Bava Batra after 29a shows Rashbam',
    (await p.$$eval('#colRashi span', (x) => x.length)) > 20
  );

  // The book reader's own features: Targum, commentary, library button, shortcuts.
  console.log('Book reader tools');
  await p.goto(BASE + '/book.html?name=Bereishit&category=Tanach&ref=1');
  await wait(1500);
  ok(
    'Torah page is laid out like a printed chumash with Hebrew, English and Rashi/Targum',
    (await p.isVisible('.bk-row .bk-en')) &&
      (await p.getAttribute('body', 'data-format')) === 'chumash'
  );
  await wait(1200);
  ok('Torah verses show Targum beneath', await p.isVisible('.bk-comm.tg'));
  await p.click('#readerMenuToggle');
  await wait(200);
  ok('book reader opens the library', await p.isVisible('.reader-library'));
  await p.click('.reader-library-group button:text-is("Bereishit")');
  await wait(350);
  ok(
    'Bereishit is grouped by parasha',
    (await p.$$eval('.reader-library-section', (x) => x.length)) === 12
  );
  await p.click('.reader-library-close');
  ok('commentary button appears for Bereishit', await p.isVisible('#commentToggle'));
  await p.click('#commentToggle');
  await wait(900);
  ok(
    'commentary panel shows a comment',
    (await p.$$eval('#commentBody .comment-item', (x) => x.length)) > 0,
    await p.textContent('#commentBody')
  );
  await p.screenshot({ path: path.join(shots, 'book-commentary.png') });
  await p.click('#commentClose');
  await p.keyboard.press('/');
  await p.fill('#findInput', 'אור');
  await wait(300);
  ok(
    'find highlights matches',
    (await p.$$eval('.word.hit', (x) => x.length)) > 0 &&
      /line/.test(await p.textContent('#findCount'))
  );
  await p.keyboard.press('Escape');
  await p.click('.word:visible >> nth=2');
  await p.click('#citeBtn');
  await wait(250);
  ok(
    'cite copies a citation (toast)',
    /Copied: Bereishit 1:/.test(await p.textContent('#toast')),
    await p.textContent('#toast')
  );
  await p.keyboard.press('?');
  await wait(200);
  ok('shortcut help opens', await p.isVisible('#helpDialog'));
  await p.keyboard.press('Escape');
  await wait(100);
  await p.goto(BASE + '/book.html?name=Bereishit&category=Tanach&ref=1&seg=3');
  await wait(1300);
  ok(
    'deep link selects verse 3',
    (await p.$$eval('.word.selected', (x) => x.length)) > 0 &&
      (await p.evaluate(() => window.IYUN_BOOK.active === 2))
  );
  await p.screenshot({ path: path.join(shots, 'book-reader.png') });

  // Language switching has to change the page language and survive switching back.
  console.log('Hebrew / English interface');
  await p.goto(BASE + '/');
  await wait(500);
  await p.click('#languageToggle');
  await wait(250);
  ok(
    'toggle switches to Hebrew',
    (await p.evaluate(() => document.documentElement.lang)) === 'he' &&
      /פרשת השבוע/.test(await p.textContent('#weeklyParasha'))
  );
  await p.screenshot({ path: path.join(shots, 'home-hebrew.png') });
  await p.click('#languageToggle');
  await wait(200);
  ok('and back to English', (await p.evaluate(() => document.documentElement.lang)) === 'en');

  // Personal notes: saved in the browser, listed on the notes page, searchable.
  console.log('Notes');
  await p.goto(BASE + '/book.html?name=Bereishit&category=Tanach&ref=1');
  await wait(1300);
  if (!(await p.isVisible('#notes'))) await p.click('#settingsToggle');
  await p.fill('#notes', 'Smoke test note about creation');
  await wait(200);
  await p.goto(BASE + '/notes.html');
  await wait(600);
  ok(
    'note appears on the notes page',
    /Smoke test note/.test(await p.inputValue('#list textarea'))
  );
  await p.fill('#q', 'nothing-matches');
  await wait(150);
  ok('search filters notes', (await p.$$eval('#list .card', (x) => x.length)) === 0);
  await p.fill('#q', '');
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('#exportJson')]);
  const exported = JSON.parse(fs.readFileSync(await dl.path(), 'utf8'));
  ok(
    'export contains the note',
    exported.notes.some((n) => /Smoke test note/.test(n.text))
  );
  await p.screenshot({ path: path.join(shots, 'notes.png') });

  // Sign-up, publishing a sheet, reporting it until it is hidden, and deleting it.
  // This is the path that protects readers from abusive content.
  console.log('Accounts, sheets, moderation');
  const A = await ctx(),
    pa = await A.newPage();
  await pa.goto(BASE + '/');
  await wait(500);
  ok('sign up', (await signup(pa, 'ann')) === 'ok');
  await pa.goto(BASE + '/book.html?name=Bereishit&category=Tanach&ref=1&seg=3');
  await wait(1500);
  await pa.click('#sheetBtn');
  await wait(250);
  ok(
    'Sheet button adds a passage to the draft',
    /Added to your sheet draft/.test(await pa.textContent('#toast'))
  );
  await pa.goto(BASE + '/notes.html');
  await wait(700);
  await pa.fill('#sheetTitle', 'Smoke sheet');
  await pa.click('#publish');
  await wait(900);
  const href = await pa.getAttribute('#publishMsg a', 'href');
  ok(
    'publish returns a public link',
    /^\/s\/[0-9a-f]+$/.test(href || ''),
    await pa.textContent('#publishMsg')
  );
  const anon = await (await ctx()).newPage();
  await anon.goto(BASE + href);
  await wait(900);
  ok(
    'anyone can read the sheet',
    /Smoke sheet/.test(await anon.textContent('#title')) &&
      (await anon.$$eval('.he-text', (x) => x.length)) > 0
  );
  await anon.screenshot({ path: path.join(shots, 'sheet.png') });
  const sid = href.split('/').pop();
  let hidden = false;
  for (let i = 0; i < 3; i++) {
    const r = await fetch(BASE + '/api/sheets/' + sid + '/report', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-forwarded-for': '10.0.0.' + i },
      body: JSON.stringify({ reason: 'smoke ' + i }),
    });
    void r;
  }
  // Reports from one IP count once; reach the threshold with three signed-in reporters
  for (const n of ['r1', 'r2', 'r3']) {
    const cx = await ctx(),
      pp = await cx.newPage();
    await pp.goto(BASE + '/');
    await wait(300);
    await signup(pp, n);
    await pp.evaluate(
      (id) =>
        window.IYUN_CLOUD.request('sheets/' + id + '/report', {
          method: 'POST',
          body: '{"reason":"spam"}',
        }),
      sid
    );
  }
  const sheetRes = await fetch(BASE + '/api/sheets/' + sid);
  hidden = sheetRes.status === 410;
  ok('sheet is hidden after three reports', hidden, 'status ' + sheetRes.status);
  const adm = await (
    await fetch(BASE + '/api/admin/reports', { headers: { authorization: 'Bearer smoke-admin' } })
  ).json();
  ok(
    'admin can see reported sheets',
    adm.sheets?.some((s) => s.id === sid)
  );
  ok(
    'admin API is closed without the key',
    (await fetch(BASE + '/api/admin/reports')).status === 404
  );
  await fetch(BASE + '/api/admin/sheets/' + sid, {
    method: 'POST',
    headers: { authorization: 'Bearer smoke-admin', 'content-type': 'application/json' },
    body: '{"action":"restore"}',
  });
  ok(
    'admin restore makes it public again',
    (await fetch(BASE + '/api/sheets/' + sid)).status === 200
  );
  await pa.goto(BASE + href);
  await wait(700);
  ok('owner sees a delete button', await pa.isVisible('#deleteBtn'));
  pa.once('dialog', (d) => d.accept());
  await pa.click('#deleteBtn');
  await wait(900);
  ok('deleted sheet is gone', (await fetch(BASE + '/api/sheets/' + sid)).status === 404);

  // Study groups with two people: invite link, messages, who is online, and one person
  // leading while the other follows. Also covers deleting an account.
  console.log('Chavruta: live messages, presence, Live follow');
  const B = await ctx(),
    pb = await B.newPage();
  await pb.goto(BASE + '/');
  await wait(400);
  await signup(pb, 'ben');
  await pa.goto(BASE + '/chavruta.html');
  await wait(900);
  await pa.fill('#newName', 'Beit Smoke');
  await pa.click('#createBtn');
  await wait(900);
  const code = (await pa.textContent('#inviteCode')).replace('Invite code: ', '').trim();
  ok('group created with invite code', code.length >= 6);
  await pb.goto(BASE + '/chavruta.html?join=' + encodeURIComponent(code));
  await wait(1500);
  ok('invite link joins the group', /Beit Smoke/.test(await pb.textContent('#roomName')));
  await wait(800);
  await pa.evaluate(() => {});
  ok(
    'presence: A sees B online',
    (await pa.$$eval('#members .dot.on', (x) => x.length)) >= 2 ||
      (await (async () => {
        await wait(1200);
        return (await pa.$$eval('#members .dot.on', (x) => x.length)) >= 2;
      })())
  );
  await pb.fill('#refInput', 'Shabbat 2a');
  await pb.fill('#msgInput', 'hello from ben');
  await pb.click('#composer button[type=submit]');
  await wait(900);
  ok(
    'message arrives live on the other page (no refresh)',
    /hello from ben/.test(await pa.textContent('#log')),
    (await pa.textContent('#log')).slice(0, 80)
  );
  await pa.screenshot({ path: path.join(shots, 'chavruta.png') });
  // Live follow: A leads in the reader, B follows
  await pa.check('input[name=mode][value=lead]');
  await pb.check('input[name=mode][value=follow]');
  await pa.goto(BASE + '/book.html?name=Bereishit&category=Tanach&ref=1');
  await wait(1500);
  await pb.goto(BASE + '/book.html?name=Bereishit&category=Tanach&ref=1');
  await wait(1500);
  const modeA = await pa.evaluate(() => window.IYUN_CLOUD.liveMode());
  await pa.evaluate(() => {
    window.IYUN_BOOK.goSegment(4);
  });
  await wait(1200);
  const segB = await pb.evaluate(() => window.IYUN_BOOK.active);
  ok(
    'follower moves with the leader',
    modeA === 'lead' && segB === 4,
    'A mode ' + modeA + ', B segment ' + segB
  );
  await pa.goto(BASE + '/privacy.html');
  await wait(800);
  // People must be able to delete their own account from the page.
  ok('delete-account box shows when signed in', await pa.isVisible('#deleteBox'));

  // Installable app basics: the service worker registers, and a book opened once
  // can be read again with no network.
  console.log('PWA and offline');
  const P = await ctx();
  const pw = await P.newPage();
  await pw.goto(BASE + '/book.html?name=Bereishit&category=Tanach&ref=1');
  await wait(1500);
  const swOk = await pw.evaluate(async () => {
    if (!('serviceWorker' in navigator)) return false;
    const r = await navigator.serviceWorker.ready;
    return !!r.active;
  });
  ok('service worker is active', swOk);
  await pw.goto(BASE + '/book.html?name=Bereishit&category=Tanach&ref=1');
  await wait(1200); // the second load is what fills the runtime cache
  await P.setOffline(true);
  await pw.reload();
  await wait(1500);
  ok(
    'an opened book still works offline',
    (await pw.textContent('#bookText')).length > 100,
    (await pw.textContent('#bookText')).slice(0, 60)
  );
  await pw.screenshot({ path: path.join(shots, 'offline-book.png') });
  await P.setOffline(false);

  // Phone-sized screen: nothing should scroll sideways, and the sections drawer opens.
  console.log('Mobile');
  const M = await ctx({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const pm = await M.newPage();
  for (const u of [
    '/',
    '/book.html?name=Bereishit&category=Tanach&ref=1',
    '/gemara.html?tractate=Shabbat&daf=2a',
    '/about.html',
    '/notes.html',
    '/chavruta.html',
  ]) {
    await pm.goto(BASE + u);
    await wait(900);
    const overflowPx = await pm.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    ok('no horizontal scroll on phone: ' + u, overflowPx <= 2, 'overflow ' + overflowPx);
  }
  await pm.goto(BASE + '/book.html?name=Bereishit&category=Tanach&ref=1');
  await wait(1200);
  await pm.click('#sectionsToggle');
  await wait(200);
  ok('sections drawer opens on phone', await pm.isVisible('#sectionsList a >> nth=0'));
  await pm.screenshot({ path: path.join(shots, 'book-mobile.png') });
} catch (e) {
  ok('smoke run completed', false, e.stack || String(e));
}
ok('no uncaught script errors', errors.length === 0, errors.slice(0, 5).join(' | '));
ok('no third-party hosts contacted', externals.size === 0, [...externals].join(', '));
console.log(
  '\n' +
    (results.length - failed) +
    '/' +
    results.length +
    ' checks passed' +
    (failed ? ', ' + failed + ' FAILED' : '')
);
fs.writeFileSync(path.join(shots, 'results.json'), JSON.stringify(results, null, 1));
srv.kill();
try {
  fs.rmSync(data, { recursive: true, force: true });
} catch {}
await Promise.race([browser.close().catch(() => {}), wait(8000)]); // a stuck browser must not hang the run
process.exit(failed ? 1 : 0);
