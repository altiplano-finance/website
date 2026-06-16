import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// Deployed to GitHub Pages with the custom domain altiplano.finance
// (see public/CNAME). Because the site is served at the domain root, no
// `base` path is needed. If the custom domain is ever removed, the site
// would live at https://regenbildr.github.io/altiplano-website/ and would
// then need `base: '/altiplano-website'`.
export default defineConfig({
  site: 'https://altiplano.finance',
  build: {
    inlineStylesheets: 'auto',
  },
});
