// Client for the optional sync server (server.js). It signs the user in, keeps this browser's iyun.* storage
// in step with the account, relays live events, and builds the group and discussion panels.
// On a static host every call fails quietly and the site runs on its own, locally. Exposed as window.IYUN_CLOUD.
(function () {
  'use strict';
  const cloud = { available: false, ai: false, user: null, events: null, ready: null };
  // How often a signed-in page pushes its changes and pulls everyone else's.
  const SYNC_INTERVAL_MS = 8000;
  // Set once the server has answered (or not) this session, so other pages can skip the probe.
  const PROBE_KEY = 'iyun.cloud.probe';
  // The raw localStorage text we last saw on the server for each key. push() compares against it,
  // so only changed keys are sent.
  const snapshots = new Map();

  // Every synced localStorage key. The local profile and the owner marker stay on this device.
  function keys() {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('iyun.') && k !== 'iyun.localProfile' && k !== 'iyun.cloud.owner')
        result.push(k);
    }
    return result;
  }
  // A browser holds one account's data at a time. If a different account signs in, the previous
  // person's synced keys are removed before anything is pulled down.
  function prepareOwner(user) {
    const previous = localStorage.getItem('iyun.cloud.owner');
    if (previous && previous !== user.id) keys().forEach((k) => localStorage.removeItem(k));
    localStorage.setItem('iyun.cloud.owner', user.id);
  }
  // Calls the sync server and resolves with the parsed JSON. Rejects with the server's error message.
  // An empty or non-JSON body counts as an empty object.
  async function request(route, options = {}) {
    const r = await fetch('/api/' + route, {
      credentials: 'same-origin',
      headers: { 'content-type': 'application/json', ...(options.headers || {}) },
      ...options,
    });
    let data = {};
    try {
      data = await r.json();
    } catch {}
    if (!r.ok) throw Error(data.error || 'Request failed.');
    return data;
  }
  // Uploads one key. Values that are not JSON are sent as plain strings.
  async function putState(key, raw) {
    let value;
    try {
      value = JSON.parse(raw);
    } catch {
      value = raw;
    }
    await request('state', { method: 'PUT', body: JSON.stringify({ key, value }) });
    snapshots.set(key, raw);
  }
  // Sends every key whose local value differs from the last snapshot.
  async function push() {
    if (!cloud.user) return;
    for (const k of keys()) {
      const raw = localStorage.getItem(k);
      if (snapshots.get(k) !== raw) await putState(k, raw);
    }
  }
  // Writes one server value into localStorage. Returns true when the local copy changed.
  function adoptRemote(key, value) {
    const raw = JSON.stringify(value);
    const changed = localStorage.getItem(key) !== raw;
    if (changed) localStorage.setItem(key, raw);
    snapshots.set(key, raw);
    return changed;
  }
  // Downloads the account's state. With reload set, the page reloads when something changed so the
  // open page shows the new data.
  async function pull(reload) {
    if (!cloud.user) return;
    const { items } = await request('state');
    let changed = false;
    for (const item of items) {
      if (adoptRemote(item.key, item.value)) changed = true;
    }
    if (reload && changed) location.reload();
  }
  // The first sync after sign-in uploads keys the server has never seen, then the server wins for the
  // rest. After that, every few seconds we push our changes and pull anyone else's.
  async function sync(initial) {
    if (!cloud.user) return;
    if (initial) await firstSync();
    else {
      await push();
      await pull(true);
    }
  }
  async function firstSync() {
    const { items } = await request('state'),
      remote = new Map(items.map((x) => [x.key, x.value]));
    for (const k of keys()) {
      if (!remote.has(k)) await putState(k, localStorage.getItem(k));
    }
    let changed = false;
    for (const [k, v] of remote) {
      if (adoptRemote(k, v)) changed = true;
    }
    // Reload once so the page picks up the pulled data. The flag in sessionStorage stops a reload loop.
    if (changed && sessionStorage.getItem('iyun.cloud.reloaded') !== '1') {
      sessionStorage.setItem('iyun.cloud.reloaded', '1');
      location.reload();
    } else sessionStorage.removeItem('iyun.cloud.reloaded');
  }
  // Opens the event stream and re-dispatches server events as window events, so page scripts can listen
  // without knowing about the connection.
  function connectEvents() {
    if (cloud.events) cloud.events.close();
    cloud.events = new EventSource('/api/events');
    // `inspect` can return false to drop an event.
    function relay(serverEvent, windowEvent, inspect) {
      cloud.events.addEventListener(serverEvent, (e) => {
        try {
          const detail = JSON.parse(e.data);
          if (inspect && inspect(detail) === false) return;
          window.dispatchEvent(new CustomEvent(windowEvent, { detail }));
        } catch {}
      });
    }
    // Live updates for a group this tab does not follow are ignored.
    relay('live', 'iyun:cloudlive', (d) => !(d.roomId && d.roomId !== cloud.liveRoom()));
    relay('presence', 'iyun:cloudpresence');
    relay('roomchange', 'iyun:roomchange');
    relay('roomgone', 'iyun:roomgone', (d) => {
      if (d.roomId === cloud.liveRoom()) cloud.setLiveRoom('');
    });
    relay('message', 'iyun:cloudmessage');
  }
  cloud.request = request;
  // The group this tab uses for Live. It is kept per tab in sessionStorage, so tabs can differ.
  cloud.liveRoom = function () {
    try {
      return sessionStorage.getItem('iyun.liveRoom') || '';
    } catch {
      return '';
    }
  };
  cloud.setLiveRoom = function (id) {
    try {
      if (id) sessionStorage.setItem('iyun.liveRoom', id);
      else sessionStorage.removeItem('iyun.liveRoom');
    } catch {}
  };
  // Per-tab Live mode: 'off', 'follow' (move when the leader moves) or 'lead' (share my place with the
  // selected group).
  cloud.liveMode = function () {
    try {
      return sessionStorage.getItem('iyun.liveMode') || 'off';
    } catch {
      return 'off';
    }
  };
  cloud.setLiveMode = function (mode) {
    try {
      if (mode === 'off') sessionStorage.removeItem('iyun.liveMode');
      else sessionStorage.setItem('iyun.liveMode', mode);
    } catch {}
    window.dispatchEvent(new CustomEvent('iyun:livemode', { detail: { mode } }));
  };
  // The Live endpoint: the group's own route when this tab has a group, otherwise the global one.
  cloud.liveRoute = function () {
    const id = cloud.liveRoom();
    return id ? 'rooms/' + id + '/live' : 'live';
  };
  // Shared end of sign-in and sign-up: remember the user, sync their data, then listen for live events.
  async function startSession(user) {
    cloud.user = user;
    prepareOwner(user);
    await sync(true);
    connectEvents();
    return user;
  }
  cloud.signIn = async function (email, password) {
    const data = await request('auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    return startSession(data.user);
  };
  cloud.signUp = async function (name, email, password) {
    const data = await request('auth/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
    return startSession(data.user);
  };
  // Pushes any unsaved changes, ends the session, then clears this browser's synced data so the next
  // person starts clean. Reloads so the page forgets the old data.
  cloud.signOut = async function () {
    await push();
    await request('auth/signout', { method: 'POST', body: '{}' });
    cloud.user = null;
    cloud.events?.close();
    cloud.events = null;
    keys().forEach((k) => localStorage.removeItem(k));
    localStorage.removeItem('iyun.cloud.owner');
    location.reload();
  };

  // Small DOM helpers for the panels below. Text always goes in with textContent.
  function node(tag, text) {
    const el = document.createElement(tag);
    if (text != null) el.textContent = text;
    return el;
  }
  function button(root, label, fn) {
    const el = node('button', label);
    el.type = 'button';
    el.addEventListener('click', fn);
    root.append(el);
    return el;
  }
  // "member" or "members", with the group's role and invite code.
  function roomSummary(room) {
    return (
      room.role +
      ' · ' +
      room.members +
      ' member' +
      (room.members === 1 ? '' : 's') +
      ' · Invite code: ' +
      room.code
    );
  }
  // Opens or closes the member list of a group. Owners get a Remove button beside every other member.
  async function toggleMembers(room, members, ui) {
    members.hidden = !members.hidden;
    if (members.hidden) return;
    try {
      const m = await request('rooms/' + room.id + '/members');
      members.replaceChildren();
      m.members.forEach((x) => {
        const row = node('p', x.name + (x.role === 'owner' ? ' (owner)' : ''));
        if (room.role === 'owner' && x.role !== 'owner')
          button(row, 'Remove', () =>
            ui.act(
              () => request('rooms/' + room.id + '/members/' + x.id, { method: 'DELETE' }),
              'Removed ' + x.name + '.'
            )
          );
        members.append(row);
      });
    } catch (e) {
      ui.status.textContent = e.message;
    }
  }
  function renameRoom(room, ui) {
    const n = prompt('New group name', room.name);
    if (n && n.trim())
      ui.act(
        () =>
          request('rooms/' + room.id, {
            method: 'PATCH',
            body: JSON.stringify({ name: n.trim() }),
          }),
        'Renamed.'
      );
  }
  // One row of the group list. `live` is the group this tab uses for Live. `ui` gives access to act, show and
  // the status line of the panel.
  function roomItem(room, live, ui) {
    const item = node('div');
    item.style.cssText = 'border-top:1px solid #ddd;padding:10px 0';
    item.append(node('strong', room.name), node('p', roomSummary(room)));
    const members = node('div');
    members.hidden = true;
    button(item, 'Members', () => toggleMembers(room, members, ui));
    button(item, live === room.id ? 'Live: following this group (stop)' : 'Use for Live', () => {
      cloud.setLiveRoom(live === room.id ? '' : room.id);
      ui.show();
    });
    if (room.role === 'owner') {
      button(item, 'Rename', () => renameRoom(room, ui));
      button(item, 'Delete group', () => {
        if (confirm('Delete "' + room.name + '" and all its messages?'))
          ui.act(() => request('rooms/' + room.id, { method: 'DELETE' }), 'Group deleted.');
      });
    } else {
      button(item, 'Leave', () => {
        if (confirm('Leave "' + room.name + '"?'))
          ui.act(
            () => request('rooms/' + room.id + '/members/' + cloud.user.id, { method: 'DELETE' }),
            'You left the group.'
          );
      });
    }
    item.append(members);
    return item;
  }
  // Group management panel: create, join, rename, remove members, pick the group to use for Live.
  cloud.mountNetworks = async function (root) {
    await cloud.ready;
    if (!root.isConnected) return;
    root.replaceChildren();
    if (!cloud.available) {
      root.append(
        node(
          'p',
          'Shared groups need the optional sync server (node server.js). Local groups above work without it.'
        )
      );
      return;
    }
    if (!cloud.user) {
      root.append(node('p', 'Sign in from the home page to create and join shared groups.'));
      return;
    }
    root.append(
      node(
        'p',
        'Create a private group or join with an invite code. The owner can rename, remove members, or delete the group. Members can discuss passages and follow each other live.'
      )
    );
    const groupName = node('input');
    groupName.placeholder = 'Group name';
    root.append(groupName);
    const inviteCode = node('input');
    inviteCode.placeholder = 'Invite code';
    root.append(inviteCode);
    const status = node('p'),
      list = node('div');
    root.append(status, list);
    // Runs one change. On success shows msg and redraws the list. On failure shows the error instead.
    async function act(fn, msg) {
      try {
        await fn();
        if (msg) status.textContent = msg;
        await show();
      } catch (e) {
        status.textContent = e.message;
      }
    }
    async function show() {
      try {
        const data = await request('rooms');
        list.replaceChildren();
        const live = cloud.liveRoom();
        for (const room of data.rooms) list.append(roomItem(room, live, { act, show, status }));
        if (!data.rooms.length) list.append(node('p', 'No groups yet.'));
      } catch (e) {
        status.textContent = e.message;
      }
    }
    button(root, 'Create group', () => {
      if (groupName.value.trim())
        act(async () => {
          await request('rooms', {
            method: 'POST',
            body: JSON.stringify({ name: groupName.value.trim() }),
          });
          groupName.value = '';
        }, 'Group created.');
    });
    button(root, 'Join group', () => {
      if (inviteCode.value.trim())
        act(async () => {
          await request('rooms/join', {
            method: 'POST',
            body: JSON.stringify({ code: inviteCode.value.trim() }),
          });
          inviteCode.value = '';
        }, 'Joined group.');
    });
    // Redraw when a group this user belongs to goes away.
    const gone = () => {
      if (root.isConnected) show();
    };
    window.addEventListener('iyun:roomgone', gone);
    show();
  };
  // Per-passage discussion thread for one group, refreshed when a message arrives. Messages are
  // fetched per group and filtered to this passage (ref) on the client.
  cloud.mountDiscussion = async function (root, ref) {
    await cloud.ready;
    if (!root.isConnected) return;
    root.replaceChildren();
    if (!cloud.available) {
      root.append(
        node(
          'p',
          'Shared discussion needs the optional sync server (node server.js). Your private draft above is saved in this browser.'
        )
      );
      return;
    }
    if (!cloud.user) {
      root.append(node('p', 'Sign in from the home page to discuss this passage with a group.'));
      return;
    }
    root.append(node('p', 'Shared discussion for ' + ref));
    const select = node('select'),
      list = node('div'),
      message = node('textarea'),
      status = node('p');
    message.rows = 3;
    message.placeholder = 'Your thought or question…';
    root.append(select, list, message, status);
    async function show() {
      list.replaceChildren();
      if (!select.value) return;
      try {
        const data = await request('rooms/' + select.value + '/messages');
        data.messages
          .filter((x) => x.ref === ref)
          .forEach((item) => {
            const p = node('p');
            p.append(node('strong', item.name + ': '), document.createTextNode(item.body));
            list.append(p);
          });
        if (!list.children.length) list.append(node('p', 'No messages on this passage yet.'));
      } catch (e) {
        status.textContent = e.message;
      }
    }
    try {
      const data = await request('rooms');
      data.rooms.forEach((room) => {
        const opt = node('option', room.name);
        opt.value = room.id;
        select.append(opt);
      });
      if (!data.rooms.length) {
        select.hidden = true;
        status.textContent = 'Create or join a group in Networks first.';
      } else show();
    } catch (e) {
      status.textContent = e.message;
    }
    select.onchange = show;
    button(root, 'Post to group', async () => {
      try {
        if (!select.value || !message.value.trim()) return;
        await request('rooms/' + select.value + '/messages', {
          method: 'POST',
          body: JSON.stringify({ ref, body: message.value.trim() }),
        });
        message.value = '';
        show();
      } catch (e) {
        status.textContent = e.message;
      }
    });
    // Refresh when a message arrives for the group and passage shown. The cleanup hook is called by
    // study-tools.js and book.js when the panel is torn down.
    const listener = (e) => {
      if (e.detail.roomId === select.value && e.detail.message.ref === ref && root.isConnected)
        show();
    };
    window.addEventListener('iyun:cloudmessage', listener);
    root._cleanup = () => window.removeEventListener('iyun:cloudmessage', listener);
  };
  // Asks the server's AI helper about a passage. Rejects with the server's error message on failure.
  cloud.askAI = async function (question, passage) {
    await cloud.ready;
    const data = await request('ai', {
      method: 'POST',
      body: JSON.stringify({ question, passage }),
    });
    return data.answer;
  };
  // Toggles the cloud-on and cloud-off classes on the root element.
  function markCloudState(on) {
    const root = document.documentElement;
    root.classList.toggle('cloud-off', !on);
    root.classList.toggle('cloud-on', on);
  }
  // Puts the signed-in name into every account link on the page.
  function labelAccountLinks() {
    document.querySelectorAll('[data-account-link]').forEach((a) => {
      if (cloud.user) a.textContent = cloud.user.name;
    });
  }
  function resolveCloud() {
    labelAccountLinks();
    return cloud;
  }
  // Resolves to the cloud object once we know whether a server and a signed-in user exist.
  cloud.ready = (async () => {
    // Ask the backend once per session. On a static host, remember that so other pages skip the failing request.
    let cached = null;
    try {
      cached = sessionStorage.getItem(PROBE_KEY);
    } catch {}
    // Opened from disk there is no server to ask.
    if (location.protocol === 'file:' || cached === 'off') {
      markCloudState(false);
      return resolveCloud();
    }
    try {
      const status = await request('status');
      if (!status.server) throw Error('no backend');
      cloud.available = true;
      cloud.ai = !!status.ai;
      markCloudState(true);
      try {
        sessionStorage.setItem(PROBE_KEY, 'on');
      } catch {}
      const me = await request('auth/me');
      cloud.user = me.user;
      if (cloud.user) {
        prepareOwner(cloud.user);
        await sync(true);
        connectEvents();
        setInterval(() => sync(false).catch(() => {}), SYNC_INTERVAL_MS);
      }
    } catch {
      if (!cloud.available) {
        markCloudState(false);
        try {
          sessionStorage.setItem(PROBE_KEY, 'off');
        } catch {}
      }
      cloud.user = null;
    }
    return resolveCloud();
  })();
  window.IYUN_CLOUD = cloud;
})();
