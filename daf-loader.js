// Loads the daf data for the requested tractate, then starts the reader (gemara.js).
// Berakhot ships with the hand-built data in daf-data.js. Every other Bavli
// tractate is read from texts/daf/<id>.json.
(function () {
  'use strict';
  var params = new URLSearchParams(window.location.search),
    want = params.get('tractate');
  function isBerakhot(n) {
    return !n || /^(Berakhot|Brachot)$/i.test(n);
  }
  function load(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () {
        reject(new Error('Could not load ' + src));
      };
      document.body.appendChild(s);
    });
  }
  function fail(msg) {
    var grid = document.getElementById('dafGrid');
    if (grid) {
      grid.textContent = '';
      var p = document.createElement('p');
      p.style.cssText = 'padding:40px;text-align:center';
      p.textContent = msg;
      grid.appendChild(p);
    }
  }
  function json(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error('missing ' + url);
      return r.json();
    });
  }
  function setHint(text) {
    var h = document.getElementById('dafHint');
    if (h) h.textContent = text;
  }
  function fillPicker(names, current) {
    var sel = document.getElementById('tractatePicker');
    if (!sel) return;
    var titles = ['Berakhot'].concat(Object.keys((names && names.dafs) || {}));
    titles.forEach(function (t) {
      var o = document.createElement('option');
      o.value = t;
      o.textContent = t;
      if (t === current) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener('change', function () {
      window.location.search = '?tractate=' + encodeURIComponent(sel.value);
    });
  }
  async function fillBerakhotEnglish(names) {
    var slug = names && names.books && names.books.Berakhot;
    if (!slug) return;
    var book;
    try {
      book = await json('texts/b/' + slug + '.json');
    } catch (e) {
      return;
    }
    if (!Array.isArray(book.en) || !Array.isArray(book.he)) return;
    var credit = book.enV && book.enV.title + ' · ' + (book.enV.license || 'license not stated');
    (window.IYUN_DAFS || []).forEach(function (daf) {
      if (daf.translations && daf.translations.length) return;
      var match = /^(\d+)([ab])$/.exec(daf.dafEn);
      if (!match) return;
      var index = (+match[1] - 1) * 2 + (match[2] === 'b' ? 1 : 0);
      var english = book.en[index],
        hebrew = book.he[index];
      if (!Array.isArray(english) || !Array.isArray(hebrew)) return;
      daf.translations = english
        .map(function (line, i) {
          return {
            label: 'GEMARA',
            en: String(line || ''),
            he: String(hebrew[i] || ''),
            credit: credit,
          };
        })
        .filter(function (line) {
          return line.en.trim();
        });
    });
  }
  async function main() {
    window.IYUN_TRACTATE = 'Berakhot';
    await load('daf-data.js'); // palette, plus the full Berakhot data
    var names = null;
    try {
      names = await json('texts/names.json');
    } catch (e) {
      /* without the built library only Berakhot is available */
    }
    if (isBerakhot(want)) {
      await fillBerakhotEnglish(names);
    } else {
      if (!names) {
        fail('This tractate needs the built text library. Run: npm run build');
        return;
      }
      var hit = names.names[want],
        title = (hit && hit.title) || want,
        file = names.dafs && names.dafs[title];
      if (!file) {
        // no Vilna daf data (for example Shekalim, which the Bavli lacks): use the plain reader
        window.location.replace(
          'book.html?name=' +
            encodeURIComponent(want) +
            '&category=Talmud' +
            (params.get('daf') ? '&ref=' + encodeURIComponent(params.get('daf')) : '')
        );
        return;
      }
      try {
        var doc = await json('texts/daf/' + file + '.json');
        window.IYUN_DAFS = doc.dapim;
        window.IYUN_TRACTATE = title;
        window.IYUN_DAF_PREFIX = file + ':';
        window.IYUN_DAF_SOURCES = doc.sources;
        document.title = 'Iyun · ' + title + ' · Daf';
        var si = document.getElementById('searchInput');
        if (si) si.placeholder = 'Search ' + title + ' — Gemara, Rashi, Tosafot…';
        setHint(
          title +
            ' — Gemara: ' +
            doc.sources.gemara +
            (doc.sources.rashi
              ? '. Rashi and Tosafot: Vilna edition (public domain).'
              : '. Rashi and Tosafot are not available for this tractate.') +
            (doc.sources.english
              ? ' English: ' + doc.sources.english + '.'
              : ' No English translation is available for this tractate.') +
            ' Shakla v’Tarya coverage is shown per daf; you can mark any daf.'
        );
      } catch (e) {
        fail('This tractate could not be loaded: ' + e.message);
        return;
      }
    }
    await load('annotation-data.js');
    await load('argument-cues.js');
    var annotationFile = isBerakhot(want) ? 'berakhot' : file;
    try {
      var annotations = await json('annotations/' + annotationFile + '.json');
      if (annotations.schema === 1) {
        window.IYUN_ANNOTATION_STATUS = {};
        (window.IYUN_DAFS || []).forEach(function (daf) {
          var record = annotations.dapim && annotations.dapim[daf.dafEn];
          if (!record) return;
          var check = window.IYUN_ANNOTATION.validate(daf, record);
          if (check.errors.length) {
            console.warn('Ignoring invalid annotation for ' + daf.id, check.errors);
            return;
          }
          window.IYUN_DEFAULT_MARKS[daf.id] = record;
          window.IYUN_ANNOTATION_STATUS[daf.id] = record.status;
        });
      }
    } catch (e) {
      /* most tractates have no annotated daf yet */
    }
    fillPicker(names, window.IYUN_TRACTATE);
    await load('gemara.js');
    await load('study-tools.js');
  }
  main().catch(function (e) {
    fail(String(e.message || e));
  });
})();
