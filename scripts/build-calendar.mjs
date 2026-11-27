// Builds texts/calendar.json (Daf Yomi per day, weekly parasha per Saturday) from the open Sefaria calendar API.
// Build-time only; the site reads the static file. Usage: node scripts/build-calendar.mjs [startYear] [endYear]
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
// --snapshot: use the committed calendar (scripts/calendar-snapshot.json) instead of ~1,100 live requests that Sefaria rate-limits from CI.
if (process.argv.includes('--snapshot')) {
  fs.mkdirSync(path.join(root, 'texts'), { recursive: true });
  fs.copyFileSync(
    path.join(root, 'scripts', 'calendar-snapshot.json'),
    path.join(root, 'texts', 'calendar.json')
  );
  console.log('calendar: copied committed snapshot');
  process.exit(0);
}
// Default window: this year and the next two (the source only publishes Daf Yomi ~18 months ahead and the parasha ~2 years ahead).
const nowY = new Date().getUTCFullYear(),
  y0 = Number(process.argv[2] || nowY),
  y1 = Number(process.argv[3] || nowY + 2);
const days = [];
for (
  let d = new Date(Date.UTC(y0, 0, 1));
  d <= new Date(Date.UTC(y1, 11, 31));
  d = new Date(d.getTime() + 864e5)
)
  days.push(new Date(d));
const iso = (d) => d.toISOString().slice(0, 10),
  daf = new Array(days.length).fill(''),
  parasha = {};
let i = 0,
  done = 0;
const cacheDir = path.join(root, '.cache', 'cal');
fs.mkdirSync(cacheDir, { recursive: true });
async function one(k) {
  const d = days[k];
  const cacheFile = path.join(cacheDir, iso(d) + '.json');
  if (fs.existsSync(cacheFile)) {
    const c = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
    daf[k] = c.daf;
    if (c.parasha) parasha[iso(d)] = c.parasha;
    return;
  }
  const url =
    'https://www.sefaria.org/api/calendars?year=' +
    d.getUTCFullYear() +
    '&month=' +
    (d.getUTCMonth() + 1) +
    '&day=' +
    d.getUTCDate() +
    '&timezone=UTC';
  for (let t = 0; t < 8; t++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (!r.ok) throw Error(r.status);
      const j = await r.json();
      const items = j.calendar_items || [];
      daf[k] = items.find((x) => x.title?.en === 'Daf Yomi')?.ref || '';
      if (d.getUTCDay() === 6) {
        const p = items.find((x) => x.title?.en === 'Parashat Hashavua');
        if (p) parasha[iso(d)] = { ref: p.ref, name: p.displayValue?.en || '' };
      }
      fs.writeFileSync(
        cacheFile,
        JSON.stringify({ daf: daf[k], parasha: parasha[iso(d)] || null })
      );
      return;
    } catch (e) {
      await new Promise((r) => setTimeout(r, 1500 * (t + 1)));
    }
  }
  throw Error('failed ' + iso(d));
}
let pending = days.map((_, k) => k);
for (let pass = 1; pass <= 6 && pending.length; pass++) {
  const failed = [];
  i = 0;
  const list = pending;
  await Promise.all(
    Array.from({ length: Math.max(1, 5 - pass) }, async () => {
      while (i < list.length) {
        const k = list[i++];
        try {
          await one(k);
        } catch {
          failed.push(k);
        }
        if (++done % 500 === 0) console.log(done + ' calls');
      }
    })
  );
  pending = failed;
  if (pending.length) {
    console.log('pass', pass, 'retrying', pending.length);
    await new Promise((r) => setTimeout(r, 5000 * pass));
  }
}
if (pending.length) {
  console.error('could not fetch', pending.length, 'days; rerun to continue from cache');
  process.exit(1);
}
fs.mkdirSync(path.join(root, 'texts'), { recursive: true });
fs.writeFileSync(
  path.join(root, 'texts', 'calendar.json'),
  JSON.stringify({ start: iso(days[0]), end: iso(days[days.length - 1]), daf, parasha })
);
console.log(
  'days',
  days.length,
  'parashot',
  Object.keys(parasha).length,
  'missing daf',
  daf.filter((x) => !x).length
);
