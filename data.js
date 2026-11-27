// Iyun Markup — sample text data
// Bereishit (Genesis) 1:1–5. Each word is a token so it can be individually marked.
// `h` = pointed Hebrew (nikud shown/stripped via the Control Center), `en` = gloss.

window.IYUN_BOOK = {
  title: 'בְּרֵאשִׁית',
  titleEn: 'Bereishit · Genesis',
  chapter: 1,
  verses: [
    {
      n: 1,
      words: [
        { h: 'בְּרֵאשִׁית', en: 'In the beginning' },
        { h: 'בָּרָא', en: 'created' },
        { h: 'אֱלֹהִים', en: 'God' },
        { h: 'אֵת', en: '[obj.]' },
        { h: 'הַשָּׁמַיִם', en: 'the heavens' },
        { h: 'וְאֵת', en: 'and [obj.]' },
        { h: 'הָאָרֶץ', en: 'the earth' },
      ],
    },
    {
      n: 2,
      words: [
        { h: 'וְהָאָרֶץ', en: 'and the earth' },
        { h: 'הָיְתָה', en: 'was' },
        { h: 'תֹהוּ', en: 'formless' },
        { h: 'וָבֹהוּ', en: 'and void' },
        { h: 'וְחֹשֶׁךְ', en: 'and darkness' },
        { h: 'עַל־פְּנֵי', en: 'over the face of' },
        { h: 'תְהוֹם', en: 'the deep' },
        { h: 'וְרוּחַ', en: 'and the spirit of' },
        { h: 'אֱלֹהִים', en: 'God' },
        { h: 'מְרַחֶפֶת', en: 'hovering' },
        { h: 'עַל־פְּנֵי', en: 'over the face of' },
        { h: 'הַמָּיִם', en: 'the waters' },
      ],
    },
    {
      n: 3,
      words: [
        { h: 'וַיֹּאמֶר', en: 'and said' },
        { h: 'אֱלֹהִים', en: 'God' },
        { h: 'יְהִי', en: 'let there be' },
        { h: 'אוֹר', en: 'light' },
        { h: 'וַיְהִי־אוֹר', en: 'and there was light' },
      ],
    },
    {
      n: 4,
      words: [
        { h: 'וַיַּרְא', en: 'and saw' },
        { h: 'אֱלֹהִים', en: 'God' },
        { h: 'אֶת־הָאוֹר', en: '[obj.] the light' },
        { h: 'כִּי־טוֹב', en: 'that [it was] good' },
        { h: 'וַיַּבְדֵּל', en: 'and separated' },
        { h: 'אֱלֹהִים', en: 'God' },
        { h: 'בֵּין', en: 'between' },
        { h: 'הָאוֹר', en: 'the light' },
        { h: 'וּבֵין', en: 'and between' },
        { h: 'הַחֹשֶׁךְ', en: 'the darkness' },
      ],
    },
    {
      n: 5,
      words: [
        { h: 'וַיִּקְרָא', en: 'and called' },
        { h: 'אֱלֹהִים', en: 'God' },
        { h: 'לָאוֹר', en: 'the light' },
        { h: 'יוֹם', en: 'day' },
        { h: 'וְלַחֹשֶׁךְ', en: 'and the darkness' },
        { h: 'קָרָא', en: 'called' },
        { h: 'לָיְלָה', en: 'night' },
        { h: 'וַיְהִי־עֶרֶב', en: 'and there was evening' },
        { h: 'וַיְהִי־בֹקֶר', en: 'and there was morning' },
        { h: 'יוֹם', en: 'day' },
        { h: 'אֶחָד', en: 'one' },
      ],
    },
  ],
};

// Each palette is one way of marking up the text (a "lens"). Colors were picked
// to stay readable in every theme.
window.IYUN_PALETTES = [
  {
    id: 'dikduk',
    name: 'Dikduk',
    sub: 'Grammar · parts of speech',
    categories: [
      { id: 'noun', label: 'Noun', he: 'שֵׁם עֶצֶם', color: '#2563eb' },
      { id: 'verb', label: 'Verb', he: 'פֹּעַל', color: '#dc2626' },
      { id: 'divine', label: 'Divine Name', he: 'שֵׁם הַשֵּׁם', color: '#7c3aed' },
      { id: 'prep', label: 'Particle', he: 'מִלַּת יַחַס', color: '#0d9488' },
      { id: 'conj', label: 'Conjunction', he: 'מִלַּת חִבּוּר', color: '#d97706' },
      { id: 'adj', label: 'Adjective', he: 'שֵׁם תֹּאַר', color: '#db2777' },
    ],
  },
  {
    id: 'narrative',
    name: 'Narrative',
    sub: 'Who · what · where · when',
    categories: [
      { id: 'character', label: 'Character', he: 'דְּמוּת', color: '#7c3aed' },
      { id: 'action', label: 'Action', he: 'פְּעֻלָּה', color: '#dc2626' },
      { id: 'setting', label: 'Setting', he: 'מָקוֹם', color: '#16a34a' },
      { id: 'object', label: 'Object', he: 'חֵפֶץ', color: '#2563eb' },
      { id: 'time', label: 'Time', he: 'זְמַן', color: '#d97706' },
    ],
  },
  {
    id: 'pshat',
    name: 'Pshat',
    sub: 'Sentence roles',
    categories: [
      { id: 'subject', label: 'Subject', he: 'נוֹשֵׂא', color: '#2563eb' },
      { id: 'predicate', label: 'Predicate', he: 'נָשׂוּא', color: '#dc2626' },
      { id: 'object', label: 'Object', he: 'מֻשָּׂא', color: '#16a34a' },
      { id: 'modifier', label: 'Modifier', he: 'לְוַאי', color: '#d97706' },
      { id: 'connector', label: 'Connector', he: 'קַשָּׁר', color: '#64748b' },
    ],
  },
];
