/* The daf reader (gemara.html). Lays the page out like the Vilna edition, with
   the Gemara in the middle and Rashi and Tosafot on the sides. A palette lets
   readers mark words, and a strip under the page shows the translation one
   phrase at a time. Daf data comes from daf-loader.js. */

(function () {
  'use strict';
  var DAFS = window.IYUN_DAFS;
  var PAL = window.IYUN_PALETTE;
  var DEFMARKS = window.IYUN_DEFAULT_MARKS || {};
  var NIKUD_RE = /[֑-ׇ]/g;
  var LS_PREF = 'iyun.daf.prefs.v4';
  var LS_MARK = 'iyun.daf.marks.v4';

  // Reader preferences, merged over whatever was saved last time.
  var prefs = Object.assign(
    {
      curDaf: '2a',
      showRashi: true,
      showTosafot: true,
      showMargins: false,
      nikud: false,
      mainSize: 23,
      commSize: 20,
      theme: 'light',
      translationSize: 16,
      translationLang: 'en',
      navMode: 'phrases',
      rashiFont: true,
      dafView: 'daf',
      controlHidden: true,
      mode: 'single',
      activeCat: null,
      barOpen: true,
      xi: 0,
    },
    readStored(LS_PREF)
  );
  prefs.activeCat = null; // a saved marking color shouldn't be active on reload
  var allMarks = readStored(LS_MARK) || {}; // { dafId: { wordKey: catId } }
  var requestedDaf = new URLSearchParams(window.location.search).get('daf');
  if (requestedDaf && window.IYUN_DAF_PREFIX) requestedDaf = window.IYUN_DAF_PREFIX + requestedDaf;
  var curIdx = 0;
  for (var _i = 0; _i < DAFS.length; _i++) {
    if (DAFS[_i].id === (requestedDaf || prefs.curDaf)) {
      curIdx = _i;
      break;
    }
  }
  var D = DAFS[curIdx]; // the daf on screen
  // Other tractates use ids like "shabbat-59b49f:2a". Berakhot just uses "2a".
  function dafLabel(id) {
    var i = id.indexOf(':');
    if (i < 0) return 'Berakhot ' + id;
    var name = id
      .slice(0, i)
      .replace(/-[0-9a-f]{6}$/, '')
      .replace(/-/g, ' ')
      .replace(/\b[a-z]/g, function (c) {
        return c.toUpperCase();
      });
    return name + ' ' + id.slice(i + 1);
  }
  window.IYUN_DAF_LABEL = dafLabel;
  window.IYUN_DAF_NOW = function () {
    return { name: D.masechetEn === 'Berachot' ? 'Berakhot' : D.masechetEn, daf: D.dafEn };
  };
  function currentMarks() {
    if (!allMarks[D.id]) allMarks[D.id] = {};
    return allMarks[D.id];
  }

  function readStored(k) {
    try {
      return JSON.parse(localStorage.getItem(k)) || null;
    } catch (e) {
      return null;
    }
  }
  // Storage can throw (private mode, quota), and the reader works fine without it.
  function writeStored(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  }
  function savePrefs() {
    writeStored(LS_PREF, prefs);
  }
  function saveMarks() {
    writeStored(LS_MARK, allMarks);
  }
  function $(id) {
    return document.getElementById(id);
  }
  function el(t, c, txt) {
    var e = document.createElement(t);
    if (c) e.className = c;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function strip(s) {
    return s.replace(NIKUD_RE, '');
  }
  function catById(id) {
    return PAL.categories.filter(function (c) {
      return c.id === id;
    })[0];
  }

  var R = {
    grid: $('dafGrid'),
    headDaf: $('headDaf'),
    headRunning: $('headRunning'),
    headAmud: $('headAmud'),
    colMasoret: $('colMasoret'),
    colRashi: $('colRashi'),
    colMain: $('colMain'),
    colTosafot: $('colTosafot'),
    colEin: $('colEin'),
    dafBottom: $('dafBottom'),
    railPrev: $('railPrev'),
    railNext: $('railNext'),
    railDaf: $('railDaf'),
    dafPicker: $('dafPicker'),
    navPrev: $('navPrev'),
    navNext: $('navNext'),
    showRashi: $('showRashi'),
    showTosafot: $('showTosafot'),
    showMargins: $('showMargins'),
    nikud: $('nikud'),
    mainSize: $('mainSize'),
    commSize: $('commSize'),
    theme: $('theme'),
    controlToggle: $('controlToggle'),
    mbModes: $('mbModes'),
    mbCats: $('mbCats'),
    mbName: $('mbName'),
    mbClose: $('mbClose'),
    markbar: $('markbar'),
    xlation: $('xlation'),
    xlText: $('xlText'),
    xlExpand: $('xlExpand'),
    xlPrev: $('xlPrev'),
    xlNext: $('xlNext'),
    fabAnnotate: $('fabAnnotate'),
  };

  var tokens = []; // all words in reading order, each {key, h, seg}
  var hebrewCueByKey = {};
  var rangeByKey = {}; // word key -> index of the preset range it belongs to
  var excludedKeys = {}; // words a preset range leaves out of the displayed text
  var activeRangeId = null;
  var selectedRangeIds = [];
  function tokenize() {
    tokens = [];
    var m = (D.mishnah || '').trim() ? D.mishnah.trim().split(/\s+/) : [];
    var fw = D.perekFirstWord ? strip(D.perekFirstWord) : null;
    if (fw && m.length && strip(m[0]).replace(/[.?,:]/g, '') === fw) m = m.slice(1); // the ornament already shows this word
    m.forEach(function (w, i) {
      tokens.push({ key: 'm' + i, h: w, seg: 'm' });
    });
    D.gemara
      .trim()
      .split(/\s+/)
      .forEach(function (w, i) {
        tokens.push({ key: 'g' + i, h: w, seg: 'g' });
      });
  }

  function buildRangeLookup() {
    rangeByKey = {};
    excludedKeys = {};
    var defaults = DEFMARKS[D.id];
    if (!defaults || !defaults.ranges) return;
    var keys = tokens.map(function (tk) {
      return tk.key;
    });
    defaults.ranges.forEach(function (range, ri) {
      (range.exclude || []).forEach(function (key) {
        excludedKeys[key] = true;
      });
      var start = keys.indexOf(range.start);
      var end = keys.indexOf(range.end);
      if (start < 0 || end < start) return;
      for (var k = start; k <= end; k++) {
        if (!range.exclude || range.exclude.indexOf(keys[k]) < 0) rangeByKey[keys[k]] = ri;
      }
    });
  }

  function seedDefaultMarks() {
    var defaults = DEFMARKS[D.id];
    if (!defaults) return;
    var mk = currentMarks();
    if (mk.__seedVersion === defaults.version) return;
    var suggested = {};
    tokens.forEach(function (tk) {
      var ri = rangeByKey[tk.key];
      if (ri !== undefined) suggested[tk.key] = defaults.ranges[ri].cat;
    });
    Object.keys(mk.__seeded || {}).forEach(function (key) {
      if (mk[key] === mk.__seeded[key]) delete mk[key];
    });
    Object.keys(suggested).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(mk, key)) mk[key] = suggested[key];
    });
    mk.__seeded = suggested;
    mk.__seedVersion = defaults.version;
    saveMarks();
  }

  function renderHead() {
    R.headDaf.textContent = D.daf;
    R.headRunning.textContent = prefs.nikud ? D.runningHead : strip(D.runningHead);
    R.headAmud.textContent = D.dafEn.toUpperCase();
  }

  function ornament() {
    var wrap = el('div', 'perek');
    var frame = el('div', 'pk-frame');
    frame.innerHTML =
      '<svg viewBox="0 0 440 156" aria-hidden="true">' +
      '<g fill="none" stroke="currentColor" stroke-width="1.15">' +
      '<path d="M8 8 H66 L38 36 L38 120 L66 148 H8 V8 Z M432 8 H374 L402 36 L402 120 L374 148 H432 V8 Z"/>' +
      '<path d="M14 14 H55 L31 38 V118 L55 142 H14 V14 Z M426 14 H385 L409 38 V118 L385 142 H426 V14 Z"/>' +
      '<path d="M70 8 H370 L430 78 L370 148 H70 L10 78 Z"/>' +
      '<path d="M77 15 H363 L420 78 L363 141 H77 L20 78 Z"/>' +
      '<path d="M84 22 H356 L411 78 L356 134 H84 L29 78 Z"/>' +
      '<path d="M93 28 H347 L401 78 L347 128 H93 L39 78 Z"/>' +
      '</g>' +
      '<g fill="none" stroke="currentColor" stroke-width=".75" stroke-dasharray="1 4" opacity=".8">' +
      '<path d="M81 18 H359 L416 78 L359 138 H81 L24 78 Z"/>' +
      '<path d="M18 18 H47 L25 40 V116 L47 138 H18 Z M422 18 H393 L415 40 V116 L393 138 H422 Z"/>' +
      '</g>' +
      '</svg>';
    var word = el('span', 'pk-word');
    var opener = el('span', 'pk-opener', prefs.nikud ? D.perekFirstWord : strip(D.perekFirstWord));
    opener.dataset.range = '0';
    opener.style.setProperty('--fill', catById('question').fill);
    word.appendChild(opener);
    frame.appendChild(word);
    wrap.appendChild(frame);
    return wrap;
  }

  function renderMain() {
    var c = R.colMain;
    c.innerHTML = '';
    if (D.perekFirstWord) c.appendChild(ornament());
    var mk = currentMarks();
    var hasMishnah = tokens.length && tokens[0].seg === 'm';
    var seg = el('div', 'seg');
    tokens.forEach(function (tk) {
      if (excludedKeys[tk.key]) return; // inline verse references, not part of the text we show
      if (tk.key === 'g0' && hasMishnah) {
        seg.appendChild(el('span', 'lead', 'גְּמָ׳ '));
      }
      var w = el('span', 'w');
      w.dataset.key = tk.key;
      if (rangeByKey[tk.key] !== undefined) w.dataset.range = rangeByKey[tk.key];
      var displayHebrew = prefs.nikud ? tk.h : strip(tk.h);
      w.textContent = displayHebrew;
      if (
        window.IYUN_PUNCTUATION &&
        window.IYUN_PUNCTUATION[D.id] &&
        window.IYUN_PUNCTUATION[D.id][tk.key]
      ) {
        w.textContent += window.IYUN_PUNCTUATION[D.id][tk.key];
      }
      var cat = mk[tk.key];
      if (cat && catById(cat)) {
        w.dataset.cat = cat;
        w.style.setProperty('--c', catById(cat).color);
        w.style.setProperty('--fill', catById(cat).fill || catById(cat).color);
        w.title = catById(cat).label;
      } else if (hebrewCueByKey[tk.key]) {
        var cue = hebrewCueByKey[tk.key];
        w.dataset.cue = cue.role || 'source';
        w.title = 'Discourse cue: ' + cue.meaning + '. Only this formula is identified.';
      }
      w.appendChild(document.createTextNode(' '));
      seg.appendChild(w);
    });
    c.appendChild(seg);
    applyMode();
  }

  // Commentary is split into one span per word so it can wrap around the columns.
  function buildWordNodes(items, src) {
    var nodes = [];
    items.forEach(function (it, ci) {
      function add(cls, w) {
        var s = el('span', cls, w + ' ');
        s.dataset.src = src;
        s.dataset.ci = ci;
        if (it.en) s.dataset.hasEn = '1';
        nodes.push(s);
      }
      it.dh.split(/\s+/).forEach(function (w) {
        if (w) add('cw dh', w);
      });
      (it.text || '')
        .trim()
        .split(/\s+/)
        .forEach(function (w) {
          if (w) add('cw', w);
        });
    });
    return nodes;
  }
  // Add nodes to a column until it reaches maxH and hand back whatever didn't fit.
  function fillColumn(colEl, nodes, maxH) {
    colEl.innerHTML = '';
    for (var i = 0; i < nodes.length; i++) colEl.appendChild(nodes[i]);
    var over = [];
    while (maxH > 0 && colEl.offsetHeight > maxH && colEl.lastChild) {
      over.unshift(colEl.lastChild);
      colEl.removeChild(colEl.lastChild);
    }
    return over;
  }
  // Like the printed Vilna page, Rashi and Tosafot that run longer than the
  // Gemara continue in a full-width band at the bottom.
  function renderBand(rOver, tOver) {
    if (!R.dafBottom) return;
    R.dafBottom.innerHTML = '';
    if (!rOver.length && !tOver.length) {
      R.dafBottom.style.display = 'none';
      return;
    }
    R.dafBottom.style.display = '';
    rOver.forEach(function (n) {
      R.dafBottom.appendChild(n);
    });
    if (rOver.length && tOver.length) R.dafBottom.appendChild(el('span', 'band-gap'));
    tOver.forEach(function (n) {
      R.dafBottom.appendChild(n);
    });
  }
  function renderDaf() {
    layoutColumns();
    renderMain(); // the Gemara column sets the height
    var maxH = R.colMain.offsetHeight; // Rashi and Tosafot must stop here
    var rOver = [],
      tOver = [];
    var rNodes = buildWordNodes(D.rashi, 'rashi');
    if (prefs.showRashi) rOver = fillColumn(R.colRashi, rNodes, maxH);
    else R.colRashi.innerHTML = '';
    if (prefs.showTosafot)
      tOver = fillColumn(R.colTosafot, buildWordNodes(D.tosafot, 'tosafot'), maxH);
    else R.colTosafot.innerHTML = '';
    renderBand(rOver, tOver);
    renderMargins();
    var n = (D.translations || []).length;
    if (n) highlightSegment(((prefs.xi % n) + n) % n, false);
  }
  function renderMargins() {
    R.colEin.innerHTML = '';
    (D.einMishpat || []).forEach(function (e) {
      var d = el('div', 'item');
      d.appendChild(el('span', 'ot', e.ot));
      d.appendChild(document.createTextNode(e.text));
      R.colEin.appendChild(d);
    });
    R.colMasoret.innerHTML = '';
    (D.masoret || []).forEach(function (m) {
      R.colMasoret.appendChild(el('div', 'mitem', m));
    });
  }

  // Rashi sits on the inner side, Tosafot on the outer side.
  function layoutColumns() {
    [R.colEin, R.colRashi, R.colMain, R.colTosafot, R.colMasoret].forEach(function (n) {
      R.grid.appendChild(n);
    });
    R.colRashi.style.display = prefs.showRashi ? '' : 'none';
    R.colTosafot.style.display = prefs.showTosafot ? '' : 'none';
    document.body.classList.toggle('show-margins', prefs.showMargins);
  }

  var readingCats = [];
  function selectReadingRange(ri) {
    activeRangeId = ri === undefined ? null : ri;
    if (activeRangeId !== null) {
      if (prefs.mode === 'multiple') {
        if (selectedRangeIds.indexOf(activeRangeId) < 0) selectedRangeIds.push(activeRangeId);
      } else selectedRangeIds = [activeRangeId];
    }
    var defaults = DEFMARKS[D.id];
    var range = defaults && defaults.ranges && defaults.ranges[activeRangeId];
    showReadingCategories(range ? [catById(range.cat)] : []);
  }
  function showReadingCategories(categories) {
    readingCats = categories.map(function (cat) {
      return cat.id;
    });
    Array.prototype.forEach.call(R.mbCats.querySelectorAll('.mb-cat'), function (b) {
      var current = readingCats.indexOf(b.dataset.cat) >= 0;
      b.classList.toggle('is-current', current);
      if (current) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
    applyMode();
  }
  function renderCats() {
    R.mbCats.innerHTML = '';
    PAL.categories.forEach(function (cat) {
      var b = el('span', 'mb-cat');
      b.dataset.cat = cat.id;
      b.style.setProperty('--c', cat.color);
      b.classList.toggle('is-current', readingCats.indexOf(cat.id) >= 0);
      if (readingCats.indexOf(cat.id) >= 0) b.setAttribute('aria-current', 'true');
      b.appendChild(el('span', 'chip'));
      b.appendChild(document.createTextNode(cat.label));
      R.mbCats.appendChild(b);
    });
    R.mbName.textContent =
      PAL.name +
      (window.IYUN_ANNOTATION_STATUS && window.IYUN_ANNOTATION_STATUS[D.id] === 'draft'
        ? ' · Draft'
        : '');
  }
  function applyMode() {
    document.body.classList.remove('mode-all', 'mode-single', 'mode-multiple');
    document.body.classList.add('mode-' + prefs.mode);
    Array.prototype.forEach.call(R.mbModes.querySelectorAll('button'), function (b) {
      b.classList.toggle('active', b.dataset.mode === prefs.mode);
    });
    $('mbClear').hidden = prefs.mode !== 'multiple';
    var visible = prefs.mode === 'single' ? [activeRangeId] : selectedRangeIds;
    Array.prototype.forEach.call(R.colMain.querySelectorAll('.w'), function (w) {
      if (w.dataset.cat && visible.indexOf(+w.dataset.range) >= 0) w.dataset.catActive = '1';
      else delete w.dataset.catActive;
    });
  }
  function markWord(w) {
    var key = w.dataset.key;
    if (!prefs.activeCat) return;
    var mk = currentMarks();
    if (mk[key] === prefs.activeCat) {
      mk[key] = null;
      delete w.dataset.cat;
      w.style.removeProperty('--c');
      w.removeAttribute('title');
    } else {
      mk[key] = prefs.activeCat;
      w.dataset.cat = prefs.activeCat;
      w.style.setProperty('--c', catById(prefs.activeCat).color);
      w.title = catById(prefs.activeCat).label;
    }
    saveMarks();
    if (curView.type === 'gemara') {
      focusedWord = key;
      renderXlation(false);
    } else applyMode();
  }
  // Joins neighbouring words with the same mark (and the same preset range) into
  // ranges. Words without a mark are collected so the export can refuse to go ahead.
  function marksToRanges() {
    var ranges = [],
      previous = null,
      missing = [];
    var marks = currentMarks();
    tokens.forEach(function (tk) {
      var cat = marks[tk.key];
      if (!catById(cat)) {
        missing.push(tk.key);
        previous = null;
        return;
      }
      var original = rangeByKey[tk.key];
      if (previous && previous.cat === cat && previous._original === original)
        previous.end = tk.key;
      else {
        previous = { cat: cat, start: tk.key, end: tk.key, _original: original };
        ranges.push(previous);
      }
    });
    return { ranges: ranges, missing: missing };
  }
  function downloadJSON(filename, data) {
    var url = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2) + '\n'], { type: 'application/json' })
    );
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }
  // Downloads the reader's own marking as a draft annotation file for review.
  function exportMarkup() {
    var collected = marksToRanges(),
      ranges = collected.ranges,
      missing = collected.missing;
    if (missing.length) {
      $('annotationHint').textContent =
        'Mark every word before exporting a complete draft. Missing: ' +
        missing.length +
        ' words (first: ' +
        missing[0] +
        ').';
      return;
    }
    var defaults = DEFMARKS[D.id];
    ranges.forEach(function (range) {
      var old = defaults && defaults.ranges && defaults.ranges[range._original];
      if (
        old &&
        old.cat === range.cat &&
        old.start === range.start &&
        old.end === range.end &&
        old.en
      )
        range.en = old.en;
      delete range._original;
    });
    var record = {
      version: (defaults ? defaults.version : 0) + 1,
      status: 'draft',
      source: 'Reader markup export; awaiting editorial review',
      textHash: window.IYUN_ANNOTATION.textHash(D),
      ranges: ranges,
    };
    var check = window.IYUN_ANNOTATION.validate(D, record);
    if (check.errors.length) {
      $('annotationHint').textContent = 'Markup export failed validation: ' + check.errors[0];
      return;
    }
    var documentData = {
      schema: 1,
      tractate: D.masechetEn === 'Berachot' ? 'Berakhot' : D.masechetEn,
      dapim: {},
    };
    documentData.dapim[D.dafEn] = record;
    downloadJSON('shakla-' + D.dafEn + '-draft.json', documentData);
    $('annotationHint').textContent =
      'Downloaded a complete draft for ' + D.dafEn + '. Review it before import.';
  }
  var exportButton = $('exportMarkup');
  if (exportButton) exportButton.addEventListener('click', exportMarkup);
  // Index of the translation segment whose Gemara words include token idx, or -1.
  function translationIndexAt(idx) {
    for (var s = 0; s < D.translations.length; s++) {
      var r = D.translations[s]._range;
      if (r && idx >= r[0] && idx <= r[1]) return s;
    }
    return -1;
  }
  R.colMain.addEventListener('click', function (e) {
    var w = e.target.closest ? e.target.closest('.w') : null;
    if (!w) return;
    var key = w.dataset.key;
    if (window.IYUN_PUNCTUATE_CHAR !== undefined) {
      window.dispatchEvent(new CustomEvent('iyun:punctuate', { detail: { key: key } }));
      return;
    }
    if (prefs.activeCat) {
      markWord(w);
      return;
    }
    // no marker is picked, so show the translation of the phrase this word is in
    var idx = tokens.findIndex(function (tk) {
      return tk.key === key;
    });
    if (idx < 0) return;
    activeRangeId = rangeByKey[key] === undefined ? null : rangeByKey[key];
    if (prefs.navMode === 'words') {
      wordIdx = idx;
      renderWordView(false);
      return;
    }
    var hasCue = activeRangeId !== null || hebrewCueByKey[key];
    if (!D.translations.length && hasCue) {
      focusedWord = key;
      renderXlation(false);
      return;
    }
    var segment = translationIndexAt(idx);
    if (segment >= 0) {
      prefs.xi = segment;
      focusedWord = key;
      savePrefs();
      renderXlation(false);
    } else if (hasCue) {
      focusedWord = key;
      renderXlation(false);
    }
  });
  Array.prototype.forEach.call(R.mbModes.querySelectorAll('button'), function (b) {
    if (!b.dataset.mode) return;
    b.addEventListener('click', function () {
      prefs.mode = b.dataset.mode;
      savePrefs();
      if (activeRangeId !== null) selectedRangeIds = [activeRangeId];
      applyMode();
    });
  });
  $('mbClear').addEventListener('click', function () {
    selectedRangeIds = activeRangeId === null ? [] : [activeRangeId];
    applyMode();
  });
  R.mbClose.addEventListener('click', function () {
    toggleBar(false);
  });
  R.fabAnnotate.addEventListener('click', function () {
    toggleBar(!prefs.barOpen);
  });
  function dafHasTranslation() {
    if (D.translations && D.translations.length) return true;
    var has = function (c) {
      return c.en;
    };
    return (D.rashi && D.rashi.some(has)) || (D.tosafot && D.tosafot.some(has));
  }
  function toggleBar(open) {
    prefs.barOpen = open;
    savePrefs();
    R.markbar.style.display = open ? '' : 'none';
    R.xlation.style.display = open && dafHasTranslation() ? '' : 'none';
    R.fabAnnotate.setAttribute('aria-pressed', open ? 'true' : 'false');
  }

  // Work out which run of tokens each translation segment covers, so the
  // matching Gemara phrase can be highlighted when its segment is shown.
  function mapSegments() {
    var aligned = window.IYUN_ARGUMENT_CUES.align(tokens, D.translations || []);
    (D.translations || []).forEach(function (seg, i) {
      seg._range = aligned[i].range;
      seg._alignment = aligned[i].score;
    });
  }
  function clearXlHighlight() {
    [R.colMain, R.colRashi, R.colTosafot, R.dafBottom].forEach(function (col) {
      if (col)
        Array.prototype.forEach.call(col.querySelectorAll('.xl-active'), function (w) {
          w.classList.remove('xl-active');
        });
    });
  }
  function renderStrip(label, he, en, countText, noTransMsg, categories, credit) {
    R.xlText.innerHTML = '';
    R.xlation.classList.remove('xlation-expanded');
    R.xlExpand.hidden = !(en && en.length > 550);
    R.xlExpand.setAttribute('aria-expanded', 'false');
    R.xlExpand.textContent = 'Expand';
    var meta = el('div', 'xl-meta');
    meta.appendChild(el('span', 'xl-label', label));
    if (countText) meta.appendChild(el('span', 'xl-count', countText));
    if (credit) meta.appendChild(el('span', 'xl-source', credit));
    if (window.IYUN_ANNOTATION_STATUS && window.IYUN_ANNOTATION_STATUS[D.id] === 'draft') {
      meta.appendChild(el('span', 'xl-source', 'Draft markup · awaiting review'));
    }
    (categories || []).forEach(function (cat) {
      var badge = el('span', 'xl-category', cat.label);
      badge.style.setProperty('--c', cat.color);
      meta.appendChild(badge);
    });
    R.xlText.appendChild(meta);
    if (he) R.xlText.appendChild(el('div', 'xl-he', he));
    if (en || noTransMsg) {
      var english = el('div', 'xl-en' + (noTransMsg ? ' xl-note' : ''));
      english.textContent = noTransMsg || en;
      R.xlText.appendChild(english);
    }
    R.xlText.scrollTop = 0;
  }
  function appendHebrewCue() {
    var cue = focusedWord && hebrewCueByKey[focusedWord];
    if (!cue) return;
    var badge = el('span', 'xl-cue', cue.meaning + ' · Hebrew cue');
    badge.style.setProperty(
      '--c',
      cue.role && catById(cue.role) ? catById(cue.role).color : '#9a7527'
    );
    badge.title =
      'Only the printed discourse formula is identified; the full argument span still needs review.';
    R.xlText.querySelector('.xl-meta').appendChild(badge);
  }
  function highlightSegment(i, scroll) {
    clearXlHighlight();
    if (DEFMARKS[D.id] && activeRangeId !== null) {
      var firstRangeWord = R.colMain.querySelector('.w[data-range="' + activeRangeId + '"]');
      if (firstRangeWord && scroll)
        firstRangeWord.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }
    var seg = D.translations[i];
    if (!seg || !seg._range) return;
    if (i === 0 && D.perekFirstWord) {
      var opener = R.colMain.querySelector('.pk-opener');
      if (opener) opener.classList.add('xl-active');
    }
    var first = null;
    for (var k = seg._range[0]; k <= seg._range[1]; k++) {
      var w = R.colMain.querySelector('.w[data-key="' + tokens[k].key + '"]');
      if (w) {
        w.classList.add('xl-active');
        if (!first) first = w;
      }
    }
    if (first && scroll) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
  // Tracks what the strip shows, so the arrow buttons step through the right list.
  var curView = { type: 'gemara', idx: 0 };
  var focusedWord = null;
  var wordIdx = 0;
  function segmentCategories(segment) {
    if (!segment._range) return [];
    var mk = currentMarks(),
      ids = [];
    for (var k = segment._range[0]; k <= segment._range[1]; k++) {
      var cat = mk[tokens[k].key];
      if (cat && ids.indexOf(cat) < 0) ids.push(cat);
    }
    if (focusedWord && mk[focusedWord] && ids.indexOf(mk[focusedWord]) >= 0)
      ids = [mk[focusedWord]];
    return ids.map(catById).filter(Boolean);
  }
  function rangeTranslation(ri, lang) {
    var defaults = DEFMARKS[D.id];
    var range = defaults && defaults.ranges && defaults.ranges[ri];
    if (!range) return null;
    var start = tokens.findIndex(function (tk) {
      return tk.key === range.start;
    });
    var end = tokens.findIndex(function (tk) {
      return tk.key === range.end;
    });
    if (start < 0 || end < start) return null;
    if (lang === 'he')
      return tokens
        .slice(start, end + 1)
        .filter(function (tk) {
          return !excludedKeys[tk.key];
        })
        .map(function (tk) {
          return tk.h;
        })
        .join(' ');
    if (range.en) return range.en;
    return D.translations
      .filter(function (seg) {
        return seg._range && seg._range[0] <= end && seg._range[1] >= start;
      })
      .map(function (seg) {
        return seg.en || '';
      })
      .filter(Boolean)
      .join(' ');
  }
  function renderXlation(scroll) {
    var n = D.translations.length;
    if (!n) {
      var annotated = DEFMARKS[D.id];
      if (annotated && annotated.ranges && annotated.ranges.length) {
        if (activeRangeId === null) activeRangeId = 0;
        var current = annotated.ranges[activeRangeId];
        curView = { type: 'gemara', idx: activeRangeId };
        selectReadingRange(activeRangeId);
        renderStrip(
          current.start.charAt(0) === 'm' ? 'MISHNAH' : 'GEMARA',
          '',
          rangeTranslation(activeRangeId, prefs.translationLang),
          activeRangeId + 1 + ' / ' + annotated.ranges.length,
          null,
          readingCats.map(catById).filter(Boolean)
        );
        appendHebrewCue();
        highlightSegment(0, scroll);
        return;
      }
      showReadingCategories([]);
      clearXlHighlight();
      curView = { type: 'none', idx: 0 };
      renderStrip(
        'Translation',
        '',
        '',
        null,
        'Tap a Rashi or Tosafot comment to see its translation.'
      );
      appendHebrewCue();
      return;
    }
    var i = ((prefs.xi % n) + n) % n;
    R.xlPrev.disabled = false;
    R.xlNext.disabled = false;
    curView = { type: 'gemara', idx: i };
    var t = D.translations[i];
    var firstKey = t._range && tokens[t._range[0]] && tokens[t._range[0]].key;
    selectReadingRange(focusedWord ? rangeByKey[focusedWord] : rangeByKey[firstKey]);
    var categories = readingCats.map(catById).filter(Boolean);
    var rangeText = rangeTranslation(activeRangeId, prefs.translationLang);
    var activeDefaults = DEFMARKS[D.id];
    var cue =
      !activeDefaults &&
      t._alignment >= 0.8 &&
      t._range &&
      window.IYUN_ARGUMENT_CUES &&
      window.IYUN_ARGUMENT_CUES.classify(t.en);
    renderStrip(
      t.label,
      '',
      rangeText || (prefs.translationLang === 'he' ? t.he || '' : t.en),
      activeDefaults && activeRangeId !== null
        ? activeRangeId + 1 + ' / ' + activeDefaults.ranges.length
        : i + 1 + ' / ' + n,
      null,
      categories,
      rangeText ? null : prefs.translationLang === 'en' ? t.credit || null : null
    );
    if (cue) {
      var cueBadge = el('span', 'xl-cue', catById(cue).label + ' · English cue');
      cueBadge.style.setProperty('--c', catById(cue).color);
      cueBadge.title =
        'The opening of this translated line suggests this role. It is not a reviewed Hebrew word annotation.';
      R.xlText.querySelector('.xl-meta').appendChild(cueBadge);
    }
    appendHebrewCue();
    highlightSegment(i, scroll);
    window.dispatchEvent(
      new CustomEvent('iyun:segmentchange', { detail: { daf: D.id, segment: i } })
    );
  }
  function renderWordView(scroll) {
    if (!tokens.length) return;
    R.xlPrev.disabled = false;
    R.xlNext.disabled = false;
    wordIdx = ((wordIdx % tokens.length) + tokens.length) % tokens.length;
    var tk = tokens[wordIdx],
      cat = catById(currentMarks()[tk.key]);
    focusedWord = tk.key;
    curView = { type: 'word', idx: wordIdx };
    selectReadingRange(rangeByKey[tk.key]);
    renderStrip(
      'WORD',
      prefs.nikud ? tk.h : strip(tk.h),
      '',
      wordIdx + 1 + ' / ' + tokens.length,
      null,
      cat ? [cat] : []
    );
    clearXlHighlight();
    var w = R.colMain.querySelector('.w[data-key="' + tk.key + '"]');
    if (w) {
      w.classList.add('xl-active');
      if (scroll) w.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }
  // Show the translation for a Rashi or Tosafot comment and highlight it.
  function showComment(src, ci, scroll) {
    focusedWord = null;
    R.xlPrev.disabled = false;
    R.xlNext.disabled = false;
    showReadingCategories([]);
    var list = src === 'rashi' ? D.rashi : D.tosafot;
    if (!list || !list.length) return;
    ci = ((ci % list.length) + list.length) % list.length;
    var c = list[ci];
    if (!c) return;
    curView = { type: src, idx: ci };
    clearXlHighlight();
    var sel = '[data-src="' + src + '"][data-ci="' + ci + '"]';
    var first = null;
    [R.colRashi, R.colTosafot, R.dafBottom].forEach(function (col) {
      if (!col) return;
      Array.prototype.forEach.call(col.querySelectorAll(sel), function (w) {
        w.classList.add('xl-active');
        if (!first) first = w;
      });
    });
    renderStrip(
      src === 'rashi' ? D.rashiName || 'RASHI' : 'TOSAFOT',
      '',
      prefs.translationLang === 'he' ? c.dh : c.en || '',
      ci + 1 + ' / ' + list.length,
      c.en ? null : 'No open translation for this comment yet.',
      [],
      prefs.translationLang === 'en' ? c.enCredit : null
    );
    if (prefs.barOpen) R.xlation.style.display = '';
    if (first && scroll !== false) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
  // Move to the previous or next item in whatever the strip is showing.
  function stepStrip(dir) {
    focusedWord = null;
    if (curView.type === 'rashi' || curView.type === 'tosafot') {
      showComment(curView.type, curView.idx + dir, true);
    } else if (prefs.navMode === 'words') {
      wordIdx += dir;
      renderWordView(true);
    } else if (DEFMARKS[D.id] && DEFMARKS[D.id].ranges) {
      goRange((activeRangeId === null ? 0 : activeRangeId) + dir);
    } else {
      var n = D.translations.length;
      if (!n) return;
      do {
        prefs.xi = (((prefs.xi + dir) % n) + n) % n;
      } while (
        prefs.navMode === 'markup' &&
        segmentCategories(D.translations[prefs.xi]).length === 0 &&
        prefs.xi !== curView.idx
      );
      savePrefs();
      renderXlation(true);
    }
  }
  function goRange(ri) {
    var defaults = DEFMARKS[D.id];
    if (!defaults || !defaults.ranges || !defaults.ranges.length) return;
    ri = ((ri % defaults.ranges.length) + defaults.ranges.length) % defaults.ranges.length;
    var key = defaults.ranges[ri].start;
    var index = tokens.findIndex(function (tk) {
      return tk.key === key;
    });
    if (index < 0) return;
    var segment = translationIndexAt(index);
    if (segment >= 0) prefs.xi = segment;
    focusedWord = key;
    savePrefs();
    renderXlation(true);
  }
  function commentaryClick(e) {
    var w = e.target.closest ? e.target.closest('.cw') : null;
    if (!w || !w.dataset.src) return;
    showComment(w.dataset.src, +w.dataset.ci, false);
  }
  if (R.colRashi) R.colRashi.addEventListener('click', commentaryClick);
  if (R.colTosafot) R.colTosafot.addEventListener('click', commentaryClick);
  if (R.dafBottom) R.dafBottom.addEventListener('click', commentaryClick);
  R.xlPrev.addEventListener('click', function () {
    stepStrip(-1);
  });
  R.xlNext.addEventListener('click', function () {
    stepStrip(1);
  });
  R.xlExpand.addEventListener('click', function () {
    var expanded = R.xlation.classList.toggle('xlation-expanded');
    R.xlExpand.setAttribute('aria-expanded', String(expanded));
    R.xlExpand.textContent = expanded ? 'Collapse' : 'Expand';
  });

  function updateNav() {
    if (R.railDaf) R.railDaf.textContent = D.dafEn;
    if (R.dafPicker) R.dafPicker.value = D.id;
    var first = curIdx === 0,
      last = curIdx === DAFS.length - 1;
    [R.railPrev, R.navPrev].forEach(function (b) {
      if (b) b.disabled = first;
    });
    [R.railNext, R.navNext].forEach(function (b) {
      if (b) b.disabled = last;
    });
  }
  // The note under the markup bar says how much of this daf has a preset.
  function updateAnnotationHint(status) {
    var hint = $('annotationHint');
    if (!hint) return;
    hint.textContent =
      status === 'draft'
        ? 'Shakla v’Tarya: complete draft for this daf; labels await editorial review.'
        : status === 'reviewed'
          ? 'Shakla v’Tarya: reviewed preset for this daf.'
          : 'Shakla v’Tarya: no preset for this daf yet. Manual marking is available.';
    if (status) return;
    var cues = D.translations.filter(function (t) {
      return t._range && t._alignment >= 0.8 && window.IYUN_ARGUMENT_CUES.classify(t.en);
    }).length;
    if (cues)
      hint.textContent =
        'Shakla v’Tarya: no complete preset. ' +
        cues +
        ' aligned English argument cues appear in the translation strip; these identify only the opening move of a line and need Hebrew review.';
    if (Object.keys(hebrewCueByKey).length)
      hint.textContent +=
        ' Dotted Hebrew terms show literal discourse cues, not full argument ranges.';
  }
  function loadDaf(idx) {
    focusedWord = null;
    curIdx = Math.max(0, Math.min(DAFS.length - 1, idx));
    D = DAFS[curIdx];
    prefs.curDaf = D.id;
    prefs.xi = 0;
    savePrefs();
    var status = window.IYUN_ANNOTATION_STATUS && window.IYUN_ANNOTATION_STATUS[D.id];
    renderCats();
    tokenize();
    mapSegments();
    buildRangeLookup();
    seedDefaultMarks();
    hebrewCueByKey = DEFMARKS[D.id] ? {} : window.IYUN_ARGUMENT_CUES.hebrewMarkers(tokens);
    updateAnnotationHint(status);
    activeRangeId = DEFMARKS[D.id] && DEFMARKS[D.id].ranges ? 0 : null;
    selectedRangeIds = activeRangeId === null ? [] : [activeRangeId];
    renderHead();
    renderDaf();
    renderXlation(false);
    updateQuickSettings();
    if (prefs.navMode === 'words') {
      wordIdx = 0;
      renderWordView(false);
    }
    toggleBar(prefs.barOpen);
    updateNav();
    clearSearchHits();
    loadNotes();
    updateBookmarkBtn();
    R.reader = R.reader || document.querySelector('.reader');
    if (R.reader) R.reader.scrollTop = 0;
  }

  function applyPrefs() {
    document.documentElement.setAttribute('data-theme', prefs.theme);
    document.body.classList.toggle('control-hidden', prefs.controlHidden);
    R.colMain.style.fontSize = prefs.mainSize + 'px';
    R.colRashi.style.fontSize = prefs.commSize + 'px';
    R.colTosafot.style.fontSize = prefs.commSize + 'px';
    R.nikud.checked = prefs.nikud;
    R.showRashi.checked = prefs.showRashi;
    R.showTosafot.checked = prefs.showTosafot;
    if (R.showMargins) R.showMargins.checked = prefs.showMargins;
    R.mainSize.value = prefs.mainSize;
    R.commSize.value = prefs.commSize;
    R.theme.value = prefs.theme;
    R.controlToggle.setAttribute('aria-expanded', prefs.controlHidden ? 'false' : 'true');
    document.body.classList.toggle('square-commentary', !prefs.rashiFont);
    document.body.classList.toggle('full-daf-view', prefs.dafView === 'full');
    R.xlText.style.setProperty('--translation-size', prefs.translationSize + 'px');
  }

  // Small settings panel, same as the bottom tray on the public reader.
  var quick = $('quickSettings'),
    quickToggle = $('quickToggle');
  function updateQuickSettings() {
    [
      ['qsDafView', prefs.dafView === 'daf'],
      ['qsFullView', prefs.dafView === 'full'],
      ['qsEnglish', prefs.translationLang === 'en'],
      ['qsHebrew', prefs.translationLang === 'he'],
      ['qsWords', prefs.navMode === 'words'],
      ['qsPhrases', prefs.navMode === 'phrases'],
      ['qsMarkup', prefs.navMode === 'markup'],
      ['qsRashi', prefs.rashiFont],
      ['qsVowels', prefs.nikud],
    ].forEach(function (item) {
      $(item[0]).classList.toggle('active', item[1]);
    });
  }
  quickToggle.addEventListener('click', function () {
    var open = quick.hidden;
    quick.hidden = !open;
    document.body.classList.toggle('quick-open', open);
    quickToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  function changePageSize(delta) {
    prefs.mainSize = Math.max(18, Math.min(34, prefs.mainSize + delta));
    prefs.commSize = Math.max(12, Math.min(22, prefs.commSize + delta));
    savePrefs();
    applyPrefs();
    renderDaf();
  }
  $('qsSmaller').addEventListener('click', function () {
    changePageSize(-1);
  });
  $('qsLarger').addEventListener('click', function () {
    changePageSize(1);
  });
  [
    ['qsDafView', 'daf'],
    ['qsFullView', 'full'],
  ].forEach(function (item) {
    $(item[0]).addEventListener('click', function () {
      prefs.dafView = item[1];
      savePrefs();
      applyPrefs();
      updateQuickSettings();
      renderDaf();
    });
  });
  [
    ['qsTextSmaller', -1],
    ['qsTextLarger', 1],
  ].forEach(function (item) {
    $(item[0]).addEventListener('click', function () {
      prefs.translationSize = Math.max(12, Math.min(24, prefs.translationSize + item[1]));
      savePrefs();
      applyPrefs();
    });
  });
  [
    ['qsEnglish', 'en'],
    ['qsHebrew', 'he'],
  ].forEach(function (item) {
    $(item[0]).addEventListener('click', function () {
      prefs.translationLang = item[1];
      savePrefs();
      updateQuickSettings();
      if (curView.type === 'rashi' || curView.type === 'tosafot')
        showComment(curView.type, curView.idx, false);
      else if (prefs.navMode === 'words') renderWordView(false);
      else renderXlation(false);
    });
  });
  [
    ['qsWords', 'words'],
    ['qsPhrases', 'phrases'],
    ['qsMarkup', 'markup'],
  ].forEach(function (item) {
    $(item[0]).addEventListener('click', function () {
      prefs.navMode = item[1];
      savePrefs();
      updateQuickSettings();
      if (prefs.navMode === 'words') renderWordView(false);
      else {
        focusedWord = null;
        renderXlation(false);
      }
    });
  });
  $('qsRashi').addEventListener('click', function () {
    prefs.rashiFont = !prefs.rashiFont;
    savePrefs();
    applyPrefs();
    updateQuickSettings();
    renderDaf();
  });
  $('qsVowels').addEventListener('click', function () {
    prefs.nikud = !prefs.nikud;
    savePrefs();
    applyPrefs();
    updateQuickSettings();
    renderHead();
    renderDaf();
  });

  if (R.dafPicker) {
    DAFS.forEach(function (d) {
      var o = el('option', null, D.masechetEn + ' ' + d.dafEn);
      o.value = d.id;
      R.dafPicker.appendChild(o);
    });
    R.dafPicker.addEventListener('change', function () {
      for (var k = 0; k < DAFS.length; k++) {
        if (DAFS[k].id === R.dafPicker.value) {
          loadDaf(k);
          break;
        }
      }
    });
  }
  if (R.navPrev)
    R.navPrev.addEventListener('click', function () {
      loadDaf(curIdx - 1);
    });
  if (R.navNext)
    R.navNext.addEventListener('click', function () {
      loadDaf(curIdx + 1);
    });
  if (R.railPrev)
    R.railPrev.addEventListener('click', function () {
      loadDaf(curIdx - 1);
    });
  if (R.railNext)
    R.railNext.addEventListener('click', function () {
      loadDaf(curIdx + 1);
    });
  R.showRashi.addEventListener('change', function () {
    prefs.showRashi = R.showRashi.checked;
    savePrefs();
    renderDaf();
  });
  R.showTosafot.addEventListener('change', function () {
    prefs.showTosafot = R.showTosafot.checked;
    savePrefs();
    renderDaf();
  });
  if (R.showMargins)
    R.showMargins.addEventListener('change', function () {
      prefs.showMargins = R.showMargins.checked;
      savePrefs();
      renderDaf();
    });
  R.nikud.addEventListener('change', function () {
    prefs.nikud = R.nikud.checked;
    savePrefs();
    renderHead();
    renderDaf();
  });
  R.mainSize.addEventListener('input', function () {
    prefs.mainSize = +R.mainSize.value;
    R.colMain.style.fontSize = prefs.mainSize + 'px';
    savePrefs();
  });
  R.mainSize.addEventListener('change', function () {
    renderDaf();
  });
  R.commSize.addEventListener('input', function () {
    prefs.commSize = +R.commSize.value;
    R.colRashi.style.fontSize = R.colTosafot.style.fontSize = prefs.commSize + 'px';
    savePrefs();
  });
  R.commSize.addEventListener('change', function () {
    renderDaf();
  });
  R.theme.addEventListener('change', function () {
    prefs.theme = R.theme.value;
    document.documentElement.setAttribute('data-theme', prefs.theme);
    savePrefs();
  });
  R.controlToggle.addEventListener('click', function () {
    prefs.controlHidden = !prefs.controlHidden;
    document.body.classList.toggle('control-hidden', prefs.controlHidden);
    R.controlToggle.setAttribute('aria-expanded', prefs.controlHidden ? 'false' : 'true');
    updateDafScale();
    renderDaf();
    savePrefs();
  });
  $('qsControl').addEventListener('click', function () {
    R.controlToggle.click();
  });
  $('qsBookmark').addEventListener('click', function () {
    $('bookmarkBtn').click();
  });

  var LS_BM = 'iyun.daf.bm',
    LS_NOTES = 'iyun.daf.notes';
  var bookmarks = readStored(LS_BM) || [];
  var notesMap = readStored(LS_NOTES) || {};
  var sEl = {
    btn: $('searchBtn'),
    overlay: $('searchOverlay'),
    input: $('searchInput'),
    close: $('searchClose'),
    results: $('searchResults'),
    bmBtn: $('bookmarkBtn'),
    bmList: $('bmList'),
    notes: $('notes'),
  };
  function esc(s) {
    return (s || '').replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }
  function normHeb(s) {
    return (s || '').replace(NIKUD_RE, '').replace(/["'׳״]/g, '');
  }

  // Search runs over the whole tractate, not just this daf.
  function openSearch() {
    if (!sEl.overlay) return;
    sEl.overlay.hidden = false;
    sEl.input.focus();
    sEl.input.select();
  }
  function closeSearch() {
    if (sEl.overlay) sEl.overlay.hidden = true;
  }
  var searchTimer;
  function runSearch() {
    var q = normHeb(sEl.input.value.trim());
    sEl.results.innerHTML = '';
    if (q.length < 2) return;
    var hits = [],
      MAX = 80;
    for (var i = 0; i < DAFS.length && hits.length < MAX; i++) {
      var d = DAFS[i];
      var fields = [['GEMARA', (d.mishnah ? d.mishnah + ' ' : '') + d.gemara]];
      d.rashi.forEach(function (c) {
        fields.push(['RASHI', c.dh + ' ' + c.text]);
      });
      d.tosafot.forEach(function (c) {
        fields.push(['TOSAFOT', c.dh + ' ' + c.text]);
      });
      for (var f = 0; f < fields.length && hits.length < MAX; f++) {
        var norm = normHeb(fields[f][1]);
        var idx = norm.indexOf(q);
        if (idx >= 0) hits.push({ dafIdx: i, id: d.id, src: fields[f][0], norm: norm, idx: idx });
      }
    }
    renderResults(hits, q);
  }
  function renderResults(hits, q) {
    if (!hits.length) {
      sEl.results.innerHTML = '<div class="sr-count">No matches.</div>';
      return;
    }
    var frag = document.createDocumentFragment();
    frag.appendChild(
      el(
        'div',
        'sr-count',
        hits.length + (hits.length >= 80 ? '+' : '') + ' match' + (hits.length > 1 ? 'es' : '')
      )
    );
    hits.forEach(function (h) {
      var btn = el('button', 'sr-item');
      var head = el('div', 'sr-head');
      head.appendChild(el('span', 'sr-daf', dafLabel(h.id)));
      head.appendChild(el('span', 'sr-src', h.src));
      btn.appendChild(head);
      var s = Math.max(0, h.idx - 28),
        e = Math.min(h.norm.length, h.idx + q.length + 34);
      var snip = el('div', 'sr-snip');
      snip.innerHTML =
        (s > 0 ? '…' : '') +
        esc(h.norm.slice(s, h.idx)) +
        '<mark>' +
        esc(h.norm.slice(h.idx, h.idx + q.length)) +
        '</mark>' +
        esc(h.norm.slice(h.idx + q.length, e)) +
        (e < h.norm.length ? '…' : '');
      btn.appendChild(snip);
      btn.addEventListener('click', function () {
        closeSearch();
        loadDaf(h.dafIdx);
        setTimeout(function () {
          applySearchHits(q);
        }, 60);
      });
      frag.appendChild(btn);
    });
    sEl.results.appendChild(frag);
  }
  function clearSearchHits() {
    Array.prototype.forEach.call(document.querySelectorAll('.search-hit'), function (w) {
      w.classList.remove('search-hit');
    });
  }
  function applySearchHits(q) {
    clearSearchHits();
    if (!q) return;
    var qw = q.split(/\s+/).filter(function (x) {
      return x.length >= 2;
    });
    var first = null;
    [R.colMain, R.colRashi, R.colTosafot, R.dafBottom].forEach(function (col) {
      if (!col) return;
      Array.prototype.forEach.call(col.querySelectorAll('.w, .cw'), function (w) {
        var t = normHeb(w.textContent);
        if (
          t &&
          qw.some(function (x) {
            return t.indexOf(x) >= 0;
          })
        ) {
          w.classList.add('search-hit');
          if (!first) first = w;
        }
      });
    });
    if (first) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function isBookmarked() {
    return bookmarks.indexOf(D.id) >= 0;
  }
  function updateBookmarkBtn() {
    if (sEl.bmBtn) sEl.bmBtn.classList.toggle('on', isBookmarked());
    $('qsBookmark').classList.toggle('active', isBookmarked());
  }
  function toggleBookmark() {
    var i = bookmarks.indexOf(D.id);
    if (i >= 0) bookmarks.splice(i, 1);
    else bookmarks.push(D.id);
    writeStored(LS_BM, bookmarks);
    renderBookmarks();
    updateBookmarkBtn();
  }
  function jumpToId(id) {
    for (var k = 0; k < DAFS.length; k++) {
      if (DAFS[k].id === id) {
        loadDaf(k);
        return;
      }
    }
    var i = id.indexOf(':'); // this bookmark is in another tractate, so switch to it
    if (i > 0) {
      var label = dafLabel(id),
        cut = label.lastIndexOf(' ');
      window.location.href =
        'gemara.html?tractate=' +
        encodeURIComponent(label.slice(0, cut)) +
        '&daf=' +
        encodeURIComponent(id.slice(i + 1));
    } else if (window.IYUN_DAF_PREFIX)
      window.location.href = 'gemara.html?tractate=Berakhot&daf=' + encodeURIComponent(id);
  }
  function renderBookmarks() {
    if (!sEl.bmList) return;
    sEl.bmList.innerHTML = '';
    if (!bookmarks.length) {
      sEl.bmList.appendChild(
        el('div', 'bm-empty', 'No bookmarks. Click the flag to add this daf.')
      );
      return;
    }
    bookmarks.forEach(function (id) {
      var row = el('div', 'bm-row');
      var go = el('button', 'bm-go', dafLabel(id));
      go.addEventListener('click', function () {
        jumpToId(id);
      });
      var del = el('button', 'bm-del', '✕');
      del.addEventListener('click', function (ev) {
        ev.stopPropagation();
        var i = bookmarks.indexOf(id);
        if (i >= 0) {
          bookmarks.splice(i, 1);
          writeStored(LS_BM, bookmarks);
          renderBookmarks();
          updateBookmarkBtn();
        }
      });
      row.appendChild(go);
      row.appendChild(del);
      sEl.bmList.appendChild(row);
    });
  }

  function loadNotes() {
    if (sEl.notes) sEl.notes.value = notesMap[D.id] || '';
  }

  if (sEl.btn) sEl.btn.addEventListener('click', openSearch);
  if (sEl.close) sEl.close.addEventListener('click', closeSearch);
  if (sEl.overlay)
    sEl.overlay.addEventListener('click', function (e) {
      if (e.target === sEl.overlay) closeSearch();
    });
  if (sEl.input)
    sEl.input.addEventListener('input', function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(runSearch, 120);
    });
  if (sEl.bmBtn) sEl.bmBtn.addEventListener('click', toggleBookmark);
  if (sEl.notes)
    sEl.notes.addEventListener('input', function () {
      notesMap[D.id] = sEl.notes.value;
      writeStored(LS_NOTES, notesMap);
    });

  document.addEventListener('keydown', function (e) {
    var typing = /input|textarea|select/i.test(e.target.tagName || '');
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      openSearch();
      return;
    }
    if (sEl.overlay && !sEl.overlay.hidden) {
      if (e.key === 'Escape') closeSearch();
      return;
    }
    if (typing) return;
    if (e.key === '/') {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'ArrowRight') stepStrip(1);
    else if (e.key === 'ArrowLeft') stepStrip(-1);
    else if (e.key === ']') loadDaf(curIdx + 1);
    else if (e.key === '[') loadDaf(curIdx - 1);
    else if (e.key === 'b' || e.key === 'B') toggleBookmark();
  });

  function updateDafScale() {
    var readerWidth = R.reader
      ? R.reader.clientWidth
      : document.querySelector('.reader').clientWidth;
    document.documentElement.style.setProperty(
      '--daf-scale',
      Math.min(1, Math.max(0.2, Math.min(window.innerWidth * 0.882, readerWidth - 32) / 1080))
    );
  }
  applyPrefs();
  updateDafScale();
  updateQuickSettings();
  renderCats();
  renderBookmarks();
  loadDaf(curIdx);
  var requestedSearch = new URLSearchParams(window.location.search).get('search');
  if (requestedSearch) {
    openSearch();
    sEl.input.value = requestedSearch;
    runSearch();
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      renderDaf();
    });
  }
  window.IYUN_READER = {
    daf: function () {
      return D;
    },
    segment: function () {
      return prefs.xi;
    },
    range: function () {
      return activeRangeId;
    },
    goRange: goRange,
    token: function (key) {
      return (
        tokens.filter(function (tk) {
          return tk.key === key;
        })[0] || null
      );
    },
    goSegment: function (i) {
      if (!D.translations.length) return;
      prefs.navMode = 'phrases';
      prefs.xi = Math.max(0, Math.min(D.translations.length - 1, i));
      focusedWord = null;
      savePrefs();
      updateQuickSettings();
      renderXlation(true);
    },
    refresh: function () {
      renderDaf();
      if (prefs.navMode === 'words') renderWordView(false);
      else renderXlation(false);
    },
    disarm: function () {
      prefs.activeCat = null;
      savePrefs();
      renderCats();
    },
  };
  window.addEventListener('resize', function () {
    updateDafScale();
    renderDaf();
  });
})();
