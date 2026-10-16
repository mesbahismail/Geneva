# Geneva

A free, open-source SaaS landing page template for **shadcn/ui**, built with Next.js, Tailwind CSS v4 and TypeScript. It ships as a [shadcn registry](https://ui.shadcn.com/docs/registry), so you can install the whole template or individual blocks straight into your project with the shadcn CLI.

- Landing page: header, hero, benefits, features, reviews, integrations, how it works, pricing, partners, FAQ and footer
- Extra pages: login (magic link), sign up, about, contact and terms
- Deep-navy theme with a sky-blue accent, in light and dark variants
- Fully responsive, with a mobile menu
- Built on semantic theme tokens, so blocks adapt to your own shadcn theme
- Works with both Radix and Base UI shadcn projects

## Install with the shadcn CLI

Everything (all blocks plus the pages, the theme and the font):

```bash
npx shadcn@latest add @geneva/template @geneva/theme @geneva/font
```

Or pick individual blocks:

```bash
npx shadcn@latest add @geneva/hero @geneva/pricing @geneva/faq
```

Then add `className="dark"` to your `<html>` element for the original look.

> Until the `@geneva` namespace is listed in the shadcn registry directory, install by URL instead, e.g. `npx shadcn@latest add https://<your-deployment>/r/hero.json`.

### Available items

| Item | Type | Description |
| --- | --- | --- |
| `template` | block | Every block plus `/`, `/login`, `/signup`, `/about`, `/contact` and `/terms` pages |
| `theme` | theme | Geneva colours (light and dark), radius and border animation |
| `font` | font | Space Grotesk as `--font-sans` |
| `header` | block | Sticky header with blur-on-scroll and mobile sheet menu |
| `hero` | block | Headline, animated product frame, CTA and avatar social proof |
| `benefits` | block | Six-up benefits grid |
| `features` | block | Alternating feature rows with screenshots |
| `reviews` | block | Scrollable testimonial cards |
| `integrations` | block | Tabbed integrations showcase |
| `how-it-works` | block | Three numbered steps |
| `pricing` | block | Three plans with a highlighted tier |
| `partners` | block | Logo cloud |
| `faq` | block | Accessible FAQ |
| `footer` | block | Site footer |
| `login` | block | Magic-link login card |
| `signup` | block | Sign-up card |
| `about` | block | About section with stats |
| `contact` | block | Contact section with form |

### Images

Registry items can't carry images. The blocks look for screenshots in `public/geneva/` (`dashboard.jpg`, `analytics.jpg`, `my-cards.jpg`, `ai-chat-1.jpg`, `wallet.jpg`, `send-1.jpg`, `transactions.jpg`, `documents-grid.jpg`, `about.jpg`, `avatar-1.jpg` … `avatar-4.jpg`). Copy the ones from this repo or use your own. Missing screenshots fall back to a skeleton placeholder, and avatars fall back to initials. `Hero` and `About` also accept an `imageSrc` prop.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The block catalogue lives at `/blocks`.

## Registry development

Block sources live in `src/components/geneva/` and are declared in `registry.json`. Build the registry JSON into `public/r/`:

```bash
npm run registry:build
```

`npm run build` runs this automatically before `next build`, so a deployment always serves an up-to-date registry at `/r/registry.json` and `/r/<item>.json`.

## License

[MIT](LICENSE). Designed with care by Ismail Mesbah.
