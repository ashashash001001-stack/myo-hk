#!/usr/bin/env python3
"""
Generate complete sitemap.xml and blog/sitemap.xml for myo-hk.
Discovers ALL HTML files and includes them.
Usage: python3 scripts/generate_sitemap.py
"""

from pathlib import Path
from datetime import datetime
from xml.sax.saxutils import escape
import re

ROOT = Path(__file__).parent.parent
BLOG = ROOT / "blog"
NOW = datetime.now().strftime("%Y-%m-%d")

# Pages that are not blog articles and should be in root sitemap
ROOT_PAGES = {
    "index.html":       {"priority": "1.0", "changefreq": "weekly"},
    "v2.html":          {"priority": "0.5", "changefreq": "monthly"},
    "poster.html":      {"priority": "0.5", "changefreq": "monthly"},
    "heic-converter.html": {"priority": "0.5", "changefreq": "monthly"},
    "privacy.html":     {"priority": "0.3", "changefreq": "yearly"},
    "terms.html":       {"priority": "0.3", "changefreq": "yearly"},
}


def add_url(urlset, loc, lastmod, changefreq, priority):
    urlset.append(f"""  <url>
    <loc>{escape(loc)}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>{changefreq}</changefreq>
    <priority>{priority}</priority>
  </url>""")


def generate_root_sitemap():
    """Generate sitemap.xml for root-level pages."""
    urls = []

    for filename, meta in ROOT_PAGES.items():
        loc = f"https://myo-hk.github.io/{filename}" if filename != "index.html" else "https://myo-hk.github.io/"
        add_url(urls, loc, NOW, meta["changefreq"], meta["priority"])

    # Add blog index
    add_url(urls, "https://myo-hk.github.io/blog/", NOW, "weekly", "0.8")

    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>
"""
    (ROOT / "sitemap.xml").write_text(xml, encoding="utf-8")
    print(f"Root sitemap: {len(urls)} URLs \u2192 sitemap.xml")


def generate_blog_sitemap():
    """Generate blog/sitemap.xml with ALL blog articles."""
    urls = []
    html_files = sorted(BLOG.glob("*.html"))

    for fpath in html_files:
        if fpath.name == "index.html":
            continue

        # Try to extract date from published_time meta
        content = fpath.read_text(encoding="utf-8", errors="ignore")
        date_match = re.search(
            r'<meta\s+property="article:published_time"\s+content="(\d{4}-\d{2}-\d{2})',
            content,
        )
        lastmod = date_match.group(1) if date_match else NOW

        filename = fpath.name
        loc = f"https://myo-hk.github.io/blog/{escape(filename)}"
        add_url(urls, loc, lastmod, "monthly", "0.7")

    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>
"""
    (BLOG / "sitemap.xml").write_text(xml, encoding="utf-8")
    print(f"Blog sitemap: {len(urls)} URLs \u2192 blog/sitemap.xml")


if __name__ == "__main__":
    generate_root_sitemap()
    generate_blog_sitemap()
    print("Done.")
