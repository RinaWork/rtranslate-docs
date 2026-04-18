# Architecture Overview

## System Design

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│   Go API    │────▶│    Redis    │
│  (React)    │     │   (Fiber)   │     │    Cache    │
└─────────────┘     └──────┬──────┘     └─────────────┘
                          │
                   ┌──────▼──────┐
                   │ Cloudflare  │
                   │ Workers AI  │
                   └─────────────┘
```

## Components

### Backend
- **HTTP Server**: Go Fiber framework
- **Rate Limiting**: Sliding window with Redis
- **Cache**: Redis (24h translation, 7d dictionary)
- **AI**: Multi-account Cloudflare Workers AI

### Frontend
- **Framework**: React 18 + TypeScript
- **Build**: Vite
- **UI**: shadcn/ui + Tailwind CSS
- **State**: React hooks + localStorage

### Infrastructure
- **VPS**: Hetzner CX11 (~$5/month)
- **CDN**: Cloudflare (free tier)
- **AI**: Cloudflare Workers AI (10k requests/day free)
