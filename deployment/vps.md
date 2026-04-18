# VPS Deployment Guide

## Hetzner CX11 Setup

### 1. Create Server
- Location: Singapore (closest to Vietnam)
- Type: CX11 (1 vCPU, 2GB RAM, €4.51/month)
- OS: Ubuntu 22.04 LTS

### 2. Initial Setup
```bash
sudo apt update && sudo apt upgrade -y

# Install Go
wget https://go.dev/dl/go1.21.5.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.5.linux-amd64.tar.gz

# Install Redis
sudo apt install redis-server -y
sudo systemctl enable redis

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### 3. Deploy
```bash
cp backend/server.exe /opt/translator/
cp backend/.env /opt/translator/
sudo systemctl enable translator
sudo systemctl start translator
```
