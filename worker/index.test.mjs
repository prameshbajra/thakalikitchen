/* Exercises worker/index.js against a stubbed send_email binding. Covers every
 * branch except Cloudflare's actual delivery, which needs the live binding.
 *
 *   node worker/index.test.mjs
 *
 * No dependencies and no dev server: the Worker is a plain module, so it runs
 * under Node with fake bindings. There is no package.json, so Node would treat
 * the .js entrypoint as CommonJS and choke on `export default` — importing the
 * source as a data: URL sidesteps that without a build step. */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(join(here, 'index.js'), 'utf8');
const worker = (await import(`data:text/javascript,${encodeURIComponent(source)}`)).default;

let sent = [];
let limitCalls = [];
const env = {
  EMAIL: { send: async (m) => { sent.push(m); return { messageId: 'stub' }; } },
  ENQUIRY_LIMIT: { limit: async (o) => { limitCalls.push(o); return { success: true }; } },
};

const ORIGIN = 'https://thakalikitchen.de';
const valid = {
  date: '2026-08-01', time: '19:30', party: 4,
  name: 'Maya Sherchan', email: 'maya@example.com', phone: '+49 170 1234567',
  notes: 'Fensterplatz bitte', ref_code: '', ts: Date.now() - 10_000, lang: 'de',
};

function req(path, body, { method = 'POST', origin = ORIGIN, raw = null } = {}) {
  return new Request(`${ORIGIN}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(origin ? { Origin: origin } : {}),
      'CF-Connecting-IP': '203.0.113.7',
    },
    ...(method === 'POST' ? { body: raw ?? JSON.stringify(body ?? {}) } : {}),
  });
}

let pass = 0, fail = 0;
async function check(label, fn) {
  sent = []; limitCalls = [];
  try {
    await fn();
    console.log(`  ok   ${label}`);
    pass++;
  } catch (err) {
    console.log(`  FAIL ${label}\n         ${err.message}`);
    fail++;
  }
}
function eq(actual, expected, what) {
  const a = JSON.stringify(actual), e = JSON.stringify(expected);
  if (a !== e) throw new Error(`${what}: expected ${e}, got ${a}`);
}

const hit = async (...args) => {
  const res = await worker.fetch(req(...args), env);
  return { res, body: await res.json() };
};

console.log('\nhappy path');
await check('reservation sends one mail, 200 ok', async () => {
  const { res, body } = await hit('/api/reserve', valid);
  eq(res.status, 200, 'status'); eq(body, { ok: true }, 'body');
  eq(sent.length, 1, 'mails sent');
  eq(sent[0].to, 'thakalikitchen111@gmail.com', 'to');
  eq(sent[0].from, 'reservierung@thakalikitchen.de', 'from');
  eq(sent[0].replyTo, 'maya@example.com', 'replyTo');
  if (!sent[0].subject.includes('Maya Sherchan')) throw new Error('subject missing name');
  if (!sent[0].text.includes('19:30')) throw new Error('body missing time');
  if (!sent[0].html.includes('Reservierungsanfrage')) throw new Error('html missing title');
});
await check('catering sends one mail with guests + occasion', async () => {
  const { res } = await hit('/api/catering', {
    ...valid, guests: 40, occasion: 'Hochzeit', date: '2026-09-12',
  });
  eq(res.status, 200, 'status'); eq(sent.length, 1, 'mails sent');
  if (!sent[0].subject.includes('Catering-Anfrage')) throw new Error('wrong subject');
  if (!sent[0].text.includes('40')) throw new Error('guest count missing');
  if (!sent[0].text.includes('Hochzeit')) throw new Error('occasion missing');
});
await check('phone-only enquiry is accepted, no replyTo', async () => {
  const { res } = await hit('/api/reserve', { ...valid, email: '' });
  eq(res.status, 200, 'status'); eq(sent.length, 1, 'mails sent');
  eq('replyTo' in sent[0], false, 'replyTo absent');
});

console.log('\nrouting and method');
await check('unknown path → 404, no mail', async () => {
  const { res } = await hit('/api/whatever', valid);
  eq(res.status, 404, 'status'); eq(sent.length, 0, 'mails sent');
});
await check('GET → 405 with Allow header', async () => {
  const res = await worker.fetch(req('/api/reserve', null, { method: 'GET' }), env);
  eq(res.status, 405, 'status'); eq(res.headers.get('Allow'), 'POST', 'Allow');
});
await check('cross-origin POST → 403', async () => {
  const { res } = await hit('/api/reserve', valid, { origin: 'https://evil.example' });
  eq(res.status, 403, 'status'); eq(sent.length, 0, 'mails sent');
});
await check('www origin accepted', async () => {
  const { res } = await hit('/api/reserve', valid, { origin: 'https://www.thakalikitchen.de' });
  eq(res.status, 200, 'status');
});
await check('missing Origin accepted (dev / non-browser)', async () => {
  const { res } = await hit('/api/reserve', valid, { origin: '' });
  eq(res.status, 200, 'status');
});

console.log('\nspam handling');
await check('honeypot filled → silent 200, no mail', async () => {
  const { res, body } = await hit('/api/reserve', { ...valid, ref_code: 'SEO Corp' });
  eq(res.status, 200, 'status'); eq(body, { ok: true }, 'body');
  eq(sent.length, 0, 'mails sent');
});
await check('instant submit → silent 200, no mail', async () => {
  const { res } = await hit('/api/reserve', { ...valid, ts: Date.now() });
  eq(res.status, 200, 'status'); eq(sent.length, 0, 'mails sent');
});
await check('skewed clock (future ts) does not block a real guest', async () => {
  const { res } = await hit('/api/reserve', { ...valid, ts: Date.now() + 600_000 });
  eq(res.status, 200, 'status'); eq(sent.length, 1, 'mails sent');
});
await check('missing ts does not block', async () => {
  const body = { ...valid }; delete body.ts;
  const { res } = await hit('/api/reserve', body);
  eq(res.status, 200, 'status'); eq(sent.length, 1, 'mails sent');
});
await check('rate limit exceeded → 429 + Retry-After, no mail', async () => {
  const limited = { ...env, ENQUIRY_LIMIT: { limit: async () => ({ success: false }) } };
  const res = await worker.fetch(req('/api/reserve', valid), limited);
  eq(res.status, 429, 'status'); eq(res.headers.get('Retry-After'), '60', 'Retry-After');
  eq(sent.length, 0, 'mails sent');
});
await check('limiter keyed on client IP', async () => {
  await hit('/api/reserve', valid);
  eq(limitCalls, [{ key: '203.0.113.7' }], 'limit key');
});
await check('missing limiter binding does not break the endpoint', async () => {
  const res = await worker.fetch(req('/api/reserve', valid), { EMAIL: env.EMAIL });
  eq(res.status, 200, 'status');
});
await check('throwing limiter does not lose the reservation', async () => {
  const broken = { ...env, ENQUIRY_LIMIT: { limit: async () => { throw new Error('down'); } } };
  const res = await worker.fetch(req('/api/reserve', valid), broken);
  eq(res.status, 200, 'status'); eq(sent.length, 1, 'mails sent');
});

console.log('\nvalidation');
await check('no name → 422', async () => {
  const { res, body } = await hit('/api/reserve', { ...valid, name: '   ' });
  eq(res.status, 422, 'status'); eq(body.error, 'name_required', 'error');
});
await check('no email and no phone → 422', async () => {
  const { res, body } = await hit('/api/reserve', { ...valid, email: '', phone: '' });
  eq(res.status, 422, 'status'); eq(body.error, 'contact_required', 'error');
});
await check('malformed email kept in body but not used as replyTo', async () => {
  const { res } = await hit('/api/reserve', { ...valid, email: 'not-an-email' });
  eq(res.status, 200, 'status');
  eq('replyTo' in sent[0], false, 'replyTo absent');
  if (!sent[0].text.includes('not-an-email')) throw new Error('address not passed through');
  if (!sent[0].text.includes('ungültig')) throw new Error('not flagged invalid');
});
await check('malformed JSON → 400', async () => {
  const { res, body } = await hit('/api/reserve', null, { raw: '{nope' });
  eq(res.status, 400, 'status'); eq(body.error, 'bad_request', 'error');
});
await check('JSON array body → 400', async () => {
  const { res } = await hit('/api/reserve', null, { raw: '[1,2,3]' });
  eq(res.status, 400, 'status');
});
await check('oversized body → 400 too_large, no mail', async () => {
  const raw = JSON.stringify({ ...valid, notes: 'x'.repeat(20_000) });
  const { res, body } = await hit('/api/reserve', null, { raw });
  eq(res.status, 400, 'status'); eq(body.error, 'too_large', 'error');
  eq(sent.length, 0, 'mails sent');
});
await check('out-of-range party → 422 invalid reservation', async () => {
  const { res, body } = await hit('/api/reserve', { ...valid, party: 9999 });
  eq(res.status, 422, 'status'); eq(body.error, 'invalid_reservation', 'error');
  eq(sent.length, 0, 'mails sent');
});
await check('bad date format → 422 invalid reservation', async () => {
  const { res, body } = await hit('/api/reserve', { ...valid, date: '01/08/2026' });
  eq(res.status, 422, 'status'); eq(body.error, 'invalid_reservation', 'error');
  eq(sent.length, 0, 'mails sent');
});
await check('past date → 422 invalid reservation', async () => {
  const { res } = await hit('/api/reserve', { ...valid, date: '2000-01-01' });
  eq(res.status, 422, 'status'); eq(sent.length, 0, 'mails sent');
});
await check('time before opening → 422 invalid reservation', async () => {
  const { res } = await hit('/api/reserve', { ...valid, time: '13:30' });
  eq(res.status, 422, 'status'); eq(sent.length, 0, 'mails sent');
});
await check('closing time itself is not a seating time', async () => {
  const { res } = await hit('/api/reserve', { ...valid, time: '23:00' });
  eq(res.status, 422, 'status'); eq(sent.length, 0, 'mails sent');
});
await check('times must follow the 30-minute slot interval', async () => {
  const { res } = await hit('/api/reserve', { ...valid, time: '19:15' });
  eq(res.status, 422, 'status'); eq(sent.length, 0, 'mails sent');
});
await check('long fields truncated', async () => {
  await hit('/api/reserve', { ...valid, name: 'A'.repeat(500) });
  const line = sent[0].text.split('\n').find(l => l.startsWith('Name:'));
  eq(line.length <= 'Name: '.length + 80, true, 'name truncated to 80');
});
await check('unknown lang falls back to de', async () => {
  await hit('/api/reserve', { ...valid, lang: 'xx' });
  if (!sent[0].text.includes('Sprache der Website: DE')) throw new Error('lang not defaulted');
});

console.log('\ninjection and escaping');
await check('CRLF in name cannot inject mail headers', async () => {
  await hit('/api/reserve', { ...valid, name: 'Maya\r\nBcc: attacker@evil.example' });
  if (/[\r\n]/.test(sent[0].subject)) throw new Error('subject contains a newline');
  if (sent[0].subject.toLowerCase().includes('bcc:')) {
    // folded onto one line is fine; a real header needs the newline, already checked
  }
});
await check('HTML in fields is escaped in the html part', async () => {
  await hit('/api/reserve', { ...valid, name: '<img src=x onerror=alert(1)>' });
  if (sent[0].html.includes('<img')) throw new Error('unescaped html in mail body');
  if (!sent[0].html.includes('&lt;img')) throw new Error('escaping missing');
});
await check('recipient cannot be overridden from the request', async () => {
  await hit('/api/reserve', { ...valid, to: 'attacker@evil.example' });
  eq(sent[0].to, 'thakalikitchen111@gmail.com', 'to');
});

console.log('\nfailure handling');
await check('send failure → 502', async () => {
  const broken = { ...env, EMAIL: { send: async () => { const e = new Error('nope'); e.code = 'E_SENDER_NOT_VERIFIED'; throw e; } } };
  const res = await worker.fetch(req('/api/reserve', valid), broken);
  eq(res.status, 502, 'status');
  eq((await res.json()).error, 'send_failed', 'error');
});
await check('responses are no-store JSON', async () => {
  const { res } = await hit('/api/reserve', valid);
  eq(res.headers.get('Cache-Control'), 'no-store', 'Cache-Control');
  if (!res.headers.get('Content-Type').includes('application/json')) throw new Error('not json');
});

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
