# Drafting Shakla v'Tarya annotations

This is the brief for anyone drafting argument-structure ranges for a tractate. The drafts are made with machine help, so each one stays unreviewed until a person signs it off. This brief does not replace that check.

A batch is one tractate, one daf at a time, for **exactly 16 dapim**. Count your successful submissions, and stop after the 16th, even if more are missing.

1. From the repository root, run `node scripts/annotation-view.mjs --tractate="<TRACTATE>"`. It prints the next daf with no annotation. You get the Hebrew words as `key:word`. Keys run `m0..` if the daf opens with a Mishnah, then `g0..`. You also get the aligned English lines. The alignment spans are approximate, so trust the Hebrew. If it prints `NO MISSING DAPIM`, stop and say so.
2. Cover **every** word with consecutive ranges: no gaps, no overlaps, in order. Start and end are the word keys exactly as printed. Pick the role by what the passage does, not by the formula it opens with:
   - `statement`: a position, Mishnah, baraita, or teaching is asserted
   - `proof`: a source is brought in support (verse, mishnah, baraita)
   - `attack`: an objection or contradiction against a view
   - `defense`: a reply that upholds the attacked view
   - `question`: a real question or a request for explanation
   - `answer`: a reply to a question, or an explanation

   Split where the speaker or the role changes. Use ranges of natural clause length. The validator rejects mechanical fixed-width ranges. Give each range a short explanation in English, in your own words, of at most 25 words. Do not copy the English lines. Escape any double quotes inside the JSON strings.
3. Write the JSON to `drafts/<Tractate_with_underscores>-<daf>.json` in a scratch folder outside the repository:
   `{"tractate":"<TRACTATE>","daf":"4b","ranges":[["g0","g39","statement","short explanation"],["g40","g52","question","..."]]}`
   Then run `node scripts/annotation-submit.mjs <that file>`. If it reports an error, fix the JSON and submit again.
4. Go back to step 1 until you have submitted 16.

A few rules. Do not edit any repository file by hand. Never write `reviewed`: the tool always writes `draft`. Do not write the name of any model or tool into a file. Work only on your own tractate.

When you finish, report how many dapim you submitted (count them), any failures, and one honest line on how confident you are.
