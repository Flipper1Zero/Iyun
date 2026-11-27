// Chavruta page: private study groups with invite links, live messages over
// server-sent events, member presence, and the Live follow/lead controls.
// It relies on the sync client (window.IYUN_CLOUD) and the sync server. When the
// server is down, the page shows a notice instead of the app.
(function () {
  'use strict';
  var cloud = window.IYUN_CLOUD,
    $ = function (id) {
      return document.getElementById(id);
    };
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  // A new toast replaces the old one and restarts the hide timer.
  var toastTimer;
  function toast(msg) {
    var t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove('show');
    }, 2400);
  }
  var rooms = [],
    current = null,
    members = [],
    // Ids of messages already drawn in the open room. The history load and the
    // live stream can both deliver the same message, so this keeps it to one copy.
    seen = {},
    unread = {},
    lastLive = null,
    baseTitle = document.title;
  if (!cloud) return;

  // Sign-in gate. It covers the app until the user can use it.
  function showGate(message, withForm) {
    $('gate').hidden = false;
    $('app').hidden = true;
    $('gateMsg').textContent = message;
    $('authForm').hidden = !withForm;
  }
  var signup = false;
  function paintAuth() {
    $('authTitle').textContent = signup ? 'Create an account' : 'Sign in';
    $('nameRow').hidden = !signup;
    $('aSubmit').textContent = signup ? 'Create account' : 'Sign in';
    $('aSwitch').textContent = signup ? 'I already have an account' : 'Create an account';
    // Password managers use this hint to decide whether to offer a saved or a new password.
    $('aPw').autocomplete = signup ? 'new-password' : 'current-password';
  }
  $('aSwitch').addEventListener('click', function () {
    signup = !signup;
    paintAuth();
  });
  $('authForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var msg = $('aMsg');
    msg.textContent = 'One moment…';
    $('aSubmit').disabled = true;
    var p = signup
      ? cloud.signUp($('aName').value.trim(), $('aEmail').value.trim(), $('aPw').value)
      : cloud.signIn($('aEmail').value.trim(), $('aPw').value);
    p.then(function () {
      // Reload so the whole page starts over as a signed-in user.
      location.reload();
    }).catch(function (err) {
      msg.textContent = err.message;
      $('aSubmit').disabled = false;
    });
  });

  // Rooms (the group list in the side panel)
  // Fetches the list and opens one room. Preference order: the room asked for,
  // the room open before, the room remembered for this tab, the room used for Live.
  function loadRooms(selectId) {
    return cloud.request('rooms').then(function (r) {
      rooms = r.rooms;
      paintRooms();
      var want =
        selectId ||
        (current && current.id) ||
        sessionStorage.getItem('iyun.chav.room') ||
        cloud.liveRoom();
      var pick =
        rooms.filter(function (x) {
          return x.id === want;
        })[0] || rooms[0];
      if (pick) select(pick.id);
      else {
        current = null;
        $('room').hidden = true;
        $('empty').hidden = false;
      }
    });
  }
  function paintRooms() {
    var box = $('rooms');
    box.replaceChildren();
    rooms.forEach(function (r) {
      var b = el('button', 'room-item');
      b.type = 'button';
      b.setAttribute('aria-current', String(!!current && current.id === r.id));
      var label = el('span', null, r.name);
      if (unread[r.id]) label.appendChild(el('span', 'badge', String(unread[r.id])));
      b.append(
        label,
        el(
          'small',
          null,
          r.role +
            ' · ' +
            r.members +
            ' member' +
            (r.members === 1 ? '' : 's') +
            (cloud.liveRoom() === r.id ? ' · used for Live' : '')
        )
      );
      b.addEventListener('click', function () {
        select(r.id);
      });
      box.appendChild(b);
    });
  }
  $('createBtn').addEventListener('click', function () {
    var n = $('newName').value.trim();
    if (!n) return;
    cloud
      .request('rooms', { method: 'POST', body: JSON.stringify({ name: n }) })
      .then(function (r) {
        $('newName').value = '';
        $('sideMsg').textContent = 'Group created.';
        return loadRooms(r.room.id);
      })
      .catch(function (e) {
        $('sideMsg').textContent = e.message;
      });
  });
  function join(code) {
    return cloud
      .request('rooms/join', { method: 'POST', body: JSON.stringify({ code: code }) })
      .then(function (r) {
        $('joinCode').value = '';
        $('sideMsg').textContent = 'Joined “' + r.room.name + '”.';
        return loadRooms(r.room.id);
      });
  }
  $('joinBtn').addEventListener('click', function () {
    var c = $('joinCode').value.trim();
    if (c)
      join(c).catch(function (e) {
        $('sideMsg').textContent = e.message;
      });
  });

  // One open room
  function select(id) {
    current = rooms.filter(function (r) {
      return r.id === id;
    })[0];
    if (!current) return;
    try {
      sessionStorage.setItem('iyun.chav.room', id);
    } catch (e) {
      // Storage can be blocked (private windows). The remembered room is only a convenience.
    }
    unread[id] = 0;
    // Message ids are only unique within a room, so forget the ones from the last room.
    seen = {};
    paintRooms();
    $('empty').hidden = true;
    $('room').hidden = false;
    $('roomName').textContent = current.name;
    $('inviteCode').textContent = 'Invite code: ' + current.code;
    $('renameBtn').hidden = current.role !== 'owner';
    $('leaveBtn').textContent = current.role === 'owner' ? 'Delete group' : 'Leave';
    cloud.setLiveRoom(id);
    paintRooms();
    paintMode();
    loadMembers();
    loadMessages();
  }
  // A failed member refresh is not worth an error message. The next refresh retries.
  function loadMembers() {
    if (!current) return;
    var rid = current.id;
    cloud
      .request('rooms/' + rid + '/members')
      .then(function (r) {
        // The user may have switched rooms while the request was in flight.
        if (!current || current.id !== rid) return;
        members = r.members;
        paintMembers();
      })
      .catch(function () {});
  }
  function paintMembers() {
    var box = $('members');
    box.replaceChildren();
    members.forEach(function (m) {
      var online = m.online || (cloud.user && m.id === cloud.user.id);
      var s = el('span');
      s.appendChild(el('span', 'dot' + (online ? ' on' : '')));
      s.appendChild(
        document.createTextNode(
          m.name +
            (m.role === 'owner' ? ' (owner)' : '') +
            (cloud.user && m.id === cloud.user.id ? ' (you)' : '')
        )
      );
      s.title = online ? 'Online' : 'Offline';
      if (current.role === 'owner' && m.role !== 'owner') s.appendChild(removeMemberButton(m));
      box.appendChild(s);
    });
  }
  // Owner-only control that removes a member after a confirmation.
  function removeMemberButton(m) {
    var rm = el('button', null, '✕');
    rm.type = 'button';
    rm.setAttribute('aria-label', 'Remove ' + m.name);
    rm.style.cssText = 'margin-left:6px;background:none;border:0;color:#ff9a9a;cursor:pointer';
    rm.addEventListener('click', function () {
      if (confirm('Remove ' + m.name + ' from the group?'))
        cloud
          .request('rooms/' + current.id + '/members/' + m.id, { method: 'DELETE' })
          .then(function () {
            loadMembers();
            loadRooms();
          })
          .catch(function (e) {
            toast(e.message);
          });
    });
    return rm;
  }

  // Messages
  // Draws one message, skipping ones already shown and ones outside the reference filter.
  // The log only scrolls itself when the reader is already near the bottom,
  // so reading older messages is not interrupted.
  function addMessage(m, stick) {
    if (seen[m.id]) return;
    seen[m.id] = true;
    var filter = $('filterRef').value.trim().toLowerCase();
    if (filter && (m.ref || '').toLowerCase().indexOf(filter) < 0) return;
    var log = $('log'),
      near = log.scrollHeight - log.scrollTop - log.clientHeight < 80;
    log.appendChild(buildMessage(m));
    if (stick || near) log.scrollTop = log.scrollHeight;
  }
  // Message text is added as a text node, never as HTML, so a message cannot inject markup.
  function buildMessage(m) {
    var mine = cloud.user && (m.userId ? m.userId === cloud.user.id : m.name === cloud.user.name);
    var box = el('div', 'msg' + (mine ? ' mine' : '')),
      who = el(
        'div',
        'who',
        (mine ? 'You' : m.name) +
          ' · ' +
          new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    var bubble = el('div', 'bubble');
    if (m.ref) bubble.appendChild(el('span', 'ref', m.ref));
    bubble.appendChild(document.createTextNode(m.body));
    box.append(who, bubble);
    return box;
  }
  // Rebuilds the log from the server. The reference filter is applied in addMessage.
  function loadMessages() {
    if (!current) return;
    var rid = current.id;
    $('log').replaceChildren();
    seen = {};
    cloud
      .request('rooms/' + rid + '/messages')
      .then(function (r) {
        if (!current || current.id !== rid) return;
        if (!r.messages.length)
          $('log').appendChild(el('p', 'muted small', 'No messages yet. Say hello.'));
        else
          r.messages.forEach(function (m) {
            addMessage(m, true);
          });
      })
      .catch(function (e) {
        $('roomMsg').textContent = e.message;
      });
  }
  $('filterRef').addEventListener('input', loadMessages);
  $('composer').addEventListener('submit', function (e) {
    e.preventDefault();
    var body = $('msgInput').value.trim();
    if (!body || !current) return;
    $('roomMsg').textContent = '';
    cloud
      .request('rooms/' + current.id + '/messages', {
        method: 'POST',
        body: JSON.stringify({ ref: $('refInput').value.trim(), body: body }),
      })
      .then(function (r) {
        $('msgInput').value = '';
        // The live stream may already have delivered this message. Draw it only if it is missing.
        if (!seen[r.message.id]) {
          var empty = $('log').querySelector('p.muted');
          if (empty) empty.remove();
          addMessage(r.message, true);
        }
      })
      .catch(function (err) {
        $('roomMsg').textContent = err.message;
      });
  });
  // Enter sends and Shift+Enter starts a new line. The isComposing check keeps
  // IME input (for example Japanese or Chinese) from sending a half-finished word.
  $('msgInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      $('composer').requestSubmit();
    }
  });

  // Room actions
  $('inviteBtn').addEventListener('click', function () {
    var link = location.origin + '/chavruta.html?join=' + encodeURIComponent(current.code);
    // Clipboard access is not always allowed (it needs a secure page and permission),
    // so when the copy fails the link itself is shown instead.
    (navigator.clipboard ? navigator.clipboard.writeText(link) : Promise.reject()).then(
      function () {
        toast('Invite link copied');
      },
      function () {
        toast(link);
      }
    );
  });
  $('renameBtn').addEventListener('click', function () {
    var n = prompt('New group name', current.name);
    if (n && n.trim())
      cloud
        .request('rooms/' + current.id, {
          method: 'PATCH',
          body: JSON.stringify({ name: n.trim() }),
        })
        .then(function () {
          return loadRooms(current.id);
        })
        .catch(function (e) {
          toast(e.message);
        });
  });
  // Owners delete the whole group. Other members only leave it.
  $('leaveBtn').addEventListener('click', function () {
    var owner = current.role === 'owner';
    if (
      !confirm(
        owner
          ? 'Delete “' + current.name + '” and all its messages for everyone?'
          : 'Leave “' + current.name + '”?'
      )
    )
      return;
    var p = owner
      ? cloud.request('rooms/' + current.id, { method: 'DELETE' })
      : cloud.request('rooms/' + current.id + '/members/' + cloud.user.id, { method: 'DELETE' });
    p.then(function () {
      if (cloud.liveRoom() === current.id) {
        cloud.setLiveRoom('');
        cloud.setLiveMode('off');
      }
      current = null;
      return loadRooms();
    }).catch(function (e) {
      toast(e.message);
    });
  });

  // Live
  function paintMode() {
    document.querySelectorAll('input[name=mode]').forEach(function (r) {
      r.checked = r.value === cloud.liveMode();
    });
  }
  function liveModeMessage(mode) {
    if (mode === 'off') return 'Live is off in this tab.';
    if (mode === 'follow') return 'Following: open a reader and you will move with the group.';
    return 'Leading: your place is shared when you move in a reader.';
  }
  // Live is tied to the room that is open when the mode is picked.
  document.querySelectorAll('input[name=mode]').forEach(function (r) {
    r.addEventListener('change', function () {
      if (r.checked) {
        cloud.setLiveRoom(current.id);
        cloud.setLiveMode(r.value);
        toast(liveModeMessage(r.value));
      }
    });
  });
  // Shows the most recent Live position that another member sent.
  function paintBanner() {
    var b = $('liveBanner');
    if (!lastLive) {
      b.hidden = true;
      return;
    }
    b.hidden = false;
    b.replaceChildren();
    b.appendChild(el('strong', null, lastLive.from || 'A member'));
    b.appendChild(document.createTextNode(' is at ' + lastLive.ref + '. '));
    // Only reader pages can be opened from here. Any other URL stays plain text.
    if (lastLive.url && /^(book|gemara)\.html\?/.test(lastLive.url)) {
      var link = el('a', null, 'Open and follow →');
      link.href = lastLive.url;
      b.appendChild(link);
    }
  }
  window.addEventListener('iyun:cloudlive', function (e) {
    var detail = e.detail;
    // Skip our own Live moves. We already know where we are.
    if (
      current &&
      detail.roomId === current.id &&
      (!cloud.user || detail.fromId !== cloud.user.id)
    ) {
      lastLive = detail;
      paintBanner();
    }
  });

  // Real-time events
  window.addEventListener('iyun:cloudmessage', function (e) {
    var d = e.detail;
    if (!d || !d.message) return;
    if (current && d.roomId === current.id) {
      var empty = $('log').querySelector('p.muted');
      if (empty) empty.remove();
      addMessage(d.message, false);
      // In a background tab the title shows the unread count, so the user sees it on return.
      if (document.hidden) {
        unread[d.roomId] = (unread[d.roomId] || 0) + 1;
        document.title = '(' + unread[d.roomId] + ') ' + baseTitle;
      }
    } else {
      // Messages for other rooms only add a badge to the room list.
      unread[d.roomId] = (unread[d.roomId] || 0) + 1;
      paintRooms();
    }
  });
  window.addEventListener('iyun:cloudpresence', function (e) {
    members.forEach(function (m) {
      if (m.id === e.detail.userId) m.online = !!e.detail.online;
    });
    if (current) paintMembers();
  });
  // The room we were in is gone, so the list has to be reloaded.
  window.addEventListener('iyun:roomgone', function () {
    loadRooms();
  });
  // Someone joined or left a group we share: refresh the member list and the counts.
  window.addEventListener('iyun:roomchange', function (e) {
    if (current && e.detail.roomId === current.id) loadMembers();
    cloud
      .request('rooms')
      .then(function (r) {
        rooms = r.rooms;
        paintRooms();
      })
      .catch(function () {});
  });
  // Coming back to the tab means the user has seen the open room, so clear its unread state.
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
      document.title = baseTitle;
      if (current) {
        unread[current.id] = 0;
        paintRooms();
        loadMembers();
      }
    }
  });
  // Polls the member list while the tab is visible, in case a presence event was missed.
  setInterval(function () {
    if (!document.hidden) loadMembers();
  }, 45000);

  // Start: pick the right gate, or open the app
  cloud.ready.then(function (status) {
    if (!status.available) {
      showGate(
        'Groups, live messages and presence need the sync server, which is not available here. Run it with “node server.js”, or use the deployed site.',
        false
      );
      return;
    }
    var invite = new URLSearchParams(location.search).get('join');
    if (!status.user) {
      showGate(
        invite
          ? 'You were invited to a study group. Sign in or create an account to join it.'
          : 'Sign in to study with others. Reading and notes never need an account.',
        true
      );
      paintAuth();
      return;
    }
    $('gate').hidden = true;
    $('app').hidden = false;
    var startup = loadRooms();
    // Join only after the room list has loaded. Then drop ?join= so a reload does not join again.
    if (invite)
      startup = startup
        .then(function () {
          return join(invite);
        })
        .then(function () {
          history.replaceState(null, '', 'chavruta.html');
        })
        .catch(function (e) {
          $('sideMsg').textContent = e.message;
        });
  });
})();
