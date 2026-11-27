// Printed-page layout for the general reader (book.html). Each row pairs a Hebrew verse,
// mishnah, halakhah or paragraph with its English, and adds the commentary that the printed
// edition sets beneath it (Targum and Rashi for Tanakh, Bartenura for Mishnah). Talmud has its
// own page, gemara.html. The word and verse elements from book.js stay in place, because notes,
// find, marks and Live depend on them.
(function () {
  'use strict';
  var B = window.IYUN_BOOK,
    lib = window.IYUN_LIB;
  if (!B || !lib) return;
  var $ = function (id) {
      return document.getElementById(id);
    },
    root = $('bookText'),
    // Incremented on every layout, so commentary that arrives late for an older layout is dropped.
    gen = 0;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function flat(v, out) {
    out = out || [];
    if (typeof v === 'string') {
      if (v.trim()) out.push(v);
    } else if (Array.isArray(v))
      v.forEach(function (x) {
        flat(x, out);
      });
    return out;
  }
  // Some commentaries keep their chapters under the default key ("") next to an Introduction.
  function chapters(node) {
    return Array.isArray(node) ? node : node && Array.isArray(node['']) ? node[''] : null;
  }
  // Hebrew letters for a number, as printed chapter and verse numbers. 15 and 16 are written
  // as tet-vav and tet-zayin so that the spelling does not form a divine name.
  function heNum(n) {
    if (!(n > 0) || n > 999) return String(n);
    var h = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'],
      t = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'],
      o = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
    var s = h[Math.floor(n / 100)],
      r = n % 100;
    if (r === 15) s += 'טו';
    else if (r === 16) s += 'טז';
    else s += t[Math.floor(r / 10)] + o[r % 10];
    return s.length > 1 ? s.slice(0, -1) + '״' + s.slice(-1) : s + '׳';
  }
  // The layout follows the book's first category.
  function formatOf(rec) {
    var c = (rec.categories || [])[0] || '';
    if (c === 'Tanakh') return 'chumash';
    if (c === 'Mishnah') return 'mishnah';
    if (/^Halak/i.test(c)) return 'code';
    return 'prose';
  }
  // Commentators in the order they are printed under Tanakh. Anything else ranks last.
  var PRIORITY = ['Rashi', 'Bartenura', 'Ramban', 'Ibn Ezra', 'Sforno', 'Radak', 'Metzudat David'];
  // "Rashi on Genesis" becomes "Rashi".
  function commentator(title) {
    return title.replace(/ on .*$/, '');
  }
  // The one commentary set under each row: Bartenura for Mishnah, the best-ranked one for
  // Tanakh, and none for the other formats.
  function pickCommentary(fmt, canonical) {
    var list = (lib.commentaries(canonical) || []).slice();
    if (fmt === 'mishnah')
      return (
        list.filter(function (t) {
          return /^Bartenura/.test(t);
        })[0] || null
      );
    if (fmt !== 'chumash') return null;
    function rank(t) {
      var i = PRIORITY.indexOf(commentator(t));
      return i < 0 ? 99 : i;
    }
    list.sort(function (a, b) {
      return rank(a) - rank(b);
    });
    return list[0] || null;
  }
  // Onkelos for the Torah, Targum Jonathan for the Prophets. Returns null when neither is in the library.
  function pickTargum(canonical) {
    var books = (lib.names && lib.names.books) || {},
      cand = ['Onkelos ' + canonical, 'Targum Jonathan on ' + canonical];
    for (var i = 0; i < cand.length; i++) if (books[cand[i]]) return cand[i];
    return null;
  }
  // One commentary block. With boldLead, the text up to the first period or colon is bold,
  // as the printed lead-in phrase is.
  function comment(cls, label, lines, boldLead) {
    var box = el('div', 'bk-comm ' + cls);
    var l = el('span', 'bk-label', label);
    l.setAttribute('aria-hidden', 'true');
    box.appendChild(l);
    lines.forEach(function (text) {
      var p = el('p');
      p.lang = 'he';
      p.dir = 'rtl';
      var m = boldLead && /^(.{1,70}?[.:])\s+([\s\S]*)$/.exec(text);
      if (m) {
        p.appendChild(el('b', null, m[1]));
        p.appendChild(document.createTextNode(' ' + m[2]));
      } else p.textContent = text;
      box.appendChild(p);
    });
    return box;
  }
  // Loads one commentary for this section and adds it under each row that has text for it.
  // Commentary is optional, so a failed load is ignored.
  function addCommentary(rows, item, spec, myGen) {
    if (!spec.title || item.i == null) return;
    lib.book(spec.title).then(
      function (rec) {
        if (myGen !== gen) return;
        var heCh = chapters(rec.he),
          node = heCh && heCh[item.i];
        if (!node) return;
        rows.forEach(function (row, i) {
          var lines = flat(node[i]);
          if (!lines.length) return;
          row
            .querySelector('.bk-extra')
            .appendChild(comment(spec.cls, spec.label, lines, spec.lead));
          row.classList.add('has-extra');
        });
      },
      function () {
        /* the commentary is optional */
      }
    );
  }

  // Lays out the section that book.js has just loaded. It runs again when book.js renders the
  // words again (the nikud toggle), and does nothing until there are words to lay out.
  function layout() {
    var rec = B.rec;
    if (!rec || !B.segments.length) return;
    var verses = [].slice.call(root.querySelectorAll(':scope > .verse'));
    if (!verses.length) return; // already laid out, or still loading
    var fmt = formatOf(rec),
      myGen = ++gen;
    document.body.dataset.format = fmt;
    renderHeading(rec);
    var rows = buildRows(verses, fmt);
    markActiveRow();
    addCommentaries(rows, fmt, myGen);
  }

  // Title line: the Hebrew name and chapter, as on a printed title page.
  function renderHeading(rec) {
    var h1 = $('bookTitle'),
      numeric = /^\d+$/.test(B.section),
      he = rec.heTitle || '';
    h1.replaceChildren();
    var top = el(
      'span',
      'bk-title-he',
      he
        ? he + (numeric ? ' פרק ' + heNum(Number(B.section)) : ' ' + B.section)
        : B.displayName + ' ' + B.section
    );
    top.lang = 'he';
    top.dir = 'rtl';
    h1.appendChild(top);
    h1.appendChild(el('span', 'bk-title-en', B.displayName + ' ' + B.section));
  }

  // One row per verse: Hebrew on the right, English beside it, and an empty slot for the
  // commentary. The verse element from book.js is moved into its row, not copied.
  function buildRows(verses, fmt) {
    root.replaceChildren();
    return verses.map(function (v, i) {
      var row = el('div', 'bk-row');
      row.dataset.segment = i;
      var num = v.querySelector('.verse-num');
      // Prose is numbered with Arabic numerals; the other formats use Hebrew letters.
      if (num) num.textContent = fmt === 'prose' ? String(i + 1) : heNum(i + 1);
      var heBox = el('div', 'bk-he');
      heBox.appendChild(v);
      var en = B.segments[i] && B.segments[i].en;
      var enBox = el('div', 'bk-en', en || '');
      enBox.lang = 'en';
      enBox.dir = 'ltr';
      if (!en) row.classList.add('no-en');
      row.append(heBox, enBox, el('div', 'bk-extra'));
      root.appendChild(row);
      return row;
    });
  }

  // Adds the Targum (Tanakh only) and the main commentary under the rows. Both need the
  // outline item's chapter index (item.i) to find the matching chapter in the commentary file.
  function addCommentaries(rows, fmt, myGen) {
    var item = B.outline.filter(function (o) {
      return o.id === B.section;
    })[0];
    if (!item || item.i == null) return;
    var tg = fmt === 'chumash' ? pickTargum(B.canonical) : null,
      cm = pickCommentary(fmt, B.canonical);
    if (tg) addCommentary(rows, item, { title: tg, cls: 'tg', label: 'תרגום', lead: false }, myGen);
    if (cm) {
      var name = commentator(cm);
      addCommentary(
        rows,
        item,
        { title: cm, cls: 'rashi', label: name === 'Rashi' ? 'רש״י' : name, lead: true },
        myGen
      );
    }
  }

  // Highlights the row for the line that book.js has selected.
  function markActiveRow() {
    root.querySelectorAll('.bk-row').forEach(function (r) {
      r.classList.toggle('active', Number(r.dataset.segment) === B.active);
    });
  }
  // Hides the English column when the translation box is unticked.
  function syncTranslation() {
    document.body.classList.toggle('bk-no-en', !$('translation').checked);
  }

  window.addEventListener('iyun:book-loaded', layout);
  window.addEventListener('iyun:book-segment', markActiveRow);
  // book.js calls render() again when the nikud checkbox changes, which replaces the verses.
  new MutationObserver(function () {
    if (root.querySelector(':scope > .verse')) layout();
  }).observe(root, { childList: true });
  if ($('translation')) $('translation').addEventListener('change', syncTranslation);
  syncTranslation();
  if (B.segments.length) layout();
})();
