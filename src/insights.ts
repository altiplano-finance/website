import { getCollection, type CollectionEntry } from 'astro:content';

export type Insight = CollectionEntry<'insights'>;

/** Insights newest first. Drafts are included in `npm run dev` only. */
export async function getInsights(): Promise<Insight[]> {
  const posts = await getCollection('insights', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** "September 12, 2026" (long) or "Sep 12, 2026" (short). UTC, so a bare date never shifts a day. */
export function formatDate(date: Date, month: 'long' | 'short' = 'long'): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month, day: 'numeric', timeZone: 'UTC' });
}

/** Whole minutes to read, at roughly 230 words a minute. */
export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
