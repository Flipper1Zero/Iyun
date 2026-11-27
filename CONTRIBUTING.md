# Contributing to Iyun

Thanks for wanting to help. Iyun is a free Torah study site, licensed GPL-3.0-or-later. It is plain static HTML, CSS, and vanilla JavaScript, plus one Cloudflare Worker. When you run it on your own machine, `server.js` takes the Worker's place. There is no framework and no bundler. The code is at https://github.com/Flipper1Zero/Iyun.

## Getting it running

    npm install            # only needed for deploys (wrangler)
    npm run build          # downloads the open texts and builds the library; takes a few minutes the first time
    npm start              # http://127.0.0.1:8000

You need Node 24 or newer.

## Before you open a pull request

Please run these:

    npm run verify              # every catalog title opens, or is clearly marked unavailable
    npm run verify:annotations
    npm run meta:check          # shared <head> is in sync; `npm run meta` rewrites it
    npm run test:api            # accounts, sheets, groups, live events (Node server)
    npm run smoke               # browser tests; needs Playwright and Chromium

CI runs the same checks, so you will hear about any failure either way.

## Where help matters most

1. **Reviewing annotations.** The Shakla v'Tarya markup in `annotations/` was drafted with machine help, and nobody has signed it off yet. To review a daf, check its ranges and roles against the Hebrew. Then follow the sign-off steps in the README, which use `npm run annotations:signoff`. The script records the reviewer and the date. Never mark a daf reviewed unless you have actually checked it.
2. **Open sources.** We want better English translations under open licenses, and we are missing some titles.
3. **Bugs and accessibility.** Keyboard use, screen readers, phones, and Hebrew and right-to-left layout all need attention.

## Ground rules

- Add only texts, fonts, and images that carry an open license. Put the credit in `NOTICE.md`.
- Do not copy code, text, translations, or artwork from proprietary study platforms.
- Do not use real people's data in tests. Do not commit secrets. `.gitignore` already covers `data/` and `.wrangler/`. Do not commit `.env` files either.
- Keep the site light. It should still feel quick on a slow phone.
- Be kind to each other. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

By contributing, you agree that your work is licensed under the project's licenses: GPL-3.0-or-later for code, and CC BY-SA 4.0 for annotations.
