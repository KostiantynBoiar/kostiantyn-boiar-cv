# kostiantyn-boiar-cv

Personal CV site. React + Vite + Tailwind CSS v4, built to the Claude design
system canvas.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Replace these files

The design references three PDFs. Placeholders are committed so the UI works —
swap in the real documents, keeping the filenames:

| File | Used by |
| --- | --- |
| `public/Kostiantyn-Boiar-CV.pdf` | "CV ↓" in the nav, "Full CV, PDF ↓" in the footer |
| `public/static/sam3-zero-shot-transfer.pdf` | Research → SAM 3 paper overlay |
| `public/static/isogenies-sidh-csidh.pdf` | Research → post-quantum paper overlay |

## How it is organised

| Path | Purpose |
| --- | --- |
| `src/data/cv.ts` | **All copy and content.** Edit this to update the CV. |
| `src/types.ts` | Shape of the content. |
| `src/components/` | One component per section — they only read props and data. |
| `src/index.css` | Design tokens, `@font-face`, base and print styles. |
| `public/fonts/` | Self-hosted IBM Plex Mono (400/500, five subsets each). |

## Design tokens

`src/index.css` carries the design system verbatim in a Tailwind v4 `@theme`
block. Tailwind derives a utility from every token, so the components never
hard-code a colour or a size.

```
Surfaces   canvas #FAFAF8   wash #F2F2EE
Text       ink #0E0E0C   copy #3A3A36   muted #6F6F68
           subtle #8A8A82   faint #A5A59D
Lines      rule #E2E2DC   underline #C9C9C2
Type       Helvetica Neue (sans) · IBM Plex Mono (mono)
```

Note the two `text-*` namespaces: `--color-copy` gives `text-copy`, while
`--text-body` gives `text-body`. A colour and a size must never share a name or
the utility becomes ambiguous — that is why the body colour is `copy`.

## Section toggles

`config` in `src/data/cv.ts` mirrors the editor props from the design canvas:

```ts
showTechStacks: true      // per-role technology lines
showSectionNumbers: true  // the 01–05 section numerals
showPhone: true           // phone number in the hero and footer
experienceLayout: 'Prose' // starting layout; visitors can switch to 'Ledger'
```

## Behaviour worth knowing

- **Experience has two layouts.** Prose renders achievement bullets; Ledger
  renders a date column, a summary and three headline metrics. The toggle in
  the section header switches them at runtime.
- **Papers open in place.** "Read PDF" opens an in-page overlay rather than
  navigating away. Escape or a click outside closes it.
- **Sections fade in on scroll** via `animation-timeline: view()`. Browsers
  without scroll-driven animation support simply play the fade once on load.

## Fonts

IBM Plex Mono is self-hosted from `public/fonts/` — the exact woff2 subsets from
the design, with their original `unicode-range` declarations, so Cyrillic and
Latin-Extended text render correctly with no external requests.

## Deployment

Pushing to `main`/`master` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. The site lands at:

```
https://kostiantynboiar.github.io/kostiantyn-boiar-cv/
```

**One-time setup:** in the repository on GitHub, go to
**Settings → Pages → Build and deployment** and set **Source** to
**GitHub Actions**. Without this the workflow builds but never publishes.

### The base path

GitHub Pages serves a project repository from `/<repo>/`, not from the domain
root, so `vite.config.ts` sets:

```ts
const base = '/kostiantyn-boiar-cv/'
```

Vite rewrites the font and bundle URLs to match; the PDF links are relative and
resolve against the page URL. **If you move the site, change this one line:**

| Where the site lives | `base` |
| --- | --- |
| `kostiantynboiar.github.io/kostiantyn-boiar-cv/` (now) | `'/kostiantyn-boiar-cv/'` |
| A custom domain, e.g. `boiar.dev` | `'/'` |
| A `kostiantynboiar.github.io` repo | `'/'` |

Getting this wrong shows a blank page with 404s on the JS and CSS — that is
almost always a `base` mismatch.

`npm run dev` also serves under the base path
(`http://localhost:5173/kostiantyn-boiar-cv/`), which keeps development honest
about how production resolves URLs.

### Custom domain

Add a `CNAME` file to `public/` containing the bare domain, set `base` to `'/'`,
and point a DNS `CNAME` record at `kostiantynboiar.github.io`.
