// Writes annotations/index.json: review progress per tractate and per daf, for review.html. Needs the built library.
// Run: node scripts/build-annotation-index.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rows = JSON.parse(
  execFileSync(process.execPath, ['scripts/annotation-worklist.mjs', '--all=1', '--list=1'], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 1e9,
  })
).dapim;
const names = JSON.parse(fs.readFileSync(path.join(root, 'texts', 'names.json'), 'utf8'));
// One letter per daf in the compact list: r(eviewed), d(raft), m(issing).
const statusCode = { reviewed: 'r', draft: 'd', missing: 'm' };
const byTractate = {};
for (const row of rows) {
  byTractate[row.tractate] ||
    (byTractate[row.tractate] = { reviewed: 0, draft: 0, missing: 0, dapim: [] });
  const entry = byTractate[row.tractate];
  entry[row.status]++;
  entry.dapim.push([row.daf, statusCode[row.status]]);
}
const total = { reviewed: 0, draft: 0, missing: 0 };
const tractates = Object.entries(byTractate).map(([name, entry]) => {
  total.reviewed += entry.reviewed;
  total.draft += entry.draft;
  total.missing += entry.missing;
  return {
    name,
    slug: name === 'Berakhot' ? 'berakhot' : names.dafs[name] || '',
    reviewed: entry.reviewed,
    draft: entry.draft,
    missing: entry.missing,
    dapim: entry.dapim.map(([daf, code]) => daf + ':' + code).join(' '),
  };
});
fs.writeFileSync(
  path.join(root, 'annotations', 'index.json'),
  JSON.stringify({ total, tractates })
);
console.log('annotations/index.json', JSON.stringify(total), tractates.length, 'tractates');
