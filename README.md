# Back 2 Life Studio — Pitch Site

A polished, fully responsive marketing site for **Back 2 Life Studio**
(Staten Island, NY) built as a sales-pitch demo using **real photos pulled
from the shop's Google Maps reviews**.

> Tech stack: **plain HTML + CSS + JS** — no build, no dependencies, no
> framework. Three files plus an `assets/` folder. Loads instantly, deploys
> anywhere static, and is trivial to maintain on a $30/mo plan.

---

## Theme

The whole design takes its cue from the shop itself: **modern, urban, very
black-and-white with the iconic electric-cyan honeycomb LED ceiling**. That
hexagon shape repeats throughout the site — in the brand mark, in subtle
background patterns on every section, in the buttons and badges, even the
photo borders and pricing accents. The vibe should feel like the room.

- Background: pure deep black with subtle radial cyan glows
- Accent: electric cyan (`#00e5ff`) with a glow on key CTAs
- Type: bold compressed display (Anton / Bebas Neue) + Inter for body
- Motif: hexagons everywhere, like the ceiling

---

## Quick start (view it)

The local web server is already running from your last session at
http://127.0.0.1:8000 — just refresh the page. If it isn't:

```bash
cd back2life
npx --yes http-server . -p 8000 -c-1
```

Open http://127.0.0.1:8000

---

## File structure

```
back2life/
├── index.html              All page content + LocalBusiness schema
├── styles.css              Black + electric-cyan theme, hexagon motif
├── script.js               Sticky header, mobile menu, scroll reveals, smooth scroll
├── README.md               You are here
└── assets/
    ├── logo.png            Hexagon-framed BACK 2 LIFE STUDIO mark (cyan + white)
    ├── storefront.png      The actual storefront w/ Grand Opening banner
    ├── interior-1.png      Hexagon LED ceiling close-up
    ├── interior-2.png      Hexagon LED ceiling, alternate angle
    ├── interior-3.png      Wide shot, two stations in use
    ├── interior-4.png      Panoramic interior — used as the hero
    ├── interior-6.png      Looking out at the street
    ├── interior-7.png      Wide interior with smiling barber
    ├── interior-8.png      Daylight interior, front door visible
    ├── cut-1.png           Cornrows + clean fade
    ├── cut-2.png           Cornrows + side fade, profile
    ├── cut-3.png           Young client smiling in branded cape
    └── pictures/           Original uploads (untouched, kept as backup)
```

---

## What's on the page

1. **Top utility bar** — "Under New Management · Grand Opening" pulse,
   phone, "Walk-ins welcome · 7 days a week"
2. **Sticky header** — hexagon B2L brand mark, nav, primary "Book Now" CTA
3. **Hero** — full-bleed real interior shot with hexagon-ceiling overlay
   pattern, headline, two CTAs (book / call), trust badges
4. **Trust strip** — 7 days · cuts from $25 · all ages · walk-in or book
5. **About** — story copy + photo collage (interior + storefront) with a
   floating "NEW · Grand Opening" cyan badge
6. **Services & pricing** — 8-card grid for Fade, Cut + Beard (most-booked
   highlight), Tape Up, Mohawk/Flat Top, Hot Towel, Braids/Cornrows, Hair
   Extensions, Kids' Cut
7. **The Room** — feature image of the honeycomb ceiling alongside 4
   numbered talking points (ring-lit stations, comfy seating, TVs everywhere,
   sanitized)
8. **Gallery** — magazine-style mosaic of real cuts and interior shots
9. **Reviews** — three 5-star quotes (currently representative — see
   "Confirm before pitch" below)
10. **Booking + Visit** — call / DM / text methods, hours, storefront photo,
    "Get directions on Google" button
11. **Footer** — brand block, contact columns
12. **Mobile-only floating "Book" FAB**

Bonus, baked-in:

- ✅ Mobile-first responsive (320 px → 1440 px+)
- ✅ Sticky glassy header that solidifies on scroll
- ✅ Subtle scroll-reveal animations (`prefers-reduced-motion` honored)
- ✅ Accessible color contrast, keyboard-navigable menu, ARIA labels
- ✅ SEO meta tags + `BarberShop` JSON-LD schema for rich Google results
- ✅ Open Graph tags so links shared on iMessage/Instagram look great
- ✅ No tracking, no cookies, no third-party JS — fast and private

---

## Confirm before the pitch — what's verified vs. assumed

This is critical. The shop's actual brand and contact details turned out to
be different from what was online for similarly-named shops. Here's what's
confirmed-from-the-photos vs. what you should double-check with the owner.

### ✅ Confirmed from the storefront / shop photos

| Item | Source |
|---|---|
| Brand name: **Back 2 Life Studio** (also "Back 2 Life Barber Studio") | Storefront sign, sandwich board, branded cape in `cut-3.png` |
| Phone: **(347) 466-4270** | Storefront awning |
| Status: **Under New Management · Grand Opening** | Banners on storefront |
| Walk-ins welcome | Storefront banner |
| Services advertised: **Fade, Mohawk, Hot Towels, Flat Tops, Tape Ups** | Storefront awning |
| Also offered: **Braids, Hair Extensions** | Sandwich board |
| Signature feature: hexagon LED ceiling, ring-lit stations, TVs at every chair | Interior photos |
| Instagram: **@back2lifebarbershop_** | Provided by you |

### ⚠️ Needs the owner's confirmation

| Item | Currently | Action |
|---|---|---|
| **Exact street address** | `Staten Island, NY` (placeholder) + a "Find us on Google" link | Get the exact address from the owner or their Google Maps listing and edit `index.html` (`#visit` section + footer + JSON-LD `address`). The awning shows "1807" but I couldn't confirm the street. |
| **Hours** | Mon–Sat 9 AM–8 PM, Sun 9 AM–5 PM | These are guesses from common Staten Island barber hours — confirm with owner. |
| **Service prices** | $25–$60 range (typical SI rates) | Confirm with owner. Easy to update in `services` section. |
| **Reviews** | Three representative 5-star quotes labeled generically ("Recent walk-in client", "Local parent", "Regular client") | Replace with real Google reviews once verified. The quotes are written in a believable style but are not direct attributions. |

The previous version of this site had quotes attributed to "Leo, Al, Serg
and Brian" — those came from a *different* Back2Life shop on Morningstar Rd
that I confused this one with. Those names have been **removed** entirely
from this version.

---

## Pitch talking points

Use these with the owner:

- **They have no website right now.** A $300–$500 site for a brand-new
  studio under new management is a no-brainer — every walk-in who Googles
  them right now sees nothing.
- **The site leans hard into the "Grand Opening / New Management" angle.**
  This is genuine news for the neighborhood and a great hook.
- **The honeycomb LED ceiling is the visual brand.** The site uses that
  exact hexagon motif throughout — buttons, badges, brand mark, background
  pattern. It feels like the room.
- **Click-to-call, click-to-text, click-to-DM** — every CTA is one tap on
  mobile. More booked chairs without changing how they take appointments.
- **Google "BarberShop" schema markup** baked in, so they show up correctly
  in the local pack.
- **They sell more than haircuts.** The site explicitly features braids and
  hair extensions, which their storefront menu advertises but most barbers'
  websites under-sell.

---

## Pricing & support model ($30/mo)

What you can promise on the maintenance plan and still net big margin:

- 🌐 **Hosting + SSL + custom domain** — ~$0 on Cloudflare Pages or Netlify
  free tier; ~$15/yr for the domain. Cost to you: ~$1.25/mo.
- 🔧 **Up to 1 small content change per month** (photo swap, price change,
  hours update). 10–15 min of your time.
- 📈 **Quarterly check-in:** confirm everything works, swap fresh cuts from
  Instagram into the gallery, refresh reviews.
- 🛟 **Unlimited "the site is down" support** (it won't be — it's static).
- 📧 **Branded forwarding email** (e.g. `info@back2lifestudio.com` →
  their personal inbox). Free with Cloudflare Email Routing.
- 📊 **Monthly traffic snapshot** (free Cloudflare or Plausible-lite).

Margin stays at ~95% because the site has zero moving parts.

---

## Deployment options (cheapest → easiest)

### 1. Cloudflare Pages — recommended

- Free unlimited bandwidth, free SSL, free custom domain
- Drag-and-drop the folder in the dashboard, or `git push` to auto-deploy
- Their Email Routing lets you offer a free `@theirdomain.com` inbox

### 2. Netlify

- Free tier covers this site easily
- Drag-and-drop the `back2life/` folder onto https://app.netlify.com/drop
  and you have a live URL in 10 seconds
- Custom domain + SSL free

### 3. GitHub Pages

- Free, simple, requires a GitHub repo
- Push the folder to a repo, enable Pages on the `main` branch

### Domain

- Buy at Cloudflare Registrar (at-cost, ~$10–15/yr for `.com`)
- Or Namecheap / Porkbun

---

## Future enhancements (good upsells)

Things you can pitch as add-ons later:

- **Online booking integration** (Square Appointments, Booksy, Squire)
- **Gift card sales** (Square / Stripe Payment Links)
- **E-commerce** for pomade, beard oil, hats, t-shirts (Shopify Lite or Stripe)
- **Loyalty program** ("10th cut free")
- **SMS marketing** ("we miss you, fade getting fluffy?")
- **Google Business Profile cleanup & SEO push** (the studio is brand new
  under new management, so the listing probably needs work)
- **Real photo & video shoot** — take 2 hours in the shop with a good camera
  and the gallery levels up dramatically. Easy upsell.
- **Spanish-language version** of the site (the neighborhood has demand)

---

## License / handoff

Do whatever you want with it. This is your pitch material.

When the owner says yes, hand them the folder, the domain login, and the
deployment account. The maintenance contract is what keeps the relationship.
