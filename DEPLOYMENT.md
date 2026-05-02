# Rainbow Bakers — Deployment Guide

## How Everything Connects

```
Your Code (local)
      │
      │  git push
      ▼
GitHub (RainbowBakersPublicWebsite)
      │
      │  GitHub Actions workflow triggers automatically
      ▼
Vercel (builds & deploys)
      │
      │  serves live site
      ▼
https://rainbow-bakers.vercel.app
```

- **GitHub** is the source of truth for all code
- **Vercel** watches GitHub and builds the site on every push
- **GitHub Actions** (`.github/workflows/deploy.yml`) promotes pushes to `website_v1` straight to production
- **Supabase** serves live product data — no deployment needed when products change in the POS app

---

## One-Time Setup (Already Done)

These were done once when the project was created. You don't need to do these again unless starting fresh.

| What | How it was done |
|---|---|
| Vite + React project | `npm create vite@latest` |
| Dependencies installed | `npm install` |
| Vercel CLI installed | `npm install -g vercel` |
| Logged into Vercel | `vercel login` |
| GitHub repo created | `github.com/Mohit252002/RainbowBakersPublicWebsite` |
| Git remote set | `git remote add origin <url>` |
| Vercel linked to GitHub | Vercel Dashboard → project → Settings → Git |
| Env vars on Vercel | `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` added |
| Domain alias set | `rainbow-bakers.vercel.app` |
| GitHub secret added | `VERCEL_TOKEN` in repo → Settings → Secrets |

---

## Branch Strategy

| Branch | Purpose | Deploys to |
|---|---|---|
| `website_v1` | **Production** — live site | `rainbow-bakers.vercel.app` (auto via GitHub Actions) |
| `feature/*` | Work in progress | Preview URL only (not live) |
| `main` | Not used for deployment | — |

---

## Day-to-Day: Making a Change

This is what you do for every update (fixing text, changing colors, adding a section):

```bash
# 1. Make sure you're on the production branch
git checkout website_v1

# 2. Make your changes in VS Code / any editor

# 3. Test locally first
npm run dev
# Open http://localhost:5173 and verify

# 4. Stage and commit
git add .
git commit -m "fix: update hero tagline"

# 5. Push — this triggers auto-deploy
git push origin website_v1
```

**That's it.** GitHub Actions picks up the push and deploys to `rainbow-bakers.vercel.app` within ~2 minutes.

---

## Creating a New Feature Branch

Use this when you want to try something new without breaking the live site.

```bash
# 1. Start from the latest production code
git checkout website_v1
git pull origin website_v1

# 2. Create and switch to a new branch
git checkout -b feature/new-gallery-section

# 3. Make your changes and test locally
npm run dev

# 4. Commit your changes
git add .
git commit -m "feat: add gallery section to about page"

# 5. Push to GitHub (creates a Preview deployment on Vercel — NOT live)
git push origin feature/new-gallery-section
```

Vercel will give this branch a **preview URL** like:
`https://rainbowbakers-abc123xyz-mohit252002s-projects.vercel.app`

You can share this preview URL to review before going live.

---

## Merging a Feature Branch to Production

Once you're happy with the feature branch, bring it into `website_v1`:

```bash
# 1. Switch to production branch
git checkout website_v1

# 2. Pull latest
git pull origin website_v1

# 3. Merge your feature branch
git merge feature/new-gallery-section

# 4. Push to production — auto-deploys
git push origin website_v1

# 5. (Optional) Clean up the feature branch
git branch -d feature/new-gallery-section
git push origin --delete feature/new-gallery-section
```

---

## Deploying a New Branch as the New Production

If you want to make a fresh `website_v2` branch the new live site:

```bash
# 1. Create the new branch from current production
git checkout website_v1
git checkout -b website_v2

# 2. Make changes, commit
git add .
git commit -m "feat: v2 redesign"
git push origin website_v2
```

Then update the GitHub Actions workflow to deploy `website_v2`:

Open `.github/workflows/deploy.yml` and change:
```yaml
branches:
  - website_v1   # ← change this to website_v2
```

Commit and push:
```bash
git add .github/workflows/deploy.yml
git commit -m "ci: switch production branch to website_v2"
git push origin website_v2
```

---

## Environment Variables

Stored in two places:

### Local development — `code/.env.local`
```
VITE_SUPABASE_URL=https://rgijgkyvlesmjmhmtrwi.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_...
```
This file is gitignored — never committed to GitHub.

### Vercel (production) — set via CLI
```bash
# View current env vars
vercel env ls

# Add a new env var
echo "value" | vercel env add VAR_NAME production

# Remove an env var
vercel env rm VAR_NAME production
```

Or manage them at: **vercel.com → project `code` → Settings → Environment Variables**

---

## Checking Deployment Status

```bash
# See all recent deployments
vercel ls

# Check which URL is production
vercel inspect rainbow-bakers.vercel.app
```

Or check the **Actions** tab on GitHub — each push shows a workflow run with logs.

---

## Manual Deploy (if GitHub Actions fails)

```bash
cd D:\Projects\BakeryWebsite\code

# Deploy to production manually
vercel --prod --yes

# Then point the domain to the new deployment
vercel alias set <new-deployment-url> rainbow-bakers.vercel.app
```

---

## Rollback to a Previous Version

```bash
# List recent deployments
vercel ls

# Promote an older deployment back to production
vercel promote <old-deployment-url> --yes

# Re-point the domain
vercel alias set <old-deployment-url> rainbow-bakers.vercel.app
```

---

## Project File Locations

```
D:\Projects\BakeryWebsite\
├── CLAUDE.md                        ← Full project spec (read before any changes)
└── code\                            ← All source code lives here
    ├── .env.local                   ← Supabase credentials (never commit)
    ├── .github\workflows\deploy.yml ← Auto-deploy config
    ├── .vercel\project.json         ← Vercel project link
    ├── index.html                   ← Entry HTML + Google Fonts
    ├── tailwind.config.js
    ├── vite.config.js
    └── src\
        ├── lib\supabase.js          ← Supabase client
        ├── hooks\                   ← useProducts, useProductTypes, useBakeryPhotos
        ├── components\              ← Navbar, Footer, Hero, ProductCard, etc.
        ├── pages\                   ← Home, Menu, About, Contact
        └── styles\index.css         ← CSS variables + animations
```

---

## Quick Reference

| Task | Command |
|---|---|
| Start local server | `npm run dev` |
| Build for production | `npm run build` |
| Deploy to production | `git push origin website_v1` |
| Manual deploy | `vercel --prod --yes` |
| See deployments | `vercel ls` |
| Check live URL | `vercel inspect rainbow-bakers.vercel.app` |
| Add env var | `echo "val" \| vercel env add NAME production` |
