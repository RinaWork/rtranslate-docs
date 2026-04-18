# Frontend Architecture

> [← Back to Documentation Home](../README.md)

React-based web application for the translation interface.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (fast HMR, optimized builds)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI + Tailwind)
- **Icons**: Lucide React
- **State Management**: React hooks + localStorage

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/          # Header, Footer, Sidebar
│   │   ├── translation/     # Translation panel
│   │   ├── dictionary/      # Dictionary panel
│   │   └── rewrite/         # Rewrite panel
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities, API client
│   ├── types/               # TypeScript types
│   └── App.tsx              # Main app component
├── index.html
├── package.json
└── vite.config.ts
```

## Key Components

### TranslationPanel
- Source/target language selectors
- Tone and role selection
- Multi-variant output display
- Dictionary tooltips

### HistorySidebar
- localStorage persistence
- Search functionality
- Delete individual items or clear all

### API Client
```typescript
// src/lib/api.ts
const api = {
  translate: (request: TranslationRequest) => Promise<TranslationResponse>,
  dictionary: (request: DictionaryRequest) => Promise<DictionaryResponse>,
  rewrite: (request: RewriteRequest) => Promise<RewriteResponse>
}
```

## Development

```bash
npm install
npm run dev      # Development server
npm run build    # Production build
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API URL (default: '') |

## Build Output

Static files in `dist/` folder, ready for deployment to any static host.

## Related Documentation

- [Backend Architecture](./overview.md) - API server
- [API Reference](../api/endpoints.md) - Available endpoints
- [User Guide](../user/guide-vi.md) - How to use the app
