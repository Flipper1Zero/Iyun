// Runs axe-core against the main pages in headless Chromium and exits 1 if any
// serious or critical WCAG A/AA problem turns up.
// Run: node scripts/a11y.mjs [--all]   (--all also lists the moderate and minor ones)
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const require = createRequire(import.meta.url);
// Playwright is not a regular dependency; fall back to the shared tools folder.
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  ({ chromium } = createRequire('/opt/node-tools/node_modules/')('playwright'));
}
const axeSrc = fs.readFileSync(path.join(root, 'node_modules', 'axe-core', 'axe.min.js'), 'utf8');
const PORT = 8450 + Math.floor(Math.random() * 40),
  BASE = 'http://127.0.0.1:' + PORT,
  data = fs.mkdtempSync(path.join(os.tmpdir(), 'a11y-'));
// Throwaway local server with an empty data dir so we never touch real data.
const srv = spawn(process.execPath, ['server.js'], {
  cwd: root,
  env: { ...process.env, PORT: String(PORT), HOST: '127.0.0.1', IYUN_DATA_DIR: data },
  stdio: 'ignore',
});
// Wait up to ~10s for the server to answer.
for (let i = 0; i < 50; i++) {
  try {
    if ((await fetch(BASE + '/api/status')).ok) break;
  } catch {}
  await new Promise((r) => setTimeout(r, 200));
}
const pages = [
  '/',
  '/book.html?name=Bereishit&category=Tanach&ref=1',
  '/gemara.html?tractate=Shabbat&daf=10a',
  '/about.html',
  '/review.html',
  '/privacy.html',
  '/terms.html',
  '/notes.html',
  '/chavruta.html',
];
const all = process.argv.includes('--all'),
  browser = await chromium.launch(),
  ctx = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    serviceWorkers: 'block',
  });
let bad = 0;
for (const u of pages) {
  const p = await ctx.newPage();
  await p.goto(BASE + u);
  // Give the page time to render its text before axe looks at it.
  await p.waitForTimeout(1800);
  await p.addScriptTag({ content: axeSrc });
  const res = await p.evaluate(async () => {
    const r = await window.axe.run(document, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] },
    });
    return r.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      help: v.help,
      nodes: v.nodes.length,
      sample: v.nodes[0] && v.nodes[0].target.join(' '),
    }));
  });
  const serious = res.filter((v) => v.impact === 'serious' || v.impact === 'critical');
  bad += serious.length;
  console.log(
    (serious.length ? '✗ ' : '✓ ') +
      u +
      '  serious/critical: ' +
      serious.length +
      (all ? '  other: ' + (res.length - serious.length) : '')
  );
  for (const v of all ? res : serious)
    console.log(
      '    - [' + v.impact + '] ' + v.id + ' ×' + v.nodes + ' — ' + v.help + '  e.g. ' + v.sample
    );
  await p.close();
}
await browser.close();
srv.kill();
fs.rmSync(data, { recursive: true, force: true });
console.log(
  bad
    ? '\n' + bad + ' serious/critical accessibility issue(s)'
    : '\nNo serious or critical axe violations'
);
process.exit(bad ? 1 : 0);
