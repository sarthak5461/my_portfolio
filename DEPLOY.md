# Deploy to Netlify

This portfolio is a static React (CRA) site — no backend required.

## Option 1 — One-click via Netlify UI (easiest)

1. Push this repo to GitHub.
2. Go to https://app.netlify.com → **Add new site → Import an existing project**.
3. Pick your GitHub repo. Netlify auto-detects the config from `netlify.toml`:
   - **Base directory:** `frontend`
   - **Build command:** `yarn build`
   - **Publish directory:** `frontend/build`
4. Click **Deploy site**. Done.

## Option 2 — Netlify CLI

```bash
npm install -g netlify-cli
cd /app/frontend
yarn build
netlify deploy --prod --dir=build
```

## Option 3 — Drag & drop (no Git)

1. Build locally: `cd frontend && yarn build`
2. Open https://app.netlify.com/drop and drag the `frontend/build` folder.

## What's already configured

- `netlify.toml` at repo root — build settings, SPA fallback, caching headers
- `frontend/public/_redirects` — SPA fallback (so `/projects` etc. don't 404)
- `frontend/public/resume.pdf` — served at `/resume.pdf`

## Custom domain

Netlify → Site settings → Domain management → Add custom domain. They'll handle the SSL.

## After deploy

- Your portfolio will be live at `https://<your-site-name>.netlify.app`
- Future pushes to your main branch will auto-deploy.
