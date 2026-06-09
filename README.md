# BLOSSOM project page

Landing page for **BLOSSOM: Blockwise Federated Learning Over Shared and Sparse Observed Modalities**.

Built with [Astro 5](https://astro.build) and [Tailwind CSS 4](https://tailwindcss.com). Designed to be deployed as a static site to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

The static site is emitted to `dist/`.

## Customize

- **Title, authors, links, BibTeX** — edit the `paper` object at the top of `src/pages/index.astro`.
- **Abstract / Method / Results copy** — edit the corresponding `<section>` blocks in `src/pages/index.astro`.
- **PDF** — drop `blossom.pdf` into `public/`. It will be served at `/blossom.pdf`.
- **Figures** — drop `teaser.png` and `method.png` into `public/`, then swap the placeholder `<div>` for an `<img>` (see comment in `index.astro`).
- **Colors / fonts** — edit the `@theme` block in `src/styles/global.css`.
- **Deployment URL** — update `site` and `base` in `astro.config.mjs` once the org and repo exist.

## Deploy to GitHub Pages

1. Create the org and a repo named `blossom` under it.
2. Push this directory to that repo.
3. Update `site` in `astro.config.mjs` to `https://<org>.github.io` and `base` to `/blossom/`.
4. Add the GitHub Actions workflow at `.github/workflows/deploy.yml` (template in `docs/`, or use the official Astro one: https://docs.astro.build/en/guides/deploy/github/).
5. In repo Settings → Pages, set Source to "GitHub Actions".
