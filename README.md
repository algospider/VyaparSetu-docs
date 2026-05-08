# VyaparSetu Presentation Web

This folder contains the TypeScript presentation website for VyaparSetu. It is
designed for explaining the Android app to shop owners, users, and stakeholders.

The website covers:

- App problem and solution
- Billing, inventory, khata, history, admin, workspace, barcode, and sync modules
- Role-based access
- Full shop workflow
- Technical trust points
- Demo/pitch script
- FAQ and GitHub Pages deployment notes

The visual identity uses the same launcher mark and vector icon paths from the
Android app resources.

## Local Development

```sh
cd VyaparSetu-docs
npm install
npm run dev
```

On Android shared storage, npm packages that use native binaries may fail to run
from `/sdcard`. If that happens, copy `VyaparSetu-docs` to Termux internal storage, run the
commands there, and keep the source files in this folder.

## Production Build

```sh
cd VyaparSetu-docs
npm run build
```

The production files are generated in `VyaparSetu-docs/dist`.

## GitHub Pages Workflow

The workflow template is stored at:

```text
.github/workflows/deploy-docs.yml
```

GitHub Actions only discovers workflow files from the repository root `.github/workflows`
directory. This workflow builds the `VyaparSetu-docs` Node app and deploys its distribution folder to GitHub Pages.
