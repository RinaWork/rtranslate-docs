# Environment Variables

> [← Back to Documentation Home](../README.md)

Configuration options for the backend server.

## Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `CF_ACCOUNT_ID` | Cloudflare Account ID | `abc123def456` |
| `CF_API_TOKEN` | Cloudflare Workers AI API Token | `your_token_here` |

## Optional Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8080` | HTTP server port |
| `ENV` | `development` | Environment (development/production) |
| `REDIS_HOST` | `localhost` | Redis server host |
| `REDIS_PORT` | `6379` | Redis server port |
| `REDIS_PASSWORD` | (none) | Redis password |
| `REDIS_ENABLED` | `true` | Enable Redis caching |
| `AI_TIMEOUT` | `30s` | AI request timeout |
| `AI_MAX_RETRIES` | `3` | Max retries for AI calls |

## Multi-Account Setup (Optional)

For load balancing across multiple Cloudflare accounts:

```bash
CF_ACCOUNT_1_ID=account_1_id
CF_ACCOUNT_1_TOKEN=account_1_token
CF_ACCOUNT_1_PRIORITY=1
CF_ACCOUNT_1_LIMIT=10000

CF_ACCOUNT_2_ID=account_2_id
CF_ACCOUNT_2_TOKEN=account_2_token
CF_ACCOUNT_2_PRIORITY=1
CF_ACCOUNT_2_LIMIT=10000
```

## Example .env File

```bash
# Server
PORT=8080
ENV=production

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_ENABLED=true

# Cloudflare AI
CF_ACCOUNT_ID=your_account_id
CF_API_TOKEN=your_api_token

# AI Settings
AI_TIMEOUT=30s
AI_MAX_RETRIES=3
```

## Related Documentation

- [Architecture Overview](../architecture/overview.md) - System design
- [API Endpoints](./endpoints.md) - Available endpoints
