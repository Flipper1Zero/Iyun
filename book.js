// Reader page for one book (book.html). Loads a section from the local library,
// renders its words and lines, and runs the side tools (markup, punctuation, sync,
// notes and the rest). book-layout.js adds the printed-page layout on top of this.
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(location.search),
    displayName = params.get('name') || 'Bereishit',
    category = params.get('category') || 'Tanach',
    group = params.get('group') || '';
  const cloud = window.IYUN_CLOUD;
  let section = params.get('ref') || (category === 'Talmud' ? '2a' : '1'),
    canonical = '',
    rec = null,
    outline = [],
    complex = false,
    segments = [],
    active = 0,
    words = [],
    tool = '',
    armed = '',
    punct = '',
    audioUrl = null;
  const NOT_IN_LIBRARY =
    'This title is in the catalog menu but is not in the open text library, so this site cannot show it.';

  // Storage is per book and per section, so notes and marks do not mix between passages.
  const key = (suffix) => 'iyun.book.' + canonical + '.' + section + '.' + suffix;

  // Storage can be blocked or hold bad JSON. In either case use the fallback instead of failing.
  function read(k, fallback) {
    try {
      return JSON.parse(localStorage.getItem(k)) ?? fallback;
    } catch {
      return fallback;
    }
  }
  function write(k, v) {
    localStorage.setItem(k, JSON.stringify(v));
  }

  // Reference used for bookmarks and live sync, e.g. "Genesis.1" or "Berakhot, 2a".
  function sectionRef() {
    return canonical + (section ? (complex ? ', ' : '.') + section : '');
  }
  function sectionHref(s) {
    return (
      'book.html?name=' +
      encodeURIComponent(displayName) +
      '&category=' +
      encodeURIComponent(category) +
      '&ref=' +
      encodeURIComponent(s)
    );
  }
  function sectionList() {
    const root = $('sectionsList');
    root.replaceChildren();
    outline.forEach((o) => {
      const a = document.createElement('a');
      a.href = sectionHref(o.id);
      a.textContent = o.id;
      a.className = o.id === section ? 'current' : '';
      root.append(a);
    });
  }
  const lib = window.IYUN_LIB;

  // Titles listed under a catalog collection. The directory, when present, wins over the library's children.
  function collectionTitles(info) {
    return (
      window.IYUN_DIRECTORIES?.[category + '|' + group + '|' + displayName] || info.children || []
    );
  }

  async function init() {
    $('sideTitle').textContent = displayName;
    try {
      const info = await lib.resolve(category, displayName);
      if (!info) throw Error(NOT_IN_LIBRARY);
      if (info.collection && !collectionTitles(info).length) throw Error(NOT_IN_LIBRARY);
      if (info.collection) {
        showCollection(info);
        return;
      }
      canonical = info.title;
      rec = await lib.book(canonical);
      outline = rec.outline || [];
      complex = outline.some((o) => o.pk);
      if (!outline.length) throw Error('No text in this book');
      if (!params.has('ref') || !outline.some((o) => o.id === section))
        section = (outline.find((o) => o.id === '2a') || outline[0]).id;
      sectionList();
      await loadSection();
    } catch (e) {
      $('bookTitle').textContent = 'Text unavailable';
      $('bookText').textContent = 'This book could not be loaded from the local library.';
      $('sourceInfo').textContent = String(e.message);
    }
  }

  // A catalog entry that groups several books or volumes: show them as links to each one.
  function showCollection(info) {
    $('bookTitle').textContent = displayName;
    $('reference').textContent = displayName;
    $('bookText').replaceChildren();
    const intro = document.createElement('p');
    intro.textContent = 'Choose a volume or commentary:';
    intro.style.fontSize = '20px';
    $('bookText').append(intro);
    collectionTitles(info).forEach((title) => {
      const a = document.createElement('a');
      a.href =
        'book.html?name=' +
        encodeURIComponent(title) +
        '&category=' +
        encodeURIComponent(category) +
        '&group=' +
        encodeURIComponent(group);
      a.textContent = title;
      a.style.cssText =
        'display:block;direction:ltr;text-align:left;font:16px Open Sans,sans-serif;padding:8px;color:#0669bd';
      $('bookText').append(a);
    });
    $('sourceInfo').textContent = 'This catalog entry is a collection of books.';
  }

  async function loadSection() {
    $('reference').textContent = displayName + ' ' + section;
    $('bookTitle').textContent = displayName + ' ' + section;
    $('bookText').textContent = 'Loading text…';
    try {
      const item = outline.find((o) => o.id === section);
      if (!item) throw Error('Section not found');
      const { he, en } = await lib.section(rec, item);
      if (!he.length && !en.length) throw Error('No text in this section');
      const openEnglish = en.length > 0;
      segments = he.map((h, i) => ({ he: h, en: openEnglish ? en[i] || '' : '' }));
      if (!segments.length) segments = en.map((x) => ({ he: '', en: x }));
      active = 0;
      render();
      renderPhrase();
      $('sourceInfo').textContent = sourceSummary();
      $('notes').value = read(key('notes'), '');
      updateBookmark();
      sectionList();
      document.title = displayName + ' ' + section + ' · Torah study';
      const seg = Number(params.get('seg'));
      if (seg > 0 && seg <= segments.length) goSegment(seg - 1, false); // deep link to one verse or line
      window.dispatchEvent(new CustomEvent('iyun:book-loaded', { detail: { section, canonical } }));
    } catch (e) {
      showSectionError(e);
    }
  }

  // The source line under the text: the licence of each language and how many lines have English.
  function sourceSummary() {
    const hebrewPart = 'Hebrew: ' + lib.licenseText(rec.heV, 'not available for this title') + '. ';
    const englishPart = rec.enV
      ? 'English: ' +
        lib.licenseText(rec.enV) +
        (rec.enV.nc ? ' (non-commercial use only)' : '') +
        '. English lines in this section: ' +
        segments.filter((x) => x.en).length +
        ' of ' +
        segments.length +
        '.'
      : 'No English translation of this title exists in the open dataset.';
    return (
      hebrewPart +
      englishPart +
      ' Text from the open Sefaria-Export dataset; no live service is used.'
    );
  }

  function showSectionError(e) {
    $('bookText').replaceChildren();
    const msg = document.createElement('p');
    msg.textContent = 'This section could not be loaded: ' + e.message + '.';
    msg.setAttribute('role', 'alert');
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'retry';
    retry.textContent = 'Try again';
    retry.onclick = () => loadSection();
    $('bookText').append(msg, retry);
    $('sourceInfo').textContent = String(e.message);
    segments = [];
    renderPhrase();
  }

  // One span per word, with the verse number in front. Marks and punctuation are stored
  // per word under "segment:word" keys, so they are read here and applied to each word.
  function render() {
    const root = $('bookText');
    root.replaceChildren();
    words = [];
    const marks = read(key('marks'), {}),
      punctuation = read(key('punctuation'), {});
    const vowels = $('vowels').checked;
    segments.forEach((seg, si) => {
      const row = document.createElement('span');
      row.className = 'verse';
      row.dataset.segment = si;
      const num = document.createElement('span');
      num.className = 'verse-num';
      num.textContent = si + 1 + '.';
      row.append(num);
      const tokenList = seg.he.split(/\s+/).filter(Boolean);
      tokenList.forEach((token, wi) => {
        const w = document.createElement('span');
        w.className = 'word';
        w.dataset.segment = si;
        w.dataset.word = wi;
        // Nikud (vowel signs and cantillation) is hidden unless the vowels checkbox is on.
        const raw = vowels ? token : token.replace(/[\u0591-\u05c7]/g, '');
        w.textContent = raw + (punctuation[si + ':' + wi] || '');
        if (marks[si + ':' + wi]) w.dataset.mark = marks[si + ':' + wi];
        w.onclick = () => onWordClick(si, wi, marks, punctuation);
        row.append(w, document.createTextNode(' '));
        words.push(w);
      });
      root.append(row, document.createTextNode(' '));
    });
    root.style.fontSize = $('size').value + 'px';
  }

  // With a tool armed, a click edits that word. Otherwise the click just moves to its line.
  function onWordClick(si, wi, marks, punctuation) {
    const k = si + ':' + wi;
    if (armed === 'markup') {
      if (!marks[k] || marks[k] !== tool) {
        marks[k] = tool;
      } else delete marks[k];
      write(key('marks'), marks);
      render();
      return;
    }
    if (armed === 'punctuate') {
      if (punct) punctuation[k] = punct;
      else delete punctuation[k];
      write(key('punctuation'), punctuation);
      render();
      return;
    }
    goSegment(si);
  }

  // Makes line i the active one. Only the tab that moved sends the change to others (broadcast),
  // so a tab that is following does not echo it back.
  function goSegment(i, broadcast = true) {
    if (!segments.length) return;
    active = Math.max(0, Math.min(segments.length - 1, i));
    words.forEach((w) => w.classList.toggle('selected', Number(w.dataset.segment) === active));
    renderPhrase();
    window.dispatchEvent(new CustomEvent('iyun:book-segment', { detail: { index: active } }));
    document
      .querySelector('.verse[data-segment="' + active + '"]')
      ?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    if (channel && broadcast) channel.postMessage({ ref: sectionRef(), segment: active });
    if (cloud?.user && broadcast && cloud.liveMode() === 'lead')
      cloud
        .request(cloud.liveRoute(), {
          method: 'POST',
          body: JSON.stringify({ ref: sectionRef(), segment: active, url: liveUrl() }),
        })
        .catch(() => {});
  }
  // Link to the current line, used when the server relays a live position to other devices.
  function liveUrl() {
    const u = new URLSearchParams();
    u.set('name', displayName);
    u.set('category', category);
    u.set('ref', section);
    u.set('seg', String(active + 1));
    return 'book.html?' + u.toString();
  }
  // The phrase bar shows the active line, in English when the translation box is ticked and
  // the line has English.
  function renderPhrase() {
    const s = segments[active];
    $('phraseText').textContent = !s ? '' : $('translation').checked && s.en ? s.en : s.he;
    $('phraseText').dir = $('translation').checked && s?.en ? 'ltr' : 'rtl';
  }
  function shiftSection(dir) {
    const ids = outline.map((o) => o.id),
      i = ids.indexOf(section),
      next = ids[Math.max(0, Math.min(ids.length - 1, i + dir))];
    if (next !== undefined && next !== section) location.href = sectionHref(next);
  }

  $('prev').onclick = () => shiftSection(-1);
  $('next').onclick = () => shiftSection(1);
  $('phrasePrev').onclick = () => goSegment(active - 1);
  $('phraseNext').onclick = () => goSegment(active + 1);
  $('size').oninput = () => {
    localStorage.setItem('iyun.book.size', $('size').value);
    $('bookText').style.fontSize = $('size').value + 'px';
  };
  $('size').value = localStorage.getItem('iyun.book.size') || 28;
  $('vowels').onchange = render;
  $('translation').onchange = renderPhrase;
  $('theme').onchange = () => {
    document.body.dataset.theme = $('theme').value;
    localStorage.setItem('iyun.book.theme', $('theme').value);
  };
  $('theme').value = localStorage.getItem('iyun.book.theme') || 'day';
  document.body.dataset.theme = $('theme').value;
  $('settingsToggle').onclick = () => {
    $('controls').hidden = !$('controls').hidden;
  };
  $('notes').oninput = () => write(key('notes'), $('notes').value);

  // Bookmarks are one list for all books, keyed by section reference.
  $('bookmark').onclick = () => {
    const list = read('iyun.book.bookmarks', []),
      id = sectionRef(),
      i = list.indexOf(id);
    if (i < 0) list.push(id);
    else list.splice(i, 1);
    write('iyun.book.bookmarks', list);
    updateBookmark();
  };
  function updateBookmark() {
    $('bookmark').classList.toggle('on', read('iyun.book.bookmarks', []).includes(sectionRef()));
  }

  const apps = [
    ['markup', 'Markup', 'A'],
    ['punctuate', 'Punctuate', '׳'],
    ['flowcharts', 'Flowcharts', '◇'],
    ['sync', 'Sync', '▷'],
    ['writer', 'Writer', '✎'],
    ['touchquiz', 'TouchQuiz', '?'],
    ['collections', 'Collections', '▤'],
    ['chavruta', 'Chavruta', '☷'],
    ['media', 'Media', '▶'],
    ['live', 'Live', '●'],
    ['networks', 'Networks', '◎'],
    ['golem', 'Golem', '✦'],
  ];
  apps.forEach(([id, label, icon]) => {
    const b = document.createElement('button');
    b.innerHTML = '<span>' + icon + '</span>' + label;
    b.onclick = () => openTool(id);
    $('appsList').append(b);
  });
  $('appsToggle').onclick = () => {
    $('appsDrawer').hidden = !$('appsDrawer').hidden;
    $('appsToggle').setAttribute('aria-expanded', String(!$('appsDrawer').hidden));
  };
  $('appsClose').onclick = () => {
    $('appsDrawer').hidden = true;
  };
  $('toolClose').onclick = closeTool;

  // Closing a tool runs the cleanup hooks it attached to its elements and releases its audio.
  function closeTool() {
    tool = '';
    armed = '';
    $('toolPanel').hidden = true;
    Array.from($('toolBody').querySelectorAll('*')).forEach((item) => item._cleanup?.());
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      audioUrl = null;
    }
  }
  function node(tag, text) {
    const n = document.createElement(tag);
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function button(root, label, fn) {
    const b = node('button', label);
    b.onclick = fn;
    root.append(b);
    return b;
  }
  function paragraph(root, text) {
    root.append(node('p', text));
  }
  function input(root, placeholder) {
    const e = node('input');
    e.placeholder = placeholder;
    root.append(e);
    return e;
  }
  function area(root, placeholder, value) {
    const e = node('textarea');
    e.rows = 9;
    e.placeholder = placeholder;
    e.value = value || '';
    root.append(e);
    return e;
  }
  const MARK_CATEGORIES = [
    ['Statement', '#218aff'],
    ['Proof', '#f46d31'],
    ['Attack', '#f14b46'],
    ['Defense', '#4cbd4e'],
    ['Question', '#e6bd00'],
    ['Answer', '#a54af7'],
  ];
  const PUNCTUATION_CHOICES = [
    ['Period', '.'],
    ['Comma', ','],
    ['Colon', ':'],
    ['Question', '?'],
    ['Sof pasuk', '׃'],
    ['Remove', ''],
  ];

  // Each tool fills the panel body. dataKey is where that tool keeps its saved data for this section.
  const toolBuilders = {
    markup(root) {
      paragraph(
        root,
        'Choose a category, then click words in the text. Your marks are saved in this browser.'
      );
      MARK_CATEGORIES.forEach(([label, color]) => {
        const b = button(root, label, () => {
          tool = label.toLowerCase();
          armed = 'markup';
          root.querySelectorAll('button').forEach((x) => (x.style.outline = ''));
          b.style.outline = '2px solid ' + color;
        });
        b.style.color = color;
      });
      button(root, 'Done', closeTool);
    },

    punctuate(root) {
      paragraph(root, 'Choose punctuation, then click a Hebrew word.');
      PUNCTUATION_CHOICES.forEach(([label, mark]) =>
        button(root, label, () => {
          punct = mark;
          armed = 'punctuate';
        })
      );
      button(root, 'Done', closeTool);
    },

    flowcharts(root) {
      paragraph(root, 'Follow this section line by line. Select a node to focus the text.');
      segments.forEach((seg, i) =>
        button(root, i + 1 + '. ' + seg.he.slice(0, 75), () => goSegment(i))
      );
    },

    writer(root, dataKey) {
      paragraph(root, 'Private notes for this section.');
      const draft = area(root, 'Write a draft…', read(dataKey, ''));
      draft.oninput = () => write(dataKey, draft.value);
    },

    golem(root) {
      paragraph(
        root,
        'Find a word in the loaded section. Ask AI when an API key is configured on the server.'
      );
      const q = input(root, 'Search Hebrew or English');
      const results = node('div');
      root.append(results);
      q.oninput = () => {
        results.replaceChildren();
        const query = q.value.trim().toLowerCase();
        if (!query) return;
        segments.forEach((s, i) => {
          if ((s.he + ' ' + s.en).toLowerCase().includes(query))
            button(results, i + 1 + '. ' + (s.he || s.en).slice(0, 60), () => goSegment(i));
        });
      };
      if (!cloud) return;
      cloud.ready.then(() => {
        // The panel may have been closed or switched while the account state loaded.
        if (tool !== 'golem' || !cloud.ai || !cloud.user) return;
        const answer = node('div');
        root.append(answer);
        button(root, 'Ask AI', async () => {
          answer.textContent = 'Thinking…';
          try {
            const sectionText = segments.map((s) => s.he + ' ' + s.en).join(' ');
            answer.textContent = await cloud.askAI(q.value, sectionText.slice(0, 12000));
          } catch (e) {
            answer.textContent = e.message;
          }
        });
      });
    },

    sync(root, dataKey) {
      paragraph(
        root,
        'Choose a local audio recording. Cue times stay in this browser; select the file again after a reload.'
      );
      const fileInput = node('input');
      fileInput.type = 'file';
      fileInput.accept = 'audio/*';
      root.append(fileInput);
      const audio = node('audio');
      audio.controls = true;
      root.append(audio);
      fileInput.onchange = () => {
        if (audioUrl) URL.revokeObjectURL(audioUrl);
        audioUrl = fileInput.files[0] ? URL.createObjectURL(fileInput.files[0]) : null;
        audio.src = audioUrl || '';
      };
      const cues = read(dataKey, []),
        list = node('div');
      root.append(list);
      const show = () => {
        list.replaceChildren();
        cues.forEach((c) =>
          button(list, c.time.toFixed(1) + 's · line ' + (c.segment + 1), () => {
            audio.currentTime = c.time;
            goSegment(c.segment);
          })
        );
      };
      button(root, 'Link current line', () => {
        if (!audio.src) return;
        cues.push({ segment: active, time: audio.currentTime });
        write(dataKey, cues);
        show();
      });
      // While the audio plays, follow the latest cue that has already passed.
      audio.ontimeupdate = () => {
        const latestCue = cues
          .filter((c) => c.time <= audio.currentTime)
          .sort((a, b) => b.time - a.time)[0];
        if (latestCue && latestCue.segment !== active) goSegment(latestCue.segment);
      };
      show();
    },

    live(root) {
      paragraph(
        root,
        'Follow this passage in another browser tab. With an account, your other devices follow through the server.'
      );
      button(root, 'Copy this page link', () => navigator.clipboard?.writeText(location.href));
    },

    touchquiz(root, dataKey) {
      paragraph(root, 'Make study cards for this section.');
      const cards = read(dataKey, []),
        question = input(root, 'Question'),
        answer = input(root, 'Answer'),
        list = node('div');
      root.append(list);
      // Clicking a card flips it between question and answer.
      const show = () => {
        list.replaceChildren();
        cards.forEach((c) =>
          button(list, c.q, (ev) => {
            ev.target.textContent = ev.target.textContent === c.q ? c.a : c.q;
          })
        );
      };
      button(root, 'Add card', () => {
        if (!question.value || !answer.value) return;
        cards.push({ q: question.value, a: answer.value });
        write(dataKey, cards);
        question.value = '';
        answer.value = '';
        show();
      });
      show();
    },

    collections(root, dataKey) {
      paragraph(root, 'Save the current line to your collection.');
      const items = read(dataKey, []),
        list = node('div');
      root.append(list);
      const show = () => {
        list.replaceChildren();
        items.forEach((c) => button(list, c.he.slice(0, 80), () => goSegment(c.segment)));
      };
      button(root, 'Save current line', () => {
        items.push({ segment: active, he: segments[active]?.he || '' });
        write(dataKey, items);
        show();
      });
      show();
    },

    media(root, dataKey) {
      paragraph(root, 'Attach a media URL to this section.');
      const items = read(dataKey, []),
        urlInput = input(root, 'https://…'),
        list = node('div');
      root.append(list);
      const show = () => {
        list.replaceChildren();
        items.forEach((href) => {
          const a = node('a', href);
          a.href = href;
          a.target = '_blank';
          a.rel = 'noopener';
          a.style.display = 'block';
          list.append(a);
        });
      };
      button(root, 'Add link', () => {
        try {
          const url = new URL(urlInput.value);
          // Only web links: a javascript: or file: URL must not end up as a clickable link.
          if (!/^https?:$/.test(url.protocol)) return;
          items.push(url.href);
          write(dataKey, items);
          urlInput.value = '';
          show();
        } catch {
          // not a valid URL, leave the field as typed
        }
      });
      show();
    },

    chavruta(root, dataKey) {
      paragraph(root, 'Keep a private draft or discuss this line with a shared group.');
      const draft = area(root, 'What would you ask your chavruta?', read(dataKey, ''));
      draft.oninput = () => write(dataKey, draft.value);
      if (cloud) {
        const shared = node('div');
        root.append(shared);
        cloud.mountDiscussion(shared, sectionRef() + ':' + active);
      }
    },

    networks(root, dataKey) {
      paragraph(root, 'Name local study groups or create a private shared group.');
      const groups = read(dataKey, []),
        nameInput = input(root, 'Local group name'),
        list = node('div');
      root.append(list);
      const show = () => {
        list.replaceChildren();
        groups.forEach((g) => paragraph(list, g));
      };
      button(root, 'Add local group', () => {
        if (!nameInput.value.trim()) return;
        groups.push(nameInput.value.trim());
        write(dataKey, groups);
        nameInput.value = '';
        show();
      });
      show();
      if (cloud) {
        const shared = node('div');
        root.append(shared);
        cloud.mountNetworks(shared);
      }
    },
  };

  function openTool(id) {
    $('appsDrawer').hidden = true;
    tool = id;
    armed = '';
    $('toolPanel').hidden = false;
    $('toolTitle').textContent = apps.find((x) => x[0] === id)[1];
    const root = $('toolBody');
    root.replaceChildren();
    toolBuilders[id](root, key(id));
  }

  // Other reader tabs on the same book share their position over this channel. Browsers
  // without BroadcastChannel simply do not sync between tabs.
  let channel = null;
  try {
    channel = new BroadcastChannel('iyun.book.live');
    channel.onmessage = (e) => {
      if (e.data.ref === sectionRef() && e.data.segment !== active)
        goSegment(e.data.segment, false);
    };
  } catch {}

  // Following: move with the leader; if they are in another section or book, go there.
  window.addEventListener('iyun:cloudlive', (e) => {
    if (!cloud || cloud.liveMode() !== 'follow') return;
    const d = e.detail;
    if (d.ref === sectionRef()) {
      if (d.segment !== active) goSegment(d.segment, false);
    } else if (d.url) location.href = d.url;
  });

  // Keys are ignored while typing in a field, and while Ctrl, Alt or Cmd is held.
  document.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (/input|textarea|select/i.test(e.target.tagName)) {
      if (e.key === 'Escape') e.target.blur();
      return;
    }
    if (e.key === 'ArrowLeft') goSegment(active + 1);
    if (e.key === 'ArrowRight') goSegment(active - 1);
    if (e.key === '[' || e.key === 'PageUp') shiftSection(-1);
    if (e.key === ']' || e.key === 'PageDown') shiftSection(1);
    if (e.key === 'Escape') closeTool();
  });

  // Read-only view for reader-extras.js (commentary, find, cite and share), so that file
  // does not need access to this closure.
  window.IYUN_BOOK = {
    get rec() {
      return rec;
    },
    get outline() {
      return outline;
    },
    get section() {
      return section;
    },
    get canonical() {
      return canonical;
    },
    get segments() {
      return segments;
    },
    get active() {
      return active;
    },
    get displayName() {
      return displayName;
    },
    get category() {
      return category;
    },
    goSegment,
    sectionRef,
    sectionHref,
    shiftSection,
    words: () => words,
    node,
    button,
  };
  init();
})();
