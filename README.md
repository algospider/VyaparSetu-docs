# Vymora Presentation Web

This folder contains the React + TypeScript marketing website for Vymora. It is
designed for presenting the Android app to shop owners, users, and business
stakeholders.

The site uses a compact home page and internal hash pages so the first screen
stays clean while detailed explanations remain available when needed.

## Source Structure

```text
src/
  assets/        Real screenshots and visual assets
  components/    Shared React components
  data/          Icons, features, screens, roles, and FAQ data
  pages/         Route-level TSX pages
  App.tsx        Hash-router and page selection
  main.tsx       React entry point
  styles.css     Shared marketing site styles
```

The website covers:

- Market problem and product positioning
- Problem, objectives, and business benefits on the home page
- Business benefits for shop owners
- Billing, inventory, khata, history, admin, workspace, barcode, and sync modules
- Target customer types
- Role-based access for owners, managers, and staff
- Checkout workflow and real app screen analysis
- FAQ and demo/contact call-to-action

The visual identity uses the same launcher mark and vector icon paths from the
Android app resources.

## Local Development

```sh
cd Vymora-docs
npm install
npm run dev
```

On Android shared storage, npm packages that use native binaries may fail to run
from `/sdcard`. If that happens, copy `Vymora-docs` to Termux internal storage, run the
commands there, and keep the source files in this folder.

## Production Build

```sh
cd Vymora-docs
npm run build
```

The production files are generated in `Vymora-docs/dist`.

## GitHub Pages Workflow

If `Vymora-docs` is pushed as its own GitHub repository, use:

```text
.github/workflows/deploy-docs.yml
```

If `Vymora-docs` stays inside the main Android repository, use the root workflow:

```text
../.github/workflows/deploy-docs.yml
```

GitHub Pages setup:

1. Open the GitHub repository.
2. Go to Settings > Pages.
3. Set Source to GitHub Actions.
4. Push to `main` or run the `Deploy Vymora Docs` workflow manually.

The workflow installs dependencies with `npm ci`, builds the React/TypeScript site,
and deploys the generated `dist` folder to GitHub Pages.
