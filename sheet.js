// Public study sheet viewer, served at /s/<id>. Builds the page with textContent only,
// and links passages only to this site's own readers.
(function () {
  'use strict';
  var $ = function (id) {
    return document.getElementById(id);
  };
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  // The id comes from the /s/<id> path, or from ?id= when the page is opened directly.
  var match = /\/s\/([0-9a-f]{12,40})/.exec(location.pathname),
    id = match ? match[1] : new URLSearchParams(location.search).get('id');
  var toastTimer;
  function toast(msg) {
    var t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove('show');
    }, 2400);
  }
  function fail(msg, title) {
    $('title').textContent = title || 'Sheet unavailable';
    $('status').replaceChildren(el('p', 'notice', msg));
  }
  if (!id || !/^[0-9a-f]{12,40}$/.test(id)) {
    fail('That link is not a valid sheet address.');
    return;
  }
  fetch('/api/sheets/' + id, { credentials: 'same-origin' })
    .then(function (r) {
      // An error response may not be JSON, so a failed parse is treated as an empty body.
      return r
        .json()
        .catch(function () {
          return {};
        })
        .then(function (data) {
          return { ok: r.ok, status: r.status, data: data };
        });
    })
    .then(function (res) {
      if (!res.ok) {
        // A 410 response gets its own page title, "Sheet hidden".
        fail(
          res.data.error ||
            (res.status === 404
              ? 'This sheet does not exist or was deleted.'
              : 'This sheet could not be loaded.'),
          res.status === 410 ? 'Sheet hidden' : 'Sheet unavailable'
        );
        return;
      }
      showSheet(res.data.sheet);
    })
    .catch(function () {
      fail('This sheet could not be loaded. Check your connection and try again.');
    });

  function showSheet(sheet) {
    document.title = sheet.title + ' · Torah study sheet';
    $('title').textContent = sheet.title;
    $('byline').textContent =
      'By ' + sheet.author + ' · ' + new Date(sheet.created_at).toLocaleDateString();
    if (sheet.hidden)
      $('status').replaceChildren(
        el(
          'p',
          'notice',
          'This sheet is hidden from the public after reports. Only you can see it.'
        )
      );
    var box = $('blocks');
    sheet.blocks.forEach(function (b) {
      box.appendChild(blockCard(b));
    });
    $('actions').hidden = false;
    if (sheet.mine) $('deleteBtn').hidden = false;
  }
  function blockCard(b) {
    var card = el('div', 'card');
    if (b.type === 'passage') {
      appendPassage(card, b);
    } else {
      // Paragraphs are split on blank lines. pre-wrap keeps single line breaks inside them.
      b.text.split(/\n{2,}/).forEach(function (para) {
        var p = el('p', null, para);
        p.style.whiteSpace = 'pre-wrap';
        card.appendChild(p);
      });
    }
    return card;
  }
  function appendPassage(card, b) {
    var head = el('h3');
    // Only this site's readers are linked. A sheet cannot send visitors to other sites through its url field.
    if (b.url && /^(book|gemara)\.html\?/.test(b.url)) {
      var a = el('a', null, b.ref);
      a.href = b.url;
      head.appendChild(a);
    } else head.textContent = b.ref;
    card.appendChild(head);
    if (b.he) {
      var he = el('div', 'he-text', b.he);
      he.lang = 'he';
      he.dir = 'rtl';
      card.appendChild(he);
    }
    if (b.en) card.appendChild(el('p', null, b.en));
    if (b.license) card.appendChild(el('p', 'small muted', b.license));
  }

  // Where the clipboard API is missing or refused, the link is shown in the toast so it can be copied by hand.
  $('copyLink').addEventListener('click', function () {
    var u = location.origin + '/s/' + id;
    (navigator.clipboard ? navigator.clipboard.writeText(u) : Promise.reject()).then(
      function () {
        toast('Link copied');
      },
      function () {
        toast(u);
      }
    );
  });
  $('printBtn').addEventListener('click', function () {
    window.print();
  });
  $('reportBtn').addEventListener('click', function () {
    $('reportBox').hidden = !$('reportBox').hidden;
    if (!$('reportBox').hidden) $('reason').focus();
  });
  $('sendReport').addEventListener('click', function () {
    var msg = $('reportMsg');
    msg.textContent = 'Sending…';
    fetch('/api/sheets/' + id + '/report', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ reason: $('reason').value }),
    })
      .then(function (r) {
        return r.json().then(function (d) {
          if (!r.ok) throw new Error(d.error || 'Could not send the report.');
        });
      })
      .then(function () {
        msg.textContent = 'Thank you. The report was recorded.';
        $('sendReport').disabled = true;
      })
      .catch(function (e) {
        msg.textContent = e.message;
      });
  });
  $('deleteBtn').addEventListener('click', function () {
    if (!confirm('Delete this sheet permanently? Its link will stop working.')) return;
    fetch('/api/sheets/' + id, { method: 'DELETE', credentials: 'same-origin' })
      .then(function (r) {
        if (!r.ok) throw new Error('Could not delete it.');
        location.href = 'notes.html#sheet';
      })
      .catch(function (e) {
        toast(e.message);
      });
  });
})();
