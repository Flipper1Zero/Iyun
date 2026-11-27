// Shared browser/Node validation for independently authored daf annotations.
// Loaded by the reader in the browser and by the scripts under scripts/ through vm, so keep it
// free of imports and DOM access beyond the window/globalThis check at the bottom.
(function (root) {
  'use strict';
  var categories = ['statement', 'proof', 'attack', 'defense', 'question', 'answer'];
  function textHash(daf) {
    var value = (daf.mishnah || '') + '\n' + (daf.gemara || '');
    var hash = 2166136261;
    for (var i = 0; i < value.length; i++)
      hash = Math.imul(hash ^ value.charCodeAt(i), 16777619) >>> 0;
    return hash.toString(16).padStart(8, '0');
  }
  function tokenKeys(daf) {
    var mishnah = (daf.mishnah || '').trim() ? daf.mishnah.trim().split(/\s+/) : [];
    var first = (daf.perekFirstWord || '').replace(/[֑-ׇ]/g, '');
    if (
      first &&
      mishnah.length &&
      mishnah[0].replace(/[֑-ׇ]/g, '').replace(/[.?,:]/g, '') === first
    )
      mishnah.shift();
    var gemara = (daf.gemara || '').trim() ? daf.gemara.trim().split(/\s+/) : [];
    return mishnah
      .map(function (_, i) {
        return 'm' + i;
      })
      .concat(
        gemara.map(function (_, i) {
          return 'g' + i;
        })
      );
  }
  function validate(daf, annotation) {
    var errors = [],
      keys = tokenKeys(daf),
      used = new Set();
    if (!annotation || annotation.version < 1 || !['draft', 'reviewed'].includes(annotation.status))
      errors.push('missing version or status');
    if (
      annotation &&
      annotation.status === 'reviewed' &&
      (!annotation.reviewer || !/^\d{4}-\d{2}-\d{2}$/.test(annotation.reviewedAt || ''))
    )
      errors.push('reviewed annotation needs reviewer and reviewedAt');
    if (annotation && annotation.textHash !== textHash(daf))
      errors.push('Hebrew text hash differs');
    ((annotation && annotation.ranges) || []).forEach(function (range, i) {
      var start = keys.indexOf(range.start),
        end = keys.indexOf(range.end);
      if (!categories.includes(range.cat)) errors.push('range ' + i + ': invalid category');
      if (start < 0 || end < start) {
        errors.push('range ' + i + ': invalid token boundary');
        return;
      }
      for (var k = start; k <= end; k++) {
        if (used.has(keys[k])) errors.push('range ' + i + ': overlaps at ' + keys[k]);
        used.add(keys[k]);
      }
      (range.exclude || []).forEach(function (key) {
        if (!keys.includes(key)) errors.push('range ' + i + ': invalid exclusion ' + key);
      });
    });
    // Drafts from a model can slip into splitting every stretch into the same width. Five
    // equal-width ranges in a row look mechanical, so the draft is rejected for review.
    if (annotation && annotation.generatedWith && annotation.ranges) {
      var repeated = 1,
        lastWidth = 0;
      annotation.ranges.forEach(function (range) {
        var start = keys.indexOf(range.start),
          end = keys.indexOf(range.end);
        var width = start < 0 || end < start ? 0 : end - start + 1;
        repeated = width >= 3 && width <= 12 && width === lastWidth ? repeated + 1 : 1;
        if (repeated === 5) errors.push('mechanical fixed-width segmentation needs review');
        lastWidth = width;
      });
    }
    if (!annotation || !annotation.ranges || !annotation.ranges.length) errors.push('no ranges');
    if (used.size !== keys.length)
      errors.push('incomplete daf coverage: ' + used.size + '/' + keys.length + ' words');
    return { errors: errors, covered: used.size, total: keys.length, hash: textHash(daf) };
  }
  root.IYUN_ANNOTATION = { textHash: textHash, tokenKeys: tokenKeys, validate: validate };
})(typeof window === 'undefined' ? globalThis : window);
