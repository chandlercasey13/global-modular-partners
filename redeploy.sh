#!/bin/bash

# Redeploy script for Global Modular Partners
# Usage: bash redeploy.sh (run from project root)

set -e

echo "========================================"
echo "Redeploying Global Modular Partners"
echo "========================================"
echo ""

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"
START_TIME=$(date +%s)

echo "Step 1/5: Installing dependencies..."
npm install
echo "✓ Dependencies installed"
echo ""

echo "Step 2/5: Building application..."
npm run build
echo "✓ Build completed"
echo ""

echo "Step 3/5: Verifying build output..."
if [ ! -f "dist/server/entry.mjs" ]; then
    echo "⚠ ERROR: dist/server/entry.mjs not found after build!"
    exit 1
fi
echo "✓ Build output verified"
echo ""

echo "Step 4/5: Reloading PM2 process..."
if pm2 describe gmp &>/dev/null; then
    pm2 reload gmp --update-env
    echo "✓ PM2 process reloaded"
else
    echo "Starting PM2 process (first time)..."
    pm2 start ecosystem.config.cjs
    echo "✓ PM2 process started"
fi
echo ""

echo "Step 5/5: Reloading nginx..."
if sudo -n systemctl reload nginx 2>/dev/null; then
    echo "✓ Nginx reloaded"
else
    echo "⏭ Skipped nginx reload (sudo requires password). Run: sudo systemctl reload nginx"
fi
echo ""

END_TIME=$(date +%s)
ELAPSED=$((END_TIME - START_TIME))

echo "========================================"
echo "✓ Deployment Complete!"
echo "========================================"
echo ""
echo "Time elapsed: ${ELAPSED} seconds"
echo "Deployed at: $(date)"
echo ""
echo "Check status:"
echo "  pm2 status"
echo "  pm2 logs gmp"
echo "  curl -I http://localhost:4004"
echo ""
echo "Your site is live at:"
echo "  https://www.swecontractinggroup.com"
echo ""
