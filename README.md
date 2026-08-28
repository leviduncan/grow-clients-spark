# GrowClientsAI

Marketing site for GrowClientsAI, a web design and build service for local service
businesses. Single page, React 19 + Vite 6 + Tailwind v4, deployed via GitHub Actions
to Caddy. See CLAUDE.md for architecture and conventions.

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `dist/`, SFTPs it to `/srv/growclientsai`, and reloads Caddy.
