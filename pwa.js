// Progressive web app support: registers the service worker, offers "Install app" where the
// browser allows it, and shows short status messages (install, offline, update ready).
(function () {
  'use strict';
  // Shows a status message in the shared #toast element, creating it on first use.
  function toast(msg) {
    var node = document.getElementById('toast');
    if (!node) {
      node = document.createElement('div');
      node.id = 'toast';
      node.className = 'toast';
      node.setAttribute('role', 'status');
      node.setAttribute('aria-live', 'polite');
      document.body.appendChild(node);
    }
    node.textContent = msg;
    node.classList.add('show');
    clearTimeout(node._hideTimer);
    node._hideTimer = setTimeout(function () {
      node.classList.remove('show');
    }, 3200);
  }
  // Service workers only run on https (or localhost while developing).
  var secure =
    location.protocol === 'https:' ||
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1';
  if ('serviceWorker' in navigator && secure) {
    window.addEventListener('load', function () {
      navigator.serviceWorker
        .register('sw.js')
        .then(function (reg) {
          // A controller is only present when an older worker already runs the page. So a new worker
          // reaching "installed" then means an update is waiting, not a first install.
          reg.addEventListener('updatefound', function () {
            var worker = reg.installing;
            if (!worker) return;
            worker.addEventListener('statechange', function () {
              if (worker.state === 'installed' && navigator.serviceWorker.controller)
                toast('A new version is ready. Reload to update.');
            });
          });
        })
        .catch(function () {
          /* the site works without it */
        });
    });
  }
  // Hold on to the browser's install prompt and show it when someone presses a [data-install] button.
  // The default is cancelled so the browser does not show its own prompt at a time of its choosing.
  var installPrompt = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    installPrompt = e;
    document.querySelectorAll('[data-install]').forEach(function (b) {
      b.hidden = false;
    });
  });
  document.addEventListener('click', function (e) {
    var button = e.target.closest && e.target.closest('[data-install]');
    if (!button || !installPrompt) return;
    installPrompt.prompt();
    installPrompt.userChoice.finally(function () {
      installPrompt = null;
      document.querySelectorAll('[data-install]').forEach(function (b) {
        b.hidden = true;
      });
    });
  });
  window.addEventListener('appinstalled', function () {
    toast('Installed. You can open it from your home screen.');
  });
  window.addEventListener('offline', function () {
    toast('You are offline. Texts you have opened still work.');
  });
  window.addEventListener('online', function () {
    toast('Back online.');
  });
})();
