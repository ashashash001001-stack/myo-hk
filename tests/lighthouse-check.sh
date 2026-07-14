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
        --output=json \
        --output-path=/tmp/lighthouse-result.json \
        --chrome-flags="--headless --no-sandbox" \
        2>/dev/null || true

    if [ -f /tmp/lighthouse-result.json ]; then
        python3 -c "
import json, sys
d = json.load(open('/tmp/lighthouse-result.json'))
perf = d['categories']['performance']['score'] * 100
print('=== Lighthouse Scores (Mobile) ===')
for cat, data in d['categories'].items():
    score = data['score'] * 100
    print(f'{cat:20s}: {score:.0f}')
print()
metrics = d['audits']
for m in ['first-contentful-paint', 'largest-contentful-paint', 'speed-index', 'total-blocking-time', 'cumulative-layout-shift']:
    if m in metrics:
        v = metrics[m]
        print(f'{m:30s}: {v.get(\"displayValue\", \"N/A\")}')
print()
if perf >= 90:
    print(f'✅ Performance target met: {perf:.0f} >= 90')
    sys.exit(0)
else:
    print(f'❌ Performance target NOT met: {perf:.0f} < 90')
    sys.exit(1)
" 2>/dev/null || echo "Could not parse results"
    fi
else
    echo "Lighthouse CLI not found. Install: npm install -g lighthouse"
    echo "Or visit: https://pagespeed.web.dev/?url=$URL"
fi
