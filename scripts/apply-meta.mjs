// Writes the shared <head> metadata (description, canonical, icons, manifest, Open Graph, Twitter) into every page
// between <!--meta:start--> and <!--meta:end-->. Safe to re-run. `--check` exits 1 if any page is out of date.
// Run: node scripts/apply-meta.mjs [--check]
// SITE_URL (default https://orbitdodge.com) is used for the absolute URLs that social previews need.
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SITE = (process.env.SITE_URL || 'https://orbitdodge.com').replace(/\/$/, '');
const NAME = 'Iyun · Torah study';
const UNOFFICIAL = ' Free and open-source.';
const pages = {
  'index.html': {
    title: 'Iyun · Tanakh, Mishnah, Talmud and more',
    desc:
      'Read Tanakh, Mishnah, Talmud, Midrash and halacha in Hebrew with openly licensed translations, commentary and the traditional Vilna daf layout. Notes, study groups and source sheets.' +
      UNOFFICIAL,
  },
  'book.html': {
    title: 'Book reader · Iyun',
    desc:
      'Read a text in Hebrew with a phrase-by-phrase translation where one exists, commentary, find, citations and notes.' +
      UNOFFICIAL,
  },
  'gemara.html': {
    title: 'Daf reader · Iyun',
    desc:
      'Every Bavli tractate in the traditional Vilna page layout: Gemara with Rashi and Tosafot, synced English where available, search, bookmarks and notes.' +
      UNOFFICIAL,
  },
  'markup.html': {
    title: 'Markup · Iyun',
    desc:
      'Color-code words in Bereishit with semantic palettes and see the structure of the passage.' +
      UNOFFICIAL,
  },
  'notes.html': {
    title: 'My notes · Iyun',
    desc: 'All the notes you have written while studying, searchable, exportable and shareable as a source sheet.',
    noindex: true,
  },
  'chavruta.html': {
    title: 'Chavruta · Iyun',
    desc:
      'Study with a partner or group: private invite-code groups, live messages, presence and following a member through a text.' +
      UNOFFICIAL,
  },
  'sheet.html': {
    title: 'Source sheet · Iyun',
    desc: 'A shared source sheet.' + UNOFFICIAL,
    noindex: true,
  },
  'about.html': {
    title: 'About · Iyun',
    desc:
      'What this site is, what it is not, where the texts come from, and the licenses and credits for every source.' +
      UNOFFICIAL,
  },
  'privacy.html': {
    title: 'Privacy · Iyun',
    desc: 'What this site stores, where, and how to delete it.' + UNOFFICIAL,
  },
  'review.html': {
    title: 'Review the drafts · Iyun',
    desc:
      "Progress on reviewing the machine-assisted Shakla v'Tarya drafts, and how to help check them." +
      UNOFFICIAL,
  },
  'terms.html': {
    title: 'Terms · Iyun',
    desc: 'Terms of use for this independent study site.' + UNOFFICIAL,
  },
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
function block(file, p) {
  const url = SITE + (file === 'index.html' ? '/' : '/' + file),
    img = SITE + '/icons/og-image.png',
    alt = 'Torah study: an open book under a star on a night sky';
  const lines = [
    '<meta name="description" content="' + esc(p.desc) + '">',
    p.noindex
      ? '<meta name="robots" content="noindex,follow">'
      : '<meta name="robots" content="index,follow,max-image-preview:large">',
    '<meta name="theme-color" content="#050a31">',
    '<link rel="canonical" href="' + url + '">',
    '<link rel="manifest" href="manifest.webmanifest">',
    '<link rel="icon" href="icons/favicon.svg" type="image/svg+xml">',
    '<link rel="icon" href="icons/favicon-32.png" sizes="32x32" type="image/png">',
    '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">',
    '<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Iyun">',
    '<meta property="og:type" content="website"><meta property="og:site_name" content="' +
      esc(NAME) +
      '">',
    '<meta property="og:title" content="' +
      esc(p.title) +
      '"><meta property="og:description" content="' +
      esc(p.desc) +
      '">',
    '<meta property="og:url" content="' + url + '"><meta property="og:locale" content="en_US">',
    '<meta property="og:image" content="' +
      img +
      '"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="' +
      esc(alt) +
      '">',
    '<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="' +
      esc(p.title) +
      '"><meta name="twitter:description" content="' +
      esc(p.desc) +
      '">',
    '<meta name="twitter:image" content="' +
      img +
      '"><meta name="twitter:image:alt" content="' +
      esc(alt) +
      '">',
  ];
  return '<!--meta:start-->\n  ' + lines.join('\n  ') + '\n  <!--meta:end-->';
}
let stale = [],
  done = 0;
for (const [file, p] of Object.entries(pages)) {
  const fp = path.join(root, file);
  if (!fs.existsSync(fp)) continue;
  const src = fs.readFileSync(fp, 'utf8');
  if (!/<!--meta:start-->[\s\S]*?<!--meta:end-->/.test(src)) {
    console.error('no meta markers in', file);
    process.exitCode = 1;
    continue;
  }
  // Compare ignoring whitespace, so a code formatter can reflow the block without making it look stale.
  const squash = (text) => text.replace(/\s+/g, '').replace(/\/>/g, '>');
  const current = src.match(/<!--meta:start-->[\s\S]*?<!--meta:end-->/)[0];
  const wanted = block(file, p);
  const next = src.replace(current, wanted);
  if (squash(current) !== squash(wanted)) {
    stale.push(file);
    if (!process.argv.includes('--check')) fs.writeFileSync(fp, next);
  }
  done++;
}
if (process.argv.includes('--check')) {
  if (stale.length) {
    console.error('Out of date (run: node scripts/apply-meta.mjs):', stale.join(', '));
    process.exit(1);
  }
  console.log('meta up to date for', done, 'pages');
} else console.log('meta written for', done, 'pages;', stale.length, 'changed');
