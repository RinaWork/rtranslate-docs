# Documentation

Complete documentation for **Unnamed Translate** - a low-cost, multilingual translator optimized for Vietnamese users.

## Features

- 🌐 **8 Languages**: Vietnamese, English, Chinese, Japanese, Korean, German, French, Spanish
- 🎭 **Multiple Tones**: Casual, formal, business, gaming/slang
- 📝 **Multi-Variant**: 1-3 translation variants to choose from
- 📚 **Smart Dictionary**: Definitions, examples, synonyms
- ✍️ **Grammar & Rewrite**: Fix grammar, rewrite naturally, simplify text
- ⚡ **Fast**: Cache-first, <100ms for cached content
- 🛡️ **Anti-Abuse**: Rate limiting built-in
- 💰 **Low Cost**: ~$5/month total (VPS + free Cloudflare AI tier)

## Tech Stack

| Component | Technology |
|-----------|------------|
| Backend | Go + Fiber + Redis |
| Frontend | React + Vite + Tailwind + shadcn/ui |
| AI | Cloudflare Workers AI (Llama 3.1) |
| Hosting | Hetzner CX11 VPS |

## Related Repositories

- [rtranslate-backend](https://github.com/RinaWork/rtranslate-backend) - Go API server
- [rtranslate-frontend](https://github.com/RinaWork/rtranslate-frontend) - React web app
- [rtranslate-docs](https://github.com/RinaWork/rtranslate-docs) - This documentation

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
├── architecture/       # System design & data flows
├── api/               # API specs & examples
├── deployment/        # VPS, Docker, cloud guides
└── user/              # End-user guides (VI/EN)
```

## GitHub Pages Setup

1. Go to repo Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `root`
4. Theme: Choose a Jekyll theme (optional)
5. Save

## Contributing

1. Create/edit `.md` files in appropriate folder
2. Commit and push - GitHub Pages auto-updates

---

**Live Site:** https://rinawork.github.io/rtranslate-docs/
