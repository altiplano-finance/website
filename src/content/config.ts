import { defineCollection, z } from 'astro:content';

// Insights are Markdown files in src/content/insights/. The file name becomes
// the URL: reading-a-term-sheet.md -> /insights/reading-a-term-sheet
const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    /** Publish date, e.g. 2026-09-12. The newest post is shown first. */
    date: z.coerce.date(),
    /** One or two sentences under the title; also used in search results and link previews. */
    summary: z.string(),
    /** Drafts show in `npm run dev` but are left out of the live site. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
