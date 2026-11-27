// Conservative cues read from the opening words of a translated line. Loaded by the reader in
// the browser and by scripts/ through vm. A cue describes the first move in that line; it is
// not a word-level daf annotation.
(function (root) {
  'use strict';
  var rules = [
    [
      'attack',
      /^(?:the gemara|the sages|the tanna) (?:raises? an? objection|objects?|challenges?|raises? a contradiction|refutes?)/i,
    ],
    [
      'defense',
      /^(?:the gemara|the sages|the tanna) (?:responds? to (?:this|the|an) (?:objection|challenge)|resolves? (?:this|the) (?:objection|difficulty|contradiction)|defends?)/i,
    ],
    [
      'proof',
      /^(?:the gemara|the sages|the tanna) (?:cites? (?:a|another) proof|brings? (?:a|another) proof|proves?)/i,
    ],
    [
      'question',
      /^(?:the gemara|the sages|the tanna) (?:asks?|inquires?|wonders?|raises? (?:a|the) question)/i,
    ],
    [
      'answer',
      /^(?:the gemara|the sages|the tanna) (?:answers?|replies?|explains?|responds?|says? in answer)/i,
    ],
  ];
  function classify(english) {
    var opening = String(english || '')
      .replace(/^\s*(?:GEMARA:|MISHNA:|MISHNAH:)\s*/i, '')
      .trim();
    for (var i = 0; i < rules.length; i++) if (rules[i][1].test(opening)) return rules[i][0];
    return null;
  }
  var marks = /[֑-ׇ]/g;
  var onlyHebrew = function (word) {
    return String(word || '')
      .replace(marks, '')
      .replace(/[^א-ת]/g, '');
  };
  function align(tokens, translations) {
    var cursor = 0;
    return (translations || []).map(function (segment) {
      if (segment.range)
        return {
          range: [Math.max(0, segment.range[0]), Math.min(tokens.length - 1, segment.range[1])],
          score: 1,
        };
      if (!segment.he) return { range: null, score: 0 };
      var first = -1,
        last = -1,
        matched = 0,
        total = 0;
      String(segment.he)
        .split(/\s+/)
        .forEach(function (word) {
          var target = onlyHebrew(word);
          if (!target) return;
          total++;
          // Editions sometimes insert a verse reference mid-phrase, so skip up to a few tokens.
          for (var k = cursor; k < Math.min(tokens.length, cursor + 6); k++) {
            if (onlyHebrew(tokens[k].h) === target) {
              if (first < 0) first = k;
              last = k;
              cursor = k + 1;
              matched++;
              break;
            }
          }
        });
      return { range: first < 0 ? null : [first, last], score: total ? matched / total : 0 };
    });
  }
  // Stock Talmudic phrases that work even when a line has no English translation.
  // We mark only the phrase itself, not the argument that comes after it.
  var hebrewFormulas = [
    { words: ['מיתיבי'], role: 'attack', meaning: 'An objection is raised' },
    { words: ['מתקיף', 'לה'], role: 'attack', meaning: 'A challenge is raised' },
    { words: ['מאי', 'טעמא'], role: 'question', meaning: 'What is the reason?' },
    {
      words: ['מנא', 'הני', 'מילי'],
      role: 'question',
      meaning: 'From where are these matters derived?',
    },
    { words: ['לא', 'קשיא'], role: 'defense', meaning: 'The difficulty is resolved' },
    { words: ['תא', 'שמע'], role: null, meaning: 'Come and hear a source' },
    { words: ['שמע', 'מינה'], role: null, meaning: 'Learn or infer from it' },
    { words: ['הכא', 'במאי', 'עסקינן'], role: null, meaning: 'What case is being discussed here?' },
    { words: ['תנו', 'רבנן'], role: null, meaning: 'The Sages taught' },
    { words: ['אמר', 'מר'], role: null, meaning: 'The Master said' },
    { words: ['תניא'], role: null, meaning: 'A baraita was taught' },
    { words: ['דתניא'], role: null, meaning: 'As a baraita teaches' },
    { words: ['תנן'], role: null, meaning: 'The Mishnah teaches' },
    { words: ['דתנן'], role: null, meaning: 'As the Mishnah teaches' },
    { words: ['דכתיב'], role: null, meaning: 'As it is written in a verse' },
    { words: ['שנאמר'], role: null, meaning: 'As it is said in a verse' },
    { words: ['איתמר'], role: null, meaning: 'It was stated' },
  ];
  function hebrewMarkers(tokens) {
    var normalized = tokens.map(function (token) {
      return onlyHebrew(token.h);
    });
    var found = {};
    for (var i = 0; i < tokens.length; i++) {
      for (var j = 0; j < hebrewFormulas.length; j++) {
        var formula = hebrewFormulas[j];
        if (
          !formula.words.every(function (word, k) {
            return normalized[i + k] === word;
          })
        )
          continue;
        for (var k = 0; k < formula.words.length; k++) found[tokens[i + k].key] = formula;
        i += formula.words.length - 1;
        break;
      }
    }
    return found;
  }
  root.IYUN_ARGUMENT_CUES = { classify: classify, align: align, hebrewMarkers: hebrewMarkers };
})(typeof window === 'undefined' ? globalThis : window);
