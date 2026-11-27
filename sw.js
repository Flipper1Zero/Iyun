/* Service worker. Makes the site installable and readable offline.
   The shell (pages, scripts, styles, key fonts, icons) is precached and refreshed in the background.
   Texts are cached as you open them, up to a limit, so books you have read still open offline.
   /api/ is never cached. Page loads fall back to the cached page, then to an offline notice.
   Bump VERSION whenever a precached file changes, otherwise returning visitors keep the old copy. */
var VERSION = 'v7';
var SHELL = 'shell-' + VERSION,
  TEXTS = 'texts-' + VERSION,
  TEXT_LIMIT = 60;
var PRECACHE = [
  './',
  'index.html',
  'book.html',
  'gemara.html',
  'markup.html',
  'notes.html',
  'chavruta.html',
  'sheet.html',
  'about.html',
  'review.html',
  'privacy.html',
  'terms.html',
  'site.css',
  'cosmos.css',
  'common.css',
  'review.css',
  'book.css',
  'gemara.css',
  'styles.css',
  'reader-library.css',
  'book-layout.css',
  'catalog.js',
  'catalog-directories.js',
  'library.js',
  'i18n.js',
  'cloud.js',
  'site.js',
  'pwa.js',
  'review.js',
  'book.js',
  'reader-extras.js',
  'reader-library.js',
  'book-layout.js',
  'gemara.js',
  'daf-loader.js',
  'study-tools.js',
  'fonts/fonts.css',
  'fonts/open-sans-latin-400-normal.woff2',
  'fonts/open-sans-latin-600-normal.woff2',
  'fonts/frank-ruhl-libre-hebrew-400-normal.woff2',
  'fonts/frank-ruhl-libre-hebrew-700-normal.woff2',
  'vendor/minisearch.js',
  'icons/favicon.svg',
  'icons/icon-192.png',
  'manifest.webmanifest',
  'texts/names.json',
];
var OFFLINE =
  '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><body style="font:16px system-ui;background:#050a31;color:#e8ecff;display:grid;place-items:center;min-height:100vh;margin:0;text-align:center;padding:24px"><main><h1 style="font-weight:400">You are offline</h1><p>This page has not been opened on this device yet. Texts you have already read are still available.</p><p><a style="color:#8fc4ff" href="/">Back to the library</a></p></main>';

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches
      .open(SHELL)
      .then(function (c) {
        // one missing optional file must not block the install
        return Promise.all(
          PRECACHE.map(function (u) {
            return c.add(u).catch(function () {});
          })
        );
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (k) {
              return k !== SHELL && k !== TEXTS;
            })
            .map(function (k) {
              return caches.delete(k);
            })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});
// Drop the oldest entries until the cache is back under TEXT_LIMIT.
function trimOldest(cache) {
  return cache.keys().then(function (keys) {
    if (keys.length <= TEXT_LIMIT) return;
    return cache.delete(keys[0]).then(function () {
      return trimOldest(cache);
    });
  });
}
// Answer from the cache right away if we have it, and refresh the copy from the network in the background.
// With no cached copy the network answer is used. `limit` only says whether to trim the cache afterwards.
function staleWhileRevalidate(req, cacheName, limit) {
  return caches.open(cacheName).then(function (cache) {
    return cache.match(req).then(function (hit) {
      var net = fetch(req)
        .then(function (res) {
          if (res && res.ok) {
            cache.put(req, res.clone()).then(function () {
              if (limit) return trimOldest(cache);
            });
          }
          return res;
        })
        .catch(function () {
          return hit;
        });
      return hit || net;
    });
  });
}
self.addEventListener('fetch', function (e) {
  var req = e.request,
    url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  // The API and the dev-server internals must always hit the network.
  if (url.pathname.indexOf('/api/') === 0 || url.pathname.indexOf('/__') === 0) return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(function (res) {
          if (res && res.ok) {
            var copy = res.clone();
            caches.open(SHELL).then(function (c) {
              c.put(req, copy);
            });
          }
          return res;
        })
        .catch(function () {
          return caches.match(req, { ignoreSearch: true }).then(function (hit) {
            return (
              hit ||
              new Response(OFFLINE, {
                status: 503,
                headers: { 'content-type': 'text/html; charset=utf-8' },
              })
            );
          });
        })
    );
    return;
  }
  // Only book and daf texts are capped. The small index files belong with the shell so they are never evicted.
  if (url.pathname.indexOf('/texts/') === 0) {
    e.respondWith(
      staleWhileRevalidate(
        req,
        url.pathname === '/texts/names.json' || url.pathname === '/texts/calendar.json'
          ? SHELL
          : TEXTS,
        url.pathname.indexOf('/texts/b/') === 0 || url.pathname.indexOf('/texts/daf/') === 0
          ? TEXT_LIMIT
          : 0
      )
    );
    return;
  }
  e.respondWith(staleWhileRevalidate(req, SHELL, 0));
});
