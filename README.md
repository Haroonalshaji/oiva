# the OIVA — Brand Website

Quiet-luxury contemporary womenswear marketing site built with **Next.js 14** (App Router) and **Chakra UI v2**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/              # Pages and API routes
  components/       # UI components by feature
  theme/            # Chakra theme (colors, typography, components)
  data/             # Product, journal, and site content (typed arrays)
  lib/              # Images config, utilities
  types/            # Shared TypeScript interfaces
public/
  logo/             # SVG lockups (primary, blush, reversed, square)
```

## Swapping placeholder content

### Product photography
Edit `src/lib/images.ts`:
- `productImage()` — generates Unsplash URLs per product slug
- Replace with local paths: `/images/products/silk-drape-blouse.jpg`

Add files to `public/images/products/` and update `productImage()` to return local paths.

### Editorial / hero images
Update `imageConfig` in `src/lib/images.ts` with local paths under `public/images/`.

### Products & journal posts
- **Products**: `src/data/products.ts` — add/edit `Product` objects
- **Journal**: `src/data/posts.ts` — add/edit `JournalPost` objects
- **Site copy**: `src/data/site.ts` — nav, pillars, contact info

### Logos
Replace SVGs in `public/logo/` with final brand lockups from brand guidelines.

## Brand theme

All visual tokens live in `src/theme/`:
- `foundations/colors.ts` — OIVA palette (`oiva.ivory`, `oiva.cocoa`, etc.)
- `foundations/typography.ts` — Playfair Display, Cormorant Garamond, Jost
- `index.ts` — component overrides (buttons, inputs, dividers)

Reference tokens as `oiva.cocoa`, never raw hex in components.

## Future integration points

| Feature | Location | Notes |
|---------|----------|-------|
| **Cart / checkout** | `ProductDetail.tsx` → `handleAddToBag` | Wire to Shopify, Snipcart, or custom cart context |
| **CMS** | Replace `src/data/*.ts` | Sanity, Contentful, or MDX in `content/` |
| **Contact form** | `src/app/api/contact/route.ts` | Connect Resend, SendGrid, or CRM webhook |
| **Newsletter** | `Footer.tsx`, `NewsletterBand.tsx` | Mailchimp, Klaviyo API |
| **Analytics** | `src/app/layout.tsx` | Add Vercel Analytics or Plausible |
| **E-commerce** | Product data layer | Swap typed arrays for Shopify Storefront API |

## Deploy

Vercel-ready. Push to GitHub and import in Vercel, or:

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured products, lookbook, pillars |
| `/products` | Collection grid with filter/sort |
| `/products/[slug]` | Product detail with size selector |
| `/about` | Brand story, values, team |
| `/journal` | Blog listing |
| `/journal/[slug]` | Long-form post |
| `/contact` | Contact form + studio details |
