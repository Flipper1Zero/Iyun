// Builds the site's local text library from the open Sefaria-Export dataset.
// Output: texts/names.json (menu name -> book lookup) and texts/b/<slug>.json (one file per book).
// Usage: node scripts/build-texts.mjs [--only=Tanach,Mishnah,...] [--concurrency=8] [--refresh-names]
// Hebrew comes from Sefaria's merged version when there is one, else the first usable Hebrew version.
// Its license is recorded and shown to readers.
// English is only taken from versions with a reusable license (public domain, CC0, CC-BY, CC-BY-SA,
// or a non-commercial one, which is flagged).
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);
const only = args.only ? String(args.only).split(',') : null,
  concurrency = Number(args.concurrency || 8);
const BUCKET = 'https://storage.googleapis.com/sefaria-export',
  cacheDir = path.join(root, '.cache'),
  outDir = path.join(root, 'texts');
fs.mkdirSync(cacheDir, { recursive: true });
fs.mkdirSync(path.join(outDir, 'b'), { recursive: true });
const OPEN = /^(Public Domain|PD|CC0|CC-BY|CC-BY-SA)$/i;
// Non-commercial licenses are accepted too, since this is a non-commercial study site.
// They are shown to readers and the version is flagged nc:true.
const NC = /^(CC-BY-NC|CC-BY-NC-SA)$/i;
// Number of non-empty strings anywhere in a nested text structure.
const countSegments = (v) =>
  typeof v === 'string'
    ? v
      ? 1
      : 0
    : Array.isArray(v)
      ? v.reduce((n, x) => n + countSegments(x), 0)
      : v && typeof v === 'object'
        ? Object.values(v).reduce((n, x) => n + countSegments(x), 0)
        : 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Downloads a URL once and keeps the body in .cache, so reruns and CI retries cost nothing.
// With `range` only the start of the file is fetched (enough to read a version's license).
// Returns null on a 404.
async function fetchCached(url, { range, json = true } = {}) {
  const key = path.join(
    cacheDir,
    crypto
      .createHash('sha1')
      .update(url + (range || ''))
      .digest('hex')
  );
  if (fs.existsSync(key)) {
    const b = fs.readFileSync(key, 'utf8');
    return json ? parseLoose(b, !!range) : b;
  }
  for (let i = 0; i < 5; i++) {
    try {
      const r = await fetch(url, { headers: range ? { range } : {} });
      if (r.status === 404) return null;
      if (!r.ok && r.status !== 206) throw Error('HTTP ' + r.status);
      const b = await r.text();
      fs.writeFileSync(key, b);
      return json ? parseLoose(b, !!range) : b;
    } catch (e) {
      if (i === 4) throw e;
      await sleep(800 * (i + 1));
    }
  }
}
// A ranged download is cut off mid-JSON, so pull the few metadata fields out with regexes instead of JSON.parse.
function parseLoose(body, partial) {
  if (!partial) return JSON.parse(body);
  const m = {};
  for (const k of [
    'license',
    'versionTitle',
    'versionSource',
    'language',
    'actualLanguage',
    'isPrimary',
    'priority',
  ]) {
    const r = new RegExp('"' + k + '":\\s*("(?:[^"\\\\]|\\\\.)*"|true|false|[-0-9.]+)').exec(body);
    if (r)
      try {
        m[k] = JSON.parse(r[1]);
      } catch {}
  }
  return m;
}
function entities(s) {
  return s
    .replace(/&nbsp;|&thinsp;|&ensp;|&emsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
}
// Turns a Sefaria HTML string into plain text: footnotes dropped, tags stripped, whitespace collapsed.
function clean(s) {
  if (typeof s !== 'string') return '';
  return entities(
    s
      .replace(/<i class="footnote[^"]*">[\s\S]*?<\/i>/g, '')
      .replace(/<sup class="footnote-marker">[\s\S]*?<\/sup>/g, '')
      .replace(/<br\s*\/?>/g, ' ')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/\s+/g, ' ')
    .trim();
}
// Cleans every string in a nested text structure, keeping its shape.
function cleanAll(v) {
  if (typeof v === 'string') return clean(v);
  if (Array.isArray(v)) return v.map(cleanAll);
  if (v && typeof v === 'object') {
    const o = {};
    for (const k of Object.keys(v)) o[k] = cleanAll(v[k]);
    return o;
  }
  return '';
}
// File name for a book: readable prefix plus a short hash so similar titles can't collide.
const slug = (t) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') +
  '-' +
  crypto.createHash('sha1').update(t).digest('hex').slice(0, 6);
// Runs fn over items with limited parallelism. A failing item becomes { error } in its slot
// instead of aborting the others.
async function pool(items, fn) {
  let next = 0,
    done = 0;
  const results = [];
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (next < items.length) {
        const k = next++;
        try {
          results[k] = await fn(items[k], k);
        } catch (e) {
          results[k] = { error: String(e.message || e) };
        }
        if (++done % 25 === 0) console.log(' ', done + '/' + items.length);
      }
    })
  );
  return results;
}
const win = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'catalog.js'), 'utf8'), { window: win });
vm.runInNewContext(fs.readFileSync(path.join(root, 'catalog-directories.js'), 'utf8'), {
  window: win,
});
const CAT = win.IYUN_CATALOG,
  DIR = win.IYUN_DIRECTORIES || {};
const ALIAS = { Tzefaniah: 'Zephaniah' };
// Key used for a menu entry in names.json's `unavailable` map and in catalog-directories.js.
const menuKey = (cat, group, name) => cat + '|' + group + '|' + name;
// The name Sefaria's name API knows a menu entry by.
const queryFor = (cat, name) =>
  ALIAS[name] ||
  (cat === 'Mishnah'
    ? 'Mishnah ' + name
    : cat === 'Tosefta'
      ? 'Tosefta ' + name
      : cat === 'Talmud Yerushalmi'
        ? 'Jerusalem Talmud ' + (name === 'Brachot' ? 'Berakhot' : name)
        : name);
const todo = [];
for (const [cat, groups] of Object.entries(CAT)) {
  if (only && !only.includes(cat)) continue;
  for (const g of groups)
    for (const name of g.books) todo.push({ cat, group: g.group, name, q: queryFor(cat, name) });
}
// Volumes listed under a directory entry are books too, resolved with the same category rule.
const extra = [];
for (const t of [...todo]) {
  const d = DIR[menuKey(t.cat, t.group, t.name)];
  if (d)
    for (const c of d) extra.push({ cat: t.cat, group: t.group, name: c, q: queryFor(t.cat, c) });
}
const seenQ = new Set(),
  queries = [];
for (const t of [...todo, ...extra]) {
  if (seenQ.has(t.q)) continue;
  seenQ.add(t.q);
  queries.push(t);
}
console.log('catalog entries', todo.length, 'queries', queries.length);
// Name lookups go through a committed lock file so a build never depends on how Sefaria's live API behaves that day
// (rate limits there used to silently drop titles). Missing entries are fetched; any failure stops the build.
const lockFile = path.join(root, 'scripts', 'name-resolution.json'),
  refresh = process.argv.includes('--refresh-names');
const lock =
  !refresh && fs.existsSync(lockFile) ? JSON.parse(fs.readFileSync(lockFile, 'utf8')) : {};
const names = {};
const need = queries.filter((t) => !(t.q in lock));
console.log('name lookups: locked', queries.length - need.length, 'to fetch', need.length);
const lookups = await pool(need, async (t) => {
  const info = await fetchCached('https://www.sefaria.org/api/name/' + encodeURIComponent(t.q));
  if (!info) {
    names[t.q] = { missing: true };
    return;
  }
  if (info.is_ref) names[t.q] = { title: info.index || info.ref, ref: info.ref };
  else
    names[t.q] = {
      collection: true,
      completions: (info.completions || []).filter((x) => x !== t.name && x !== t.q),
    };
});
const failedLookups = lookups
  .map((r, i) => (r && r.error ? need[i].q + ': ' + r.error : null))
  .filter(Boolean);
if (failedLookups.length)
  throw Error(
    failedLookups.length +
      ' name lookups failed (the build stops rather than drop titles): ' +
      failedLookups.slice(0, 5).join(' | ')
  );
for (const t of queries) if (t.q in lock) names[t.q] = JSON.parse(JSON.stringify(lock[t.q]));
fs.writeFileSync(
  lockFile,
  JSON.stringify(
    Object.fromEntries(queries.map((t) => [t.q, names[t.q]]).sort((a, b) => (a[0] < b[0] ? -1 : 1)))
  )
);
const booksIndex = JSON.parse(
  await fetchCached(
    BUCKET.replace(
      'storage.googleapis.com/sefaria-export',
      'raw.githubusercontent.com/Sefaria/Sefaria-Export/master'
    ) + '/books.json',
    { json: false }
  )
);
const byTitle = new Map();
for (const b of booksIndex.books) {
  if (!byTitle.has(b.title)) byTitle.set(b.title, { he: [], en: [] });
  byTitle.get(b.title)[b.language === 'Hebrew' ? 'he' : 'en'].push(b);
}
const allTitles = [...byTitle.keys()].sort();
// Menu names whose dataset title is spelled differently (only unambiguous matches).
const OVERRIDE = {
  'Melechet Shlomo': { prefix: 'Melekhet Shelomoh on Mishnah ' },
  "Vilna Gaon's students' letter to the Lost Tribes of Israel": {
    title: 'Letter to the Ten Lost Tribes of Israel',
  },
  'Iggeret Rav Shereira Gaon': { title: 'Epistle of Rav Sherira Gaon' },
};
// The name lookup is ambiguous or misspelled for these; each target was checked to exist with the right category.
const FIX = {
  Nechemiah: 'Nehemiah',
  "Mishnah Ma'aserot": 'Mishnah Maasrot',
  'Mishnah Pirkei Avot': 'Pirkei Avot',
  'Mishnah Bechorot': 'Mishnah Bekhorot',
  'Mishnah Arachin': 'Mishnah Arakhin',
  'Mishnah Machshirin': 'Mishnah Makhshirin',
  Shekalim: 'Jerusalem Talmud Shekalim',
  Betzah: 'Beitzah',
  Zevahim: 'Zevachim',
  Keretot: 'Keritot',
  "Me'ilah": 'Meilah',
  "Tosefta Ma'aserot": 'Tosefta Maasrot',
  'Tosefta Keilim Metzia': 'Tosefta Kelim Metzia',
};
for (const [q, t] of Object.entries(FIX)) {
  if (q in names) {
    if (!byTitle.has(t)) throw Error('FIX target missing: ' + t);
    names[q] = { title: t, ref: t };
  }
}
for (const [q, o] of Object.entries(OVERRIDE)) {
  if (!(q in names)) continue;
  names[q] = o.prefix
    ? { collection: true, completions: allTitles.filter((t) => t.startsWith(o.prefix)) }
    : { title: o.title, ref: o.title };
}
for (const [q, x] of Object.entries(names)) {
  if (!x.collection) continue;
  const base = q.replace(/^(Mishnah|Tosefta|Jerusalem Talmud) /, '');
  const pref = OVERRIDE[q]?.prefix
    ? []
    : allTitles.filter(
        (t) =>
          t !== base &&
          (t.startsWith(base + ' on ') || t.startsWith(base + ', ') || t.startsWith(base + ' '))
      );
  x.children = [...new Set([...pref, ...x.completions.filter((c) => byTitle.has(c))])].slice(
    0,
    400
  );
  delete x.completions;
}
const wanted = new Set(
  Object.values(names)
    .filter((x) => x.title)
    .map((x) => x.title)
);
for (const x of Object.values(names)) if (x.children) for (const c of x.children) wanted.add(c);
wanted.add('Tamid'); // referenced by the Daf Yomi calendar
// The printed Torah reader places Targum Onkelos beside the base text and Rashi.
for (const book of ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'])
  if (byTitle.has('Onkelos ' + book)) wanted.add('Onkelos ' + book);
// Every Bavli tractate also needs its Rashi and Tosafot for the Vilna daf layout.
for (const t of [...wanted]) {
  const c = byTitle.get(t)?.he[0]?.categories || byTitle.get(t)?.en[0]?.categories || [];
  if (c[0] === 'Talmud' && c[1] === 'Bavli' && c.length === 3) {
    wanted.add('Rashi on ' + t);
    wanted.add('Tosafot on ' + t);
    wanted.add('Rashbam on ' + t);
  }
}
// Classic commentators for the in-reader commentary panel: "<commentator> on <base>" for every built Tanakh and Mishnah base text.
const COMMENTATORS = [
  'Rashi',
  'Ramban',
  'Ibn Ezra',
  'Sforno',
  'Rashbam',
  'Radak',
  'Chizkuni',
  'Or HaChaim',
  'Kli Yakar',
  'Metzudat David',
  'Bartenura',
  'Ikar Tosafot Yom Tov',
  'Tosafot Yom Tov',
  'Rambam',
];
for (const t of [...wanted]) {
  const c = byTitle.get(t)?.he[0]?.categories || byTitle.get(t)?.en[0]?.categories || [];
  if (
    (c[0] === 'Tanakh' && c.length >= 2 && c.length <= 3) ||
    (c[0] === 'Mishnah' && c.length === 2)
  )
    for (const who of COMMENTATORS) {
      const cand = who + ' on ' + t;
      if (byTitle.has(cand)) wanted.add(cand);
      if (c[0] === 'Mishnah') {
        const bare = who + ' on ' + t.replace(/^Mishnah /, '');
        if (byTitle.has(bare)) wanted.add(bare);
      }
    }
}
const titles = [...wanted].filter((t) => byTitle.has(t));
console.log('books to build', titles.length);
const PREF = [
  'Sefaria Community Translation',
  'The Holy Scriptures A New Translation JPS 1917',
  'Tanakh The Holy Scriptures, published by JPS',
];
// Version titles ending in a bracketed language code (e.g. "[fr]") are translations into other languages.
const hasLanguageTag = (v) => /\[[a-z]{2,3}\]\s*$/i.test(v.versionTitle);
// License and source of a version, read from just the head of its file.
async function fetchVersionMeta(entry) {
  return (await fetchCached(entry.json_url, { range: 'bytes=0-6000' })) || {};
}

// Daf label for an index into a Talmud array: 0 -> 1a, 1 -> 1b, 2 -> 2a ...
const dafLabel = (i) => Math.floor(i / 2) + 1 + (i % 2 ? 'b' : 'a');
// True if the nested structure holds at least one non-empty string.
function nonEmpty(v) {
  return typeof v === 'string'
    ? v.length > 0
    : Array.isArray(v)
      ? v.some(nonEmpty)
      : v && typeof v === 'object'
        ? Object.values(v).some(nonEmpty)
        : false;
}
// Section outline: [{id, i?, pk?, all?}]. id = label shown and linked; i = index into the list;
// pk = key path into a dict-structured book (including its default '' nodes); all = the whole flat text.
function outlineOf(he, en, talmud) {
  const root = he ?? en,
    o = [];
  if (Array.isArray(root)) {
    if (!root.some(Array.isArray)) return nonEmpty(root) ? [{ id: '1', all: 1 }] : [];
    const n = Math.max(he?.length || 0, en?.length || 0);
    for (let i = 0; i < n; i++)
      if (nonEmpty(he?.[i]) || nonEmpty(en?.[i]))
        o.push({ id: talmud ? dafLabel(i) : String(i + 1), i });
    return o;
  }
  (function walkNode(h, e, pk, lp) {
    const keys = [...new Set([...Object.keys(h || {}), ...Object.keys(e || {})])];
    for (const k of keys) {
      const hv = h?.[k],
        ev = e?.[k],
        npk = pk.concat(k),
        nlp = k === '' ? lp : lp.concat(k),
        sample = hv ?? ev;
      if (sample && !Array.isArray(sample) && typeof sample === 'object') {
        walkNode(hv, ev, npk, nlp);
        continue;
      }
      if (!(nonEmpty(hv) || nonEmpty(ev))) continue;
      const label = nlp.join(', ') || 'Text';
      if (Array.isArray(sample) && sample.some(Array.isArray)) {
        const n = Math.max(hv?.length || 0, ev?.length || 0);
        for (let i = 0; i < n; i++)
          if (nonEmpty(hv?.[i]) || nonEmpty(ev?.[i]))
            o.push({ id: label + ', ' + (i + 1), pk: npk, i });
      } else o.push({ id: label, pk: npk });
    }
  })(he, en, [], []);
  return o;
}
// Hebrew side of a book: Sefaria's merged version when there is one, else the first usable version.
async function loadHebrew(entry, rec) {
  const merged = entry.he.find((x) => x.versionTitle === 'merged'),
    candidates = entry.he.filter((x) => x.versionTitle !== 'merged' && !hasLanguageTag(x));
  if (merged) {
    const j = await fetchCached(merged.json_url);
    if (j) {
      rec.he = cleanAll(j.text);
      rec.heTitle = j.heTitle || '';
      // A merged text names the version each part came from; the license lives on that version.
      const src = j.versions?.[0]?.[0];
      const srcEntry = entry.he.find((x) => x.versionTitle === src);
      const m = srcEntry ? await fetchVersionMeta(srcEntry) : {};
      rec.heV = {
        title: src || 'merged',
        license: m.license || '',
        source: j.versions?.[0]?.[1] || '',
      };
    }
  } else if (candidates[0]) {
    const j = await fetchCached(candidates[0].json_url);
    rec.he = cleanAll(j.text);
    rec.heTitle = j.heTitle || '';
    rec.heV = { title: j.versionTitle, license: j.license || '', source: j.versionSource || '' };
  }
}
// English side: of the versions with an allowed license, the one covering most of the Hebrew.
// Open licenses get a small bonus, so they win when coverage is close.
// Returns null when no usable version has any text.
async function pickEnglish(entry, hebrew) {
  const candidates = entry.en
    .filter((x) => x.versionTitle !== 'merged' && !hasLanguageTag(x))
    .sort((a, b) => {
      const pa = PREF.indexOf(a.versionTitle),
        pb = PREF.indexOf(b.versionTitle);
      return (
        (pa < 0 ? 99 : pa) - (pb < 0 ? 99 : pb) || a.versionTitle.localeCompare(b.versionTitle)
      );
    });
  const hebrewCount = hebrew ? countSegments(hebrew) : 0;
  const score = (x) =>
    (hebrewCount ? Math.min(1, x.n / hebrewCount) : x.n ? 1 : 0) + (x.open ? 0.05 : 0);
  let best = null,
    tried = 0;
  for (const versionEntry of candidates.slice(0, 14)) {
    const m = await fetchVersionMeta(versionEntry),
      license = (m.license || '').trim(),
      open = OPEN.test(license),
      nc = NC.test(license);
    if (!(open || nc) || (m.language || 'en') === 'he') continue;
    if (++tried > 5) break;
    const j = await fetchCached(versionEntry.json_url);
    if (!j) continue;
    const text = cleanAll(j.text),
      n = countSegments(text);
    const cand = {
      text,
      n,
      open,
      v: {
        title: versionEntry.versionTitle,
        license,
        source: m.versionSource || j.versionSource || '',
        nc,
      },
      heTitle: j.heTitle || '',
    };
    if (!best || score(cand) > score(best)) best = cand;
    if (best.open && hebrewCount && best.n / hebrewCount >= 0.9) break;
  }
  return best && best.n ? best : null;
}
// A few books (dict-structured ones) are too big for one file under the CDN limit.
// Their text moves into texts/b/<slug>.pN.json parts and the main file keeps only the index.
function splitIntoParts(rec, title) {
  const keys = Object.keys(rec.he),
    groups = [];
  let current = [],
    size = 0;
  for (const k of keys) {
    const sz = JSON.stringify(rec.he[k]).length + JSON.stringify(rec.en?.[k] || '').length;
    if (size + sz > 12e6 && current.length) {
      groups.push(current);
      current = [];
      size = 0;
    }
    current.push(k);
    size += sz;
  }
  if (current.length) groups.push(current);
  rec.parts = {};
  const heAll = rec.he,
    enAll = rec.en;
  groups.forEach((ks, i) => {
    const name = slug(title) + '.p' + (i + 1);
    const part = { he: {}, en: enAll ? {} : null };
    for (const k of ks) {
      part.he[k] = heAll[k];
      if (enAll && enAll[k] !== undefined) part.en[k] = enAll[k];
      rec.parts[k] = name;
    }
    fs.writeFileSync(path.join(outDir, 'b', name + '.json'), JSON.stringify(part));
  });
  rec.keys = keys;
  rec.he = null;
  rec.en = null;
  rec.hasHe = !!heAll;
  rec.hasEn = !!enAll;
}
async function buildBook(title) {
  const entry = byTitle.get(title);
  if (!entry) return { skip: 'not in export' };
  const file = path.join(outDir, 'b', slug(title) + '.json');
  const schema = await fetchCached(BUCKET + '/schemas/' + encodeURIComponent(title) + '.json');
  const rec = {
    title,
    heTitle: '',
    categories: entry.he[0]?.categories || entry.en[0]?.categories || [],
    he: null,
    en: null,
    heV: null,
    enV: null,
  };
  await loadHebrew(entry, rec);
  const english = await pickEnglish(entry, rec.he);
  if (english) {
    rec.en = english.text;
    rec.enV = english.v;
    if (!rec.heTitle) rec.heTitle = english.heTitle;
  }
  if (!rec.he && !rec.en) return { skip: 'no text' };
  rec.addr =
    schema?.schema?.addressTypes?.[0] || (rec.categories.includes('Talmud') ? 'Talmud' : '');
  rec.outline = outlineOf(rec.he, rec.en, rec.addr === 'Talmud');
  let body = JSON.stringify(rec);
  if (body.length > 18e6 && rec.he && !Array.isArray(rec.he)) {
    splitIntoParts(rec, title);
    body = JSON.stringify(rec);
  }
  fs.writeFileSync(file, body);
  return {
    file: slug(title),
    bytes: body.length,
    he: !!rec.he || !!rec.hasHe,
    en: !!rec.en || !!rec.hasEn,
  };
}
const results = await pool(titles, buildBook);
const built = {};
let total = 0,
  noEn = 0;
const errs = [],
  skips = [];
results.forEach((r, i) => {
  if (r?.error) errs.push([titles[i], r.error]);
  else if (r?.skip) skips.push([titles[i], r.skip]);
  else {
    built[titles[i]] = r.file;
    total += r.bytes;
    if (!r.en) noEn++;
  }
});
// Status of every menu entry (and collection volume), so the UI and scripts/verify-library.mjs never have to guess.
const unavailable = {};
for (const t of queries) {
  const key = menuKey(t.cat, t.group, t.name),
    h = names[t.q];
  let reason = null;
  if (!h || h.missing) reason = 'not-in-dataset';
  else if (h.collection && !(DIR[key] || h.children || []).length) reason = 'no-volumes-in-dataset';
  else if (h.title && !built[h.title]) reason = 'no-text-in-dataset';
  if (reason) unavailable[key] = reason;
}
// Commentators available for each base text ("Rashi on Genesis" -> Genesis), for the reader's commentary panel.
const commentaries = {};
for (const t of Object.keys(built)) {
  const m = /^(.+?) on (.+)$/.exec(t);
  if (m && built[m[2]]) (commentaries[m[2]] = commentaries[m[2]] || []).push(t);
}
// Readable aliases: "genesis" -> the hashed file name, so the site can link to texts/b/genesis.json.
const aliases = {};
for (const f of Object.values(built)) {
  const a = f.replace(/-[0-9a-f]{6}$/, '');
  if (!aliases[a]) aliases[a] = f;
}
fs.writeFileSync(
  path.join(outDir, 'names.json'),
  JSON.stringify({
    generated: new Date().toISOString(),
    source: 'Sefaria-Export (open dataset)',
    names,
    books: built,
    unavailable,
    commentaries,
    aliases,
  })
);
console.log(
  'unavailable entries',
  Object.keys(unavailable).length,
  '| books with commentaries',
  Object.keys(commentaries).length
);
console.log(
  'books written',
  Object.keys(built).length,
  'size MB',
  (total / 1e6).toFixed(1),
  'without open English',
  noEn,
  'skips',
  skips.length,
  'errors',
  errs.length
);
if (skips.length) console.log('skips', skips.slice(0, 20));
if (errs.length) console.log('errors', errs.slice(0, 20));
