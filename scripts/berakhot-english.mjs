// Helper for the review scripts, not run directly. Berakhot's hand-built daf data can lack English, so this fills it
// from the public-domain text in the built library, the same way the browser does.
import fs from 'node:fs';
import path from 'node:path';

export function fillBerakhotEnglish(root, names, dapim) {
  const slug = names?.books?.Berakhot;
  const file = slug && path.join(root, 'texts/b', slug + '.json');
  if (!file || !fs.existsSync(file)) return;
  const book = JSON.parse(fs.readFileSync(file));
  if (!Array.isArray(book.en) || !Array.isArray(book.he)) return;
  for (const daf of dapim) {
    if (daf.translations?.length) continue;
    const match = /^(\d+)([ab])$/.exec(daf.dafEn);
    if (!match) continue;
    const index = (+match[1] - 1) * 2 + (match[2] === 'b' ? 1 : 0);
    const english = book.en[index],
      hebrew = book.he[index];
    if (!Array.isArray(english) || !Array.isArray(hebrew)) continue;
    daf.translations = english
      .map((line, i) => ({
        label: 'GEMARA',
        en: String(line || ''),
        he: String(hebrew[i] || ''),
        credit: book.enV?.title + ' · ' + (book.enV?.license || 'license not stated'),
      }))
      .filter((line) => line.en.trim());
  }
}
