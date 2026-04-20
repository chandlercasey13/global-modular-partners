# Design reference: aeline

Source: `aeline.webflow.io` (scraped Webflow template)
Exported: 2026-04-19

This folder is reference material for an LLM coding agent (Cursor /
Claude Code / Codex). It captures the structure, copy, and CSS of a
real shipped site so a model can reuse the design — class names,
section composition, palette, type — when building something new.

## How to use this folder

When you (or the agent) needs design inspiration:

1. Skim `design-system.json` for the palette + typography summary.
2. Look in `manifest.json` for sections by role (hero / pricing / cta /
   …) — every entry includes its file path and source page.
3. Open the matching `sections/*.html` — it's a fully renderable
   single-section document (CSS bundle inlined) you can preview in a
   browser or copy markup from.
4. Use `pages/*.html` when you want to see how multiple sections
   compose into a full page top-to-bottom.

When asking the agent to build something:

> "Use the design language of `design-reference/aeline`. Copy
> the hero structure from `sections/*hero*` and adapt the copy. Stay
> within the palette in `design-system.json`."

## What's in here

- **11 pages**, **124 sections** total
- **Pages** (11):
  - `pages/home.html` (31 sections)
  - `pages/about-us.html` (8 sections)
  - `pages/about-us-2.html` (14 sections)
  - `pages/about-us-3.html` (10 sections)
  - `pages/blog.html` (6 sections)
  - `pages/contact-us.html` (3 sections)
  - `pages/contact-us-2.html` (4 sections)
  - `pages/contact-us-3.html` (4 sections)
  - `pages/services.html` (8 sections)
  - `pages/home-v2.html` (16 sections)
  - `pages/home-v3.html` (20 sections)

- **Section roles**:
  - `Navigation` × 12
  - `Footer` × 12
  - `Hero` × 9
  - `About` × 7
  - `Comprehensive consulting and intelligent innovat…` × 4
  - `Services` × 4
  - `What they say about us?` × 4
  - `Stats` × 4
  - `Section 3` × 3
  - `Section 9` × 3
  - `Pricing` × 3
  - `Section 5` × 3
  - `Section 8` × 3
  - `A` × 2
  - `Where human insight meets intelligent technology` × 2
  - `Flexible Plans Built for Every Stage of Growth` × 2
  - `Section 13` × 2
  - `Section 14` × 2
  - `Latest insights and trends` × 2
  - `Blog` × 2
  - `Call to action` × 2
  - `What is included Aeline` × 2
  - `Header` × 2
  - `Meet our teams` × 2
  - `Section 6` × 2
  - `Testimonials` × 2
  - `Logo cloud` × 2
  - `Section 10` × 2
  - `Reach out today` × 2
  - `Frequently asked questions` × 2
  - `FAQ` × 2
  - `Section 19` × 1
  - `Need to customize this template?` × 1
  - `Figma file included` × 1
  - `Headers and Footers` × 1
  - `Looking for more Webflow templates?` × 1
  - `Team` × 1
  - `Our journey toward intelligent transformation` × 1
  - `Empowering businesses through strategy and AI` × 1
  - `Section 7` × 1
  - `Section 11` × 1
  - `Empowering Businesses Through Intelligent Transf…` × 1
  - `Recent published` × 1
  - `We build solutions that create real, measurable …` × 1
  - `Building the future with AI and strategy` × 1
  - `Section 12` × 1
  - `Section 15` × 1
  - `Section 17` × 1

- **Fonts detected**: `sans-serif`, `monospace`, `webflow-icons`, `webflow-icons!important`, `Arial`, `unset`, `serif`, `Helvetica Neue`

- **Top palette swatches**:
  - `#000000`
  - `#ffffff`
  - `#3898ec`
  - `#222222`
  - `#2d40ea`
  - `#758696`
  - `#cccccc`
  - `#dddddd`

## File layout

```
aeline/
  README.md            ← this file
  manifest.json        ← every section's metadata + file path
  design-system.json   ← merged palette / fonts / class prefixes
  pages/               ← one stitched, renderable HTML doc per source page
  sections/            ← one standalone HTML doc per section (CSS inlined)
```

## Notes for the agent

- Markup is **verbatim from the source site** (Webflow class names
  intact). Do not assume Tailwind unless you see Tailwind utility
  classes in the markup.
- Each `sections/*.html` is self-contained: head_html (full CSS
  bundle + meta) + that one section's body_html. Open in a browser
  to see the real render.
- `manifest.json` is the index of record. If you need to find a
  section, search there first instead of grepping HTML.
- This export is read-only inspiration. Any edits you make should
  go in the user's project, not in this folder.
