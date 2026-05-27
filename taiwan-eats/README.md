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

## Adding content

Edit `src/lib/data.ts` to update categories, featured articles, and cities.
For full article pages, add a new file under the relevant directory, e.g. `src/app/dishes/beef-noodle-soup/page.tsx`.
