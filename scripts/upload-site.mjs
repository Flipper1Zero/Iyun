// Uploads dist/ to the site's R2 bucket through the Worker's authenticated /__upload route.
// Text files are gzip-compressed (served with Content-Encoding: gzip); unchanged files are skipped.
// Usage: SITE_URL=https://<worker-host> UPLOAD_KEY=<secret> node scripts/upload-site.mjs
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..'),
  dist = path.join(root, 'dist');
const base = (process.env.SITE_URL || '').replace(/\/$/, ''),
  key = process.env.UPLOAD_KEY;
if (!base || !key) {
  console.error('Set SITE_URL and UPLOAD_KEY.');
  process.exit(1);
}
if (!fs.existsSync(dist)) {
  console.error('dist/ is missing. Run: npm run build:site');
  process.exit(1);
}
const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    e.isDirectory() ? walk(p) : files.push(p);
  }
})(dist);
const GZIP = /\.(html|css|js|json|svg|txt|xml|webmanifest)$/i,
  auth = { authorization: 'Bearer ' + key };
let sent = 0,
  skipped = 0,
  bytes = 0,
  failed = [];
let i = 0;
async function one(file) {
  const rel = path.relative(dist, file).split(path.sep).join('/'),
    raw = fs.readFileSync(file),
    gz = GZIP.test(rel),
    body = gz ? zlib.gzipSync(raw, { level: 9 }) : raw;
  const sha1 = crypto.createHash('sha1').update(body).digest('hex'),
    keyQuery = 'key=' + encodeURIComponent(rel);
  for (let t = 0; t < 5; t++) {
    try {
      const head = await fetch(base + '/__upload?' + keyQuery, { headers: auth });
      if (
        head.status === 404 &&
        (await head.text()).includes('Not found') &&
        !(head.headers.get('content-type') || '').includes('json')
      )
        throw Error('upload route rejected (wrong UPLOAD_KEY or route disabled)');
      if (head.ok && (await head.json()).sha1 === sha1) {
        skipped++;
        return;
      }
      const r = await fetch(
        base + '/__upload?' + keyQuery + '&sha1=' + sha1 + (gz ? '&enc=gzip' : ''),
        {
          method: 'PUT',
          headers: auth,
          body,
        }
      );
      if (!r.ok) throw Error('HTTP ' + r.status);
      sent++;
      bytes += body.length;
      return;
    } catch (e) {
      if (t === 4) throw e;
      await new Promise((r) => setTimeout(r, 1000 * (t + 1)));
    }
  }
}
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (i < files.length) {
      const f = files[i++];
      try {
        await one(f);
      } catch (e) {
        failed.push([path.relative(dist, f), String(e.message)]);
      }
      if ((sent + skipped + failed.length) % 200 === 0)
        console.log(sent + skipped + failed.length + '/' + files.length);
    }
  })
);
console.log(
  'uploaded',
  sent,
  'skipped',
  skipped,
  'failed',
  failed.length,
  'MB sent',
  (bytes / 1e6).toFixed(1)
);
if (failed.length) {
  console.error(failed.slice(0, 10));
  process.exit(1);
}
