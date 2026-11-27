// Plain-text view of the next unannotated dapim: Hebrew words with their keys, then
// the English lines with the Hebrew span each one seems to cover.
// Run: node scripts/annotation-view.mjs --tractate=Yoma [--next=1]
import { execFileSync } from 'node:child_process';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')));
const batchData = JSON.parse(
  execFileSync(
    process.execPath,
    [
      'scripts/annotation-batch-data.mjs',
      '--tractate=' + args.tractate,
      '--next=' + (args.next || 1),
    ],
    { cwd: root, encoding: 'utf8', maxBuffer: 1e8 }
  )
);
if (!batchData.batch.length) {
  console.log('NO MISSING DAPIM in ' + args.tractate);
  process.exit(0);
}
for (const daf of batchData.batch) {
  console.log(
    '=== ' +
      daf.tractate +
      ' ' +
      daf.daf +
      '  (' +
      daf.tokens.length +
      ' words; keys ' +
      daf.tokens[0][0] +
      '..' +
      daf.tokens[daf.tokens.length - 1][0] +
      ')'
  );
  console.log('HEBREW (key:word):');
  console.log(daf.tokens.map(([key, word]) => key + ':' + word).join(' '));
  console.log('ENGLISH LINES (aligned Hebrew span -> english; cue if any):');
  daf.translations.forEach((line, i) =>
    console.log(
      i +
        1 +
        '. [' +
        (line.span ? line.span.join('-') : '?') +
        '] ' +
        (line.openingCue ? '{' + (line.openingCue.cat || line.openingCue) + '} ' : '') +
        line.english
    )
  );
}
