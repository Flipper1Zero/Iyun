// Local text library: reads the static JSON built by scripts/build-texts.mjs. No network services are called.
(function () {
  'use strict';
  const lib = { store: null, books: new Map(), parts: new Map() };
  const ALIAS = { Tzefaniah: 'Zephaniah' };
  lib.queryFor = function (cat, name) {
    return (
      ALIAS[name] ||
      (cat === 'Mishnah'
        ? 'Mishnah ' + name
        : cat === 'Tosefta'
          ? 'Tosefta ' + name
          : cat === 'Talmud Yerushalmi'
            ? 'Jerusalem Talmud ' + (name === 'Brachot' ? 'Berakhot' : name)
            : name)
    );
  };
  async function json(url) {
    const r = await fetch(url);
    if (!r.ok)
      throw Error(
        r.status === 404
          ? 'This text is not in the local library. Build it with: node scripts/build-texts.mjs'
          : 'Could not load ' + url
      );
    return r.json();
  }
  lib.names = null; // set once texts/names.json has loaded
  lib.load = function () {
    return (
      lib.store ||
      (lib.store = json('texts/names.json').then(function (s) {
        lib.names = s;
        return s;
      }))
    );
  };
  // Why a menu entry cannot be opened ('' when it can): "not-in-dataset", "no-volumes-in-dataset", "no-text-in-dataset".
  lib.unavailable = function (category, group, name) {
    return lib.names && lib.names.unavailable
      ? lib.names.unavailable[category + '|' + group + '|' + name] || ''
      : '';
  };
  // Commentators built for a base text, e.g. "Genesis" -> ["Rashi on Genesis", "Ramban on Genesis", ...].
  lib.commentaries = function (title) {
    return lib.names && lib.names.commentaries ? lib.names.commentaries[title] || [] : [];
  };
  // -> {title} | {collection:true,children:[...]} | null
  lib.resolve = async function (category, name) {
    const s = await lib.load(),
      hit = s.names[lib.queryFor(category, name)];
    if (hit && !hit.missing) return hit;
    if (s.books[name]) return { title: name };
    return null;
  };
  lib.hasBook = async function (title) {
    return !!(await lib.load()).books[title];
  };
  lib.book = async function (title) {
    const s = await lib.load();
    if (!s.books[title]) throw Error('This title is not in the open text library.');
    if (!lib.books.has(title)) lib.books.set(title, json('texts/b/' + s.books[title] + '.json'));
    return lib.books.get(title);
  };
  async function part(name) {
    if (!lib.parts.has(name)) lib.parts.set(name, json('texts/b/' + name + '.json'));
    return lib.parts.get(name);
  }
  function flat(v, out = []) {
    if (typeof v === 'string') {
      if (v) out.push(v);
    } else if (Array.isArray(v)) v.forEach((x) => flat(x, out));
    return out;
  }
  function at(node, pk) {
    let n = node;
    for (const k of pk) {
      if (n == null) return undefined;
      n = n[k];
    }
    return n;
  }
  // -> {he:[strings], en:[strings]} for one outline item
  lib.section = async function (rec, item) {
    async function side(lang) {
      let root = rec[lang];
      if (item.pk && rec.parts) {
        const p = await part(rec.parts[item.pk[0]]);
        root = p[lang];
      }
      if (root == null) return [];
      let node = item.all ? root : item.pk ? at(root, item.pk) : root;
      if (item.i != null) node = node?.[item.i];
      return flat(node);
    }
    return { he: await side('he'), en: await side('en') };
  };
  lib.licenseText = function (v, fallback) {
    if (!v) return fallback;
    const l = !v.license || /^unknown$/i.test(v.license) ? 'license not stated' : v.license;
    return v.title + ' (' + l + ')';
  };
  // Daily calendar (built from open data): Daf Yomi by date, weekly parasha by Saturday.
  lib.calendar = async function () {
    try {
      return await json('texts/calendar.json');
    } catch {
      return null;
    }
  };
  window.IYUN_LIB = lib;
})();
