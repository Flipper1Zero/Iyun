// Takes a short drafted daf, builds a full annotation record from it and imports it
// through import-annotation.mjs, which does the validation. The record is always saved
// as a draft; a person has to review it before it counts.
// Input: {"tractate":"Yoma","daf":"77a","ranges":[["g0","g39","statement","short English explanation"], ...]}
// Run: node scripts/annotation-submit.mjs file.json
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import os from 'node:os';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const inputFile = process.argv[2];
if (!inputFile) throw Error('Pass the drafted JSON file.');
const input = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
// The batch script already computes the text hash and word keys for every daf, so reuse it
// rather than duplicate that logic here.
const batchData = JSON.parse(
  execFileSync(
    process.execPath,
    [
      'scripts/annotation-batch-data.mjs',
      '--tractate=' + input.tractate,
      '--start=0',
      '--limit=100000',
    ],
    { cwd: root, encoding: 'utf8', maxBuffer: 1e9 }
  )
);
const missingDaf = batchData.batch.find((item) => item.daf === input.daf);
if (!missingDaf)
  throw Error(
    input.tractate + ' ' + input.daf + ' is not a missing daf (already annotated, or unknown).'
  );
const record = {
  version: 1,
  status: 'draft',
  source: 'Machine-assisted draft of the Vilna text; awaiting editorial review',
  textHash: missingDaf.hash,
  ranges: input.ranges.map(([start, end, cat, en]) => ({
    cat,
    start,
    end,
    en: String(en || '').slice(0, 240),
  })),
};
// The importer reads a file, so hand it a temp one and delete it afterwards.
const tmp = path.join(os.tmpdir(), 'annotation-submit-' + process.pid + '.json');
fs.writeFileSync(
  tmp,
  JSON.stringify({ schema: 1, tractate: input.tractate, dapim: { [input.daf]: record } })
);
try {
  console.log(
    execFileSync(process.execPath, ['scripts/import-annotation.mjs', tmp], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim()
  );
} catch (e) {
  console.error(
    String(e.stderr || e.message)
      .trim()
      .split('\n')
      .slice(0, 6)
      .join('\n')
  );
  process.exitCode = 1;
}
fs.rmSync(tmp, { force: true });
