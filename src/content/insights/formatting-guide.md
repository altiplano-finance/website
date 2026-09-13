---
title: "How to write an insight"
date: 2026-09-12
summary: "A sample post showing how each kind of Markdown formatting looks on the site. Copy this file to start a new insight."
draft: true
---

This is a sample post. Because it is marked `draft: true`, it shows up when you preview the site on your computer but never on the live site. Delete it once you have published your first real insight, or keep it as a reference.

## Starting a new insight

1. Create a new `.md` file in `src/content/insights/`. The file name becomes the web address, so `reading-a-term-sheet.md` is published at `/insights/reading-a-term-sheet`. Use lowercase words and hyphens.
2. Copy the block between the two `---` lines at the top of this file, and fill in the title, date, and summary.
3. Set `draft: false` when you want it live, then push to `main`. The site rebuilds and the post appears within a few minutes.

The newest date is shown first, and the side menu updates on its own.

## Everyday formatting

Write paragraphs as plain text with a blank line between them. Use **bold** for emphasis, *italics* for titles or a softer stress, and [links like this](https://altiplano.finance/services).

### Lists

- A bullet point starts with a hyphen
- Keep each point short
- Nested points are indented by two spaces

### Quotes

> Well-run finances are a lasting advantage and the foundation of a strong raise.

### Tables

| Round | Typical use of funds | Months of runway |
| --- | --- | --- |
| Seed | Prototype and first pilots | 18 to 24 |
| Series A | First commercial deployments | 24 |
| Series B | Scaling manufacturing | 24 to 30 |

### Images

Put image files in `src/content/insights/images/` and reference them like this, with a short description in the square brackets:

`![Short description of the chart](./images/runway-chart.png)`

---

A line of three hyphens on its own, like the one above, draws a divider between sections.
