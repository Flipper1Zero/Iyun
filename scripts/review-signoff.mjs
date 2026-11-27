// Marks a drafted daf as reviewed, recording who reviewed it and when.
// Run: node scripts/review-signoff.mjs signoff.json
// where the file looks like {"tractate":"Yoma","daf":"77a","reviewer":"Name","reviewedAt":"2026-11-24"}
// It refuses if the daf isn't a draft, the reviewer name is missing, or the text no longer
// matches the draft. A sign-off means a person really checked the ranges and explanations,
// so only run it for your own review.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const signoffFile = process.argv[2];
if (!signoffFile) throw Error('Pass a sign-off JSON file.');
const signoff = JSON.parse(fs.readFileSync(signoffFile, 'utf8'));
const reviewer = String(signoff.reviewer || '').trim(),
  date = signoff.reviewedAt || new Date().toISOString().slice(0, 10);
if (reviewer.length < 2) throw Error('A reviewer name is required.');
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw Error('reviewedAt must be YYYY-MM-DD.');
const api = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'annotation-data.js'), 'utf8'), api);
// Berakhot's text is hand-built; every other tractate comes from the generated files.
let dapim, slug;
if (signoff.tractate === 'Berakhot') {
  const handBuilt = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'daf-data.js'), 'utf8'), handBuilt);
  dapim = handBuilt.window.IYUN_DAFS;
  slug = 'berakhot';
} else {
  const names = JSON.parse(fs.readFileSync(path.join(root, 'texts/names.json'), 'utf8'));
  slug = names.dafs && names.dafs[signoff.tractate];
  if (!slug) throw Error('Unknown tractate: ' + signoff.tractate);
  dapim = JSON.parse(fs.readFileSync(path.join(root, 'texts/daf', slug + '.json'), 'utf8')).dapim;
}
const annotationFile = path.join(root, 'annotations', slug + '.json'),
  data = JSON.parse(fs.readFileSync(annotationFile, 'utf8')),
  record = data.dapim[signoff.daf];
if (!record) throw Error('No annotation for ' + signoff.tractate + ' ' + signoff.daf);
if (record.status !== 'draft')
  throw Error(signoff.tractate + ' ' + signoff.daf + ' is "' + record.status + '", not a draft.');
const text = dapim.find((item) => item.dafEn === signoff.daf);
if (!text) throw Error('Unknown daf ' + signoff.daf);
record.status = 'reviewed';
record.reviewer = reviewer;
record.reviewedAt = date;
record.version = (record.version || 1) + 1;
// Validate after the status change so a stale text hash is caught before we write.
const check = api.IYUN_ANNOTATION.validate(text, record);
if (check.errors.length) throw Error('Cannot sign off: ' + check.errors.join('; '));
fs.writeFileSync(annotationFile + '.tmp', JSON.stringify(data, null, 2) + '\n');
fs.renameSync(annotationFile + '.tmp', annotationFile);
console.log('Signed off', signoff.tractate, signoff.daf, 'by', reviewer, date);
