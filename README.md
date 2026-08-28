# GrowClientsAI

Marketing site for GrowClientsAI: Darrin Duncan's web design and build service for local
service businesses. Built with Vite + React + Tailwind v4, deployed via GitHub Actions to
Caddy.

A single anchor-navigated page, plus the unlisted client forms under `testimonial/`. See
[CLAUDE.md](CLAUDE.md) for the design tokens, the copy conventions, and the deploy rules.

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs dist/
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `dist/`, SFTPs it to `/srv/growclientsai`, and reloads Caddy.
