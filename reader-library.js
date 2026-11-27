// Shared book picker for the home page and both readers. Uses only the built local library.
(function () {
  'use strict';
  const lib = window.IYUN_LIB,
    catalog = window.IYUN_CATALOG || {};
  if (!lib) return;
  const parashot = [
    ['Bereshit', 1, 6],
    ['Noach', 6, 11],
    ['Lech Lecha', 12, 17],
    ['Vayera', 18, 22],
    ['Chayei Sara', 23, 25],
    ['Toldot', 25, 28],
    ['Vayetzei', 28, 32],
    ['Vayishlach', 32, 36],
    ['Vayeshev', 37, 40],
    ['Miketz', 41, 44],
    ['Vayigash', 44, 47],
    ['Vayechi', 47, 50],
  ];
  const chapters = [
    ['Me’ematai', '2a', '13a'],
    ['Hayah Kore', '13a', '17b'],
    ['Mi Shemeto', '17b', '26a'],
    ['Tefillat Hashahar', '26a', '30b'],
    ['En Omdim', '30b', '35a'],
    ['Ketzad Mevarkhim', '35a', '45a'],
    ['Shloshah She’akhlu', '45a', '51b'],
    ['Elu Devarim', '51b', '54a'],
    ['Haro’eh', '54a', '64a'],
  ];
  const editions = {
    'Tanach|Bereishit': 'THE ALBERT ‘BERO’ CHEHEBAR A”H EDITION',
    'Talmud|Brachot': 'THE RALPH S. GINDI A”H EDITION',
  };
  function href(book, cat, ref, group) {
    if (cat === 'Talmud')
      return (
        'gemara.html?tractate=' +
        encodeURIComponent(book) +
        (ref ? '&daf=' + encodeURIComponent(ref) : '')
      );
    return (
      'book.html?name=' +
      encodeURIComponent(book) +
      '&category=' +
      encodeURIComponent(cat) +
      (ref ? '&ref=' + encodeURIComponent(ref) : '') +
      (group ? '&group=' + encodeURIComponent(group) : '')
    );
  }
  function amudIndex(v) {
    const m = /(\d+)([ab])/.exec(v || '');
    return m ? Number(m[1]) * 2 + (m[2] === 'b' ? 1 : 0) : 4;
  }
  function amudRange(a, b) {
    const out = [];
    for (let i = amudIndex(a); i <= amudIndex(b); i++)
      out.push(Math.floor(i / 2) + (i % 2 ? 'b' : 'a'));
    return out;
  }
  function grouped(ids, book, cat) {
    const valid = new Set(ids);
    if (cat === 'Tanach' && book === 'Bereishit')
      return parashot
        .map(([name, a, b]) => ({
          name,
          refs: Array.from({ length: b - a + 1 }, (_, i) => String(a + i)).filter((x) =>
            valid.has(x)
          ),
        }))
        .filter((g) => g.refs.length);
    if (cat === 'Talmud' && book === 'Brachot')
      return chapters
        .map(([name, a, b]) => ({ name, refs: amudRange(a, b).filter((x) => valid.has(x)) }))
        .filter((g) => g.refs.length);
    return [{ name: cat === 'Talmud' ? 'Daf' : 'Chapters', refs: ids }];
  }
  const cache = new Map();
  async function detail(book, cat, group) {
    const key = cat + '|' + group + '|' + book;
    if (cache.has(key)) return cache.get(key);
    const promise = (async () => {
      if (cat === 'Talmud' && book === 'Brachot') {
        const ids = amudRange('2a', '64a');
        return {
          title: book,
          edition: editions[cat + '|' + book],
          groups: grouped(ids, book, cat),
        };
      }
      await lib.load();
      const reason = lib.unavailable(cat, group, book);
      if (reason) return { title: book, edition: 'BOOK LIBRARY', unavailable: reason, groups: [] };
      const info = await lib.resolve(cat, book);
      if (!info)
        return { title: book, edition: 'BOOK LIBRARY', unavailable: 'not-in-dataset', groups: [] };
      if (info.collection) {
        const children = window.IYUN_DIRECTORIES?.[key] || info.children || [];
        return {
          title: book,
          edition: 'BOOK LIBRARY',
          directory: true,
          groups: [{ name: 'Contents', refs: children }],
        };
      }
      const rec = await lib.book(info.title),
        ids = (rec.outline || []).map((x) => x.id);
      return {
        title: book,
        edition:
          editions[cat + '|' + book] ||
          { Tanach: 'TANACH', Talmud: 'TALMUD BAVLI', 'Talmud Yerushalmi': 'TALMUD YERUSHALMI' }[
            cat
          ] ||
          cat.toUpperCase(),
        groups: grouped(ids, book, cat),
        canonical: info.title,
      };
    })();
    cache.set(key, promise);
    try {
      return await promise;
    } catch (e) {
      cache.delete(key);
      throw e;
    }
  }
  window.IYUN_NAV = { href, detail };
  const toggle = document.getElementById('readerMenuToggle');
  if (!toggle) return;
  let category = 'Tanach',
    version = 0;
  const overlay = document.createElement('div');
  overlay.className = 'reader-library';
  overlay.hidden = true;
  overlay.innerHTML =
    '<header class="reader-library-head"><button class="reader-library-close" type="button" aria-label="Close book browser">×</button><div class="reader-library-tabs"></div><a class="reader-library-search" href="index.html#search" aria-label="Search books">⌕</a></header><main class="reader-library-body"></main>';
  document.body.append(overlay);
  const tabs = overlay.querySelector('.reader-library-tabs'),
    body = overlay.querySelector('.reader-library-body');
  function close() {
    overlay.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('reader-library-open');
  }
  function open() {
    overlay.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('reader-library-open');
    renderTabs();
    renderGroups();
  }
  function renderTabs() {
    tabs.replaceChildren();
    Object.keys(catalog)
      .filter((x) => x !== 'Talmud Yerushalmi')
      .forEach((cat) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = window.IYUN_I18N?.tab(cat) || cat;
        b.classList.toggle(
          'active',
          cat === category || (cat === 'Talmud' && category === 'Talmud Yerushalmi')
        );
        b.onclick = () => {
          category = cat;
          renderTabs();
          renderGroups();
        };
        tabs.append(b);
      });
  }
  function renderGroups() {
    version++;
    body.replaceChildren();
    if (category.startsWith('Talmud')) {
      const sub = document.createElement('div');
      sub.className = 'reader-library-subtabs';
      ['Bavli', 'Yerushalmi'].forEach((label, i) => {
        const b = document.createElement('button');
        b.textContent = label;
        b.classList.toggle('active', category === (i ? 'Talmud Yerushalmi' : 'Talmud'));
        b.onclick = () => {
          category = i ? 'Talmud Yerushalmi' : 'Talmud';
          renderTabs();
          renderGroups();
        };
        sub.append(b);
      });
      body.append(sub);
    }
    const wrap = document.createElement('div');
    wrap.className = 'reader-library-groups';
    (catalog[category] || []).forEach((group) => {
      const col = document.createElement('section');
      col.className = 'reader-library-group';
      const h = document.createElement('h2');
      h.textContent = group.group;
      col.append(h);
      group.books.forEach((book) => {
        const b = document.createElement('button');
        b.textContent = book;
        b.onclick = () => showBook(book, group.group);
        col.append(b);
      });
      wrap.append(col);
    });
    body.append(wrap);
  }
  async function showBook(book, group) {
    const current = ++version;
    body.replaceChildren();
    const d = document.createElement('div');
    d.className = 'reader-library-detail';
    body.append(d);
    const back = document.createElement('button');
    back.className = 'reader-library-detail-back';
    back.textContent = '‹ ' + category;
    back.onclick = renderGroups;
    d.append(back);
    const edition = document.createElement('div');
    edition.className = 'reader-library-edition';
    edition.textContent = 'BOOK LIBRARY';
    d.append(edition);
    const flourish = document.createElement('div');
    flourish.className = 'reader-library-flourish';
    flourish.textContent = '❧';
    d.append(flourish);
    const title = document.createElement('h1');
    title.textContent = book.toUpperCase();
    d.append(title, flourish.cloneNode(true));
    const sections = document.createElement('div');
    sections.className = 'reader-library-sections';
    d.append(sections);
    const status = document.createElement('p');
    status.textContent = 'Loading sections…';
    d.append(status);
    try {
      const result = await detail(book, category, group);
      if (current !== version) return;
      edition.textContent = result.edition;
      if (result.unavailable) {
        status.textContent = 'This title is not in the open text library.';
        return;
      }
      result.groups.forEach((part) => {
        const block = document.createElement('section');
        block.className = 'reader-library-section';
        const h = document.createElement('h2');
        h.textContent = part.name;
        block.append(h);
        const grid = document.createElement('div');
        grid.className = 'reader-library-grid';
        part.refs.forEach((ref) => {
          const a = document.createElement('a');
          a.textContent = ref;
          a.href = result.directory
            ? href(ref, category, null, group)
            : href(book, category, ref, group);
          grid.append(a);
        });
        block.append(grid);
        sections.append(block);
      });
      status.remove();
    } catch (e) {
      status.textContent = 'Could not load sections. Check the library build.';
    }
  }
  toggle.addEventListener('click', () => (overlay.hidden ? open() : close()));
  overlay.querySelector('.reader-library-close').onclick = close;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) close();
  });
  window.addEventListener('iyun:lang', () => {
    if (!overlay.hidden) renderTabs();
  });
})();
