/*
 * Study tools for the daf reader: the drawer of tools and the panel that
 * opens beside the text. Most tools save to this browser's localStorage.
 * Sign-in, AI answers, shared discussion and cross-device following are
 * handled by cloud.js when it is loaded, and are skipped when it is not.
 */
(function () {
  'use strict';
  var reader = window.IYUN_READER;
  var cloud = window.IYUN_CLOUD;
  var $ = function (id) {
    return document.getElementById(id);
  };
  var apps = [
    ['golem', 'Golem', 'Search this daf', '#13bf78', '✦'],
    ['writer', 'Writer', 'Notes and sourcesheet draft', '#ffbd00', '✎'],
    ['punctuate', 'Punctuate', 'Add punctuation to the text', '#ff5d15', '،'],
    ['markup', 'Markup', 'Shakla v’Tarya categories', '#2685ee', 'A'],
    ['flowcharts', 'Flowcharts', 'Visualize the argument', '#ffb824', '◇'],
    ['sync', 'Sync', 'Link local audio to phrases', '#f72485', '▷'],
    ['touchquiz', 'TouchQuiz', 'Make study cards', '#00acd6', '?'],
    ['collections', 'Collections', 'Save passages', '#ef003b', '▤'],
    ['chavruta', 'Chavruta', 'Private discussion draft', '#8646c7', '☷'],
    ['media', 'Media', 'Attach media links', '#5566c9', '▶'],
    ['live', 'Live', 'Follow between browser tabs', '#3d93ed', '●'],
    ['networks', 'Networks', 'Local study groups', '#364d91', '◎'],
  ];
  // Line icons for the drawer. The descriptions above describe what each tool
  // does in this browser, since none of them needs the server to work.
  var appIcons = {
    golem:
      '<rect x="5" y="8" width="30" height="23" rx="11" fill="white"/><circle cx="14" cy="19" r="3" fill="#13bf78"/><circle cx="26" cy="19" r="3" fill="#13bf78"/><path d="M14 31l6 5 6-5" fill="white"/>',
    writer: '<path d="M7 30L28 9l5 5-21 21-7 2zM25 12l5 5M4 37h32"/>',
    punctuate:
      '<path d="M22 8c-5 0-8 3-8 8s3 8 8 8c2 0 3-.3 4-1-1 6-5 10-10 12 9-1 15-9 15-19 0-5-4-8-9-8z" fill="white" stroke="none"/>',
    markup:
      '<circle cx="20" cy="20" r="17"/><path d="M13 29V19a2 2 0 014 0v-9a2 2 0 014 0v8a2 2 0 014 0v1a2 2 0 014 0v8c0 5-4 8-9 8h-2c-4 0-7-2-9-6l-2-4a2 2 0 013-3l3 3"/>',
    flowcharts:
      '<rect x="16" y="4" width="8" height="8" rx="1" fill="white" stroke="none"/><rect x="4" y="28" width="8" height="8" rx="1" fill="white" stroke="none"/><rect x="16" y="28" width="8" height="8" rx="1" fill="white" stroke="none"/><rect x="28" y="28" width="8" height="8" rx="1" fill="white" stroke="none"/><path d="M20 12v9M8 28v-7h24v7M20 21v7"/>',
    sync: '<path d="M31 12A14 14 0 007 18M9 10l-2 8 8-2M9 28a14 14 0 0024-6M31 30l2-8-8 2"/><path d="M17 14l10 6-10 6z" fill="white" stroke="none"/>',
    touchquiz:
      '<path d="M13 24V11a3 3 0 016 0v11-5a3 3 0 016 0v2a3 3 0 016 0v3a3 3 0 015 2l-1 8c-.3 4-4 7-8 7h-5c-4 0-7-2-9-5l-6-8a3 3 0 015-4l4 4"/>',
    collections:
      '<path d="M5 13h12l3 4h15v17H5z" fill="white" stroke="none"/><path d="M9 21h22M13 26h14" stroke="#ef003b"/>',
  };
  var shade = $('appsShade'),
    drawer = $('appsDrawer'),
    panel = $('toolPanel');
  var content = $('toolContent');
  var currentTool = null;
  var punctuateBadge = null;
  // Storage can be blocked (private windows, disabled site data) or full.
  // The tools still work for the session when that happens, so errors are ignored.
  function read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch (e) {
      return fallback;
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // Nothing to do: the in-memory value is still shown.
    }
  }
  function node(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  // gemara.js reads IYUN_PUNCTUATION to draw the marks on each word.
  var punctuation = read('iyun.daf.punctuation.v1', {});
  window.IYUN_PUNCTUATION = punctuation;
  reader.refresh();

  // The drawer shows the first eight tools. The others open through ?tool=<id>
  // or window.IYUN_OPEN_TOOL, so they are left out of the drawer.
  apps.slice(0, 8).forEach(function (app) {
    var button = node('button', 'app-item');
    button.type = 'button';
    var icon = node('span', 'app-icon');
    icon.style.setProperty('--c', app[3]);
    if (appIcons[app[0]])
      icon.innerHTML =
        '<svg viewBox="0 0 40 40" aria-hidden="true" fill="none" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
        appIcons[app[0]] +
        '</svg>';
    else icon.textContent = app[4];
    button.appendChild(icon);
    var copy = node('span', 'app-copy');
    copy.appendChild(node('strong', null, app[1]));
    copy.appendChild(node('small', null, app[2]));
    button.appendChild(copy);
    button.addEventListener('click', function () {
      openTool(app[0]);
    });
    $('appsList').appendChild(button);
  });

  function closeDrawer() {
    drawer.hidden = true;
    shade.hidden = true;
    $('appsToggle').setAttribute('aria-expanded', 'false');
  }
  // Runs cleanup hooks that tools attach to their elements, releases the
  // audio file URL, and resets punctuation mode so the reader stops
  // treating taps as marks.
  function closeTool() {
    Array.prototype.forEach.call(content.querySelectorAll('*'), function (item) {
      if (item._cleanup) item._cleanup();
    });
    if (currentTool === 'sync' && audioUrl) {
      URL.revokeObjectURL(audioUrl);
      audioUrl = null;
    }
    if (punctuateBadge) {
      punctuateBadge.remove();
      punctuateBadge = null;
    }
    panel.hidden = true;
    currentTool = null;
    window.IYUN_PUNCTUATE_CHAR = undefined;
  }
  $('appsToggle').addEventListener('click', function () {
    if (!drawer.hidden) {
      closeDrawer();
      return;
    }
    closeTool();
    shade.hidden = false;
    drawer.hidden = false;
    $('appsToggle').setAttribute('aria-expanded', 'true');
  });
  $('appsClose').addEventListener('click', closeDrawer);
  $('toolClose').addEventListener('click', closeTool);
  shade.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeDrawer();
      closeTool();
    }
  });
  // Opens one tool in the panel. Every tool gets the same phrase buttons first.
  function openTool(id) {
    closeDrawer();
    currentTool = id;
    var app = apps.filter(function (item) {
      return item[0] === id;
    })[0];
    $('toolTitle').textContent = app[1];
    panel.hidden = false;
    content.replaceChildren();
    var nav = row();
    button(nav, '‹ Next phrase', function () {
      reader.goSegment(currentSegment() + 1);
    });
    button(nav, 'Previous phrase ›', function () {
      reader.goSegment(currentSegment() - 1);
    });
    if (id === 'markup') renderMarkup();
    else if (id === 'punctuate') renderPunctuate();
    else if (id === 'flowcharts') renderFlowcharts();
    else if (id === 'sync') renderSync();
    else if (id === 'writer') renderWriter();
    else if (id === 'touchquiz') renderQuiz();
    else if (id === 'collections') renderCollections();
    else if (id === 'chavruta') renderChavruta();
    else if (id === 'media') renderMedia();
    else if (id === 'golem') renderGolem();
    else if (id === 'live') renderLive();
    else if (id === 'networks') renderNetworks();
  }
  window.IYUN_OPEN_TOOL = openTool;
  $('golemFab')?.addEventListener('click', function () {
    openTool('golem');
  });
  // ?tool=<id> lets the home page and book browser open a specific tool directly.
  var requestedTool = new URLSearchParams(window.location.search).get('tool');
  if (
    requestedTool &&
    apps.some(function (app) {
      return app[0] === requestedTool;
    })
  ) {
    setTimeout(function () {
      openTool(requestedTool);
    }, 0);
  }
  function paragraph(text) {
    content.appendChild(node('p', null, text));
  }
  function row() {
    var bar = node('div', 'tool-row');
    content.appendChild(bar);
    return bar;
  }
  function button(parent, text, action) {
    var b = node('button', null, text);
    b.type = 'button';
    b.addEventListener('click', action);
    parent.appendChild(b);
    return b;
  }
  function currentId() {
    return reader.daf().id;
  }
  // Link a follower can open to land on the same daf:
  // gemara.html?tractate=Shabbat&daf=2a
  function dafLiveUrl() {
    var d = reader.daf(),
      name = d.masechetEn === 'Berachot' ? 'Berakhot' : d.masechetEn;
    return (
      'gemara.html?tractate=' + encodeURIComponent(name) + '&daf=' + encodeURIComponent(d.dafEn)
    );
  }
  // Readable daf name used as the key for shared discussion and Live,
  // for example "Shabbat 15b".
  function dafRef(id) {
    return window.IYUN_DAF_LABEL ? window.IYUN_DAF_LABEL(id) : 'Berakhot ' + id;
  }
  function currentSegment() {
    return reader.segment();
  }
  function snippet(index) {
    var seg = reader.daf().translations[index];
    return seg ? (seg.he || seg.en || '').slice(0, 70) : '';
  }

  function renderMarkup() {
    paragraph(
      'Where a daf has preset argument ranges, the outlined category identifies the selected range. All shows every range; Single shows one; Multiple keeps the ranges you select while studying.'
    );
    button(row(), 'Show markup bar', function () {
      if (getComputedStyle($('markbar')).display === 'none') $('fabAnnotate').click();
      closeTool();
    });
  }

  // Punctuation mode: the reader turns taps into marks, see the
  // iyun:punctuate handler below.
  function renderPunctuate() {
    reader.disarm();
    paragraph(
      'Choose a mark, then tap a word in the daf. Your punctuation is saved in this browser.'
    );
    var markBar = row();
    [
      ['Period', '.'],
      ['Comma', ','],
      ['Colon', ':'],
      ['Question', '?'],
      ['Sof pasuk', '׃'],
      ['Remove', ''],
    ].forEach(function (entry) {
      var b = button(markBar, entry[0], function () {
        window.IYUN_PUNCTUATE_CHAR = entry[1];
        Array.prototype.forEach.call(markBar.querySelectorAll('button'), function (x) {
          x.classList.remove('active');
        });
        b.classList.add('active');
        // On narrow screens the panel covers the daf, so show a small badge instead.
        if (window.innerWidth <= 900) showMobilePunctuate();
      });
    });
    window.IYUN_PUNCTUATE_CHAR = '.';
    markBar.firstChild.classList.add('active');
    paragraph('Tap a word in the center column; Close ends punctuation mode.');
  }
  // Small badge shown on phones while marking words. "Change" reopens the panel.
  function showMobilePunctuate() {
    panel.hidden = true;
    if (!punctuateBadge) {
      punctuateBadge = node('div', 'punctuate-badge');
      document.body.appendChild(punctuateBadge);
    }
    punctuateBadge.replaceChildren();
    punctuateBadge.appendChild(
      node('span', null, 'Punctuate: ' + (window.IYUN_PUNCTUATE_CHAR || 'remove'))
    );
    button(punctuateBadge, 'Change', function () {
      panel.hidden = false;
      punctuateBadge.remove();
      punctuateBadge = null;
    });
    button(punctuateBadge, 'Done', closeTool);
  }
  window.addEventListener('iyun:punctuate', function (event) {
    if (currentTool !== 'punctuate') return;
    var id = currentId(),
      key = event.detail.key;
    if (!punctuation[id]) punctuation[id] = {};
    // An empty mark means "Remove", which deletes the saved mark for this word.
    if (window.IYUN_PUNCTUATE_CHAR) punctuation[id][key] = window.IYUN_PUNCTUATE_CHAR;
    else delete punctuation[id][key];
    write('iyun.daf.punctuation.v1', punctuation);
    reader.refresh();
  });

  // Hebrew words shown on a flowchart card: from the range start, up to six
  // words or the range end, whichever comes first. The cap keeps cards short.
  function rangeWords(range) {
    var prefix = range.start.charAt(0),
      from = +range.start.slice(1);
    var words = [];
    for (var k = from; k < from + 6; k++) {
      var token = reader.token(prefix + k);
      if (!token) break;
      words.push(token.h);
      if (prefix + k === range.end) break;
    }
    return words;
  }

  // One card per argument range in the daf's preset markup. Selecting a card
  // moves the reader to that range.
  function renderFlowcharts() {
    paragraph(
      'Follow the marked moves of the argument on this daf. Select a node to focus its words on the daf.'
    );
    var flow = node('div', 'argument-flow');
    content.appendChild(flow);
    var defaults = window.IYUN_DEFAULT_MARKS[currentId()];
    if (!defaults || !defaults.ranges) return;
    var cards = [];
    defaults.ranges.forEach(function (range, i) {
      var cat = window.IYUN_PALETTE.categories.filter(function (c) {
        return c.id === range.cat;
      })[0];
      var words = rangeWords(range);
      var card = button(flow, '', function () {
        reader.goRange(i);
        cards.forEach(function (item, index) {
          item.classList.toggle('is-current', index === i);
        });
      });
      card.className = 'argument-node' + (reader.range() === i ? ' is-current' : '');
      card.style.setProperty('--flow-color', cat ? cat.color : 'var(--accent)');
      var heading = node('span', 'argument-heading');
      heading.appendChild(node('span', 'argument-number', String(i + 1)));
      heading.appendChild(node('strong', null, cat ? cat.label : 'Passage'));
      card.appendChild(heading);
      card.appendChild(node('span', 'argument-hebrew', words.join(' ')));
      cards.push(card);
      if (i < defaults.ranges.length - 1) flow.appendChild(node('div', 'argument-link', '↓'));
    });
  }

  // The panel edits the same notes box as the reader, so both stay in sync.
  function renderWriter() {
    paragraph('A private draft for this daf, saved in this browser.');
    var notes = read('iyun.daf.notes', {});
    var area = node('textarea');
    area.rows = 14;
    area.value = notes[currentId()] || '';
    area.placeholder = 'Write notes or a sourcesheet draft…';
    area.addEventListener('input', function () {
      notes[currentId()] = area.value;
      write('iyun.daf.notes', notes);
      $('notes').value = area.value;
      // Fire a real input event so listeners on the reader's notes box run too.
      $('notes').dispatchEvent(new Event('input', { bubbles: true }));
    });
    content.appendChild(area);
  }

  var audioUrl = null;
  // Lets a reader link phrases to times in an audio file. Only the times are
  // saved, so the audio file has to be chosen again after a reload.
  function renderSync() {
    paragraph(
      'Choose an audio recording, then link the current phrase to a playback time. This browser saves cue times; reselect the audio file after reloading.'
    );
    var file = node('input');
    file.type = 'file';
    file.accept = 'audio/*';
    content.appendChild(file);
    var audio = node('audio');
    audio.controls = true;
    audio.style.width = '100%';
    content.appendChild(audio);
    file.addEventListener('change', function () {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      audioUrl = file.files[0] ? URL.createObjectURL(file.files[0]) : null;
      audio.src = audioUrl || '';
    });
    var cues = read('iyun.daf.audio-cues.v1', {});
    // Lists this daf's cues, earliest first. Clicking one seeks the audio and the reader.
    function showCues() {
      list.replaceChildren();
      (cues[currentId()] || [])
        .sort(function (a, b) {
          return a.time - b.time;
        })
        .forEach(function (cue) {
          button(list, cue.time.toFixed(1) + 's · ' + snippet(cue.segment), function () {
            audio.currentTime = cue.time;
            reader.goSegment(cue.segment);
          });
        });
    }
    button(row(), 'Link current phrase', function () {
      if (!audio.src) {
        status.textContent = 'Choose an audio file first.';
        return;
      }
      var id = currentId();
      if (!cues[id]) cues[id] = [];
      // A phrase has one cue, so linking it again replaces the old time.
      cues[id] = cues[id].filter(function (cue) {
        return cue.segment !== currentSegment();
      });
      cues[id].push({ segment: currentSegment(), time: audio.currentTime });
      write('iyun.daf.audio-cues.v1', cues);
      status.textContent = 'Phrase linked.';
      showCues();
    });
    var status = node('p');
    content.appendChild(status);
    var list = node('div', 'tool-list');
    content.appendChild(list);
    showCues();
    // While the audio plays, move the reader to the latest cue that has started.
    // lastCue avoids moving again while the same phrase is still active.
    var lastCue = -1;
    audio.addEventListener('timeupdate', function () {
      var active = (cues[currentId()] || [])
        .filter(function (cue) {
          return cue.time <= audio.currentTime;
        })
        .sort(function (a, b) {
          return b.time - a.time;
        })[0];
      if (active && active.segment !== lastCue) {
        lastCue = active.segment;
        reader.goSegment(active.segment);
      }
    });
  }

  // Study cards are kept per daf. Each card remembers the phrase it was made on.
  function renderQuiz() {
    paragraph('Create a question about the current passage and reveal its answer while studying.');
    var cards = read('iyun.daf.quiz.v1', {}),
      id = currentId();
    var question = node('input');
    question.placeholder = 'Question';
    content.appendChild(question);
    var answer = node('textarea');
    answer.rows = 3;
    answer.placeholder = 'Answer';
    content.appendChild(answer);
    var list = node('div', 'tool-list');
    button(row(), 'Save card', function () {
      if (!question.value.trim() || !answer.value.trim()) return;
      if (!cards[id]) cards[id] = [];
      cards[id].push({
        segment: currentSegment(),
        question: question.value.trim(),
        answer: answer.value.trim(),
      });
      write('iyun.daf.quiz.v1', cards);
      question.value = '';
      answer.value = '';
      show();
    });
    content.appendChild(list);
    function show() {
      list.replaceChildren();
      (cards[id] || []).forEach(function (card) {
        var b = button(list, card.question + ' · Show answer', function () {
          b.textContent = card.question + ' — ' + card.answer;
          reader.goSegment(card.segment);
        });
      });
    }
    show();
  }

  function renderCollections() {
    paragraph('Save a passage to a named collection in this browser.');
    var collections = read('iyun.daf.collections.v1', []);
    var name = node('input');
    name.placeholder = 'Collection name';
    var saveBar = row();
    saveBar.appendChild(name);
    button(saveBar, 'Save passage', function () {
      var title = name.value.trim() || 'Study list';
      collections.push({ name: title, daf: currentId(), segment: currentSegment() });
      write('iyun.daf.collections.v1', collections);
      name.value = '';
      show();
    });
    var list = node('div', 'tool-list');
    content.appendChild(list);
    function show() {
      list.replaceChildren();
      collections
        .filter(function (item) {
          return item.daf === currentId();
        })
        .forEach(function (item) {
          button(list, item.name + ' · ' + snippet(item.segment), function () {
            reader.goSegment(item.segment);
            closeTool();
          });
        });
    }
    show();
  }

  // Private notes per phrase. The shared part comes from cloud.js and is only mounted when it loads.
  function renderChavruta() {
    paragraph('Keep a private draft here, or use a shared group discussion when signed in.');
    var threads = read('iyun.daf.threads.v1', {});
    var key = currentId() + ':' + currentSegment();
    var list = node('div', 'tool-list');
    content.appendChild(list);
    var message = node('textarea');
    message.rows = 3;
    message.placeholder = 'Your thought or question…';
    content.appendChild(message);
    button(row(), 'Add to discussion', function () {
      if (!message.value.trim()) return;
      if (!threads[key]) threads[key] = [];
      threads[key].push(message.value.trim());
      write('iyun.daf.threads.v1', threads);
      message.value = '';
      show();
    });
    function show() {
      list.replaceChildren();
      (threads[key] || []).forEach(function (item) {
        list.appendChild(node('p', null, item));
      });
    }
    show();
    var shared = node('div', 'tool-list');
    content.appendChild(shared);
    if (cloud) cloud.mountDiscussion(shared, dafRef(currentId()) + ':' + currentSegment());
  }

  // Only http and https links are accepted, so a link cannot run a script
  // when it is clicked.
  function renderMedia() {
    paragraph('Attach a public media URL to the current passage. Links are saved in this browser.');
    var items = read('iyun.daf.media.v1', []);
    var input = node('input');
    input.type = 'url';
    input.placeholder = 'https://…';
    var attachBar = row();
    attachBar.appendChild(input);
    var status = node('p');
    button(attachBar, 'Attach', function () {
      try {
        var url = new URL(input.value);
        if (!/^https?:$/.test(url.protocol)) throw new Error('Use an HTTP or HTTPS URL.');
        items.push({ daf: currentId(), segment: currentSegment(), url: url.href });
        write('iyun.daf.media.v1', items);
        input.value = '';
        status.textContent = '';
        show();
      } catch (e) {
        status.textContent = 'Enter a valid web URL.';
      }
    });
    content.appendChild(status);
    var list = node('div', 'tool-list');
    content.appendChild(list);
    function show() {
      list.replaceChildren();
      items
        .filter(function (item) {
          return item.daf === currentId();
        })
        .forEach(function (item) {
          var link = node('a', null, item.url);
          link.href = item.url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          list.appendChild(link);
        });
    }
    show();
  }

  // Search for passages on this daf. The AI question is added later, once
  // cloud.js reports whether this user can ask it.
  function renderGolem() {
    paragraph('Find a passage locally, or ask an AI question when the server has an API key.');
    var input = node('input');
    input.type = 'search';
    input.placeholder = 'Ask about a word or phrase…';
    content.appendChild(input);
    var list = node('div', 'tool-list');
    content.appendChild(list);
    // Nothing is searched until two characters are typed.
    input.addEventListener('input', function () {
      list.replaceChildren();
      var query = input.value.trim().toLocaleLowerCase();
      if (query.length < 2) return;
      var passages = reader.daf().translations;
      passages.forEach(function (seg, i) {
        if ((seg.he + ' ' + seg.en).toLocaleLowerCase().indexOf(query) < 0) return;
        button(list, i + 1 + '. ' + (seg.en || seg.he).slice(0, 120), function () {
          reader.goSegment(i);
          closeTool();
        });
      });
      if (!list.children.length)
        list.appendChild(node('p', null, 'No matching passage on this daf.'));
    });
    if (cloud)
      cloud.ready.then(function () {
        if (currentTool !== 'golem') return;
        if (!cloud.user || !cloud.ai) {
          paragraph('AI answers require a signed-in account and a server API key.');
          return;
        }
        mountAskGolem(input);
      });
  }

  // Adds the "Ask Golem" button. The question sent to the server includes the
  // daf's mishnah and gemara text as context.
  function mountAskGolem(input) {
    var answer = node('div', 'tool-list');
    content.appendChild(answer);
    button(row(), 'Ask Golem', async function () {
      answer.textContent = 'Thinking…';
      try {
        answer.textContent = await cloud.askAI(
          input.value,
          (reader.daf().mishnah || '') + ' ' + (reader.daf().gemara || '')
        );
      } catch (e) {
        answer.textContent = e.message;
      }
    });
  }

  // Live follows another tab in the same browser through BroadcastChannel.
  // A signed-in host also posts changes to the server, so other devices can follow.
  var liveChannel =
    typeof BroadcastChannel === 'function' ? new BroadcastChannel('iyun.live') : null;
  var liveRole = 'off';
  if (liveChannel)
    liveChannel.addEventListener('message', function (event) {
      if (liveRole !== 'follow' || !event.data || event.data.daf !== currentId()) return;
      if (event.data.segment !== currentSegment()) reader.goSegment(event.data.segment);
    });
  // Passage changes that arrive from the server while following.
  window.addEventListener('iyun:cloudlive', function (event) {
    if (
      liveRole === 'follow' &&
      event.detail.ref === dafRef(currentId()) &&
      event.detail.segment !== currentSegment()
    )
      reader.goSegment(event.detail.segment);
  });
  // Only a host sends changes. The server call is best effort, so a failed
  // request is ignored and the tab-to-tab copy still works.
  window.addEventListener('iyun:segmentchange', function (event) {
    if (liveRole === 'host' && liveChannel) liveChannel.postMessage(event.detail);
    if (liveRole === 'host' && cloud && cloud.user)
      cloud
        .request(cloud.liveRoute(), {
          method: 'POST',
          body: JSON.stringify({
            ref: dafRef(event.detail.daf),
            segment: event.detail.segment,
            url: dafLiveUrl(),
          }),
        })
        .catch(function () {});
  });
  function renderLive() {
    paragraph(
      'Share passage changes across tabs. When signed in, your other devices follow through the server too.'
    );
    var status = node('p', null, 'Status: ' + liveRole);
    content.appendChild(status);
    var modeBar = row();
    button(modeBar, 'Share this tab', function () {
      liveRole = 'host';
      status.textContent = 'Status: sharing passage changes';
      if (liveChannel) liveChannel.postMessage({ daf: currentId(), segment: currentSegment() });
    });
    button(modeBar, 'Follow another tab', function () {
      liveRole = 'follow';
      status.textContent = 'Status: following another tab';
    });
    button(modeBar, 'Stop', function () {
      liveRole = 'off';
      status.textContent = 'Status: off';
    });
    if (!liveChannel) paragraph('This browser does not support BroadcastChannel.');
  }

  // Local groups of passages. Each group is a list of phrase indexes.
  function renderNetworks() {
    paragraph('Organize local passages here, or create a shared group with an invite code below.');
    var groups = read('iyun.daf.networks.v1', {});
    var name = node('input');
    name.placeholder = 'Group or class name';
    var createBar = row();
    createBar.appendChild(name);
    var list = node('div', 'tool-list');
    button(createBar, 'Create group', function () {
      var title = name.value.trim();
      if (!title) return;
      if (!groups[title]) groups[title] = [];
      write('iyun.daf.networks.v1', groups);
      name.value = '';
      show();
    });
    content.appendChild(list);
    function show() {
      list.replaceChildren();
      Object.keys(groups).forEach(function (title) {
        var heading = node('h3', null, title);
        list.appendChild(heading);
        button(list, 'Add current passage', function () {
          if (groups[title].indexOf(currentSegment()) < 0) groups[title].push(currentSegment());
          write('iyun.daf.networks.v1', groups);
          show();
        });
        groups[title].forEach(function (index) {
          button(list, snippet(index), function () {
            reader.goSegment(index);
            closeTool();
          });
        });
      });
    }
    show();
    var shared = node('div', 'tool-list');
    content.appendChild(shared);
    if (cloud) cloud.mountNetworks(shared);
  }
})();
