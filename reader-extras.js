// Reader extras for book.html: the commentary panel, find in text, cite and share a verse,
// print, keyboard shortcuts and the source-sheet draft.
// Reads book.js through window.IYUN_BOOK and the library index. Adds no network calls of its own.
(function () {
  'use strict';
  var B = window.IYUN_BOOK,
    lib = window.IYUN_LIB;
  if (!B || !lib) return;
  var $ = function (id) {
    return document.getElementById(id);
  };
  var NIKUD = /[֑-ׇ]/g;
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  // Search ignores vowel points, cantillation, quote marks and case, so typing plain letters still matches.
  function norm(s) {
    return (s || '')
      .replace(NIKUD, '')
      .replace(/[׳״"']/g, '')
      .toLowerCase();
  }
  // Commentary text can arrive as nested arrays. Flatten it to a list of non-empty strings.
  function flat(v, out) {
    out = out || [];
    if (typeof v === 'string') {
      if (v) out.push(v);
    } else if (Array.isArray(v))
      v.forEach(function (x) {
        flat(x, out);
      });
    return out;
  }

  // Toast: a polite live region that announces short messages.
  var toastTimer = null;
  function toast(msg) {
    var t = $('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove('show');
    }, 2200);
  }

  // Cite and share: copy a reference with the verse text, or hand the link to the Web Share API.
  function citeLabel() {
    var seg = B.active + 1,
      complex = B.outline.some(function (o) {
        return o.pk;
      });
    return (
      B.displayName + ' ' + B.section + (B.segments.length ? (complex ? ', line ' : ':') + seg : '')
    );
  }
  function verseUrl() {
    var u = new URL(location.href);
    u.searchParams.set('name', B.displayName);
    u.searchParams.set('category', B.category);
    u.searchParams.set('ref', B.section);
    u.searchParams.set('seg', String(B.active + 1));
    return u.toString();
  }
  function citeText() {
    var s = B.segments[B.active] || {},
      parts = [citeLabel()];
    if (s.he) parts.push(s.he);
    if (s.en) parts.push(s.en);
    parts.push(verseUrl());
    return parts.join('\n');
  }
  // Uses the async clipboard API when it exists. execCommand covers older browsers and insecure contexts.
  function copy(text, okMsg) {
    function fallback() {
      var ta = el('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;left:-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        toast(okMsg);
      } catch (e) {
        toast('Copy failed. Select the text and copy it manually.');
      }
      ta.remove();
    }
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(text).then(function () {
        toast(okMsg);
      }, fallback);
    else fallback();
  }
  if ($('citeBtn'))
    $('citeBtn').addEventListener('click', function () {
      copy(citeText(), 'Copied: ' + citeLabel());
    });
  if ($('shareBtn'))
    $('shareBtn').addEventListener('click', function () {
      var data = {
        title: citeLabel(),
        text:
          (B.segments[B.active] && (B.segments[B.active].en || B.segments[B.active].he)) ||
          citeLabel(),
        url: verseUrl(),
      };
      if (navigator.share)
        navigator.share(data).catch(function () {
          /* user cancelled */
        });
      else copy(verseUrl(), 'Link copied');
    });
  if ($('printBtn'))
    $('printBtn').addEventListener('click', function () {
      window.print();
    });

  // Find in text: marks matching lines and words, then steps through the matching lines.
  var found = [],
    foundPos = -1;
  function clearFind() {
    document.querySelectorAll('.verse.found-verse').forEach(function (v) {
      v.classList.remove('found-verse');
    });
    document.querySelectorAll('.word.hit').forEach(function (w) {
      w.classList.remove('hit');
    });
    found = [];
    foundPos = -1;
    if ($('findCount')) $('findCount').textContent = '';
  }
  function runFind() {
    clearFind();
    var q = norm($('findInput').value.trim());
    if (!q) return;
    B.segments.forEach(function (s, i) {
      if (norm(s.he).indexOf(q) >= 0 || norm(s.en).indexOf(q) >= 0) found.push(i);
    });
    found.forEach(function (i) {
      var row = document.querySelector('.verse[data-segment="' + i + '"]');
      if (row) row.classList.add('found-verse');
    });
    B.words().forEach(function (w) {
      if (norm(w.textContent).indexOf(q) >= 0) w.classList.add('hit');
    });
    $('findCount').textContent = found.length
      ? found.length + (found.length === 1 ? ' line' : ' lines')
      : 'No matches in this section';
    if (found.length) stepFind(1);
  }
  function stepFind(dir) {
    if (!found.length) return;
    foundPos = (foundPos + dir + found.length) % found.length;
    B.goSegment(found[foundPos]);
    $('findCount').textContent = foundPos + 1 + ' / ' + found.length + ' lines';
  }
  function openFind() {
    var bar = $('findBar');
    if (!bar) return;
    bar.hidden = false;
    $('findInput').focus();
    $('findInput').select();
  }
  function closeFind() {
    var bar = $('findBar');
    if (!bar) return;
    bar.hidden = true;
    clearFind();
    $('findInput').value = '';
  }
  if ($('findToggle'))
    $('findToggle').addEventListener('click', function () {
      $('findBar').hidden ? openFind() : closeFind();
    });
  if ($('findInput')) {
    $('findInput').addEventListener('input', runFind);
    $('findInput').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        stepFind(e.shiftKey ? -1 : 1);
      }
      if (e.key === 'Escape') closeFind();
    });
    $('findNext').addEventListener('click', function () {
      stepFind(1);
    });
    $('findPrev').addEventListener('click', function () {
      stepFind(-1);
    });
    $('findClose').addEventListener('click', closeFind);
  }
  // Re-run the search after the section changes, but only while the find bar is open.
  window.addEventListener('iyun:book-loaded', function () {
    if ($('findBar') && !$('findBar').hidden) runFind();
  });

  // Commentary panel. The commentator the reader picked is remembered in this browser.
  var chosen = null;
  try {
    chosen = localStorage.getItem('iyun.book.commentator');
  } catch (e) {
    /* storage unavailable */
  }
  function commentatorName(title) {
    return title.replace(/ on .*$/, '');
  }
  var PRIORITY = [
    'Rashi',
    'Ramban',
    'Ibn Ezra',
    'Sforno',
    'Rashbam',
    'Radak',
    'Or HaChaim',
    'Kli Yakar',
    'Bartenura',
    'Ikar Tosafot Yom Tov',
    'Tosafot Yom Tov',
    'Rambam',
  ];
  function rank(t) {
    var i = PRIORITY.indexOf(commentatorName(t));
    return i < 0 ? 99 : i;
  }
  // Some commentaries keep their chapters under the default node ("") next to an Introduction; use that array.
  function chapters(node) {
    return Array.isArray(node) ? node : node && Array.isArray(node['']) ? node[''] : null;
  }
  function refreshCommentators() {
    var list = lib
        .commentaries(B.canonical)
        .slice()
        .sort(function (a, b) {
          return rank(a) - rank(b) || a.localeCompare(b);
        }),
      sel = $('commentSelect'),
      btn = $('commentToggle');
    if (!sel || !btn) return;
    btn.hidden = !list.length;
    sel.replaceChildren();
    list.forEach(function (t) {
      var o = el('option', null, commentatorName(t));
      o.value = t;
      sel.appendChild(o);
    });
    var keep =
      list.filter(function (t) {
        return commentatorName(t) === chosen;
      })[0] || list[0];
    if (keep) sel.value = keep;
    if (!list.length) closeComments();
  }
  // Hebrew paragraphs show their English beside them. Where there is no Hebrew, English is listed alone.
  function appendCommentItems(body, he, en) {
    he.forEach(function (h, k) {
      var box = el('div', 'comment-item'),
        hh = el('div', 'comment-he', h);
      hh.lang = 'he';
      hh.dir = 'rtl';
      box.appendChild(hh);
      if (en[k]) box.appendChild(el('div', 'comment-en', en[k]));
      body.appendChild(box);
    });
    if (!he.length)
      en.forEach(function (e) {
        var box = el('div', 'comment-item');
        box.appendChild(el('div', 'comment-en', e));
        body.appendChild(box);
      });
  }
  // Credit line for the Hebrew and English editions. The non-commercial note is shown for NC licenses.
  function creditText(rec) {
    return (
      'Hebrew: ' +
      lib.licenseText(rec.heV, 'edition not stated') +
      (rec.enV
        ? '. English: ' +
          lib.licenseText(rec.enV) +
          (rec.enV.nc ? ' (non-commercial use only)' : '')
        : '. No openly licensed English for this commentary.')
    );
  }
  function renderComments() {
    var panel = $('commentPanel'),
      body = $('commentBody'),
      sel = $('commentSelect');
    if (!panel || panel.hidden || !sel.value) return;
    var item = B.outline.filter(function (o) {
      return o.id === B.section;
    })[0];
    body.replaceChildren();
    if (!item || item.i == null) {
      body.appendChild(
        el('p', 'comment-note', 'Commentary is shown for books divided into chapters and verses.')
      );
      return;
    }
    body.appendChild(el('p', 'comment-note', 'Loading…'));
    var seg = B.active,
      title = sel.value;
    lib.book(title).then(
      function (rec) {
        if (title !== sel.value || seg !== B.active) return; // the reader moved on
        body.replaceChildren();
        var heCh = chapters(rec.he),
          enCh = chapters(rec.en);
        var heNode = heCh ? heCh[item.i] : null,
          enNode = enCh ? enCh[item.i] : null;
        var he = flat(heNode && heNode[seg]),
          en = flat(enNode && enNode[seg]);
        body.appendChild(el('h3', 'comment-ref', commentatorName(title) + ' on ' + citeLabel()));
        if (!he.length && !en.length) {
          body.appendChild(
            el('p', 'comment-note', 'No comment on this verse. Use the arrows to move to another.')
          );
        }
        appendCommentItems(body, he, en);
        body.appendChild(el('p', 'comment-credit', creditText(rec)));
      },
      function (err) {
        body.replaceChildren();
        body.appendChild(
          el('p', 'comment-note', 'This commentary could not be loaded: ' + err.message)
        );
      }
    );
  }
  function openComments() {
    var p = $('commentPanel');
    if (!p) return;
    p.hidden = false;
    $('commentToggle').setAttribute('aria-expanded', 'true');
    renderComments();
  }
  function closeComments() {
    var p = $('commentPanel');
    if (!p) return;
    p.hidden = true;
    if ($('commentToggle')) $('commentToggle').setAttribute('aria-expanded', 'false');
  }
  if ($('commentToggle')) {
    $('commentToggle').addEventListener('click', function () {
      $('commentPanel').hidden ? openComments() : closeComments();
    });
    $('commentClose').addEventListener('click', closeComments);
    $('commentSelect').addEventListener('change', function () {
      chosen = commentatorName($('commentSelect').value);
      try {
        localStorage.setItem('iyun.book.commentator', chosen);
      } catch (e) {
        /* storage unavailable */
      }
      renderComments();
    });
  }
  window.addEventListener('iyun:book-loaded', function () {
    refreshCommentators();
    renderComments();
  });
  window.addEventListener('iyun:book-segment', renderComments);

  // Keyboard help dialog and single-key shortcuts.
  function toggleHelp(open) {
    var h = $('helpDialog');
    if (!h) return;
    h.hidden = open === undefined ? !h.hidden : !open;
    if (!h.hidden) $('helpClose').focus();
  }
  if ($('helpBtn'))
    $('helpBtn').addEventListener('click', function () {
      toggleHelp();
    });
  if ($('helpClose'))
    $('helpClose').addEventListener('click', function () {
      toggleHelp(false);
    });
  document.addEventListener('keydown', function (e) {
    // Leave browser and OS shortcuts alone.
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    // Typing in a field must not trigger these keys.
    var t = e.target && e.target.tagName;
    if (/input|textarea|select/i.test(t || '')) return;
    if (e.key === '/') {
      e.preventDefault();
      openFind();
    } else if (e.key === 'c' && $('commentToggle') && !$('commentToggle').hidden)
      $('commentToggle').click();
    else if (e.key === 'y') {
      copy(citeText(), 'Copied: ' + citeLabel());
    } else if (e.key === 'n') {
      if ($('controls').hidden) $('settingsToggle').click();
      $('notes').focus();
      e.preventDefault();
    } else if (e.key === '?') toggleHelp();
    else if (e.key === 'Escape') {
      toggleHelp(false);
      if (!$('commentPanel').hidden) closeComments();
      if ($('findBar') && !$('findBar').hidden) closeFind();
    }
  });
  // Sheet draft: the Sheet button appends the selected line to a list in localStorage.
  // notes.html reads that list and publishes it as a sheet.
  var DRAFT_KEY = 'iyun.sheet.draft';
  function readDraft() {
    try {
      return JSON.parse(localStorage.getItem(DRAFT_KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  if ($('sheetBtn'))
    $('sheetBtn').addEventListener('click', function () {
      var s = B.segments[B.active];
      if (!s || (!s.he && !s.en)) {
        toast('Select a line first.');
        return;
      }
      var draft = readDraft(),
        rec = B.rec || {},
        lic = [];
      if (rec.heV) lic.push('Hebrew: ' + lib.licenseText(rec.heV));
      if (rec.enV && s.en) lic.push('English: ' + lib.licenseText(rec.enV));
      var u = new URL(verseUrl());
      var rel = 'book.html' + u.search;
      draft.push({
        type: 'passage',
        ref: citeLabel(),
        he: s.he || '',
        en: s.en || '',
        url: rel,
        license: lic.join('. '),
      });
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
        toast('Added to your sheet draft (' + draft.length + '). Open Notes to publish.');
      } catch (e) {
        toast('Could not save the draft (storage is full or blocked).');
      }
    });

  // Live chip cycles off, follow, lead. It needs a signed-in account and a group picked on the Chavruta page.
  var chip = $('liveChip');
  function paintChip() {
    var c = window.IYUN_CLOUD;
    if (!chip || !c) return;
    var mode = c.liveMode();
    chip.textContent =
      '● Live: ' + (mode === 'follow' ? 'following' : mode === 'lead' ? 'leading' : 'off');
    chip.setAttribute('aria-pressed', String(mode !== 'off'));
    chip.classList.toggle('live-on', mode !== 'off');
  }
  if (chip && window.IYUN_CLOUD) {
    window.IYUN_CLOUD.ready.then(function (c) {
      if (!c.available || !c.user) return;
      chip.hidden = false;
      paintChip();
      chip.addEventListener('click', function () {
        if (!c.liveRoom()) {
          toast('Choose a group for Live on the Chavruta page first.');
          return;
        }
        var next = c.liveMode() === 'off' ? 'follow' : c.liveMode() === 'follow' ? 'lead' : 'off';
        c.setLiveMode(next);
        paintChip();
        if (next === 'lead') B.goSegment(B.active); // announce my place immediately
      });
      window.addEventListener('iyun:livemode', paintChip);
    });
  }

  // Sections drawer for small screens. Picking a section closes it.
  if ($('sectionsToggle')) {
    $('sectionsToggle').addEventListener('click', function () {
      var open = $('sectionsPane').classList.toggle('open');
      this.setAttribute('aria-expanded', String(open));
    });
    $('sectionsList').addEventListener('click', function () {
      $('sectionsPane').classList.remove('open');
    });
  }
  refreshCommentators();
})();
