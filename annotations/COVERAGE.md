# Shakla v'Tarya coverage

Every daf of the Babylonian Talmud (37 tractates, 5,349 dapim) has a draft of word ranges. Each range has one of six argument roles and a short explanation in our own words.

| Status   | Dapim |
| -------- | ----: |
| Draft    | 5,349 |
| Reviewed |     0 |
| Missing  |     0 |

All of these are machine-assisted drafts. No person has checked them yet, and a draft stays a draft until a named reviewer signs it off with `npm run annotations:signoff`. Expect wrong role labels and loose explanations, especially in long back-and-forth passages.

To see current counts, run `npm run annotations:worklist -- --all=1`. To check hashes, range validity and word coverage, run `npm run verify:annotations`.
