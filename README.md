# Altiplano — Website

Static marketing site for **Altiplano Strategic Finance**, built with [Astro](https://astro.build).
Premium, minimal, institutional design oriented around climate & energy finance.

## Stack

- **Astro 4** — static site generation, zero JS by default
- **Vanilla CSS** with brand design tokens (CSS variables) in [`src/styles/global.css`](src/styles/global.css)
- **Inter** (headings/body) + **Cinzel** (wordmark) via Google Fonts
- Fully responsive, semantic HTML, SEO + Open Graph metadata

## Project structure

```
public/                 # static assets (served from site root)
  brand/                # brand guidelines
  images/               # mountain_wide.png (hero)
  logos/                # logo + favicon marks
src/
  components/
    Layout.astro        # <head>, SEO/OG meta, header + footer slot
    Header.astro        # logo + nav + mobile hamburger
    Footer.astro        # logo, description, contact, copyright
    ServiceCard.astro
    BlogCard.astro
  pages/
    index.astro         # Home (hero + services + CTA)
    services.astro      # Grouped service cards
    portfolio.astro     # Placeholder
    about.astro         # Team placeholder
    blog.astro          # 3 placeholder posts
    contact.astro       # Front-end-only contact form
  styles/
    global.css          # design tokens + base styles
```

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Deploy — GitHub Pages

A workflow is included at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push to the `main` branch on GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The site builds and deploys automatically on every push.

**Custom domain:** the site is served at **https://altiplano.finance** via
[`public/CNAME`](public/CNAME) (Astro copies it into the build output, which keeps the
domain bound on each deploy). Because the domain serves from its root, no `base` path is
set in [`astro.config.mjs`](astro.config.mjs). The included `public/.nojekyll` file ensures
the hashed `_astro/` directory is served.

## Brand

Palette and typography follow [`public/brand/Altiplano_Website_Brand_Guidelines.txt`](public/brand/Altiplano_Website_Brand_Guidelines.txt):

| Token        | Hex       | Use                                |
| ------------ | --------- | ---------------------------------- |
| Navy         | `#001421` | Headings, nav, buttons, body text  |
| Sand         | `#F5EDE6` | Dominant background                |
| Clay         | `#BD876B` | Accents, links, highlights         |
| Terracotta   | `#C96E3D` | Supporting                         |
| Andes Rose   | `#DFA98C` | Supporting                         |
| Cloud        | `#D8DDE3` | Supporting                         |

The contact form is **front-end only** — wire it to a handler (Formspree, Netlify
Forms, an API route, etc.) to receive submissions.
