# VPS Deployment Guide

> [← Back to Documentation Home](../README.md)

Deploy Unnamed Translate to a $5/month VPS.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Server Setup](#server-setup)
- [Backend Deploy](#backend-deploy)
- [Frontend Deploy](#frontend-deploy)
- [Cloudflare Tunnel](#cloudflare-tunnel-optional)

## Prerequisites

- Hetzner Cloud account
- Cloudflare account (for AI + optional tunnel)
- Domain name (optional)

## Server Setup

### 1. Create Server
- **Provider**: Hetzner Cloud
- **Location**: Singapore (closest to Vietnam)
- **Type**: CX11 (1 vCPU, 2GB RAM, €4.51/month)
- **OS**: Ubuntu 22.04 LTS

### 2. Initial Setup
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Go
wget https://go.dev/dl/go1.21.5.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.5.linux-amd64.tar.gz
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
source ~/.bashrc

# Install Redis
sudo apt install redis-server -y
sudo systemctl enable redis
sudo systemctl start redis

# Install Node.js (for building frontend)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

## Backend Deploy

### 1. Copy Binary
```bash
# On local machine
scp backend/server.exe root@your-server-ip:/opt/translator/
scp backend/.env root@your-server-ip:/opt/translator/
```

### 2. Create Systemd Service
```bash
sudo nano /etc/systemd/system/translator.service
```

Content:
```ini
[Unit]
Description=Unnamed Translator
After=network.target redis.service
Requires=redis.service

[Service]
Type=simple
User=root
WorkingDirectory=/opt/translator
ExecStart=/opt/translator/server.exe
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

### 3. Start Service
```bash
sudo systemctl daemon-reload
sudo systemctl enable translator
sudo systemctl start translator
sudo systemctl status translator
```

## Frontend Deploy

```bash
cd frontend
npm install
npm run build
sudo cp -r dist/* /opt/translator/frontend/
```

## Cloudflare Tunnel (Optional)

For custom domain + HTTPS without managing certificates:

```bash
# Install cloudflared
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
sudo chmod +x cloudflared-linux-amd64
sudo mv cloudflared-linux-amd64 /usr/local/bin/cloudflared

# Authenticate
cloudflared tunnel login

# Create tunnel
cloudflared tunnel create translator

# Route traffic
cloudflared tunnel route dns translator your-domain.com

# Run tunnel
cloudflared tunnel run translator
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Redis connection failed | Check `redis-cli ping` |
| Port 8080 blocked | `sudo ufw allow 8080` |
| Permission denied | `chmod +x /opt/translator/server.exe` |

## Related Documentation

- [Architecture Overview](../architecture/overview.md) - How it works
- [API Reference](../api/endpoints.md) - Available endpoints
- [User Guide](../user/guide-vi.md) - For end users
