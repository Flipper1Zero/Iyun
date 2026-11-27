// Checks every file in annotations/ against the text the reader actually shows,
// so a ranges file can't drift out of sync with the words. CI runs this too.
// Run: node scripts/validate-annotations.mjs   (or npm run verify:annotations)
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const api = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'annotation-data.js'), 'utf8'), api);
// Berakhot's text is hand-built in daf-data.js; every other tractate is generated under texts/.
const handBuilt = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'daf-data.js'), 'utf8'), handBuilt);
const namesFile = path.join(root, 'texts/names.json');
const names = fs.existsSync(namesFile) ? JSON.parse(fs.readFileSync(namesFile)) : null;
const issues = [];
let dafCount = 0,
  words = 0;
for (const filename of fs
  .readdirSync(path.join(root, 'annotations'))
  .filter((name) => name.endsWith('.json') && name !== 'index.json')) {
  const doc = JSON.parse(fs.readFileSync(path.join(root, 'annotations', filename)));
  if (doc.schema !== 1 || !doc.dapim) {
    issues.push(filename + ': invalid document');
    continue;
  }
  let source;
  if (doc.tractate === 'Berakhot') source = handBuilt.window.IYUN_DAFS;
  else {
    const slug = names?.dafs?.[doc.tractate];
    const dataFile = slug && path.join(root, 'texts/daf', slug + '.json');
    if (!dataFile || !fs.existsSync(dataFile)) {
      issues.push(filename + ': missing built tractate text');
      continue;
    }
    source = JSON.parse(fs.readFileSync(dataFile)).dapim;
  }
  for (const [daf, annotation] of Object.entries(doc.dapim)) {
    const text = source.find((item) => item.dafEn === daf);
    if (!text) {
      issues.push(filename + ': missing daf ' + daf);
      continue;
    }
    const result = api.IYUN_ANNOTATION.validate(text, annotation);
    for (const error of result.errors) issues.push(filename + ' ' + daf + ': ' + error);
    if (!result.errors.length) {
      dafCount++;
      words += result.covered;
      console.log(
        `${doc.tractate} ${daf}: ${annotation.status}, ${annotation.ranges.length} ranges, ${result.covered}/${result.total} words`
      );
    }
  }
}
if (issues.length) {
  for (const issue of issues) console.error(issue);
  process.exitCode = 1;
} else console.log(`Annotation validation passed: ${dafCount} daf, ${words} words covered.`);
