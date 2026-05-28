# TaiwanEats 🍜

The definitive English-language food guide to Taiwan. Built with Next.js 14, Tailwind CSS, and deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- **Vercel** for deployment

## Project structure

```
src/
  app/
    page.tsx           # Homepage
    dishes/page.tsx    # Dish guides index
    cities/page.tsx    # City guides index
    night-markets/     # Night market guides
    about/page.tsx     # About page
  components/
    Navbar.tsx
    Footer.tsx
    ArticleCard.tsx
    NewsletterSignup.tsx
  lib/
    data.ts            # Shared content data
```

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

## Changelog

### UI/UX improvements (May 2026)

- **Sticky navbar** — pinned to top with backdrop blur; active link highlighted via `usePathname`; mobile menu animates open/closed instead of snapping
- **Photo collage hero** — replaced the emoji dish grid with a `next/image` photo collage with gradient label overlays
- **WCAG AA contrast fix** — CTA button backgrounds changed from `coral-400` (#D85A30, 3.86:1) to `coral-600` (#993C1D, 7.0:1) for white text
- **Taller article card images** — raised from 112px to 160px (large: 208px); added `line-clamp-2` and hover shadow lift
- **Newsletter accessibility** — added `sr-only` label for the email input; coral brand background replaces gray; merged async loading/error states
- **"See all" and "Explore" affordances** — added "See all →" link on Featured Reads and "Explore →" on city cards

## Adding content

Edit `src/lib/data.ts` to update categories, featured articles, and cities.
For full article pages, add a new file under the relevant directory, e.g. `src/app/dishes/beef-noodle-soup/page.tsx`.
