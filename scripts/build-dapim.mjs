// Builds texts/daf/<slug>.json: data for the Vilna-style daf reader (Gemara, Rashi, Tosafot and
// matching English) for every Bavli tractate, and records the files in texts/names.json.
// Run `npm run build:texts` first, since this reuses its Rashi, Tosafot and English book files.
// Gemara Hebrew: "Wikisource Talmud Bavli" (Vilna text, CC-BY-SA) from the open Sefaria-Export dataset.
// Rashi/Tosafot: "Vilna Edition" (public domain). English: the version build-texts picked.
// Usage: node scripts/build-dapim.mjs [--only=Shabbat,Eruvin]
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  })
);
const only = args.only ? String(args.only).split(',') : null;
const cacheDir = path.join(root, '.cache'),
  outDir = path.join(root, 'texts', 'daf');
fs.mkdirSync(outDir, { recursive: true });
const names = JSON.parse(fs.readFileSync(path.join(root, 'texts', 'names.json'), 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Same download cache as build-texts.mjs, so a Gemara file fetched there is not downloaded twice.
// Returns null on a 404.
async function fetchCached(url) {
  const key = path.join(cacheDir, crypto.createHash('sha1').update(url).digest('hex'));
  if (fs.existsSync(key)) return JSON.parse(fs.readFileSync(key, 'utf8'));
  for (let i = 0; i < 5; i++) {
    try {
      const r = await fetch(url);
      if (r.status === 404) return null;
      if (!r.ok) throw Error('HTTP ' + r.status);
      const b = await r.text();
      fs.writeFileSync(key, b);
      return JSON.parse(b);
    } catch (e) {
      if (i === 4) throw e;
      await sleep(800 * (i + 1));
    }
  }
}
// build-texts.mjs already downloaded the dataset index into the cache; read it from there.
const INDEX_URL = 'https://raw.githubusercontent.com/Sefaria/Sefaria-Export/master/books.json';
const indexRaw = fs.readFileSync(
  path.join(cacheDir, crypto.createHash('sha1').update(INDEX_URL).digest('hex')),
  'utf8'
);
const books = JSON.parse(indexRaw).books;
// Must match slug() in build-texts.mjs, since it names the files that script wrote.
const slug = (t) =>
  t
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') +
  '-' +
  crypto.createHash('sha1').update(t).digest('hex').slice(0, 6);
// A book file written by build-texts.mjs, or null if that title was not built.
const readBook = (t) =>
  names.books[t]
    ? JSON.parse(fs.readFileSync(path.join(root, 'texts', 'b', names.books[t] + '.json'), 'utf8'))
    : null;
// Letter values for gematria, largest first.
const GEMATRIA_LETTERS = [
  ['ת', 400],
  ['ש', 300],
  ['ר', 200],
  ['ק', 100],
  ['צ', 90],
  ['פ', 80],
  ['ע', 70],
  ['ס', 60],
  ['נ', 50],
  ['מ', 40],
  ['ל', 30],
  ['כ', 20],
  ['י', 10],
  ['ט', 9],
  ['ח', 8],
  ['ז', 7],
  ['ו', 6],
  ['ה', 5],
  ['ד', 4],
  ['ג', 3],
  ['ב', 2],
  ['א', 1],
];
// Hebrew numeral for n, with 15 and 16 written as טו and טז (not the divine-name spellings).
function gematria(n) {
  let s = '';
  for (const [l, v] of GEMATRIA_LETTERS)
    while (n >= v) {
      s += l;
      n -= v;
    }
  return s.replace('יה', 'טו').replace('יו', 'טז');
}
// Ordinal words for chapter names ("פרק ראשון"). Past 30 chapters falls back to a gematria number.
const ORDINALS = [
  '',
  'ראשון',
  'שני',
  'שלישי',
  'רביעי',
  'חמישי',
  'ששי',
  'שביעי',
  'שמיני',
  'תשיעי',
  'עשירי',
  'אחד עשר',
  'שנים עשר',
  'שלשה עשר',
  'ארבעה עשר',
  'חמשה עשר',
  'ששה עשר',
  'שבעה עשר',
  'שמונה עשר',
  'תשעה עשר',
  'עשרים',
  'אחד ועשרים',
  'שנים ועשרים',
  'שלשה ועשרים',
  'ארבעה ועשרים',
  'חמשה ועשרים',
  'ששה ועשרים',
  'שבעה ועשרים',
  'שמונה ועשרים',
  'תשעה ועשרים',
  'שלשים',
];
const perekName = (n) => ORDINALS[n] || '"' + gematria(n) + '"';
function entities(s) {
  return s
    .replace(/&nbsp;|&thinsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));
}
const clean = (s) =>
  entities(String(s || '').replace(/<[^>]+>/g, ''))
    .replace(/\s+/g, ' ')
    .trim();
// Splits "opening words - comment" into { dh, text }. The text keeps its leading dash
// (the Berakhot data does the same) so the reader can show it right after the bold opening words.
function splitComment(s) {
  s = String(s || '').trim();
  if (!s) return null;
  const m = /^(.{1,200}?)\s+[-–]\s+([\s\S]*)$/.exec(s);
  if (m) return { dh: m[1].trim(), text: ' — ' + m[2].trim() };
  return { dh: '', text: ' ' + s };
}
const credit = (v) =>
  v
    ? v.title + ' · ' + (v.license || 'license not stated') + (v.nc ? ' (non-commercial)' : '')
    : null;
const tractates = new Map(); // Sefaria title -> menu name
const catalog = (() => {
  const w = {};
  new Function('window', fs.readFileSync(path.join(root, 'catalog.js'), 'utf8'))(w);
  return w.IYUN_CATALOG;
})();
for (const g of catalog.Talmud)
  for (const n of g.books) {
    const h = names.names[n];
    const t = h?.title || n;
    tractates.set(t, n);
  }
tractates.set('Tamid', 'Tamid'); // not in the menu; referenced by the Daf Yomi calendar
// Big bold text in the Wikisource Gemara marks section labels (מתני׳ / גמ׳ / הדרן) as well as a
// chapter's opening word. Returns that opening word, or null when the segment has none.
function chapterOpening(raw) {
  for (const m of raw.matchAll(/<big>\s*<strong>([^<]+)<\/strong>\s*<\/big>/g)) {
    const w = clean(m[1]);
    const hebrewOnly = w.replace(/[^א-ת]/g, '');
    if (hebrewOnly && !/^(מתני|מתניתין|גמ|הדרן)/.test(hebrewOnly)) return w;
  }
  return null;
}
// Sorts one daf's segments into Mishnah and Gemara text. Only the Mishnah at the very top of a
// daf, before any Gemara, is kept apart; a later "מתני׳" inside the Gemara stays with it.
function splitMishnahAndGemara(segs) {
  let opening = '',
    mish = [],
    gm = [],
    mode = 'g',
    sawGemara = false;
  for (const raw of segs) {
    const mark = chapterOpening(raw);
    if (mark && !opening) opening = mark;
    let s = clean(raw);
    const isMishnah = /^(מתני[׳']|מתניתין)(\s|$)/.test(s),
      isGemara = /^גמ[׳'](\s|$)/.test(s);
    if (isMishnah) {
      if (!sawGemara && gm.length === 0) {
        mode = 'm';
        s = s.replace(/^(מתני[׳']|מתניתין)\s*/, '');
      } else mode = 'g';
    }
    if (isGemara) {
      mode = 'g';
      sawGemara = true;
      s = s.replace(/^גמ[׳']\s*/, '');
    }
    if (!s) continue;
    (mode === 'm' ? mish : gm).push(s);
    if (mode === 'g') sawGemara = true;
  }
  return { opening, mish, gm };
}
// Rashi and Tosafot are [daf][gemara line][comment]. Flattens one daf in order, and attaches the
// English at the same position when there is some.
function dafComments(hebrew, english, dafIndex, englishVersion) {
  const lines = hebrew?.[dafIndex] || [],
    englishLines = english?.[dafIndex] || [],
    result = [],
    creditLine = credit(englishVersion);
  lines.forEach((line, j) => {
    const comments = Array.isArray(line) ? line : [line],
      englishComments = Array.isArray(englishLines[j])
        ? englishLines[j]
        : typeof englishLines[j] === 'string'
          ? [englishLines[j]]
          : [];
    comments.forEach((str, k) => {
      const c = splitComment(typeof str === 'string' ? str : '');
      if (!c) return;
      const t = englishComments[k];
      if (typeof t === 'string' && t.trim()) {
        c.en = clean(t);
        if (creditLine) c.enCredit = creditLine;
      }
      result.push(c);
    });
  });
  return result;
}
// English strip under the page: each line of the English Gemara, with its Hebrew so the reader
// can find the matching words on the page.
function dafTranslations(hebrew, english, dafIndex, englishVersion) {
  const heLines = hebrew?.[dafIndex],
    enLines = english?.[dafIndex],
    translations = [];
  if (!Array.isArray(enLines) || !Array.isArray(heLines)) return translations;
  const creditLine = credit(englishVersion);
  for (let k = 0; k < enLines.length; k++) {
    const en = clean(enLines[k]);
    if (!en) continue;
    const t = { label: 'GEMARA', en, he: clean(heLines[k] || '') };
    if (creditLine) t.credit = creditLine;
    translations.push(t);
  }
  return translations;
}
const result = {};
let totalDapim = 0,
  totalBytes = 0;
for (const [title, menuName] of tractates) {
  if (title === 'Berakhot' || /^Jerusalem Talmud|^Mishnah /.test(title)) continue; // Berakhot ships with the hand-built reader
  if (only && !only.includes(title)) continue;
  const hebrewEntry = books.find(
    (b) =>
      b.title === title &&
      b.language === 'Hebrew' &&
      b.versionTitle === 'Wikisource Talmud Bavli' &&
      b.categories.includes('Bavli')
  );
  if (!hebrewEntry) {
    console.log('skip', title, '(no Vilna Gemara text)');
    continue;
  }
  const gemaraFile = await fetchCached(hebrewEntry.json_url);
  if (!gemaraFile) {
    console.log('skip', title, '(download failed)');
    continue;
  }
  const heName = gemaraFile.heTitle || title,
    gemaraText = gemaraFile.text;
  const main = readBook(title),
    rashiBook = readBook('Rashi on ' + title),
    tosBook = readBook('Tosafot on ' + title);
  // The printed page uses Rashbam where Rashi's commentary ends (Pesachim 99b on, Bava Batra 29a on).
  const rashbamBook = readBook('Rashbam on ' + title);
  const dapim = [];
  let perek = 0,
    running = heName;
  // Sefaria's Talmud arrays start at 1a, but this text's first two slots are the title page.
  for (let i = 2; i < gemaraText.length; i++) {
    const segs = (gemaraText[i] || []).filter((s) => clean(s));
    if (!segs.length) continue;
    const label = Math.floor(i / 2) + 1,
      amud = i % 2 ? 'b' : 'a',
      dafEn = label + amud;
    const { opening: firstWord, mish, gm } = splitMishnahAndGemara(segs);
    if (firstWord) {
      perek++;
      running = firstWord + ' פרק ' + perekName(perek) + ' ' + heName;
    }
    const translations = dafTranslations(main?.he, main?.en, i, main?.enV);
    let rashiList = dafComments(rashiBook?.he, rashiBook?.en, i, rashiBook?.enV),
      rashiName = '';
    if (!rashiList.length && rashbamBook) {
      const rashbam = dafComments(rashbamBook.he, rashbamBook.en, i, rashbamBook.enV);
      if (rashbam.length) {
        rashiList = rashbam;
        rashiName = 'RASHBAM';
      }
    }
    dapim.push({
      id: slug(title) + ':' + dafEn,
      masechet: heName,
      masechetEn: title,
      daf: gematria(label),
      amud: amud === 'a' ? 'א' : 'ב',
      dafEn,
      perekFirstWord: firstWord,
      runningHead: perek ? running : heName,
      mishnah: mish.join(' '),
      gemara: gm.join(' '),
      rashi: rashiList,
      ...(rashiName ? { rashiName } : {}),
      tosafot: dafComments(tosBook?.he, tosBook?.en, i, tosBook?.enV),
      translations,
    });
  }
  const doc = {
    tractate: title,
    menuName,
    heName,
    sources: {
      gemara:
        'Vilna Talmud (public domain), digitized on Hebrew Wikisource (CC-BY-SA), via the open Sefaria-Export dataset',
      rashi: rashiBook
        ? 'Rashi' +
          (rashbamBook ? ' (and Rashbam where Rashi ends)' : '') +
          ', Vilna edition (public domain)'
        : null,
      tosafot: tosBook ? 'Tosafot, Vilna edition (public domain)' : null,
      english: main?.enV ? credit(main.enV) : null,
    },
    dapim,
  };
  const file = path.join(outDir, slug(title) + '.json');
  fs.writeFileSync(file, JSON.stringify(doc));
  result[title] = {
    file: slug(title),
    dapim: dapim.length,
    rashi: !!rashiBook,
    tosafot: !!tosBook,
    english: !!doc.sources.english,
    chapters: perek,
  };
  totalDapim += dapim.length;
  totalBytes += fs.statSync(file).size;
}
const namesPath = path.join(root, 'texts', 'names.json');
names.dafs = Object.assign(
  names.dafs || {},
  Object.fromEntries(Object.entries(result).map(([t, r]) => [t, r.file]))
);
fs.writeFileSync(namesPath, JSON.stringify(names));
console.log(
  'tractates',
  Object.keys(result).length,
  'dapim',
  totalDapim,
  'MB',
  (totalBytes / 1e6).toFixed(1)
);
console.table(
  Object.entries(result)
    .map(([t, r]) => ({ t, ...r }))
    .slice(0, 40)
);
