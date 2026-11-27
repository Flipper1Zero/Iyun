// Writes texts/titles.json: { "<menu name>": "<Hebrew title without vowels>" } so the home search can find books by Hebrew name.
// Only the title fields of each built book are read. Run it after `npm run build:texts`: node scripts/build-titles.mjs
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'),
  texts = path.join(root, 'texts');
const names = JSON.parse(fs.readFileSync(path.join(texts, 'names.json'), 'utf8'));
const strip = (s) =>
  String(s || '')
    .replace(/[֑-ׇ]/g, '')
    .trim();
const out = {},
  cache = {};
let matched = 0;
for (const [menu, info] of Object.entries(names.names || {})) {
  const title = info && info.title;
  if (!title) continue;
  const slug = names.books && names.books[title];
  if (!slug) continue;
  if (!(slug in cache)) {
    try {
      const j = JSON.parse(fs.readFileSync(path.join(texts, 'b', slug + '.json'), 'utf8'));
      cache[slug] = strip(j.heTitle);
    } catch {
      cache[slug] = '';
    }
  }
  if (cache[slug]) {
    out[menu] = cache[slug];
    matched++;
  }
}
fs.writeFileSync(path.join(texts, 'titles.json'), JSON.stringify(out));
console.log(
  'titles.json:',
  matched,
  'Hebrew titles for',
  Object.keys(names.names || {}).length,
  'menu names'
);
