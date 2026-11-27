/* Markup page (markup.html). Lets readers color-code words with a palette and view
   the structure of the text in a few ways. Uses window.IYUN_BOOK and window.IYUN_PALETTES. */

(function () {
  'use strict';

  var book = window.IYUN_BOOK;
  var palettes = window.IYUN_PALETTES;
  var NIKUD_RE = /[֑-ׇ]/g; // cantillation + vowel points

  var LS_MARKS = 'iyun.marks.v1'; // { paletteId: { wordKey: catId } }
  var LS_PREFS = 'iyun.prefs.v1';

  // Everything the page shows is derived from this object.
  var state = {
    paletteId: palettes[0].id,
    activeCat: null,
    eraser: false,
    viz: 'highlight',
    marks: load(LS_MARKS, {}),
    prefs: Object.assign(
      {
        fontSize: 34,
        nikud: true,
        translation: false,
        verseNums: true,
        theme: 'light',
        controlHidden: false,
      },
      load(LS_PREFS, {})
    ),
  };

  // Saved data can be missing, corrupt, or blocked by the browser. In every case use the fallback.
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  // A failed save is ignored. The marks stay on screen for this visit.
  function save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      /* storage full or blocked */
    }
  }
  function palette() {
    return palettes.filter(function (p) {
      return p.id === state.paletteId;
    })[0];
  }
  function catById(id) {
    return palette().categories.filter(function (c) {
      return c.id === id;
    })[0];
  }
  function marksForPalette() {
    if (!state.marks[state.paletteId]) state.marks[state.paletteId] = {};
    return state.marks[state.paletteId];
  }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  // Element lookups, collected once at startup.
  var $ = function (id) {
    return document.getElementById(id);
  };
  var refs = {
    bookTitle: $('bookTitle'),
    pageHeading: $('pageHeading'),
    text: $('text'),
    palettePicker: $('palettePicker'),
    paletteSub: $('paletteSub'),
    swatches: $('swatches'),
    eraser: $('eraser'),
    vizModes: $('vizModes'),
    map: $('map'),
    mapBlock: $('mapBlock'),
    fontSize: $('fontSize'),
    nikud: $('nikud'),
    translation: $('translation'),
    verseNums: $('verseNums'),
    theme: $('theme'),
    clearBtn: $('clearBtn'),
    controlToggle: $('controlToggle'),
  };

  // Builds one verse: its number, then each word with its Hebrew, gloss and saved color.
  function renderVerse(verse, marks) {
    var vSpan = el('span', 'verse');
    var num = el('span', 'verse-num' + (state.prefs.verseNums ? '' : ' hidden'), verse.n + '.');
    vSpan.appendChild(num);

    verse.words.forEach(function (word, wi) {
      var key = 'v' + verse.n + 'w' + wi;
      var w = el('span', 'w');
      w.dataset.key = key;

      var heb = el('span', 'heb');
      heb.textContent = state.prefs.nikud ? word.h : word.h.replace(NIKUD_RE, '');
      w.appendChild(heb);

      var gloss = el('span', 'gloss', word.en);
      w.appendChild(gloss);

      var catId = marks[key];
      if (catId && catById(catId)) {
        w.dataset.cat = catId;
        w.style.setProperty('--c', catById(catId).color);
      }
      vSpan.appendChild(w);
      vSpan.appendChild(document.createTextNode(' '));
    });
    return vSpan;
  }

  // Rebuilds the heading and the verse text from the current book and marks.
  function renderText() {
    if (refs.bookTitle) refs.bookTitle.textContent = book.title;
    refs.pageHeading.innerHTML = '';
    refs.pageHeading.appendChild(document.createTextNode(book.title));
    var sub = el('span', 'sub', book.titleEn + ' · ' + book.chapter);
    refs.pageHeading.appendChild(sub);

    refs.text.innerHTML = '';
    var marks = marksForPalette();

    book.verses.forEach(function (verse) {
      refs.text.appendChild(renderVerse(verse, marks));
      refs.text.appendChild(document.createTextNode(' '));
    });
  }

  // Palette picker: one button per palette. Picking one clears the armed color and the eraser.
  function renderPalettePicker() {
    refs.palettePicker.innerHTML = '';
    palettes.forEach(function (p) {
      var b = el('button', null, p.name);
      b.setAttribute('aria-pressed', p.id === state.paletteId ? 'true' : 'false');
      b.addEventListener('click', function () {
        state.paletteId = p.id;
        state.activeCat = null;
        state.eraser = false;
        renderPalettePicker();
        renderSwatches();
        renderText();
        renderMap();
      });
      refs.palettePicker.appendChild(b);
    });
    refs.paletteSub.textContent = palette().sub;
  }

  // Color swatches, with a count of how many words use each color.
  function renderSwatches() {
    refs.swatches.innerHTML = '';
    var marks = marksForPalette();
    var counts = {};
    Object.keys(marks).forEach(function (k) {
      counts[marks[k]] = (counts[marks[k]] || 0) + 1;
    });

    palette().categories.forEach(function (c, i) {
      var b = el('button', 'swatch');
      b.style.setProperty('--c', c.color);
      b.setAttribute('aria-pressed', !state.eraser && state.activeCat === c.id ? 'true' : 'false');
      b.appendChild(el('span', 'dot'));
      var lbl = el('span', 'lbl');
      lbl.appendChild(el('span', null, i + 1 + '. ' + c.label));
      lbl.appendChild(el('span', 'he', c.he));
      b.appendChild(lbl);
      b.appendChild(el('span', 'count', counts[c.id] ? String(counts[c.id]) : ''));
      b.addEventListener('click', function () {
        state.eraser = false;
        state.activeCat = state.activeCat === c.id ? null : c.id;
        renderSwatches();
      });
      refs.swatches.appendChild(b);
    });
    refs.eraser.setAttribute('aria-pressed', state.eraser ? 'true' : 'false');
  }

  // Structure map: a bar per color showing its share of all marked words.
  function renderMap() {
    var marks = marksForPalette();
    var counts = {};
    palette().categories.forEach(function (c) {
      counts[c.id] = 0;
    });
    Object.keys(marks).forEach(function (k) {
      if (counts[marks[k]] != null) counts[marks[k]]++;
    });
    var total = Object.keys(counts).reduce(function (s, k) {
      return s + counts[k];
    }, 0);

    refs.map.innerHTML = '';
    if (total === 0) {
      refs.map.appendChild(
        el('p', 'map-empty', 'Nothing marked yet. Pick a color and tag some words.')
      );
      return;
    }
    palette().categories.forEach(function (c) {
      var row = el('div', 'map-row');
      row.style.setProperty('--c', c.color);
      row.appendChild(el('span', 'dot'));
      row.appendChild(el('span', 'ml', c.label));
      var bar = el('div', 'map-bar');
      var fill = el('span');
      fill.style.width = total ? (100 * counts[c.id]) / total + '%' : '0';
      bar.appendChild(fill);
      row.appendChild(bar);
      row.appendChild(el('span', 'mc', String(counts[c.id])));
      refs.map.appendChild(row);
    });
  }

  // Clicking a word applies the armed color or the eraser. Clicking it again with the same color removes it.
  function applyToWord(w) {
    var key = w.dataset.key;
    var marks = marksForPalette();
    if (state.eraser) {
      delete marks[key];
      delete w.dataset.cat;
      w.style.removeProperty('--c');
    } else if (state.activeCat) {
      if (marks[key] === state.activeCat) {
        // toggle off
        delete marks[key];
        delete w.dataset.cat;
        w.style.removeProperty('--c');
      } else {
        marks[key] = state.activeCat;
        w.dataset.cat = state.activeCat;
        w.style.setProperty('--c', catById(state.activeCat).color);
      }
    } else {
      return; // no color or eraser selected
    }
    // Briefly flash the word so the reader can see which one changed.
    w.classList.add('flash');
    setTimeout(function () {
      w.classList.remove('flash');
    }, 300);
    save(LS_MARKS, state.marks);
    renderSwatches();
    renderMap();
  }

  refs.text.addEventListener('click', function (e) {
    var w = e.target.closest ? e.target.closest('.w') : null;
    if (w) applyToWord(w);
  });

  // View modes switch a body class; CSS decides how each one looks.
  function setViz(mode) {
    state.viz = mode;
    document.body.classList.remove('viz-highlight', 'viz-underline', 'viz-color', 'viz-map');
    document.body.classList.add('viz-' + mode);
    Array.prototype.forEach.call(refs.vizModes.querySelectorAll('button'), function (b) {
      b.setAttribute('aria-selected', b.dataset.mode === mode ? 'true' : 'false');
    });
    refs.mapBlock.hidden = mode !== 'map';
    saveViz();
  }
  function saveViz() {
    state.prefs.viz = state.viz;
    save(LS_PREFS, state.prefs);
  }
  Array.prototype.forEach.call(refs.vizModes.querySelectorAll('button'), function (b) {
    b.addEventListener('click', function () {
      setViz(b.dataset.mode);
    });
  });

  // Preferences: each control saves its value as soon as it changes.
  function applyPrefs() {
    document.documentElement.setAttribute('data-theme', state.prefs.theme);
    document.body.classList.toggle('show-translation', state.prefs.translation);
    document.body.classList.toggle('control-hidden', state.prefs.controlHidden);
    refs.text.style.fontSize = state.prefs.fontSize + 'px';
    refs.fontSize.value = state.prefs.fontSize;
    refs.nikud.checked = state.prefs.nikud;
    refs.translation.checked = state.prefs.translation;
    refs.verseNums.checked = state.prefs.verseNums;
    refs.theme.value = state.prefs.theme;
    refs.controlToggle.setAttribute('aria-expanded', state.prefs.controlHidden ? 'false' : 'true');
  }

  refs.fontSize.addEventListener('input', function () {
    state.prefs.fontSize = +refs.fontSize.value;
    refs.text.style.fontSize = state.prefs.fontSize + 'px';
    save(LS_PREFS, state.prefs);
  });
  refs.nikud.addEventListener('change', function () {
    state.prefs.nikud = refs.nikud.checked;
    save(LS_PREFS, state.prefs);
    renderText();
  });
  refs.translation.addEventListener('change', function () {
    state.prefs.translation = refs.translation.checked;
    document.body.classList.toggle('show-translation', state.prefs.translation);
    save(LS_PREFS, state.prefs);
  });
  refs.verseNums.addEventListener('change', function () {
    state.prefs.verseNums = refs.verseNums.checked;
    save(LS_PREFS, state.prefs);
    renderText();
  });
  refs.theme.addEventListener('change', function () {
    state.prefs.theme = refs.theme.value;
    document.documentElement.setAttribute('data-theme', state.prefs.theme);
    save(LS_PREFS, state.prefs);
  });
  refs.eraser.addEventListener('click', function () {
    state.eraser = !state.eraser;
    if (state.eraser) state.activeCat = null;
    renderSwatches();
  });
  refs.clearBtn.addEventListener('click', function () {
    if (!confirm('Clear all marks for the "' + palette().name + '" palette?')) return;
    state.marks[state.paletteId] = {};
    save(LS_MARKS, state.marks);
    renderText();
    renderSwatches();
    renderMap();
  });
  refs.controlToggle.addEventListener('click', function () {
    state.prefs.controlHidden = !state.prefs.controlHidden;
    document.body.classList.toggle('control-hidden', state.prefs.controlHidden);
    refs.controlToggle.setAttribute('aria-expanded', state.prefs.controlHidden ? 'false' : 'true');
    save(LS_PREFS, state.prefs);
  });

  // Keyboard: 1-6 pick a color, 0 is the eraser. Typing in a field is left alone.
  document.addEventListener('keydown', function (e) {
    if (/input|select|textarea/i.test(e.target.tagName || '')) return;
    if (e.key === '0') {
      state.eraser = true;
      state.activeCat = null;
      renderSwatches();
      return;
    }
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= palette().categories.length) {
      state.eraser = false;
      state.activeCat = palette().categories[n - 1].id;
      renderSwatches();
    }
  });

  // Startup: apply saved preferences, then draw every panel.
  if (state.prefs.viz) state.viz = state.prefs.viz;
  applyPrefs();
  renderPalettePicker();
  renderSwatches();
  renderText();
  setViz(state.viz);
  renderMap();
})();
