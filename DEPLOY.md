# Deploying thakalikitchen.de

Static site — no build step, no backend. Every page is plain HTML plus
`css/`, `js/`, and `images/`. The reservation form is handled client-side in
`js/main.js` and opens a `mailto:` link, so there is nothing server-side to
host.

Target: **Cloudflare DNS + Cloudflare Pages**, domain registered at a `.de`
registrar that is not IONOS. Cloudflare Registrar does not support `.de`, so
only DNS and hosting live at Cloudflare.

> Never put the DENIC AuthInfo code in this repo, in a commit message, or in an
> issue. It is a one-time password for the domain.

---

## Cloudflare Pages settings

Connect the GitHub repo `prameshbajra/thakalikitchen` via **Workers & Pages →
Create → Pages → Connect to Git**, then:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |
| Root directory | `/` |

Then **Custom domains → Set up a domain** for both `thakalikitchen.de` and
`www.thakalikitchen.de`. Cloudflare creates the DNS records and issues the
certificate automatically — do not hand-create the apex or `www` records.

Publishing from the repo root also serves `scripts/`. That is already true of
the current GitHub Pages deploy and the repo is public, so it exposes nothing
new. Photo originals stay out via `.gitignore`.

---

## DNS records

Recovered from public DNS on 2026-07-25, before any change. The IONOS values
are recorded for reference only — **do not carry the mail records over.** No
mailbox exists on this domain; the restaurant's published address is a Gmail
account (see `impressum.html`).

### What IONOS was serving

| Type | Name | Value | Carry over? |
| --- | --- | --- | --- |
| A | `@` | `217.160.0.69` | No — IONOS parking page |
| AAAA | `@` | `2001:8d8:100f:f000::200` | No — IONOS parking page |
| CNAME | `www` | *(did not exist)* | No — Pages creates it |
| CNAME | `autodiscover` | `adsredir.ionos.info` | No — IONOS mail autodiscovery |
| CNAME | `_domainconnect` | `_domainconnect.ionos.com` | No — IONOS provisioning tooling |
| MX | `@` | `10 mx00.ionos.de`, `10 mx01.ionos.de` | No — see below |
| TXT | `@` | `v=spf1 include:_spf-eu.ionos.com ~all` | No — replace |
| CNAME | `_dmarc` | `dmarc.ionos.de` (→ `v=DMARC1; p=none;`) | No — replace |
| CNAME | `s42582890._domainkey` | `s42582890.dkim.ionos.com` | No — drop |

Cloudflare's quick scan found eight of these nine; it missed the DKIM CNAME,
which is why its own warning about uncommon records is worth heeding. Moot here
since every mail record is being dropped, but the lesson generalises: the scan
is a starting point, not an inventory.

DNSSEC was not enabled, which is one less thing to break during the transfer.

### What to create instead

Apex and `www` come from Pages. Add these by hand so the domain cannot be
spoofed — a domain that sends no mail should say so explicitly:

| Type | Name | Value |
| --- | --- | --- |
| MX | `@` | `0 .` (null MX, RFC 7505) |
| TXT | `@` | `v=spf1 -all` |
| TXT | `_dmarc` | `v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s` |
| TXT | `*._domainkey` | `v=DKIM1; p=` |

If the Cloudflare dashboard refuses a bare `.` as the MX target, leave MX out
entirely. `v=spf1 -all` plus `p=reject` already blocks the overwhelming
majority of spoofing attempts.

**This set is only correct while nothing sends mail as `@thakalikitchen.de`.**
Adding a mailbox later, or sending through a booking or newsletter provider,
means relaxing these first — otherwise that mail is rejected on arrival. The
Gmail address is unaffected either way; these records govern
`thakalikitchen.de`, not `gmail.com`.

---

## Order of operations

DENIC runs a delegation check and rejects nameservers that are not already
answering for the zone, so the Cloudflare zone has to exist first. Done in this
order the transfer never touches live DNS.

1. Create the Cloudflare zone for `thakalikitchen.de` and note the two assigned
   nameservers. For this zone they are:

   ```
   daisy.ns.cloudflare.com
   sid.ns.cloudflare.com
   ```

   Cloudflare will insist you change nameservers at your current registrar and
   leave the zone *Pending*. Ignore it — there is no IONOS access, and the
   delegation switches as part of the transfer. A pending zone still answers
   authoritatively, which is the whole point of doing this first.
2. Add the mail-lockdown records above.
3. Order the transfer at the new registrar with the AuthInfo code, supplying the
   Cloudflare nameservers **and** the new holder's name and address as
   *Domaininhaber* in the same order. Doing the holder change here avoids a
   separate Inhaberwechsel afterwards. Registrars often default to their own
   nameservers — override that, or DENIC's delegation check will run against the
   wrong servers.
4. Wait for completion — usually minutes to a few hours.
5. Create the Pages project and attach both custom domains.
6. Confirm the holder at <https://webwhois.denic.de>. Sitting in the right
   registrar account is not the same as being in the right name.

---

## Verification

```bash
whois -h whois.denic.de thakalikitchen.de   # Status: connect, Cloudflare NS, fresh Changed date
dig +short NS thakalikitchen.de             # two Cloudflare nameservers
dig +short A thakalikitchen.de              # Cloudflare IPs, not 217.160.0.69
dig +short CNAME www.thakalikitchen.de      # resolves
dig +short MX thakalikitchen.de             # null MX, or empty
dig +short TXT thakalikitchen.de            # v=spf1 -all
curl -sI https://thakalikitchen.de          # HTTP 200, cert for the domain
```

HTTPS at the apex is currently broken — IONOS's parking page has no valid
certificate — so a working `curl -sI https://…` is itself proof the migration
landed.

---

## Known blockers

- **AuthInfo expired.** Valid 30 calendar days, single use. Generated
  2026-07-25, so it lapses around **2026-08-24**.
- **DISPUTE entry** on the domain blocks all transfers. Resolve with DENIC.
- **`Status: failed`** after a nameserver change means the delegation check did
  not pass — usually the Cloudflare zone was not created first.
- **Holder still shows the previous owner.** The transfer succeeded but the
  holder change did not; needs a separate Inhaberwechsel.

---

## Note on GitHub Pages

`.github/workflows/deploy.yml` still deploys this repo to
`prameshbajra.github.io/thakalikitchen` on every push to `main`. That is
harmless and useful as a preview: `index.html` now carries
`<link rel="canonical" href="https://thakalikitchen.de/">`, so search engines
treat the real domain as authoritative. Delete the workflow if you would rather
have one URL.
