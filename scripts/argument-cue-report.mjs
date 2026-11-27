// Reports how many of the English argument cues (the lines that open a question,
// answer, objection and so on) can be matched to words in the Hebrew text.
// Run: npm run annotations:cues [-- --tractate=Shabbat]
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')));
const names = JSON.parse(fs.readFileSync(path.join(root, 'texts/names.json')));
const api = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'argument-cues.js'), 'utf8'), api);
const cues = api.IYUN_ARGUMENT_CUES;
const counts = {
  pages: 0,
  pagesWithCues: 0,
  lines: 0,
  openingCues: 0,
  alignedCues: 0,
  byRole: {},
  hebrewCuePages: 0,
  hebrewCueWords: 0,
};
function countHebrew(daf) {
  const words = ((daf.mishnah || '') + ' ' + (daf.gemara || ''))
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const marks = cues.hebrewMarkers(words.map((h, i) => ({ h, key: String(i) })));
  const marked = Object.keys(marks).length;
  counts.hebrewCueWords += marked;
  if (marked) counts.hebrewCuePages++;
}
for (const [tractate, slug] of Object.entries(names.dafs || {})) {
  if (args.tractate && tractate !== args.tractate) continue;
  const doc = JSON.parse(fs.readFileSync(path.join(root, 'texts/daf', slug + '.json')));
  for (const daf of doc.dapim) {
    countHebrew(daf);
    const words = ((daf.mishnah || '') + ' ' + (daf.gemara || ''))
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    const aligned = cues.align(
      words.map((h) => ({ h })),
      daf.translations || []
    );
    let found = 0;
    (daf.translations || []).forEach((segment, i) => {
      counts.lines++;
      const role = cues.classify(segment.en);
      if (!role) return;
      counts.openingCues++;
      // Below 0.8 the match is a guess, so don't count it.
      if (!aligned[i].range || aligned[i].score < 0.8) return;
      found++;
      counts.alignedCues++;
      counts.byRole[role] = (counts.byRole[role] || 0) + 1;
    });
    counts.pages++;
    if (found) counts.pagesWithCues++;
  }
}
// Berakhot lives in the hand-built daf-data.js, so it only gets the Hebrew marker count.
if (!args.tractate || args.tractate === 'Berakhot') {
  const built = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'daf-data.js'), 'utf8'), built);
  for (const daf of built.window.IYUN_DAFS) countHebrew(daf);
}
console.log(JSON.stringify(counts, null, 2));
