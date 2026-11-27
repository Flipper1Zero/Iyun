// Drafts Shakla v'Tarya annotations with a language model, one chunk of a daf at a time.
// It can be stopped and restarted: dapim that already have a candidate are skipped.
// Credentials: OPENAI_API_KEY, or --provider=cloudflare with CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID.
// Add --preview to see how each daf would be split without calling anything.
// Examples:
//   node scripts/draft-annotations.mjs --tractate=Berakhot --daf=3a
//   node scripts/draft-annotations.mjs --tractate=Berakhot --all --limit=10
//   node scripts/draft-annotations.mjs --all --limit=10
// Results go to .cache/annotation-candidates and nowhere else. A person has to read them and
// import them with import-annotation.mjs. Covering every word only proves the format is right,
// not that the labels are.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { fillBerakhotEnglish } from './berakhot-english.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, ...rest] = arg.replace(/^--/, '').split('=');
    return [key, rest.length ? rest.join('=') : true];
  })
);
const provider = args.provider || 'openai';
if (!['openai', 'cloudflare'].includes(provider)) throw Error('Unknown provider: ' + provider);
if (!args.preview && provider === 'openai' && !process.env.OPENAI_API_KEY)
  throw Error('Set OPENAI_API_KEY for the annotation drafting service.');
if (
  !args.preview &&
  provider === 'cloudflare' &&
  (!process.env.CLOUDFLARE_API_TOKEN || !process.env.CLOUDFLARE_ACCOUNT_ID)
)
  throw Error('Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID for Workers AI.');
if (!args.daf && !args.all)
  throw Error('Choose --daf=3a or --all. Use --limit=N when trying a batch.');
if (args.daf && !args.tractate) throw Error('Choose --tractate with --daf.');
if (args.limit && (!Number.isSafeInteger(+args.limit) || +args.limit < 1))
  throw Error('--limit must be a positive integer.');
if (args.all && !args.preview && !args.limit && !args.unbounded)
  throw Error('Use --limit=N for a bounded batch, or --unbounded to run the entire worklist.');
const model =
  provider === 'openai'
    ? process.env.OPENAI_MODEL || 'gpt-4.1-mini'
    : process.env.CLOUDFLARE_AI_MODEL || '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
const api = {};
vm.runInNewContext(fs.readFileSync(path.join(root, 'annotation-data.js'), 'utf8'), api);
vm.runInNewContext(fs.readFileSync(path.join(root, 'argument-cues.js'), 'utf8'), api);
const built = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'daf-data.js'), 'utf8'), built);
const names = JSON.parse(fs.readFileSync(path.join(root, 'texts/names.json')));
fillBerakhotEnglish(root, names, built.window.IYUN_DAFS);
const allowed = new Set(['statement', 'proof', 'attack', 'defense', 'question', 'answer']);
const tractates = args.tractate ? [args.tractate] : ['Berakhot', ...Object.keys(names.dafs || {})];
let completed = 0;

// Same word list the reader numbers, minus the perek's opening word, which is shown separately.
function wordsFor(daf) {
  let mishnahWords = (daf.mishnah || '').trim().split(/\s+/).filter(Boolean);
  const first = (daf.perekFirstWord || '').replace(/[֑-ׇ]/g, '');
  if (
    first &&
    mishnahWords.length &&
    mishnahWords[0].replace(/[֑-ׇ]/g, '').replace(/[.?,:]/g, '') === first
  )
    mishnahWords = mishnahWords.slice(1);
  const gemaraWords = (daf.gemara || '').trim().split(/\s+/).filter(Boolean);
  return mishnahWords.concat(gemaraWords);
}
// Split the daf into pieces of roughly 60 to 115 words to keep each prompt small. Prefer to cut
// where an English line ends so a thought isn't split in half.
// Mishnah and gemara are chunked separately.
function chunks(keys, segmentEnds) {
  const result = [];
  for (const prefix of ['m', 'g']) {
    const indices = keys.map((key, i) => (key.startsWith(prefix) ? i : -1)).filter((i) => i >= 0);
    if (!indices.length) continue;
    let start = indices[0];
    const last = indices.at(-1);
    const section = [];
    while (start <= last) {
      const maximum = Math.min(last, start + 114);
      const boundaries = segmentEnds.filter((end) => end >= start + 59 && end <= maximum);
      const end = boundaries.length ? boundaries.at(-1) : maximum;
      section.push([start, end]);
      start = end + 1;
    }
    // A very short last piece gives the model too little to work with, so fold it into the
    // piece before it when the merged piece is still a reasonable size.
    if (
      section.length > 1 &&
      section.at(-1)[1] - section.at(-1)[0] < 30 &&
      section.at(-1)[1] - section.at(-2)[0] < 160
    ) {
      section.at(-2)[1] = section.at(-1)[1];
      section.pop();
    }
    result.push(...section);
  }
  return result;
}
// Build the prompts for a daf. Each one carries the target words, 35 words of Hebrew on
// either side for context, and the English lines that line up well with the target.
function prepare(daf) {
  const keys = api.IYUN_ANNOTATION.tokenKeys(daf),
    words = wordsFor(daf);
  if (keys.length !== words.length) throw Error('Tokenization mismatch on ' + daf.id);
  const translations = daf.translations || [];
  const aligned = api.IYUN_ARGUMENT_CUES.align(
    words.map((h) => ({ h })),
    translations
  );
  const good = aligned
    .map((item, index) => ({ ...item, index }))
    // Weak alignments would feed the model the wrong English, so leave them out.
    .filter((item) => item.range && item.score >= 0.75);
  const segmentEnds = good.map((item) => item.range[1]);
  const parts = chunks(keys, segmentEnds).map(([start, end]) => {
    const contextStart = Math.max(0, start - 35),
      contextEnd = Math.min(words.length - 1, end + 35);
    const line = (a, b) =>
      Array.from({ length: b - a + 1 }, (_, j) => `${a + j}:${words[a + j]}`).join(' ');
    const relevant = good.filter((item) => item.range[0] <= end && item.range[1] >= start);
    const english = relevant
      .map((item) => translations[item.index].en || '')
      .filter(Boolean)
      .join(' ')
      .slice(0, 4500);
    const prompt = `Daf: ${daf.masechetEn} ${daf.dafEn}. Target word indices ${start} through ${end}.\nEnglish context (aligned to the target, but may contain additional explanation): ${english || '(not available)'}\nPrevious Hebrew context: ${start > contextStart ? line(contextStart, start - 1) : '(none)'}\nTARGET: ${line(start, end)}\nFollowing Hebrew context: ${end < contextEnd ? line(end + 1, contextEnd) : '(none)'}\nReturn a complete ordered partition of TARGET only. Use absolute numeric indices. Start and end are inclusive; each next start is exactly the previous end plus one.`;
    return { start, end, englishSegments: relevant.map((item) => item.index), prompt };
  });
  return { keys, parts };
}
// Send one prompt to the chosen provider and return the parsed JSON.
async function ask(prompt) {
  if (provider === 'cloudflare') {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/${model}`,
      {
        method: 'POST',
        headers: {
          authorization: 'Bearer ' + process.env.CLOUDFLARE_API_TOKEN,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content:
                'Draft independent Talmud argument markup for scholarly review. Return a JSON object with a ranges array only. Categories: statement, proof, attack, defense, question, answer. Cover every numbered target word exactly once with inclusive start/end indices. Make coherent argument moves and write a short original English explanation for each.',
            },
            { role: 'user', content: prompt },
          ],
          response_format: { type: 'json_object' },
          max_tokens: 2400,
          temperature: 0,
          // These models ramble if left to "think", and we only want the JSON.
          ...(model.includes('glm-') || model.includes('nemotron-')
            ? { chat_template_kwargs: { enable_thinking: false } }
            : {}),
        }),
      }
    );
    const body = await response.json();
    if (!response.ok || !body.success)
      throw Error(
        'Workers AI HTTP ' + response.status + ': ' + JSON.stringify(body.errors || body)
      );
    const result =
      body.result?.response ||
      body.result?.choices?.[0]?.message?.content ||
      body.result?.choices?.[0]?.text;
    if (typeof result === 'object') return result;
    // Some models wrap the JSON in a code fence anyway.
    return JSON.parse(String(result || '').replace(/^```(?:json)?\s*|\s*```$/g, ''));
  }
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + process.env.OPENAI_API_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model,
      instructions:
        'You are drafting independent discourse analysis of the Babylonian Talmud for scholarly review. Return only JSON: {"ranges":[{"cat":"question","start":0,"end":3,"en":"Short original English explanation"}]}. Categories are statement, proof, attack, defense, question, answer. Label each coherent argument move by its role in context. Cover every numbered word in the target interval exactly once, in order, without overlap. Include cited text with the role of its surrounding move. Never claim the labels are verified.',
      input: prompt,
      max_output_tokens: 3000,
    }),
  });
  const body = await response.json();
  if (!response.ok)
    throw Error(
      'Draft service HTTP ' + response.status + ': ' + JSON.stringify(body.error || body)
    );
  const text =
    body.output_text ||
    (body.output || [])
      .flatMap((item) => item.content || [])
      .filter((item) => item.type === 'output_text')
      .map((item) => item.text)
      .join('');
  return JSON.parse(text.replace(/^```(?:json)?\s*|\s*```$/g, ''));
}
// Reject any answer that skips words, overlaps, or uses an unknown role. The model is
// asked for a clean partition, but it doesn't always deliver one.
function checkPart(part, start, end) {
  const ranges = part?.ranges;
  if (!Array.isArray(ranges) || !ranges.length) throw Error('No ranges returned');
  let next = start;
  for (const range of ranges) {
    if (
      !allowed.has(range.cat) ||
      range.start !== next ||
      !Number.isInteger(range.end) ||
      range.end < next ||
      range.end > end ||
      typeof range.en !== 'string'
    )
      throw Error('Invalid or incomplete range at word ' + next);
    next = range.end + 1;
  }
  if (next !== end + 1) throw Error('Missing words ' + next + '..' + end);
  return ranges;
}
async function draft(daf) {
  const { keys, parts } = prepare(daf),
    ranges = [];
  for (const { start, end, prompt } of parts) {
    // Retry a few times; a bad partition is usually fixed by asking again.
    let part, lastError;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        part = checkPart(await ask(prompt), start, end);
        break;
      } catch (error) {
        lastError = error;
      }
    }
    if (!part)
      throw Error(
        'Could not draft ' + daf.id + ' ' + start + '..' + end + ': ' + lastError.message
      );
    ranges.push(
      ...part.map((range) => ({
        cat: range.cat,
        start: keys[range.start],
        end: keys[range.end],
        en: range.en.trim(),
      }))
    );
  }
  // Always written as a draft. Only a person's sign-off can make it reviewed.
  const record = {
    version: 1,
    status: 'draft',
    source: 'Machine-assisted draft of the Vilna text; awaiting editorial review',
    generatedWith: model,
    textHash: api.IYUN_ANNOTATION.textHash(daf),
    ranges,
  };
  const check = api.IYUN_ANNOTATION.validate(daf, record);
  if (check.errors.length || check.covered !== check.total)
    throw Error(
      'Invalid full-daf draft: ' + check.errors.join('; ') + ` (${check.covered}/${check.total})`
    );
  return record;
}

// Skip anything already published or already drafted, unless --force.
for (const tractate of tractates) {
  const slug = tractate === 'Berakhot' ? 'berakhot' : names.dafs?.[tractate];
  if (!slug) throw Error('Unknown or unbuilt tractate: ' + tractate);
  const dapim =
    tractate === 'Berakhot'
      ? built.window.IYUN_DAFS
      : JSON.parse(fs.readFileSync(path.join(root, 'texts/daf', slug + '.json'))).dapim;
  const published = path.join(root, 'annotations', slug + '.json');
  const alreadyPublished = fs.existsSync(published)
    ? JSON.parse(fs.readFileSync(published)).dapim
    : {};
  for (const daf of dapim) {
    if (args.daf && daf.dafEn !== args.daf) continue;
    if (alreadyPublished[daf.dafEn] && !args.force) continue;
    const output = path.join(root, '.cache/annotation-candidates', slug, daf.dafEn + '.json');
    if (fs.existsSync(output) && !args.force) continue;
    if (args.preview) {
      const plan = prepare(daf);
      console.log(
        JSON.stringify({
          tractate,
          daf: daf.dafEn,
          words: plan.keys.length,
          chunks: plan.parts.map(({ start, end, englishSegments }) => ({
            start,
            end,
            englishSegments,
          })),
        })
      );
      if (args.limit && ++completed >= +args.limit) process.exit(0);
      continue;
    }
    const record = await draft(daf);
    const document = { schema: 1, tractate, dapim: { [daf.dafEn]: record } };
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, JSON.stringify(document, null, 2) + '\n');
    completed++;
    console.log(
      `${tractate} ${daf.dafEn}: ${record.ranges.length} draft ranges, ${api.IYUN_ANNOTATION.tokenKeys(daf).length} words`
    );
    if (args.limit && completed >= +args.limit) process.exit(0);
  }
}
console.log('Drafted', completed, 'dapim.');
