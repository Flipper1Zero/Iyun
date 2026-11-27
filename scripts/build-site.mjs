// Assembles dist/ with only the files the browser needs, picked from an explicit list so nothing private ships by accident.
// Files are hard-linked when possible, so it's fast and uses no extra disk. Run: node scripts/build-site.mjs
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'),
  dist = path.join(root, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);
const CLIENT_ROOT = /^(?!server\.js$).+\.(html|css|js|svg|png|ico|webp|webmanifest|txt|xml)$/;
function put(rel) {
  const from = path.join(root, rel),
    to = path.join(dist, rel);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  try {
    fs.linkSync(from, to);
  } catch {
    fs.copyFileSync(from, to);
  }
}
function putDir(rel) {
  if (!fs.existsSync(path.join(root, rel))) return 0;
  let n = 0;
  for (const e of fs.readdirSync(path.join(root, rel), { withFileTypes: true })) {
    const r = path.join(rel, e.name);
    if (e.isDirectory()) n += putDir(r);
    else {
      put(r);
      n++;
    }
  }
  return n;
}
let files = 0;
for (const f of fs.readdirSync(root))
  if (fs.statSync(path.join(root, f)).isFile() && CLIENT_ROOT.test(f)) {
    put(f);
    files++;
  }
const fonts = putDir('fonts') + putDir('icons') + putDir('vendor'),
  texts = putDir('texts'),
  annotations = putDir('annotations');
if (!texts) console.warn('WARNING: texts/ is missing. Run: npm run build');
console.log(
  'dist ready:',
  files,
  'site files,',
  fonts,
  'font files,',
  texts,
  'text files,',
  annotations,
  'annotation files'
);
