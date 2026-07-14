#!/bin/bash
# Lighthouse performance checker
# Usage: ./tests/lighthouse-check.sh [url]
set -euo pipefail

URL="${1:-https://myo-makeyourown.pages.dev}"

echo "=== Lighthouse Check: $URL ==="
echo ""

if command -v lighthouse &> /dev/null; then
    echo "Running Lighthouse (mobile emulation)..."
    lighthouse "$URL" \
        --preset=desktop \
        --output=json \
        --output-path=/tmp/lighthouse-result.json \
        --chrome-flags="--headless --no-sandbox" \
        2>/dev/null || true

    if [ -f /tmp/lighthouse-result.json ]; then
        python3 -c "
import json
d = json.load(open('/tmp/lighthouse-result.json'))
for cat, data in d['categories'].items():
    score = data['score'] * 100
    print(f'{cat:20s}: {score:.0f}')
" 2>/dev/null || echo "Could not parse results"
    fi
else
    echo "Lighthouse CLI not found. Install: npm install -g lighthouse"
    echo "Or visit: https://pagespeed.web.dev/?url=$URL"
fi
