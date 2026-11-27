// Notes page. Lists every note kept in this browser (book notes, daf notes and writer drafts) with search,
// edit, delete and export or import. It also holds the source-sheet draft, which can be published through
// /api/sheets when the server is running.
// User text is always written with textContent, never innerHTML, so a note cannot inject markup.
(function () {
  'use strict';
  var $ = function (id) {
    return document.getElementById(id);
  };
  // Each book note has its own key. Daf notes share one object, keyed by daf id.
  var BOOK_NOTE_KEY = /^iyun\.book\.(.+)\.([^.]+)\.(notes|writer)$/,
    DAF_NOTES_KEY = 'iyun.daf.notes',
    SHEET_DRAFT_KEY = 'iyun.sheet.draft',
    SHEET_TITLE_KEY = 'iyun.sheet.title',
    MAX_DRAFT_BLOCKS = 60,
    IMPORT_DIVIDER = '\n\n— imported —\n';

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function plural(n, word) {
    return n + ' ' + word + (n === 1 ? '' : 's');
  }
  // A missing or corrupt value falls back to the given default.
  function read(key, fallback) {
    try {
      var v = JSON.parse(localStorage.getItem(key));
      return v == null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }
  // Returns false when the browser refuses the write, usually because storage is full.
  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      toast('Could not save (storage is full or blocked).');
      return false;
    }
  }
  var toastTimer;
  function toast(msg) {
    var t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove('show');
    }, 2600);
  }
  function download(name, mime, text) {
    var a = el('a');
    a.href = URL.createObjectURL(new Blob([text], { type: mime }));
    a.download = name;
    document.body.appendChild(a);
    a.click();
    // Revoking straight away can cancel the download in some browsers.
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 500);
  }
  // Daf ids look like "2a" for Berakhot (the first tractate) or "shabbat-59b49f:3a" for the others.
  // The six hex characters are an id suffix, so they are left out of the display name.
  function dafLabel(id) {
    var colon = id.indexOf(':');
    if (colon < 0) return { name: 'Berakhot', daf: id };
    return {
      name: id
        .slice(0, colon)
        .replace(/-[0-9a-f]{6}$/, '')
        .replace(/-/g, ' ')
        .replace(/\b[a-z]/g, function (c) {
          return c.toUpperCase();
        }),
      daf: id.slice(colon + 1),
    };
  }

  // Book notes come from localStorage, one key per note. Blank notes are skipped.
  function collectBookNotes() {
    var out = [];
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i),
        m = BOOK_NOTE_KEY.exec(key || '');
      if (!m) continue;
      var text = read(key, '');
      if (typeof text !== 'string' || !text.trim()) continue;
      out.push({
        kind: m[3] === 'writer' ? 'Draft' : 'Note',
        key: key,
        label: m[1] + ' ' + m[2],
        text: text,
        href:
          'book.html?name=' +
          encodeURIComponent(m[1]) +
          '&category=Tanach&ref=' +
          encodeURIComponent(m[2]),
      });
    }
    return out;
  }
  // Daf notes all live in one object, so each one becomes its own entry, marked with its dafId.
  function collectDafNotes() {
    var out = [],
      dafNotes = read(DAF_NOTES_KEY, {});
    Object.keys(dafNotes).forEach(function (id) {
      if (typeof dafNotes[id] !== 'string' || !dafNotes[id].trim()) return;
      var d = dafLabel(id);
      out.push({
        kind: 'Note',
        key: DAF_NOTES_KEY + '#' + id,
        dafId: id,
        label: d.name + ' ' + d.daf,
        text: dafNotes[id],
        href:
          'gemara.html?tractate=' +
          encodeURIComponent(d.name) +
          '&daf=' +
          encodeURIComponent(d.daf),
      });
    });
    return out;
  }
  function collectNotes() {
    return collectBookNotes()
      .concat(collectDafNotes())
      .sort(function (a, b) {
        return a.label.localeCompare(b.label, undefined, { numeric: true });
      });
  }
  function saveNote(note, text) {
    if (note.dafId) {
      var dafNotes = read(DAF_NOTES_KEY, {});
      dafNotes[note.dafId] = text;
      write(DAF_NOTES_KEY, dafNotes);
    } else write(note.key, text);
  }
  function removeNote(note) {
    if (note.dafId) {
      var dafNotes = read(DAF_NOTES_KEY, {});
      delete dafNotes[note.dafId];
      write(DAF_NOTES_KEY, dafNotes);
    } else localStorage.removeItem(note.key);
  }

  // The loaded notes, and which of them are ticked for the sheet draft (keyed by note key).
  var notes = [],
    selected = {};

  function noteCard(note) {
    var card = el('div', 'card'),
      head = el('div', 'row');
    var pick = el('input');
    pick.type = 'checkbox';
    pick.checked = !!selected[note.key];
    pick.setAttribute('aria-label', 'Select ' + note.label);
    pick.addEventListener('change', function () {
      selected[note.key] = pick.checked;
    });
    var title = el('a', 'grow');
    title.href = note.href;
    title.textContent = note.label + (note.kind === 'Draft' ? ' (draft)' : '');
    title.style.fontWeight = '600';
    var del = el('button', 'btn secondary', 'Delete');
    del.type = 'button';
    del.addEventListener('click', function () {
      if (confirm('Delete this note?')) {
        removeNote(note);
        renderNotes();
      }
    });
    head.append(pick, title, del);
    var area = el('textarea');
    area.value = note.text;
    area.rows = Math.min(10, Math.max(3, note.text.split('\n').length + 1));
    area.setAttribute('aria-label', 'Note for ' + note.label);
    area.style.marginTop = '8px';
    // Saves on every keystroke, so closing the tab never loses text.
    area.addEventListener('input', function () {
      saveNote(note, area.value);
    });
    card.append(head, area);
    return card;
  }
  // The search is a plain case-insensitive match on the label or the text.
  function matchesQuery(note, query) {
    return (
      !query ||
      note.label.toLowerCase().indexOf(query) >= 0 ||
      note.text.toLowerCase().indexOf(query) >= 0
    );
  }
  function renderNotes() {
    notes = collectNotes();
    var query = $('q').value.trim().toLowerCase(),
      list = $('list');
    list.replaceChildren();
    var shown = notes.filter(function (n) {
      return matchesQuery(n, query);
    });
    $('count').textContent = notes.length
      ? (query ? shown.length + ' of ' : '') + plural(notes.length, 'note')
      : '';
    $('empty').hidden = notes.length > 0;
    shown.forEach(function (n) {
      list.appendChild(noteCard(n));
    });
  }
  $('q').addEventListener('input', renderNotes);

  // The JSON export carries a marker so that import only accepts files this site wrote.
  function snapshot() {
    return {
      app: 'torah-study-notes',
      version: 1,
      exported: new Date().toISOString(),
      notes: collectNotes().map(function (n) {
        return { kind: n.kind, label: n.label, key: n.key, text: n.text };
      }),
      bookmarks: { book: read('iyun.book.bookmarks', []), daf: read('iyun.daf.bm', []) },
      sheetDraft: read(SHEET_DRAFT_KEY, []),
    };
  }
  $('exportJson').addEventListener('click', function () {
    download('torah-study-notes.json', 'application/json', JSON.stringify(snapshot(), null, 2));
  });
  $('exportMd').addEventListener('click', function () {
    var md =
      '# My study notes\n\n' +
      collectNotes()
        .map(function (n) {
          return '## ' + n.label + (n.kind === 'Draft' ? ' (draft)' : '') + '\n\n' + n.text + '\n';
        })
        .join('\n');
    download('torah-study-notes.md', 'text/markdown', md);
  });

  // Returns 'added' for a new note, 'merged' when it was appended to different existing text, or null when
  // nothing changed. Existing text is never overwritten: imported text goes after a divider, so nothing is lost.
  function importNote(n) {
    var hash = n.key.indexOf('#'),
      prefix = n.key.slice(0, hash > 0 ? hash : 0);
    if (hash > 0 && prefix === DAF_NOTES_KEY) {
      var id = n.key.slice(hash + 1),
        dafNotes = read(DAF_NOTES_KEY, {}),
        result = null;
      if (!dafNotes[id]) {
        dafNotes[id] = n.text;
        result = 'added';
      } else if (dafNotes[id] !== n.text) {
        dafNotes[id] += IMPORT_DIVIDER + n.text;
        result = 'merged';
      }
      write(DAF_NOTES_KEY, dafNotes);
      return result;
    }
    if (BOOK_NOTE_KEY.test(n.key)) {
      var current = read(n.key, '');
      if (!current) {
        write(n.key, n.text);
        return 'added';
      }
      if (current !== n.text) {
        write(n.key, current + IMPORT_DIVIDER + n.text);
        return 'merged';
      }
    }
    return null;
  }
  // Merges a parsed export into this browser. Returns how many notes were added and how many were merged.
  // Throws if the data is not an export from this site.
  function importExport(data) {
    if (!data || data.app !== 'torah-study-notes' || !Array.isArray(data.notes))
      throw new Error('This is not a notes export from this site.');
    var added = 0,
      merged = 0;
    data.notes.forEach(function (n) {
      if (typeof n.text !== 'string' || typeof n.key !== 'string' || !n.text.trim()) return;
      var result = importNote(n);
      if (result === 'added') added++;
      else if (result === 'merged') merged++;
    });
    // Only take the imported sheet draft if there is none here yet, so an import never replaces work in progress.
    if (Array.isArray(data.sheetDraft) && !readDraft().length)
      write(SHEET_DRAFT_KEY, data.sheetDraft.slice(0, MAX_DRAFT_BLOCKS));
    return { added: added, merged: merged };
  }
  $('importFile').addEventListener('change', function () {
    var file = this.files[0];
    if (!file) return;
    file
      .text()
      .then(function (txt) {
        var counts = importExport(JSON.parse(txt));
        toast(
          'Imported ' +
            plural(counts.added, 'new note') +
            (counts.merged ? ' and merged ' + counts.merged : '') +
            '.'
        );
        renderNotes();
        renderDraft();
      })
      .catch(function (e) {
        toast(e.message || 'Could not read that file.');
      });
    // Clearing the value lets the same file be picked again later.
    this.value = '';
  });

  // The draft is a list of blocks (passages or free text) kept in localStorage until it is published.
  function readDraft() {
    return read(SHEET_DRAFT_KEY, []);
  }
  // step is -1 to move a block up, or 1 to move it down.
  function moveButton(blocks, index, step) {
    var btn = el('button', 'btn secondary', step < 0 ? '↑' : '↓');
    btn.type = 'button';
    btn.setAttribute('aria-label', step < 0 ? 'Move up' : 'Move down');
    btn.disabled = (step < 0 && index === 0) || (step > 0 && index === blocks.length - 1);
    btn.addEventListener('click', function () {
      var moved = blocks[index];
      blocks[index] = blocks[index + step];
      blocks[index + step] = moved;
      write(SHEET_DRAFT_KEY, blocks);
      renderDraft();
    });
    return btn;
  }
  function appendPassage(card, block) {
    if (block.he) {
      var he = el('div', 'he-text', block.he);
      he.lang = 'he';
      card.appendChild(he);
    }
    if (block.en) card.appendChild(el('p', null, block.en));
    if (block.license) card.appendChild(el('p', 'small muted', block.license));
  }
  function textBlockArea(blocks, index, block) {
    var area = el('textarea');
    area.value = block.text;
    area.rows = 4;
    area.setAttribute('aria-label', 'Text block');
    area.addEventListener('input', function () {
      blocks[index].text = area.value;
      write(SHEET_DRAFT_KEY, blocks);
    });
    return area;
  }
  function draftBlockCard(blocks, index) {
    var block = blocks[index],
      card = el('div', 'card'),
      row = el('div', 'row');
    row.append(el('strong', 'grow', block.type === 'passage' ? block.ref : 'Text'));
    row.appendChild(moveButton(blocks, index, -1));
    row.appendChild(moveButton(blocks, index, 1));
    var remove = el('button', 'btn secondary', '✕');
    remove.type = 'button';
    remove.setAttribute('aria-label', 'Remove block');
    remove.addEventListener('click', function () {
      blocks.splice(index, 1);
      write(SHEET_DRAFT_KEY, blocks);
      renderDraft();
    });
    row.appendChild(remove);
    card.appendChild(row);
    if (block.type === 'passage') appendPassage(card, block);
    else card.appendChild(textBlockArea(blocks, index, block));
    return card;
  }
  function renderDraft() {
    var box = $('blocks'),
      blocks = readDraft();
    box.replaceChildren();
    $('sheetTitle').value = read(SHEET_TITLE_KEY, '');
    if (!blocks.length)
      box.appendChild(
        el(
          'p',
          'muted small',
          'The draft is empty. Add passages with the Sheet button in the reader, or add notes and text blocks here.'
        )
      );
    blocks.forEach(function (b, i) {
      box.appendChild(draftBlockCard(blocks, i));
    });
  }
  $('sheetTitle').addEventListener('input', function () {
    write(SHEET_TITLE_KEY, $('sheetTitle').value);
  });
  $('addText').addEventListener('click', function () {
    var blocks = readDraft();
    blocks.push({ type: 'note', text: '' });
    write(SHEET_DRAFT_KEY, blocks);
    renderDraft();
  });
  // Clearing also resets the title, since the title belongs to the draft.
  $('clearDraft').addEventListener('click', function () {
    if (readDraft().length && !confirm('Clear the whole draft?')) return;
    write(SHEET_DRAFT_KEY, []);
    write(SHEET_TITLE_KEY, '');
    renderDraft();
  });
  $('addSelected').addEventListener('click', function () {
    var picks = notes.filter(function (n) {
      return selected[n.key];
    });
    if (!picks.length) {
      toast('Tick the notes you want first.');
      return;
    }
    var blocks = readDraft();
    picks.forEach(function (n) {
      blocks.push({ type: 'note', text: n.label + '\n' + n.text });
    });
    write(SHEET_DRAFT_KEY, blocks.slice(0, MAX_DRAFT_BLOCKS));
    selected = {};
    renderNotes();
    renderDraft();
    toast('Added ' + plural(picks.length, 'note') + ' to the draft.');
    $('sheet').scrollIntoView({ behavior: 'smooth' });
  });

  // Published sheets are stored on the server, so this part needs the sync server and a signed-in account.
  var cloud = window.IYUN_CLOUD;
  function publishedSheetCard(sheet) {
    var card = el('div', 'card'),
      row = el('div', 'row'),
      link = el('a', 'grow');
    link.href = '/s/' + sheet.id;
    link.textContent = sheet.title;
    row.appendChild(link);
    if (sheet.hidden) row.appendChild(el('span', 'small', 'hidden after reports'));
    var del = el('button', 'btn secondary', 'Delete');
    del.type = 'button';
    del.addEventListener('click', function () {
      if (!confirm('Delete this published sheet? Its link will stop working.')) return;
      cloud
        .request('sheets/' + sheet.id, { method: 'DELETE' })
        .then(renderPublishedSheets)
        .catch(function (e) {
          toast(e.message);
        });
    });
    row.appendChild(del);
    card.appendChild(row);
    card.appendChild(el('p', 'small muted', new Date(sheet.created_at).toLocaleString()));
    return card;
  }
  function renderPublishedSheets() {
    var box = $('mySheets');
    cloud
      .request('sheets')
      .then(function (res) {
        box.replaceChildren();
        if (!res.sheets.length) {
          box.appendChild(el('p', 'muted small', 'You have not published any sheets yet.'));
          return;
        }
        res.sheets.forEach(function (s) {
          box.appendChild(publishedSheetCard(s));
        });
      })
      .catch(function (e) {
        box.textContent = e.message;
      });
  }
  function showPublishedLink(msg, url) {
    var link = location.origin + url;
    msg.replaceChildren(document.createTextNode('Published: '));
    var a = el('a', null, link);
    a.href = url;
    msg.appendChild(a);
    var copy = el('button', 'btn secondary', 'Copy link');
    copy.type = 'button';
    copy.style.marginLeft = '8px';
    copy.addEventListener('click', function () {
      // Without clipboard access, show the link in the toast so it can be copied by hand.
      (navigator.clipboard ? navigator.clipboard.writeText(link) : Promise.reject()).then(
        function () {
          toast('Link copied');
        },
        function () {
          toast(link);
        }
      );
    });
    msg.appendChild(copy);
  }
  // Returns the message to show when the draft cannot be published yet, or '' when it can.
  function publishProblem(title, blocks) {
    if (!cloud || !cloud.available)
      return 'Publishing needs the server, which is not available here.';
    if (!cloud.user) return 'Sign in from the home page to publish a sheet.';
    if (!title) return 'Give the sheet a title.';
    if (!blocks.length) return 'The draft is empty.';
    return '';
  }
  $('publish').addEventListener('click', function () {
    var msg = $('publishMsg'),
      blocks = readDraft(),
      title = $('sheetTitle').value.trim();
    var problem = publishProblem(title, blocks);
    if (problem) {
      msg.textContent = problem;
      return;
    }
    msg.textContent = 'Publishing…';
    cloud
      .request('sheets', { method: 'POST', body: JSON.stringify({ title: title, blocks: blocks }) })
      .then(function (r) {
        showPublishedLink(msg, r.url);
        renderPublishedSheets();
      })
      .catch(function (e) {
        msg.textContent = e.message;
      });
  });
  // Without a server there is nothing to list, so say why instead of loading the list.
  if (cloud)
    cloud.ready.then(function (c) {
      if (!c.available) {
        $('mySheets').textContent = '';
        $('mySheets').appendChild(
          el(
            'p',
            'muted small',
            'Sheets need the server, which is not running here. You can still collect notes and passages.'
          )
        );
        return;
      }
      if (c.user) renderPublishedSheets();
    });
  window.addEventListener('iyun:lang', renderNotes);
  renderNotes();
  renderDraft();
})();
