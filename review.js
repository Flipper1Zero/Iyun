// Review progress for the Shakla v'Tarya drafts. Reads annotations/index.json, which
// scripts/build-annotation-index.mjs generates, and shows a bar per tractate with its dapim.
(function () {
  'use strict';
  var $ = function (id) {
    return document.getElementById(id);
  };
  // Draws a stacked bar of reviewed (r), draft (d) and not yet drafted (m) counts.
  // Decorative bars are hidden from assistive tech, because the text next to them gives the numbers.
  function bar(r, d, m, decor) {
    // The `|| 1` keeps an empty tractate from dividing by zero.
    var t = r + d + m || 1;
    var b = document.createElement('div');
    b.className = 'review-bar';
    if (decor) b.setAttribute('aria-hidden', 'true');
    else b.setAttribute('role', 'img');
    [
      ['r', r],
      ['d', d],
      ['m', m],
    ].forEach(function (part) {
      var i = document.createElement('i');
      i.className = part[0];
      i.style.width = (part[1] / t) * 100 + '%';
      b.append(i);
    });
    return b;
  }
  // Shares under 1% get one decimal place, so a small but non-zero share does not show as 0%.
  function pct(n, t) {
    return t ? ((n / t) * 100).toFixed(n / t < 0.01 && n ? 1 : 0) + '%' : '0%';
  }
  fetch('annotations/index.json')
    .then(function (r) {
      if (!r.ok) throw Error(r.status);
      return r.json();
    })
    .then(function (idx) {
      showOverall(idx.total);
      showTractates(idx.tractates);
    })
    .catch(function () {
      $('overallText').textContent =
        'Progress is not available right now (annotations/index.json could not be loaded).';
    });
  function showOverall(total) {
    var all = total.reviewed + total.draft + total.missing;
    var ob = $('overallBar');
    ob.replaceChildren(...bar(total.reviewed, total.draft, total.missing).children);
    ob.setAttribute(
      'aria-label',
      'Reviewed ' + total.reviewed + ', draft ' + total.draft + ', not yet drafted ' + total.missing
    );
    $('overallText').textContent =
      total.reviewed +
      ' reviewed (' +
      pct(total.reviewed, all) +
      '), ' +
      total.draft +
      ' machine-assisted drafts awaiting review (' +
      pct(total.draft, all) +
      '), ' +
      total.missing +
      ' not yet drafted, out of ' +
      all +
      ' dapim in the Bavli.';
  }
  function showTractates(tractates) {
    var list = $('tractates');
    tractates.forEach(function (t) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-expanded', 'false');
      var s = document.createElement('strong');
      s.textContent = t.name;
      var small = document.createElement('span');
      small.className = 'small';
      small.textContent =
        t.reviewed + ' reviewed · ' + t.draft + ' draft · ' + t.missing + ' not drafted';
      b.append(s, bar(t.reviewed, t.draft, t.missing, true), small);
      b.onclick = function () {
        list.querySelectorAll('button').forEach(function (x) {
          x.setAttribute('aria-expanded', 'false');
        });
        b.setAttribute('aria-expanded', 'true');
        showDapim(t);
      };
      list.append(b);
    });
  }
  // Lists the dapim of one tractate and preselects it in the sign-off form.
  function showDapim(t) {
    var box = $('dafList');
    box.hidden = false;
    box.replaceChildren();
    var h = document.createElement('h3');
    h.textContent = t.name;
    box.append(h);
    t.dapim.split(' ').forEach(function (entry) {
      box.append(dafLink(t.name, entry));
    });
    $('soTractate').value = t.name;
    box.scrollIntoView({ block: 'nearest' });
  }
  // An entry looks like "2a:r", where the letter after the colon is the review status.
  function dafLink(tractate, entry) {
    var parts = entry.split(':'),
      a = document.createElement('a');
    a.className = parts[1];
    a.href = 'gemara.html?tractate=' + encodeURIComponent(tractate) + '&daf=' + parts[0];
    a.textContent = parts[0];
    a.title =
      parts[1] === 'r' ? 'reviewed' : parts[1] === 'd' ? 'draft: needs review' : 'not yet drafted';
    return a;
  }
  $('signoff').addEventListener('submit', function (e) {
    e.preventDefault();
    var so = {
      tractate: $('soTractate').value.trim(),
      daf: $('soDaf').value.trim().toLowerCase(),
      reviewer: $('soName').value.trim(),
      reviewedAt: new Date().toISOString().slice(0, 10),
    };
    // The daf must look like "2a" and the reviewer name must be at least two characters.
    if (
      !so.tractate ||
      !/^\d+[ab]$/.test(so.daf) ||
      so.reviewer.length < 2 ||
      !$('soConfirm').checked
    ) {
      $('soMsg').textContent = 'Please complete every field and confirm your review.';
      return;
    }
    // The sign-off is downloaded, not sent, because maintainers apply it with a script.
    var filename = 'signoff-' + so.tractate.replace(/\s+/g, '_') + '-' + so.daf + '.json';
    downloadJson(filename, so);
    $('soMsg').textContent =
      'Downloaded ' +
      filename +
      '. Send it to the maintainers; they apply it with npm run annotations:signoff.';
  });
  function downloadJson(filename, data) {
    var blob = new Blob([JSON.stringify(data, null, 2) + '\n'], { type: 'application/json' }),
      a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.append(a);
    a.click();
    a.remove();
  }
})();
