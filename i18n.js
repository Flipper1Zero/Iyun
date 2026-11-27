// Hebrew / English interface for the site chrome: navigation, buttons and labels.
// Book texts keep their own languages and are not translated here.
// Mark elements with data-i18n="key" (text), data-i18n-ph (placeholder) or data-i18n-title (title and aria-label).
// The English in the HTML is the fallback. Any element with data-lang-toggle switches the language.
(function () {
  'use strict';
  var DICT = {
    en: {},
    he: {
      'nav.library': 'ספרייה',
      'nav.daf': 'דף',
      'nav.notes': 'הערות',
      'nav.signin': 'כניסה',
      'nav.signup': 'הרשמה',
      'nav.about': 'אודות',
      'nav.sheets': 'דפי מקורות',
      'nav.chavruta': 'חברותא',
      'tool.find': 'חיפוש',
      'tool.commentary': 'מפרשים',
      'tool.cite': 'ציטוט',
      'tool.share': 'שיתוף',
      'tool.print': 'הדפסה',
      'home.parasha': 'פרשת השבוע',
      'home.daf': 'הדף היומי',
      'app.markup': 'סימון',
      'app.sync': 'סנכרון',
      'app.punctuate': 'פיסוק',
      'app.chavruta': 'חברותא',
      'app.flowcharts': 'תרשימי זרימה',
      'app.media': 'מדיה',
      'app.live': 'לייב',
      'app.networks': 'רשתות',
      'cc.title': 'מרכז הבקרה',
      'cc.size': 'גודל עברית',
      'cc.nikud': 'ניקוד',
      'cc.translation': 'תרגום',
      'cc.theme': 'עיצוב',
      'cc.notes': 'הערות',
      'cc.source': 'מקור',
      'cc.allnotes': 'כל ההערות שלי',
      'footer.disclaimer':
        'עיון: תוכנה חופשית בקוד פתוח (GPL-3.0). הטקסטים מספריא ומקורות פתוחים נוספים.',
      'footer.privacy': 'פרטיות',
      'footer.terms': 'תנאי שימוש',
      'footer.about': 'אודות',
      'notes.title': 'ההערות שלי',
      'notes.search': 'חיפוש בהערות',
      'notes.export': 'ייצוא',
      'notes.import': 'ייבוא',
      'notes.share': 'שיתוף כדף מקורות',
      'notes.empty': 'עדיין אין הערות. כתבו הערה בקורא ותופיע כאן.',
      'sheet.title': 'דף מקורות',
      'sheet.report': 'דיווח',
      'sheet.by': 'מאת',
      'chav.title': 'חברותא',
      'chav.send': 'שליחה',
      'chav.online': 'מחוברים',
      'chav.placeholder': 'כתבו הודעה…',
    },
  };
  var KEY = 'iyun.ui.lang';
  // Reading storage can throw in private windows or when site data is blocked. Treat that as no saved choice.
  function stored() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }
  // Without a saved choice, follow the browser's language.
  function current() {
    var s = stored();
    if (s === 'he' || s === 'en') return s;
    return (navigator.language || '').slice(0, 2) === 'he' ? 'he' : 'en';
  }
  var lang = current();
  var TABS = {
    Tanach: 'תנ״ך',
    Mishnah: 'משנה',
    Talmud: 'תלמוד',
    Halacha: 'הלכה',
    Midrash: 'מדרש',
    Tosefta: 'תוספתא',
    Kabbalah: 'קבלה',
    Tefilla: 'תפילה',
    Machshava: 'מחשבה',
    Chasidut: 'חסידות',
    Musar: 'מוסר',
    Responsa: 'שו״ת',
    Tannaim: 'תנאים',
    Reference: 'עיון',
    Commentaries: 'מפרשים',
  };

  function t(key, fallback) {
    return (DICT[lang] && DICT[lang][key]) || fallback || DICT.en[key] || key;
  }
  // Keeps the original (English) text the first time an element is seen, so switching back to English restores it.
  function remember(node, attr, value) {
    var k = 'i18nOrig' + attr;
    if (node.dataset[k] === undefined) node.dataset[k] = value;
    return node.dataset[k];
  }
  function apply() {
    var root = document.documentElement;
    root.lang = lang;
    root.dataset.uiLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      var orig = remember(n, 'Text', n.textContent);
      n.textContent = lang === 'en' ? orig : t(n.dataset.i18n, orig);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (n) {
      var orig = remember(n, 'Ph', n.getAttribute('placeholder') || '');
      n.setAttribute('placeholder', lang === 'en' ? orig : t(n.dataset.i18nPh, orig));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (n) {
      var orig = remember(
        n,
        'Title',
        n.getAttribute('title') || n.getAttribute('aria-label') || ''
      );
      var v = lang === 'en' ? orig : t(n.dataset.i18nTitle, orig);
      n.setAttribute('title', v);
      n.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(function (b) {
      if (!b.hasAttribute('data-lang-icon')) b.textContent = lang === 'he' ? 'EN' : 'עב';
      b.setAttribute('aria-label', lang === 'he' ? 'Switch to English' : 'החלפה לעברית');
      b.setAttribute('title', lang === 'he' ? 'English' : 'עברית');
    });
    window.dispatchEvent(new CustomEvent('iyun:lang', { detail: { lang: lang } }));
  }
  function set(l) {
    lang = l === 'he' ? 'he' : 'en';
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {
      /* storage unavailable */
    }
    apply();
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang-toggle],#langToggle');
    if (b) {
      e.preventDefault();
      set(lang === 'he' ? 'en' : 'he');
    }
  });
  window.IYUN_I18N = {
    t: t,
    lang: function () {
      return lang;
    },
    set: set,
    apply: apply,
    tab: function (name) {
      return lang === 'he' ? TABS[name] || name : name;
    },
  };
  // The script can be loaded after the DOM is ready, in which case there is nothing to wait for.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
