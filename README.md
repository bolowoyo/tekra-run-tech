# Tekra Run Technologies

Marketing website for [Tekra Run Technologies](https://tekrarun.com), built
with Next.js-compatible components on the Vinext/Vite toolchain.

## Requirements

- Node.js `22.x`
- npm

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test
npm run test:hostinger
```

The project intentionally supports two build targets:

- `npm run build` creates the server/Worker output used by OpenAI Sites.
- `npm run build:hostinger` creates and validates a static website in
  `dist/client`. A successful build always contains `dist/client/index.html`.

Do not publish the ordinary `dist` directory as a static site. That build has
`client` and `server` subfolders but no root `index.html`, so a standard web
server returns `403 Forbidden` when the domain root is requested.

## Hostinger deployment settings

Connect Hostinger to the repository and use these settings:

| Setting | Value |
| --- | --- |
| Framework preset | `Other` (or `Vite` if `Other` is unavailable) |
| Branch | `main` |
| Node version | `22.x` |
| Root directory | `./` |
| Build command | `npm run build:hostinger` |
| Package manager | `npm` |
| Output directory | `dist/client` |

No entry file or start command is required for this static deployment. After
changing the settings, choose **Save and redeploy**. Hostinger must publish the
contents of `dist/client` so that `index.html` lands at the web root.

If a previous back-end deployment left `client` and `server` folders inside
`public_html`, use Hostinger's redeployment flow rather than copying the new
`dist` folder over them. Confirm after deployment that `public_html/index.html`
exists (or that Hostinger's deployment preview shows the homepage).

## Project structure

- `app/` — site layout, page, and styling
- `public/` — Tekra brand image, social image, and OEM partner logos
- `scripts/build-hostinger.mjs` — cross-platform static build and output check
- `tests/` — rendered site validation
- `.openai/hosting.json` — OpenAI Sites project metadata
