# GrowClientsAI

Transition page for GrowClientsAI → Sonika. Built with Vite + React, deployed via GitHub Actions to Caddy.

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `dist/`, SFTPs it to `/srv/growclientsai`, and reloads Caddy.
