# Notices and credits

**Iyun**, the code in this repository, is free software under the [GNU General Public License v3.0 or later](LICENSE) (GPL-3.0-or-later). The [Sefaria project](https://github.com/Sefaria/Sefaria-Project) uses the same license, and this site is built on Sefaria's open dataset.

The license covers the **code** only. Texts, translations, fonts, and annotations are separate works with their own terms.

## Texts and translations (not stored in this repository)

`npm run build` downloads the open [Sefaria-Export](https://github.com/Sefaria/Sefaria-Export) dataset and builds the reading library on your machine. The dataset has no single license. _Each text carries its own_, in the `license` field of its JSON. The usual licenses are Public Domain, CC0, CC-BY, CC-BY-SA, and CC-BY-NC. The build keeps only those licenses, shows each text's version and license in the reader, and flags non-commercial (CC-BY-NC) texts.

**Some included editions are CC-BY-NC, so a site built from this repository is for non-commercial study unless you remove the NC texts.** See `scripts/build-texts.mjs`. Texts are never committed to this repository.

- Vilna Talmud (public domain), digitized on Hebrew Wikisource (CC BY-SA). Rashi, Rashbam, and Tosafot, Vilna edition (public domain).
- Rashi and Tosafot English: Sefaria Community Translation (CC0), and a Tosafot 2a translation by Jan Buckler (CC BY).
- A. Cohen's 1921 _Berakoth_ (public domain), via Sefaria-Export.
- William Davidson English Talmud (CC-BY-NC), via Sefaria-Export, labeled "non-commercial use only".

## Fonts (SIL Open Font License 1.1), in `fonts/`

Open Sans, Frank Ruhl Libre, Noto Rashi Hebrew, and Assistant. Each font's license text is next to it.

## Code we bundle or use

- [MiniSearch](https://github.com/lucaong/minisearch) 7.1.2 (MIT, Copyright 2022 Luca Ongaro) is vendored in `vendor/minisearch.js`. Its license is in `vendor/minisearch.LICENSE.txt`.
- [axe-core](https://github.com/dequelabs/axe-core) (MPL-2.0) is a development dependency. It is used only by `npm run test:a11y`. We do not ship it.

## Annotations (`annotations/`)

The Shakla v'Tarya (argument-structure) annotations are **drafts**. They were produced with machine help for this project. The reader labels them "Draft · awaiting review". No person has reviewed them yet. A draft stays a draft until a named reviewer signs it off. Please check them against a trusted edition before you rely on them. While drafting, the English translations in the text library were used as context, and some of those editions are licensed CC-BY-NC.

They are offered under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), because the Hebrew text they annotate is itself CC BY-SA on Wikisource.

## Trademarks

Iyun is independent. Sefaria did not make it, endorse it, or run it. "Sefaria" is the name of its owner. We use the name only to say where the texts came from and what Iyun works with.
