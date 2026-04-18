# Documentation

Complete documentation for Unnamed Translate - a low-cost, multilingual translator optimized for Vietnamese users.

## Quick Navigation

| Section | Description |
|---------|-------------|
| [System Architecture](./architecture/overview.md) | How the system works |
| [API Reference](./api/endpoints.md) | REST API documentation |
| [Deployment](./deployment/vps.md) | Server setup guide |
| [User Guide](./user/guide-vi.md) | How to use (Tiếng Việt) |

## Repository Structure

```
docs/
├── docs-viewer/        # React app for viewing docs
├── architecture/       # System design & data flows
├── api/               # API specs & examples
├── deployment/        # VPS, Docker, cloud guides
└── user/              # End-user guides (VI/EN)
```

## Getting Started

### View Docs Locally

```bash
cd docs-viewer
npm install
npm run dev
# Open http://localhost:5173
```

### Deploy to GitHub Pages

```bash
# Automatic on push to main
git push origin main
```

## Contributing

1. Create/edit `.md` files in appropriate folder
2. Update `docs-viewer/src/App.tsx` if adding new pages
3. Commit and push - auto-deploys to GitHub Pages

---

**Live Site:** https://rinawork.github.io/rtranslate-docs/
