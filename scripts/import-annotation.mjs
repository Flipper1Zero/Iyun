// Merges an annotation draft exported from the reader into annotations/<tractate>.json.
// Every daf is validated against the real text first, and nothing is written if any fail.
// Run: node scripts/import-annotation.mjs ~/Downloads/shakla-2b-draft.json [--check]
// (--check validates and reports without writing)
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = process.argv[2];
if (!input) throw Error('Pass a reader-exported annotation JSON file.');
const update = JSON.parse(fs.readFileSync(input));
if (update.schema !== 1 || !update.tractate || !update.dapim)
  throw Error('Invalid annotation export.');
const api = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'annotation-data.js'), 'utf8'), api);
// Berakhot's text is hand-built; every other tractate comes from the generated files.
let dapim, slug;
if (update.tractate === 'Berakhot') {
  const built = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'daf-data.js'), 'utf8'), built);
  dapim = built.window.IYUN_DAFS;
  slug = 'berakhot';
} else {
  const names = JSON.parse(fs.readFileSync(path.join(root, 'texts/names.json')));
  slug = names.dafs?.[update.tractate];
  if (!slug) throw Error('Build the tractate text first: ' + update.tractate);
  dapim = JSON.parse(fs.readFileSync(path.join(root, 'texts/daf', slug + '.json'))).dapim;
}
const output = path.join(root, 'annotations', slug + '.json');
const current = fs.existsSync(output)
  ? JSON.parse(fs.readFileSync(output))
  : { schema: 1, tractate: update.tractate, dapim: {} };
for (const [daf, record] of Object.entries(update.dapim)) {
  const text = dapim.find((item) => item.dafEn === daf);
  if (!text) throw Error('Unknown daf: ' + update.tractate + ' ' + daf);
  const check = api.IYUN_ANNOTATION.validate(text, record);
  if (check.errors.length) throw Error('Invalid ' + daf + ': ' + check.errors.join('; '));
  const old = current.dapim[daf];
  // Reviewed work belongs to a human; a re-import must not silently replace it.
  if (old?.status === 'reviewed') throw Error('Refusing to overwrite a reviewed daf: ' + daf);
  if (old && record.version <= old.version)
    throw Error('Version must exceed the current draft version ' + old.version + ': ' + daf);
}
Object.assign(current.dapim, update.dapim);
if (process.argv.includes('--check')) {
  console.log('Valid import:', Object.keys(update.dapim).join(', '), '->', output);
  process.exit(0);
}
fs.mkdirSync(path.dirname(output), { recursive: true });
// Write to a temp file and rename so a crash can't leave half a JSON file behind.
const temporary = output + '.tmp';
fs.writeFileSync(temporary, JSON.stringify(current, null, 2) + '\n');
fs.renameSync(temporary, output);
console.log('Imported', Object.keys(update.dapim).join(', '), 'into', output);
