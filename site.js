// Home page script: app tiles, the library overlay, site search,
// the Daf Yomi and weekly parasha links, and the sign in / sign up dialog.
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const catalog = window.IYUN_CATALOG || {};
  // Inline SVG paths for the app tiles, drawn in a 40x40 box.
  const icons = {
    markup:
      '<circle cx="20" cy="20" r="16"/><path d="M13 28V18a2 2 0 014 0V9a2 2 0 014 0v8a2 2 0 014 0v1a2 2 0 014 0v8c0 5-4 8-9 8h-2c-4 0-7-2-9-6l-2-4a2 2 0 013-3l3 3"/>',
    sync: '<path d="M33 14A14 14 0 008 17m2-9-2 9 9-2M7 26a14 14 0 0025-4m-2 10 2-10-9 2"/><path d="m17 15 9 5-9 5z"/>',
    punctuate:
      '<path d="M20 7c-6 0-9 4-9 10s4 9 9 9c2 0 4-.5 6-2-2 7-7 10-13 11 12 0 20-10 20-19 0-6-5-9-13-9z"/>',
    chavruta:
      '<circle cx="15" cy="15" r="7"/><circle cx="29" cy="16" r="6"/><path d="M2 35c1-8 6-12 13-12s12 4 13 12M26 24c6 0 11 4 12 11"/>',
    flowcharts:
      '<rect x="15" y="3" width="10" height="9" rx="1"/><rect x="3" y="28" width="10" height="9" rx="1"/><rect x="15" y="28" width="10" height="9" rx="1"/><rect x="27" y="28" width="10" height="9" rx="1"/><path d="M20 12v9M8 28v-7h24v7M20 21v7"/>',
    media: '<rect x="2" y="5" width="36" height="30" rx="4"/><path d="m16 12 13 8-13 8z"/>',
    live: '<circle cx="20" cy="20" r="16"/><path d="m22 8-9 14h8l-3 10 11-16h-9z"/>',
    networks:
      '<circle cx="20" cy="20" r="5"/><circle cx="20" cy="4" r="2"/><circle cx="20" cy="36" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="36" cy="20" r="2"/><circle cx="8" cy="8" r="2"/><circle cx="32" cy="8" r="2"/><circle cx="8" cy="32" r="2"/><circle cx="32" cy="32" r="2"/><path d="M20 6v9m0 10v9M6 20h9m10 0h9M9 9l8 8m6 6 8 8M31 9l-8 8m-6 6-8 8"/>',
  };
  const appInfo = [
    ['markup', 'Markup', 'Explore semantic structure and mark text'],
    ['sync', 'Sync', 'Link audio to a passage'],
    ['punctuate', 'Punctuate', 'Add your punctuation'],
    ['chavruta', 'Chavruta', 'Keep discussion beside the text'],
    ['flowcharts', 'Flowcharts', 'Follow the argument visually'],
    ['media', 'Media', 'Attach a media link to a passage'],
    ['live', 'Live', 'Follow a group member through a text'],
    ['networks', 'Networks', 'Create private study groups'],
  ];
  // Chavruta, Live and Networks all live on the chavruta page; the rest are tools inside the daf reader.
  function appHref(id) {
    return id === 'chavruta' || id === 'live' || id === 'networks'
      ? 'chavruta.html'
      : 'gemara.html?daf=2a&tool=' + id;
  }
  appInfo.forEach(([id, name, description]) => {
    const svg = '<svg viewBox="0 0 40 40" aria-hidden="true">' + icons[id] + '</svg>';
    const hero = document.createElement('a');
    hero.className = 'hero-app';
    hero.href = appHref(id);
    hero.innerHTML = svg + '<span>' + name + '</span>';
    $('heroApps').append(hero);
    const card = document.createElement('a');
    card.className = 'app-card';
    card.href = appHref(id);
    card.innerHTML =
      '<span class="app-card-icon">' +
      svg +
      '</span><strong>' +
      name +
      '</strong><small>' +
      description +
      '</small>';
    $('appCards').append(card);
  });
  // The library overlay shows one category at a time; `selected` is the open book, if any.
  let category = 'Tanach',
    selected = null;
  // Yerushalmi is reached through the Talmud tab's Bavli/Yerushalmi switch, not its own tab.
  const tabs = Object.keys(catalog).filter((x) => x !== 'Talmud Yerushalmi');
  function openLibrary(cat) {
    category = cat || category;
    $('library').hidden = false;
    $('menuToggle').setAttribute('aria-expanded', 'true');
    renderTabs();
    renderGroups();
    document.body.style.overflow = 'hidden';
  }
  function closeLibrary() {
    $('library').hidden = true;
    $('menuToggle').setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function renderTabs() {
    $('libraryTabs').replaceChildren();
    tabs.forEach((tab) => {
      const b = document.createElement('button');
      b.textContent = window.IYUN_I18N ? window.IYUN_I18N.tab(tab) : tab;
      b.className =
        tab === category || (tab === 'Talmud' && category === 'Talmud Yerushalmi') ? 'active' : '';
      b.setAttribute('aria-pressed', String(b.className === 'active'));
      b.onclick = () => {
        category = tab;
        selected = null;
        renderTabs();
        renderGroups();
      };
      $('libraryTabs').append(b);
    });
  }
  function renderGroups() {
    const root = $('libraryBody');
    root.replaceChildren();
    if (category.startsWith('Talmud')) root.append(talmudSubtabs());
    root.append(bookGroups());
    // Book names load lazily. Redraw once they arrive so titles that are not in the open library get marked.
    if (!window.IYUN_LIB.names)
      window.IYUN_LIB.load()
        .then(() => {
          if (!$('library').hidden && !selected) renderGroups();
        })
        .catch(() => {});
  }
  // The Talmud tab has a Bavli / Yerushalmi switch in place of its own tab.
  function talmudSubtabs() {
    const sub = document.createElement('div');
    sub.className = 'library-subtabs';
    ['Bavli', 'Yerushalmi'].forEach((label, i) => {
      const b = document.createElement('button');
      b.textContent = label;
      b.className =
        (i === 0 && category === 'Talmud') || (i === 1 && category === 'Talmud Yerushalmi')
          ? 'active'
          : '';
      b.onclick = () => {
        category = i === 0 ? 'Talmud' : 'Talmud Yerushalmi';
        selected = null;
        renderTabs();
        renderGroups();
      };
      sub.append(b);
    });
    return sub;
  }
  function bookGroups() {
    const wrap = document.createElement('div');
    wrap.className = 'book-groups';
    (catalog[category] || []).forEach((group) => {
      const col = document.createElement('div');
      col.className = 'book-group';
      const h = document.createElement('h2');
      h.textContent = group.group;
      col.append(h);
      group.books.forEach((book) => col.append(bookButton(book, group.group)));
      wrap.append(col);
    });
    return wrap;
  }
  function bookButton(book, groupName) {
    const b = document.createElement('button');
    b.className = 'book-button';
    b.textContent = book;
    // Titles in the public menu that the open dataset does not contain are marked, so they are not dead links.
    if (window.IYUN_LIB.unavailable(category, groupName, book)) {
      b.classList.add('unavailable');
      b.title = 'Not in the open text library';
      b.setAttribute('aria-label', book + ' (not in the open text library)');
      const s = document.createElement('small');
      s.className = 'na';
      s.textContent = 'not in open library';
      b.append(s);
    }
    b.onclick = () => showBook(book, groupName);
    return b;
  }
  function bookTarget(book, cat, ref, group) {
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
  // Dates are compared as local calendar days, not UTC, so the daf changes at local midnight.
  function localIsoDate(d) {
    return new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  }
  function linkTodaysDaf(cal, today) {
    const dayIndex = Math.round((Date.parse(localIsoDate(today)) - Date.parse(cal.start)) / 864e5),
      dafRef = cal.daf[dayIndex];
    if (!dafRef) return;
    const mishnah = /^Mishnah (.*?)\s+\d+:/.exec(dafRef),
      daf = mishnah ? null : /^(.*?)\s+(\d+)([ab])?$/.exec(dafRef);
    if (mishnah) {
      $('todayDaf').href = bookTarget(mishnah[1], 'Mishnah');
      $('todayDaf').title = 'Daf Yomi: ' + dafRef;
    } else if (daf) {
      $('todayDaf').href = bookTarget(daf[1], 'Talmud', daf[2] + (daf[3] || 'a'));
      $('todayDaf').title = 'Daf Yomi: ' + dafRef;
    }
  }
  function linkWeeklyParasha(cal, today) {
    // The parasha is keyed by the Shabbat that ends the current week.
    const shabbat = new Date(today);
    shabbat.setDate(shabbat.getDate() + ((6 - shabbat.getDay() + 7) % 7));
    const parasha = cal.parasha[localIsoDate(shabbat)];
    if (!parasha?.ref) return;
    const m = /^(.*?)\s+(\d+)/.exec(parasha.ref);
    if (m) {
      $('weeklyParasha').href = bookTarget(m[1], 'Tanach', m[2]);
      $('weeklyParasha').title = 'Weekly Parasha: ' + (parasha.name || parasha.ref);
    }
  }
  (async () => {
    // Weekly Parasha and Today's Daf come from a static calendar built from open data (texts/calendar.json).
    const cal = await window.IYUN_LIB.calendar();
    if (!cal) return;
    const today = new Date();
    linkTodaysDaf(cal, today);
    linkWeeklyParasha(cal, today);
  })().catch(() => {});
  // Builds the book detail panel. The caller fills in the edition, sections and note once the lookup returns.
  function bookDetailPanel(book) {
    const detail = document.createElement('div');
    detail.className = 'book-detail';
    const back = document.createElement('button');
    back.className = 'detail-back';
    back.textContent = '‹ ' + category;
    back.onclick = renderGroups;
    const edition = document.createElement('div');
    edition.className = 'edition';
    edition.textContent = 'BOOK LIBRARY';
    const flourish = document.createElement('div');
    flourish.className = 'detail-flourish';
    flourish.textContent = '❧';
    const title = document.createElement('h2');
    title.textContent = book.toUpperCase();
    const sections = document.createElement('div');
    sections.className = 'detail-sections';
    const note = document.createElement('p');
    note.className = 'detail-note';
    note.textContent = 'Loading sections…';
    detail.append(back, edition, flourish, title, flourish.cloneNode(true), sections, note);
    return { detail, edition, sections, note };
  }
  // One heading and its grid of links. A directory entry links to whole books, otherwise to sections of this book.
  function sectionBlock(part, book, group, directory) {
    const block = document.createElement('section');
    block.className = 'detail-section';
    const h = document.createElement('h3');
    h.textContent = part.name;
    block.append(h);
    const grid = document.createElement('div');
    grid.className = 'detail-grid';
    part.refs.forEach((ref) => {
      const a = document.createElement('a');
      a.href = directory
        ? bookTarget(ref, category, null, group)
        : bookTarget(book, category, ref, group);
      a.textContent = ref;
      grid.append(a);
    });
    block.append(grid);
    return block;
  }
  async function showBook(book, group) {
    selected = book;
    const root = $('libraryBody');
    root.replaceChildren();
    const panel = bookDetailPanel(book);
    root.append(panel.detail);
    try {
      const result = await window.IYUN_NAV.detail(book, category, group);
      // The user may have chosen another book or category while this one was loading.
      if (selected !== book) return;
      panel.edition.textContent = result.edition;
      if (result.unavailable) {
        panel.note.textContent =
          'This title is unavailable here because it is not in the open text library.';
        return;
      }
      result.groups.forEach((part) =>
        panel.sections.append(sectionBlock(part, book, group, result.directory))
      );
      panel.note.textContent = '';
    } catch {
      panel.note.textContent = 'Could not load sections. Check the library build.';
    }
  }
  $('menuToggle').onclick = () => openLibrary();
  $('menuClose').onclick = closeLibrary;
  $('librarySearch').onclick = () => {
    closeLibrary();
    openSearch();
  };
  $('searchToggle').onclick = openSearch;
  function openSearch() {
    $('siteSearch').hidden = false;
    $('searchInput').focus();
    renderSearch();
  }
  function closeSearch() {
    $('siteSearch').hidden = true;
    $('searchInput').value = '';
  }
  $('searchClose').onclick = closeSearch;
  $('siteSearch').addEventListener('click', (e) => {
    if (e.target === $('siteSearch')) closeSearch();
  });
  const entries = [];
  Object.keys(catalog).forEach((cat) =>
    (catalog[cat] || []).forEach((g) =>
      g.books.forEach((name) => entries.push({ cat, name, group: g.group }))
    )
  );
  // Search uses MiniSearch (MIT, vendor/minisearch.js) for prefix and typo-tolerant matching over English names, Hebrew names (vowels
  // and cantillation ignored), categories and groups. It loads on first use; until then (or if it fails) a plain substring match runs.
  let searchIndex = null,
    searchLoading = null;
  function normalizeQuery(t) {
    return String(t)
      .toLowerCase()
      .replace(/[\u0591-\u05C7]/g, '')
      .replace(/[\u05BE\-\u2013]/g, ' ')
      .replace(/[\u05F3\u05F4'"\u2019]/g, '')
      .trim();
  }
  function loadSearchIndex() {
    if (searchLoading) return searchLoading;
    searchLoading = (async () => {
      await new Promise((ok, no) => {
        const sc = document.createElement('script');
        sc.src = 'vendor/minisearch.js';
        sc.onload = ok;
        sc.onerror = no;
        document.head.append(sc);
      });
      let he = {};
      try {
        he = await (await fetch('texts/titles.json')).json();
      } catch {}
      entries.forEach((x) => {
        x.he = he[x.name] || '';
      });
      const ms = new window.MiniSearch({
        fields: ['name', 'he', 'cat', 'group'],
        idField: 'id',
        processTerm: (t) => normalizeQuery(t) || null,
      });
      ms.addAll(
        entries.map((x, i) => ({ id: i, name: x.name, he: x.he, cat: x.cat, group: x.group || '' }))
      );
      searchIndex = ms;
      renderSearch();
    })().catch(() => {
      searchIndex = null;
    });
    return searchLoading;
  }
  function findBooks(q) {
    if (searchIndex) {
      const opt = { prefix: true, fuzzy: 0.2, boost: { name: 3, he: 3 } };
      let r = searchIndex.search(q, { ...opt, combineWith: 'AND' });
      if (!r.length) r = searchIndex.search(q, { ...opt, combineWith: 'OR' });
      return r.slice(0, 55).map((h) => entries[h.id]);
    }
    const low = q.toLowerCase();
    return entries
      .filter((x) => x.name.toLowerCase().includes(low) || x.cat.toLowerCase().includes(low))
      .slice(0, 55);
  }
  function renderSearch() {
    const raw = $('searchInput').value.trim(),
      root = $('searchResults');
    root.replaceChildren();
    // Starts the MiniSearch load in the background. Results fall back to substring matching until it is ready.
    loadSearchIndex();
    if (!raw) {
      const p = document.createElement('p');
      p.textContent =
        'Search the book library by English or Hebrew name, or enter Hebrew text to search Berakhot.';
      root.append(p);
      return;
    }
    const hits = findBooks(raw);
    hits.forEach((x) => root.append(bookHitLink(x)));
    if (!hits.length) {
      const p = document.createElement('p');
      p.textContent = 'No book matches. Try another spelling, or search the text below.';
      root.append(p);
    }
    root.append(gemaraSearchLink(raw));
  }
  function bookHitLink(x) {
    const a = document.createElement('a');
    a.href = bookTarget(x.name, x.cat, null, x.group);
    const strong = document.createElement('strong');
    strong.textContent = x.name;
    const small = document.createElement('small');
    small.textContent = x.cat + (x.he ? ' · ' + x.he : '');
    a.append(strong, small);
    return a;
  }
  // Full-text search of the Gemara goes through the reader, so it is always offered last.
  function gemaraSearchLink(raw) {
    const daf = document.createElement('a');
    daf.href = 'gemara.html?search=' + encodeURIComponent(raw);
    const strong = document.createElement('strong');
    strong.textContent = 'Search Berakhot for “' + raw + '”';
    const small = document.createElement('small');
    small.textContent = 'Gemara, Rashi, Tosafot';
    daf.append(strong, small);
    return daf;
  }
  $('searchInput').addEventListener('input', renderSearch);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLibrary();
      closeSearch();
      closeAccount();
    }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });
  // Interface language (Hebrew/English) is handled by i18n.js; refresh the labels this script builds when it changes.
  function relabel() {
    const I = window.IYUN_I18N;
    if (!I) return;
    const he = I.lang() === 'he';
    $('heroApps')
      .querySelectorAll('span')
      .forEach((s, i) => {
        s.textContent = he ? I.t('app.' + appInfo[i][0], appInfo[i][1]) : appInfo[i][1];
      });
    $('appCards')
      .querySelectorAll('strong')
      .forEach((s, i) => {
        s.textContent = he ? I.t('app.' + appInfo[i][0], appInfo[i][1]) : appInfo[i][1];
      });
    if (!$('library').hidden) {
      renderTabs();
      if (!selected) renderGroups();
    }
  }
  window.addEventListener('iyun:lang', relabel);
  relabel();
  let accountMode = 'signin';
  function openAccount(kind) {
    accountMode = kind;
    $('accountDialog').hidden = false;
    $('accountTitle').textContent = kind === 'signup' ? 'Sign up' : 'Sign in';
    $('accountSubmit').textContent = kind === 'signup' ? 'Create account' : 'Sign in';
    $('accountName').parentElement.hidden = kind !== 'signup';
    $('accountName').required = kind === 'signup';
    $('accountPassword').autocomplete = kind === 'signup' ? 'new-password' : 'current-password';
    $('accountIntro').textContent = window.IYUN_CLOUD?.available
      ? 'Your notes and marks sync when you sign in on another device.'
      : 'Run this site with node server.js to use accounts and syncing.';
    $('accountStatus').textContent = '';
    document.body.style.overflow = 'hidden';
  }
  function closeAccount() {
    $('accountDialog').hidden = true;
    document.body.style.overflow = '';
  }
  ['signIn', 'footerSignIn'].forEach((id) => ($(id).onclick = () => openAccount('signin')));
  ['signUp', 'footerSignUp'].forEach((id) => ($(id).onclick = () => openAccount('signup')));
  $('accountClose').onclick = closeAccount;
  $('accountDialog').addEventListener('click', (e) => {
    if (e.target === $('accountDialog')) closeAccount();
  });
  $('accountForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const cloud = window.IYUN_CLOUD;
    if (!cloud?.available) {
      $('accountStatus').textContent = 'Start this site with node server.js, then try again.';
      return;
    }
    const email = $('accountEmail').value.trim(),
      name = $('accountName').value.trim(),
      password = $('accountPassword').value;
    try {
      $('accountSubmit').disabled = true;
      await (accountMode === 'signup'
        ? cloud.signUp(name, email, password)
        : cloud.signIn(email, password));
      $('accountStatus').textContent = 'Signed in. Your study data is syncing.';
      setTimeout(() => location.reload(), 500);
    } catch (err) {
      $('accountStatus').textContent = err.message;
    } finally {
      $('accountSubmit').disabled = false;
    }
  });
  window.IYUN_CLOUD?.ready.then((cloud) => {
    if (!cloud.user) return;
    ['signIn', 'footerSignIn'].forEach((id) => ($(id).textContent = cloud.user.name));
    ['signUp', 'footerSignUp'].forEach((id) => {
      $(id).textContent = 'Sign out';
      $(id).onclick = () => cloud.signOut();
    });
  });
  if (location.hash === '#signin') openAccount('signin');
  if (location.hash === '#signup') openAccount('signup');
  if (location.hash === '#search') openSearch();
})();
