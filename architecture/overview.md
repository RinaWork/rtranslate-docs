# Architecture Overview

> [← Back to Documentation Home](../README.md)

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

## Table of Contents

- [Components](#components)
- [Data Flow](#data-flow)
- [Performance](#performance-optimizations)
- [Security](#security-measures)
- [Cost Breakdown](#cost-breakdown)
- [Related Docs](#related-documentation)

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

## Data Flow

### Translation Request
1. User submits text via React frontend
2. Frontend validates and calls `POST /translate`
3. Backend checks rate limit (Redis sliding window)
4. Backend checks cache (Redis translation key)
5. If cache miss: call Cloudflare AI with multi-account rotation
6. Store result in cache (24h TTL)
7. Return to frontend with metadata

## Performance Optimizations

- **Cache-first strategy**: 80%+ hit rate target
- **Connection pooling**: HTTP keep-alive to AI endpoints
- **Response compression**: Gzip/Brotli middleware
- **Debounced requests**: 300ms delay on input changes

## Security Measures

- **Rate limiting**: 30/min, 300/day per IP
- **Input validation**: Max 2000 chars, language validation
- **CORS**: Configured for specific origins
- **No sensitive data**: No auth required, minimal data collection

## Cost Breakdown

| Component | Cost/Month |
|-----------|-----------|
| VPS (Hetzner) | ~$5 |
| Cloudflare AI | $0 (free tier) |
| **Total** | **~$5** |

## Related Documentation

- [API Reference](../api/endpoints.md) - REST API details
- [Deployment Guide](../deployment/vps.md) - Server setup
- [User Guide](../user/guide-vi.md) - How to use the app
