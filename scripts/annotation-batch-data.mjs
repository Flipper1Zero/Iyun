// Prints JSON for a few dapim that still have no annotation: numbered Hebrew words,
// the English lines and where each seems to sit in the Hebrew. It is the input the
// drafting step works from.
// Run: node scripts/annotation-batch-data.mjs --tractate=Berakhot --start=0 --limit=5
//      node scripts/annotation-batch-data.mjs --tractate=Yoma --next=3   (next 3 with no annotation)
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { fillBerakhotEnglish } from './berakhot-english.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => arg.replace(/^--/, '').split('='))
);
const tractate = args.tractate || 'Berakhot';
const names = JSON.parse(fs.readFileSync(path.join(root, 'texts/names.json')));
const api = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'annotation-data.js'), 'utf8'), api);
vm.runInNewContext(fs.readFileSync(path.join(root, 'argument-cues.js'), 'utf8'), api);
const slug = tractate === 'Berakhot' ? 'berakhot' : names.dafs?.[tractate];
if (!slug) throw Error('Unknown tractate: ' + tractate);
let dapim;
if (tractate === 'Berakhot') {
  const built = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'daf-data.js'), 'utf8'), built);
  dapim = built.window.IYUN_DAFS;
  fillBerakhotEnglish(root, names, dapim);
} else dapim = JSON.parse(fs.readFileSync(path.join(root, 'texts/daf', slug + '.json'))).dapim;
const file = path.join(root, 'annotations', slug + '.json');
const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)).dapim : {};
const start = +(args.start || 0),
  limit = +(args.limit || 5);
const batch = [];
const nextN = args.next ? +args.next : 0;
for (let i = start; i < (nextN ? dapim.length : Math.min(dapim.length, start + limit)); i++) {
  if (nextN && batch.length >= nextN) break;
  const daf = dapim[i];
  if (existing?.[daf.dafEn]) continue;
  // The perek's opening word is shown as a heading, so the reader's word keys skip it.
  // Drop it here too or the indexes won't line up.
  let mishnah = (daf.mishnah || '').trim().split(/\s+/).filter(Boolean);
  const first = (daf.perekFirstWord || '').replace(/[֑-ׇ]/g, '');
  if (first && mishnah.length && mishnah[0].replace(/[֑-ׇ]/g, '').replace(/[.?,:]/g, '') === first)
    mishnah = mishnah.slice(1);
  const words = mishnah.concat((daf.gemara || '').trim().split(/\s+/).filter(Boolean));
  const keys = api.IYUN_ANNOTATION.tokenKeys(daf);
  // This should never fire. If it does, the word splitting here and in the reader have drifted apart.
  if (keys.length !== words.length) throw Error('Token mismatch: ' + daf.id);
  const translations = daf.translations || [];
  const aligned = api.IYUN_ARGUMENT_CUES.align(
    words.map((h) => ({ h })),
    translations
  );
  batch.push({
    tractate,
    daf: daf.dafEn,
    id: daf.id,
    index: i,
    hash: api.IYUN_ANNOTATION.textHash(daf),
    tokens: keys.map((key, j) => [key, words[j]]),
    translations: translations.map((t, j) => ({
      hebrew: t.he || '',
      english: t.en || '',
      span: aligned[j].range,
      alignment: +aligned[j].score.toFixed(3),
      openingCue: api.IYUN_ARGUMENT_CUES.classify(t.en),
    })),
  });
}
console.log(
  JSON.stringify({
    tractate,
    start,
    next: nextN
      ? batch.length
        ? batch[batch.length - 1].index + 1
        : dapim.length
      : Math.min(dapim.length, start + limit),
    total: dapim.length,
    batch,
  })
);
