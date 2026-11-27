// Sanity check to run after a build. Verifies the built library against the menu: every catalog title must open to real text,
// open to a collection whose volumes all resolve, or be explicitly marked unavailable. No menu entry should lead to a missing file.
// Usage: node scripts/verify-library.mjs [--base=https://orbitdodge.com]   (with --base it also HEAD-checks every file on that host)
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);
const textDir = path.join(root, 'texts'),
  fail = [],
  note = [];
const bad = (m) => fail.push(m);
if (!fs.existsSync(path.join(textDir, 'names.json'))) {
  console.error('texts/names.json is missing. Run: npm run build');
  process.exit(1);
}
const namesIndex = JSON.parse(fs.readFileSync(path.join(textDir, 'names.json'), 'utf8'));
const win = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'catalog.js'), 'utf8'), { window: win });
vm.runInNewContext(fs.readFileSync(path.join(root, 'catalog-directories.js'), 'utf8'), {
  window: win,
});
const lib = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'library.js'), 'utf8'), {
  window: lib,
  fetch: async () => {
    throw 0;
  },
});
const L = lib.IYUN_LIB,
  CAT = win.IYUN_CATALOG,
  DIR = win.IYUN_DIRECTORIES || {};
const cache = new Map();
function book(file) {
  if (!cache.has(file)) {
    const p = path.join(textDir, 'b', file + '.json');
    if (!fs.existsSync(p)) {
      cache.set(file, null);
    } else {
      try {
        cache.set(file, JSON.parse(fs.readFileSync(p, 'utf8')));
      } catch (e) {
        cache.set(file, { error: String(e.message) });
      }
    }
  }
  return cache.get(file);
}
const flat = (v, o = []) => {
  if (typeof v === 'string') {
    if (v) o.push(v);
  } else if (Array.isArray(v)) v.forEach((x) => flat(x, o));
  return o;
};
const at = (n, pk) => {
  for (const k of pk) {
    if (n == null) return;
    n = n[k];
  }
  return n;
};
function firstText(rec, item) {
  const side = (l) => {
    let r = rec[l];
    if (item.pk && rec.parts) {
      const pf = path.join(textDir, 'b', rec.parts[item.pk[0]] + '.json');
      if (!fs.existsSync(pf)) return null;
      r = JSON.parse(fs.readFileSync(pf, 'utf8'))[l];
    }
    if (r == null) return [];
    let n = item.all ? r : item.pk ? at(r, item.pk) : r;
    if (item.i != null) n = n?.[item.i];
    return flat(n);
  };
  return { he: side('he'), en: side('en') };
}
function resolve(cat, name) {
  const h = namesIndex.names[L.queryFor(cat, name)];
  if (h && !h.missing) return h;
  if (namesIndex.books[name]) return { title: name };
  return null;
}
const stat = { entries: 0, text: 0, collections: 0, markedUnavailable: 0, volumes: 0 };
function checkBook(label, title) {
  const f = namesIndex.books[title];
  if (!f) {
    bad(label + ' -> "' + title + '" has no built file');
    return false;
  }
  const rec = book(f);
  if (!rec || rec.error) {
    bad(label + ' -> ' + f + '.json ' + (rec?.error || 'missing'));
    return false;
  }
  if (!rec.outline?.length) {
    bad(label + ' -> empty outline');
    return false;
  }
  const t = firstText(rec, rec.outline[0]);
  if (!t || (!t.he.length && !t.en.length)) {
    bad(label + ' -> first section has no text');
    return false;
  }
  return true;
}
for (const [cat, groups] of Object.entries(CAT))
  for (const g of groups)
    for (const name of g.books) {
      stat.entries++;
      const key = cat + '|' + g.group + '|' + name,
        label = key;
      if (namesIndex.unavailable?.[key]) {
        stat.markedUnavailable++;
        continue;
      }
      const h = resolve(cat, name);
      if (!h) {
        bad(label + ' does not resolve and is not marked unavailable');
        continue;
      }
      if (h.collection) {
        const kids = DIR[key] || h.children || [];
        if (!kids.length) {
          bad(label + ' is an empty collection and is not marked unavailable');
          continue;
        }
        stat.collections++;
        for (const k of kids) {
          stat.volumes++;
          const ck = cat + '|' + g.group + '|' + k;
          if (namesIndex.unavailable?.[ck]) continue;
          const c = resolve(cat, k);
          if (!c) {
            bad(label + ' volume "' + k + '" does not resolve');
            continue;
          }
          if (c.title) checkBook(label + ' / ' + k, c.title);
        }
        continue;
      }
      if (checkBook(label, h.title)) stat.text++;
    }
// every built file exists, parses, and fits the CDN/R2 limits
let files = 0,
  big = [];
for (const [t, f] of Object.entries(namesIndex.books)) {
  files++;
  const p = path.join(textDir, 'b', f + '.json');
  if (!fs.existsSync(p)) {
    bad('missing file texts/b/' + f + '.json');
    continue;
  }
  const sz = fs.statSync(p).size;
  if (sz > 24 * 1048576) big.push(f);
  const rec = book(f);
  if (rec?.parts)
    for (const pn of new Set(Object.values(rec.parts))) {
      files++;
      if (!fs.existsSync(path.join(textDir, 'b', pn + '.json'))) bad('missing part ' + pn);
    }
}
if (big.length) bad('files over 24 MiB: ' + big.join(', '));
// daf reader data: every Bavli tractate in the menu must have it (Shekalim is the Yerushalmi text and opens in the book reader)
let dafs = 0;
for (const [t, f] of Object.entries(namesIndex.dafs || {})) {
  dafs++;
  const p = path.join(textDir, 'daf', f + '.json');
  if (!fs.existsSync(p)) {
    bad('missing daf file ' + f);
    continue;
  }
  try {
    const d = JSON.parse(fs.readFileSync(p, 'utf8'));
    if (!d.dapim?.length) bad('no dapim in ' + t);
  } catch (e) {
    bad('bad daf JSON ' + t);
  }
}
for (const g of CAT.Talmud)
  for (const name of g.books) {
    const h = resolve('Talmud', name);
    if (!h?.title) continue;
    if (name === 'Berakhot' || name === 'Brachot') continue;
    if (h.title === 'Jerusalem Talmud Shekalim') continue;
    if (!namesIndex.dafs?.[h.title])
      bad('Talmud/' + name + ' (' + h.title + ') has no daf-layout data');
  }
if (!fs.existsSync(path.join(textDir, 'calendar.json')))
  bad('texts/calendar.json is missing (npm run build:calendar)');
// commentary index points at built books
for (const [base, list] of Object.entries(namesIndex.commentaries || {}))
  for (const c of list) if (!namesIndex.books[c]) bad('commentary index: ' + c + ' is not built');
console.log(
  JSON.stringify({
    ...stat,
    builtBooks: files,
    dafTractates: dafs,
    unavailableListed: Object.keys(namesIndex.unavailable || {}).length,
    commentedBooks: Object.keys(namesIndex.commentaries || {}).length,
  })
);
// optional: HEAD every file on a deployed host
if (args.base) {
  const urls = [
    '/',
    '/index.html',
    '/gemara.html',
    '/book.html',
    '/about.html',
    '/texts/names.json',
    '/texts/calendar.json',
  ];
  for (const f of Object.values(namesIndex.books)) urls.push('/texts/b/' + f + '.json');
  for (const f of Object.values(namesIndex.dafs || {})) urls.push('/texts/daf/' + f + '.json');
  let i = 0,
    miss = [];
  await Promise.all(
    Array.from({ length: 8 }, async () => {
      while (i < urls.length) {
        const u = urls[i++];
        try {
          let st = 'ERR';
          for (let t = 0; t < 4; t++) {
            try {
              st = (await fetch(args.base + u, { method: 'HEAD' })).status;
            } catch {
              st = 'ERR';
            }
            if (st === 200) break;
            if (st === 404) break;
            await new Promise((r) => setTimeout(r, 400 * (t + 1)));
          }
          if (st !== 200) miss.push(st + ' ' + u);
        } catch {
          miss.push('ERR ' + u);
        }
      }
    })
  );
  console.log('deployed host', args.base, 'checked', urls.length, 'missing', miss.length);
  if (miss.length) bad('deployed host is missing: ' + miss.slice(0, 10).join(', '));
}
if (fail.length) {
  console.error('\nFAILED (' + fail.length + ')');
  for (const m of fail.slice(0, 40)) console.error(' -', m);
  process.exit(1);
}
console.log('OK: every catalog title opens, or is clearly marked unavailable.');
