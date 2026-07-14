#!/usr/bin/env python3
"""
Remove FontAwesome CSS loader from pages that don't use any fa-* classes.
Usage: python3 scripts/remove_unused_fa.py [--test]
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
BLOG_DIR = ROOT / "blog"

FA_PATTERN = re.compile(
    r'\s*<noscript><link rel="stylesheet" href="https://cdnjs\.cloudflare\.com/ajax/libs/font-awesome/[^"]+\.css"[^>]*></noscript>\s*\n?'
)

FA_PRELOAD_PATTERN = re.compile(
    r'\s*<link rel="preload" href="https://cdnjs\.cloudflare\.com/ajax/libs/font-awesome/[^"]+\.css"[^>]*>\s*\n?'
)


def page_uses_fontawesome(html: str) -> bool:
    """Check if HTML body contains any fa- class usage."""
    body_match = re.search(r'<body', html)
    if not body_match:
        return False
    body = html[body_match.start():]
    return bool(re.search(r'class="[^"]*fa-[^"]*"', body))


def remove_fa_loaders(html: str) -> str:
    """Remove FontAwesome CSS loader markup from HTML."""
    html = FA_PATTERN.sub('', html)
    html = FA_PRELOAD_PATTERN.sub('', html)
    return html


def main():
    test_mode = "--test" in sys.argv
    changed = 0
    skipped = 0

    for fname in ['index.html', 'v2.html', 'poster.html', 'heic-converter.html']:
        fpath = ROOT / fname
        if not fpath.exists():
            continue
        html = fpath.read_text(encoding='utf-8')
        if not page_uses_fontawesome(html):
            new_html = remove_fa_loaders(html)
            if new_html != html:
                if not test_mode:
                    fpath.write_text(new_html, encoding='utf-8')
                print(f"  ok {fname}: removed FontAwesome (no icons used)")
                changed += 1
            else:
                skipped += 1
        else:
            print(f"  -  {fname}: keeps FontAwesome (icons in use)")
            skipped += 1

    for fpath in sorted(BLOG_DIR.glob("*.html")):
        html = fpath.read_text(encoding='utf-8')
        if not page_uses_fontawesome(html):
            new_html = remove_fa_loaders(html)
            if new_html != html:
                if not test_mode:
                    fpath.write_text(new_html, encoding='utf-8')
                print(f"  ok blog/{fpath.name}: removed FontAwesome")
                changed += 1
            else:
                skipped += 1
        else:
            skipped += 1

    print(f"\nDone: {changed} updated, {skipped} skipped")


if __name__ == "__main__":
    main()