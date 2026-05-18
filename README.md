# Rohit Negi — Portfolio

> A premium, retro-music-studio-inspired portfolio for a Senior Frontend Engineer.
> Built with Next.js 15 (App Router), TypeScript, Tailwind, Framer Motion, GSAP and shadcn-style primitives.

---

## ✦ The vibe

> "An elite frontend engineer building AI-powered experiences from a futuristic retro music studio."

A dark, cinematic interface with warm-purple/electric-blue accents, film grain, ambient bokeh,
analog motifs (vinyl, cassette labels, mixing-board EQ, waveforms) — and the engineering
restraint of Vercel/Linear product pages. No cyberpunk neon. No template smell.

---

## 🚀 Quickstart

```bash
# 1. install
pnpm install        # or: npm install / yarn

# 2. dev (Turbopack on Next 15)
pnpm dev            # http://localhost:3000

# 3. production build
pnpm build && pnpm start
```

Requires **Node 20+**.

Copy `.env.example` → `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=you@yourdomain.com
```

---

## 🗂 Folder structure

```
.
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout, fonts, ambient layers
│   ├── page.tsx              # Section composition
│   ├── globals.css           # Tokens + base + custom utilities
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── sections/             # Page sections — one file each
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── performance.tsx
│   │   ├── playground.tsx    # ★ interactive console
│   │   ├── philosophy.tsx
│   │   └── contact.tsx
│   ├── effects/              # Visual primitives (decorative)
│   │   ├── ambient-glow.tsx
│   │   ├── film-grain.tsx
│   │   ├── cursor-trail.tsx
│   │   ├── scroll-progress.tsx
│   │   ├── konami-listener.tsx
│   │   ├── equalizer.tsx
│   │   ├── waveform.tsx
│   │   ├── vinyl.tsx
│   │   └── magnetic.tsx
│   ├── layout/               # Navbar, footer, NowPlaying widget
│   ├── shared/               # GlassCard, SectionHeading, AnimatedCounter
│   └── ui/                   # shadcn-style primitives
├── hooks/                    # use-mouse-position, use-konami-code, …
├── lib/
│   ├── constants.ts
│   ├── utils.ts
│   └── data/                 # All site content — experience, projects, skills, metrics
├── types/
└── public/                   # Static assets (add your /og.jpg, favicons here)
```

---

## 🎚 Sections

| #   | Track           | What it is                                                                                              |
| --- | --------------- | ------------------------------------------------------------------------------------------------------- |
| 1   | **Hero**        | Cinematic landing — display headline, "Now Playing" engineering board, live equalizer, social links.    |
| 2   | **About**       | Story + studio-channel cards (interfaces as instruments, perf as design, architecture).                 |
| 3   | **Experience**  | Vinyl-tracklist timeline. Sticky spinning record on the side.                                           |
| 4   | **Projects**    | Album-cover hover cards — catalog #, runtime, metrics, stack.                                           |
| 5   | **Skills**      | Mixing-board EQ — six channels (Frontend, Architecture, Performance, AI/Streaming, Tooling, Platforms). |
| 6   | **Performance** | Animated counters for the real wins (36% rendering, 45% bundles, Lighthouse 90+, 5k+ users, 10+ apps).  |
| 7   | **Playground**  | **★ The showpiece.** Streaming console (fake token-by-token SSE) + mouse-reactive signal meter.         |
| 8   | **Philosophy**  | Production notes — mentorship, architecture, product, performance.                                      |
| 9   | **Contact**     | Final outro — form + studio-status card + EQ.                                                           |

---

## 🏗 Architecture decisions

- **App Router + React Server Components by default.** Every section is a server component
  unless it actually needs interactivity. The few `"use client"` files are the ones doing
  motion, listeners, or stateful UI (Hero, Playground, Navbar, etc.).
- **Content is data, not JSX.** `lib/data/*` holds projects, experience, skills, metrics so the
  shape stays editable without touching layout. Each export is fully typed.
- **Effect primitives are isolated.** `components/effects/*` are pure decorative atoms (vinyl,
  equalizer, waveform, magnetic wrap). Sections compose them.
- **Design tokens live in two places only:** Tailwind config (semantic colors, type scale,
  animations) and `globals.css` (CSS-variable theme + custom utilities). Nothing inline.
- **No global state library.** UI is local-state by design; if/when you wire a real contact
  endpoint or analytics, drop in `zustand` or rely on RSC fetching.

---

## 🎬 Animation strategy

- **Framer Motion** for declarative motion — entrance reveals, springs, mouse-reactive
  spotlights, gestures (`whileInView`, `useSpring`, `useTransform`, `useScroll`).
- **GSAP** is optional / hot-swappable for complex scroll choreography. The package is in
  `dependencies` and `gsap/ScrollTrigger` can be added in `components/effects/` for any
  bespoke scroll work (e.g. parallax cover art).
- **CSS keyframes** for everything that doesn't need state — film grain pulse, tape-bar
  traverse, vinyl spin, ambient bokeh.
- **Only `transform` and `opacity` are animated** — no layout-trashing properties.
  Bars use `scaleY`, hover lifts use `translate`, magnetic buttons use `x/y` springs.
- **Deterministic seeds** (`(i * 9301 + 49297) % 233280`) for any "random" loops so SSR
  output matches client and there's no hydration flicker.
- **`prefers-reduced-motion` honored everywhere.** A global CSS rule kills animation duration,
  and decorative components (`AmbientGlow`, `CursorTrail`, `Magnetic`) check it via hook and
  skip motion logic entirely.

---

## ⚡ Performance optimizations

- **Server components by default** — only interactive leaves are client.
- **`next/font` with `display: swap`** for Inter, Space Grotesk and JetBrains Mono. Self-hosted,
  preloaded, subsetted — no FOUT/CLS.
- **`experimental.optimizePackageImports`** for `framer-motion`, `lucide-react`, `gsap` —
  Next.js tree-shakes them down to the icons/animations actually used.
- **No external images** in the default build — gradients + SVG mean the LCP is text.
- **Bundle analyzer ready:** `pnpm analyze` builds with `@next/bundle-analyzer`.
- **GPU-friendly motion:** all animation properties are `transform`/`opacity`.
- **Throttled effects:** ambient glow + cursor trail use spring physics (one rAF loop), not
  per-pixel re-renders.
- **HTTP headers** for caching + security (`next.config.mjs`).
- **Targets:** Lighthouse Performance 95+, LCP < 1.5s on a fast 4G connection.

---

## ♿ Accessibility

- **Semantic landmarks**: `<header>`, `<main id="main">`, `<footer>`, `<nav aria-label>`,
  `<section id>`, ordered/unordered lists where appropriate.
- **Focus-visible rings** on every interactive element (`globals.css :focus-visible`).
- **Skip target** — `#main` is reachable; add a "Skip to content" link if your audit needs it.
- **`prefers-reduced-motion`** respected (see Animation).
- **ARIA on dynamic regions** — streaming console is `aria-live="polite"`; signal bars are
  `aria-hidden` (decorative); skill bars expose `role="progressbar"` with `aria-valuenow`.
- **Color contrast** — body text on `--background` is 12.5:1, secondary 7.4:1 (WCAG AAA).
- **Keyboard shortcuts** — `G` then `A/W/P/S/L/C/H` jumps between sections (no input override).
- **Konami code easter egg** is purely visual + a toast — never required for navigation.

---

## 🥚 Easter eggs & micro-interactions

| Trigger                                      | Effect                                                                   |
| -------------------------------------------- | ------------------------------------------------------------------------ |
| **Konami code** (↑ ↑ ↓ ↓ ← → ← → B A)        | Spinning vinyl + "Side B unlocked" toast                                 |
| **`G` then `A / W / P / S / L / C / H`**     | Vim-style nav (about, work, projects, skills, playground, contact, hero) |
| **Hover any project card**                   | Cover art revealed equalizer pops in                                     |
| **Hover any button wrapped in `<Magnetic>`** | Subtle pull toward cursor                                                |
| **Cursor on signal meter (Playground)**      | Live pixel grid follows the pointer                                      |
| **Cursor anywhere**                          | A small bone dot + lagging ring (hidden on touch)                        |
| **Press play in Playground**                 | Tokens stream in with cursor blink, stop button works                    |

---

## 🚢 Deployment

### Vercel (recommended)

```bash
# zero-config: push this repo, import in Vercel
# add NEXT_PUBLIC_SITE_URL and CONTACT_EMAIL env vars
```

### Self-host

```bash
pnpm build
pnpm start    # Node server on PORT 3000
```

### Docker (optional)

A `Dockerfile` isn't included but a minimal one with the official `node:20-alpine` image
plus `pnpm i --prod && pnpm build && pnpm start` will work.

---

## 🛣 Future upgrades

- **Real streaming back-end** — swap the simulated SSE in Playground for a real Vercel AI
  SDK route. The component is already SSE-shaped.
- **MDX project case studies** — `app/projects/[slug]/page.mdx` with shared `<TrackCard>` shell.
- **Resend / Postmark** wiring for the contact form (`app/api/contact/route.ts`).
- **GSAP ScrollTrigger** for a horizontal "B-side" tracklist scroll.
- **WebAudio API** — drive the equalizer from the live mic for talks/conference demos.
- **View Transitions API** for nav routing once stable in all targets.
- **Blog** at `/blog` — same RSC shell, MDX content layer.

---

## 📦 Scripts

```bash
pnpm dev          # next dev (turbopack)
pnpm build        # next build
pnpm start        # next start (prod)
pnpm lint         # eslint
pnpm type-check   # tsc --noEmit
pnpm analyze      # build with bundle analyzer
```

---

## 🧠 Engineering notes

- **TypeScript strict** — no `any`, no implicit-any.
- **No barrel files** — each component is imported by path. Smaller graphs, better tree-shaking.
- **Tailwind only**, no CSS-in-JS runtime. The only `<style>` blocks are font-loading.
- **One source of truth per concept** — `lib/data/*` for content, `lib/constants.ts` for site
  metadata, `tailwind.config.ts` for tokens.

---

Made by Rohit. Press <kbd>G</kbd> then <kbd>H</kbd> to rewind to the top. 🎚
