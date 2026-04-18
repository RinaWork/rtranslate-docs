# Docs Viewer

React-based markdown documentation viewer for GitHub Pages.

## Features

- Renders markdown files from the docs folder
- Sidebar navigation with categories
- Responsive design
- GitHub-flavored markdown support

## Development

```bash
npm install
npm run dev
```

## Deployment to GitHub Pages

### Option 1: Manual Deploy

```bash
npm install
npm run build
cp -r ../architecture ../api ../deployment ../user ../README.md dist/
npm run deploy
```

### Option 2: Automatic (GitHub Actions)

Already configured in `.github/workflows/deploy.yml`. Just push to main branch.

### GitHub Pages Setup

1. Go to your GitHub repo → Settings → Pages
2. Source: GitHub Actions
3. Push to main branch to trigger deployment

## URL

After deployment, site will be at:
`https://rinawork.github.io/rtranslate-docs/`
