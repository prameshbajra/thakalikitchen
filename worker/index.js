/**
 * Reservation and catering enquiries → email.
 *
 * The rest of the site is static assets. wrangler.jsonc routes only /api/* here
 * (run_worker_first), so every other path is served straight from dist/ without
 * ever waking this script.
 *
 * Mail goes out through Cloudflare's send_email binding. Delivery to a verified
 * destination address is free on every plan and exempt from sending quotas,
 * which is why the binding is pinned to a single destination in wrangler.jsonc
 * rather than taking the recipient from the request.
 */

const FROM = 'reservierung@thakalikitchen.de';
const TO = 'thakalikitchen111@gmail.com';

const MAX_BODY_BYTES = 8192;

/* Mon-first. Reservation slots run every 30 minutes; the final seating starts
 * 30 minutes before closing. Keep this in sync with HOURS in js/main.js. */
const HOURS = [
  { open: '12:00', close: '22:00' },
  { open: '12:00', close: '22:00' },
  { open: '12:00', close: '22:00' },
  { open: '12:00', close: '22:00' },
  { open: '12:00', close: '23:00' },
  { open: '14:00', close: '23:00' },
  { open: '14:00', close: '22:00' },
];

/* Longest value accepted per field, in characters. Anything longer is a bot or
 * a paste accident; both are better rejected than emailed. */
const FIELD_LIMITS = {
  name: 80,
  email: 160,
  phone: 40,
  date: 10,
  time: 5,
  occasion: 120,
  notes: 1500,
};

/* A human needs a moment to fill the form in; bots post the instant they parse
 * it. Only used to reject implausibly fast submissions — see readElapsed. */
const MIN_FILL_MS = 2500;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const kind = { '/api/reserve': 'reservation', '/api/catering': 'catering' }[url.pathname];
    if (!kind) return json({ ok: false, error: 'not_found' }, 404);

    if (request.method !== 'POST') {
      return json({ ok: false, error: 'method_not_allowed' }, 405, { Allow: 'POST' });
    }
    if (!sameOrigin(request, url)) {
      return json({ ok: false, error: 'bad_origin' }, 403);
    }

    let body;
    try {
      body = await readJson(request);
    } catch (err) {
      return json({ ok: false, error: err.message === 'too_large' ? 'too_large' : 'bad_request' }, 400);
    }

    /* Silent rejections: a bot that gets "ok" back stops retrying, and a human
     * can never trip these, so there is no error worth surfacing. */
    if (str(body.ref_code)) return json({ ok: true });
    const elapsed = readElapsed(body.ts);
    if (elapsed !== null && elapsed < MIN_FILL_MS) return json({ ok: true });

    if (!(await withinRateLimit(env, request))) {
      return json({ ok: false, error: 'rate_limited' }, 429, { 'Retry-After': '60' });
    }

    const fields = collect(body, kind);
    if (!fields.name) return json({ ok: false, error: 'name_required' }, 422);
    if (!fields.email && !fields.phone) return json({ ok: false, error: 'contact_required' }, 422);
    if (kind === 'reservation' && !validReservation(fields)) {
      return json({ ok: false, error: 'invalid_reservation' }, 422);
    }

    const mail = compose(kind, fields);
    try {
      await env.EMAIL.send({
        to: TO,
        from: FROM,
        subject: mail.subject,
        text: mail.text,
        html: mail.html,
        /* Lets the restaurant answer the guest with a plain Reply. Setting a
         * reply-to is not a send, so it stays inside the free tier. */
        ...(fields.email ? { replyTo: fields.email } : {}),
      });
    } catch (err) {
      console.error('send_email failed', { code: err?.code, message: err?.message, kind });
      return json({ ok: false, error: 'send_failed' }, 502);
    }

    return json({ ok: true });
  },
};

/* ===== Request handling ===== */

/* Only accept posts that came from our own pages. Wrangler's dev server and
 * file:// send no Origin at all, so a missing header is allowed through — the
 * honeypot and rate limit still apply. */
function sameOrigin(request, url) {
  const origin = request.headers.get('Origin');
  if (!origin) return true;
  try {
    const host = new URL(origin).host;
    return host === url.host || host === `www.${url.host}` || `www.${host}` === url.host;
  } catch {
    return false;
  }
}

async function readJson(request) {
  const declared = Number(request.headers.get('Content-Length'));
  if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) throw new Error('too_large');

  const raw = await request.text();
  /* Content-Length is absent on chunked bodies, so re-check the real size. */
  if (raw.length > MAX_BODY_BYTES) throw new Error('too_large');

  const parsed = JSON.parse(raw);
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('bad_request');
  return parsed;
}

/* The client stamps ts when the form is first rendered, using its own clock, so
 * the difference is only meaningful when the two clocks roughly agree. A skewed
 * or missing stamp returns null and skips the check rather than blocking a real
 * guest. */
function readElapsed(ts) {
  const started = Number(ts);
  if (!Number.isFinite(started)) return null;
  const elapsed = Date.now() - started;
  if (elapsed < 0 || elapsed > 86_400_000) return null;
  return elapsed;
}

async function withinRateLimit(env, request) {
  if (!env.ENQUIRY_LIMIT) return true;
  const key = request.headers.get('CF-Connecting-IP') || 'unknown';
  try {
    const { success } = await env.ENQUIRY_LIMIT.limit({ key });
    return success;
  } catch (err) {
    /* Never let the limiter itself lose a reservation. */
    console.error('rate limiter unavailable', err?.message);
    return true;
  }
}

function json(payload, status = 200, headers = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers },
  });
}

/* ===== Field handling ===== */

/* Collapse to a trimmed single line and drop CR/LF, which would otherwise let a
 * crafted name inject headers into the subject. */
function str(value, max = 200) {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

function multiline(value, max) {
  if (typeof value !== 'string') return '';
  return value.replace(/\r\n/g, '\n').trim().slice(0, max);
}

function int(value, min, max) {
  const n = Math.trunc(Number(value));
  if (!Number.isFinite(n) || n < min || n > max) return null;
  return n;
}

function collect(body, kind) {
  const fields = {
    name: str(body.name, FIELD_LIMITS.name),
    email: str(body.email, FIELD_LIMITS.email),
    phone: str(body.phone, FIELD_LIMITS.phone),
    notes: multiline(body.notes, FIELD_LIMITS.notes),
    lang: ['de', 'en', 'ne'].includes(body.lang) ? body.lang : 'de',
  };

  /* A malformed address is worth passing through — the restaurant can still
   * read it and phone instead — but it must not become the reply-to. */
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    fields.emailUnverified = fields.email;
    fields.email = '';
  }

  if (kind === 'reservation') {
    fields.date = /^\d{4}-\d{2}-\d{2}$/.test(str(body.date, FIELD_LIMITS.date)) ? str(body.date) : '';
    fields.time = /^\d{2}:\d{2}$/.test(str(body.time, FIELD_LIMITS.time)) ? str(body.time) : '';
    fields.party = int(body.party, 1, 12);
  } else {
    fields.date = /^\d{4}-\d{2}-\d{2}$/.test(str(body.date, FIELD_LIMITS.date)) ? str(body.date) : '';
    fields.guests = int(body.guests, 1, 400);
    fields.occasion = str(body.occasion, FIELD_LIMITS.occasion);
  }

  return fields;
}

function berlinNow() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Berlin',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return {
    date: `${value.year}-${value.month}-${value.day}`,
    minutes: Number(value.hour) * 60 + Number(value.minute),
  };
}

function dayIndexFromDate(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const [, year, month, day] = match.map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return (date.getUTCDay() + 6) % 7;
}

function clockMinutes(value) {
  const [hour, minute] = value.split(':').map(Number);
  return hour * 60 + minute;
}

function validReservation(fields) {
  const dayIndex = dayIndexFromDate(fields.date);
  const hours = HOURS[dayIndex];
  if (!hours || !/^\d{2}:\d{2}$/.test(fields.time) || fields.party === null) return false;

  const time = clockMinutes(fields.time);
  const open = clockMinutes(hours.open);
  const close = clockMinutes(hours.close);
  if (time < open || time > close - 30 || (time - open) % 30 !== 0) return false;

  const now = berlinNow();
  if (fields.date < now.date) return false;
  if (fields.date === now.date && time <= now.minutes) return false;
  return true;
}

/* ===== Mail ===== */

const LABELS = {
  reservation: 'Reservierungsanfrage',
  catering: 'Catering-Anfrage',
};

function compose(kind, f) {
  const rows = [];
  if (kind === 'reservation') {
    rows.push(['Datum', f.date || '—']);
    rows.push(['Zeit', f.time || '—']);
    rows.push(['Gäste', f.party ?? '—']);
  } else {
    rows.push(['Wunschtermin', f.date || '—']);
    rows.push(['Gäste', f.guests ?? '—']);
    if (f.occasion) rows.push(['Anlass', f.occasion]);
  }
  rows.push(['Name', f.name]);
  if (f.email) rows.push(['E-Mail', f.email]);
  if (f.emailUnverified) rows.push(['E-Mail (ungültig)', f.emailUnverified]);
  if (f.phone) rows.push(['Telefon', f.phone]);
  if (f.notes) rows.push([kind === 'reservation' ? 'Notizen' : 'Nachricht', f.notes]);
  rows.push(['Sprache der Website', f.lang.toUpperCase()]);

  const headline = kind === 'reservation'
    ? [f.name, f.date, f.time].filter(Boolean).join(' · ')
    : [f.name, f.date].filter(Boolean).join(' · ');

  return {
    subject: `${LABELS[kind]} — ${headline || f.name}`,
    text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
    html: htmlBody(LABELS[kind], rows),
  };
}

function htmlBody(title, rows) {
  const cells = rows.map(([k, v]) => `
      <tr>
        <td style="padding:6px 16px 6px 0;color:#6b6257;white-space:nowrap;vertical-align:top">${esc(k)}</td>
        <td style="padding:6px 0;color:#1f1a14;font-weight:600">${esc(v).replace(/\n/g, '<br>')}</td>
      </tr>`).join('');

  return `<!doctype html>
<html lang="de"><body style="margin:0;background:#f6f1e7;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
  <div style="max-width:520px;margin:0 auto;padding:28px 22px">
    <p style="margin:0 0 4px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#9a8f80">Thakali Kitchen</p>
    <h1 style="margin:0 0 18px;font-size:20px;color:#1f1a14">${esc(title)}</h1>
    <table style="border-collapse:collapse;font-size:14px;line-height:1.5">${cells}
    </table>
    <p style="margin:22px 0 0;font-size:12px;color:#9a8f80">Gesendet über thakalikitchen.de</p>
  </div>
</body></html>`;
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, ch => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));
}
