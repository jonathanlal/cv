# Gatsby CV — Quick local run & deploy

Short: this repo is an older Gatsby starter. To run locally and deploy to Vercel reliably, use Node 18 and the steps below.

Prerequisites
- Node 18.x (use nvm-windows or installer)
- Python 3.11 (only required if you run `npm install` locally and native modules need to compile)
- Git and a Vercel account (optional if you prefer to upload `public/`)

Quick local dev (recommended)
1. Install Node 18 and open a fresh terminal.
2. Install deps (the repo forces legacy peer deps):
   npm install
3. Run in dev mode:
   npm run develop

Production build (locally, then deploy static)
1. Ensure dependencies are installed (see above).
2. Increase Node memory then build:
   # PowerShell
   $env:NODE_OPTIONS="--max-old-space-size=8192"
   npm run build
3. `public/` will contain the static site.

Deploy options
- Let Vercel build: commit `package-lock.json` and `.npmrc` (legacy-peer-deps) and set Build Command = `npm run build`, Output = `public`. Ensure Project Node version is 18 in Vercel settings. If Vercel build fails, use the local build flow below.
- Deploy the static `public/` folder: build locally and then use `npx vercel --prod public` or upload via the Vercel dashboard.

Notes
- This project contains older/deprecated plugins. For small edits and deploys the above workflow is stable. For long-term maintenance, upgrade Gatsby plugins and dependencies.
