// Shows how many dapim are missing, drafted or reviewed. With --daf it prints that
// daf's words with their keys, for hand annotation.
// Run: node scripts/annotation-worklist.mjs [--tractate=Berakhot] [--daf=2b] [--list=1]
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { fillBerakhotEnglish } from './berakhot-english.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => arg.replace(/^--/, '').split('='))
);
const api = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'annotation-data.js'), 'utf8'), api);
const handBuilt = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'daf-data.js'), 'utf8'), handBuilt);
const namesFile = path.join(root, 'texts/names.json');
const names = fs.existsSync(namesFile) ? JSON.parse(fs.readFileSync(namesFile)) : null;
if (names) fillBerakhotEnglish(root, names, handBuilt.window.IYUN_DAFS);
const tractates = args.tractate ? [args.tractate] : ['Berakhot', ...Object.keys(names?.dafs || {})];
if (!tractates.length) throw Error('Build the text library first: npm run build');
const rows = [];
for (const tractate of tractates) {
  let dapim;
  if (tractate === 'Berakhot') dapim = handBuilt.window.IYUN_DAFS;
  else {
    const slug = names?.dafs?.[tractate];
    if (!slug) throw Error('Unknown or unbuilt tractate: ' + tractate);
    dapim = JSON.parse(fs.readFileSync(path.join(root, 'texts/daf', slug + '.json'))).dapim;
  }
  const annotationFile = path.join(
    root,
    'annotations',
    tractate === 'Berakhot' ? 'berakhot.json' : names.dafs[tractate] + '.json'
  );
  const annotations = fs.existsSync(annotationFile)
    ? JSON.parse(fs.readFileSync(annotationFile)).dapim
    : {};
  for (const daf of dapim) {
    if (args.daf && daf.dafEn !== args.daf) continue;
    // Must split words exactly as annotation-batch-data.mjs does, or the keys shown here
    // would not match the ones the reader uses.
    const tokens = [];
    const keys = api.IYUN_ANNOTATION.tokenKeys(daf);
    let mishnah = (daf.mishnah || '').trim().split(/\s+/).filter(Boolean);
    const first = (daf.perekFirstWord || '').replace(/[֑-ׇ]/g, '');
    if (
      first &&
      mishnah.length &&
      mishnah[0].replace(/[֑-ׇ]/g, '').replace(/[.?,:]/g, '') === first
    )
      mishnah = mishnah.slice(1);
    const words = mishnah.concat((daf.gemara || '').trim().split(/\s+/).filter(Boolean));
    keys.forEach((key, i) => tokens.push({ key, word: words[i] }));
    rows.push({
      tractate,
      daf: daf.dafEn,
      status: annotations?.[daf.dafEn]?.status || 'missing',
      hash: api.IYUN_ANNOTATION.textHash(daf),
      words: keys.length,
      ...(args.daf ? { tokens, translations: daf.translations || [] } : {}),
    });
  }
}
if (args.daf) console.log(JSON.stringify(rows, null, 2));
else {
  const status = rows.reduce(
    (counts, row) => ((counts[row.status] = (counts[row.status] || 0) + 1), counts),
    {}
  );
  console.log(
    JSON.stringify({ total: rows.length, status, ...(args.list ? { dapim: rows } : {}) }, null, 2)
  );
}
