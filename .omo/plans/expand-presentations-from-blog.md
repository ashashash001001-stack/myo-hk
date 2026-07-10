# Plan: Expand Presentation Content from Blog + Web Search

## Context

The user wants to expand content in 40 video presentations (6 chapters each = 240 chapter directories). Each chapter has:
- `narrations.ts` — oral script (currently 1 thin sentence per step)
- `*.tsx` — visual slide bullets (currently 3-5 sparse bullets per step)

**Primary source**: Blog articles (420+ HTML files, ~2,700 words each)
**Secondary source**: Live web search (Google/DuckDuckGo) for supplementary content when blog is thin

## Goals

Expand both `narrations.ts` and `tsx` slide content so presentations are informative even when watched without audio.

## Current State

### narrations.ts (example: 04-auspicious-date-guide)
```ts
export const NARRATIONS: Narration[] = [
  "揀個好日子係婚禮第一步。等我話你知點樣揀結婚吉日同傳統習俗。",  // 1 line, ~30 chars
];
```

### .tsx (example: Why.tsx, step 2)
```tsx
// Step 2 — bullet list, each item only 5-15 chars:
<div className="c1-list-item">
  <span>傳統習俗認為吉日結婚可增添福氣</span>  // 15 chars
</div>
```

### blog article
Rich content: 2,700+ words, structured with H2/H3 headings, tables, lists.

### blog → presentation mapping
- Presentation 04 (`auspicious-date-guide`) → `blog/擇吉日結婚指南.html`
- Convention: match by Chinese title or slug similarity
- Most presentations map 1:1 to blog articles (confirmed by topic alignment)

---

## Content Strategy: Blog + Live Search

### Layer 1 — Blog (Primary)
Use existing blog articles as the primary content source. They have:
- Consistent brand voice (繁體中文, Cantonese-influenced)
- Already structured with H2/H3 headings
- 2,700+ words of substantive content per article

### Layer 2 — Web Search (Fallback/Supplement)
When blog content is thin or missing for a chapter topic:
- Search Google/DuckDuckGo for supplementary content
- Parse top search results for factual details (statistics, dates, prices, regulations)
- Use search to fill specific gaps (e.g., "香港結婚註冊費用 2024", "择日传统习俗起源")

### Search Tool
Use **GStack browse** (`/browse` or `/open-gstack-browser`) to perform searches:
- Headless browser for reliable scraping
- Supports Google and DuckDuckGo
- Can extract text content from search results and pages
- Alternative: direct HTTP fetching of DuckDuckGo HTML

### Content Quality Rules
1. **Prefer blog** — blog content has consistent brand voice
2. **Use search for facts** — search results are better for current statistics, prices, regulations
3. **Never copy-paste full articles** — synthesize key facts into narration-style sentences
4. **Keep Cantonese tone** — whether from blog or search, adapt to natural spoken Cantonese style

---

## Expansion Targets

### narrations.ts
- **Current**: 1 string per step, ~20-50 chars
- **Target**: 3-5 strings per step, ~150-300 chars total per step
- Each string = one complete spoken sentence (~20-40 chars Cantonese)
- At 3 strings/step × 3 steps/chapter = ~9 strings/chapter

### tsx bullet points
- **Current**: 3-5 bullet items, each 5-15 chars
- **Target**: 3-5 bullet items, each 20-60 chars with substantive content
- Bullet = what viewer reads ON the slide (should be informative standalone)

### script.md
- Already has 15 lines — this is the canonical narrator flow
- Expand narrations.ts to match script.md's step structure

---

## Approach: Automated Pipeline

Given 240 chapters to expand, manual per-file editing is impractical. Build a Python script that processes presentations in batches, with live search as a fallback.

### Step 0 — Inventory
1. Scan all 40 presentations
2. Build presentation-to-blog mapping (by slug + title matching)
3. Identify which presentations have NO matching blog article (edge cases)
4. Output: `mapping.json` — `{pres_04: "blog/擇吉日結婚指南.html", ...}`

### Step 1 — Blog Content Extraction
For each blog HTML file:
1. Use BeautifulSoup to extract article body (strip nav, footer, sidebars)
2. Split by `<h2>` and `<h3>` headers into sections
3. Output: structured sections with heading + paragraph text
4. Assess: for each chapter, is blog content sufficient? (≥200 chars for the topic?)

### Step 1.5 — Web Search Fallback (when blog is thin)
For chapters where blog content is insufficient:
1. Generate search query from chapter topic + presentation title
   - e.g., "香港結婚擇日傳統 風水習俗" for 04-why chapter
2. Perform search via GStack browse tool or direct HTTP to DuckDuckGo
3. Parse top 3-5 search result snippets
4. Fetch and extract content from top result page if highly relevant
5. Combine with blog content for the chapter
6. Fallback: if search fails, use only blog content (even if thin)

### Step 2 — Content Distribution
For each presentation:
1. Read `outline.md` to understand chapter topics
2. Match blog sections to chapters (by heading keyword proximity)
3. For each chapter, split content across the 3 steps
4. Flag chapters that need web search fallback

### Step 3 — Generate narrations.ts
For each chapter's narrations.ts:
1. Write 3-5 narration strings per step
2. Each string = complete Cantonese spoken sentence
3. Preserve existing `import type { Narration }` and `export const NARRATIONS` structure
4. Adapt tone: natural spoken Cantonese, not书面语

### Step 4 — Generate enhanced .tsx
For each chapter's tsx:
1. Expand bullet points to 20-60 chars each
2. Add explanatory context (not just labels)
3. Preserve all existing CSS class names and component structure

### Step 5 — Verification
1. Count total narration strings (should be ~9-15 per chapter)
2. Spot-check 3 random presentations for quality
3. Verify TypeScript compiles (no new errors)

---

## Implementation Details

### Blog Parser (Python)
```python
# parse_blog.py
- Input: blog/擇吉日結婚指南.html
- Output: {"title": "...", "sections": [{"heading": "...", "content": "..."}]}
- Use: BeautifulSoup, strip nav/footer/aside, extract <article> body
```

### Content Matcher
```python
# match_blog_to_chapter.py
- Input: blog sections + outline.md chapter names
- Output: mapping of chapter → relevant blog sections
- Method: keyword matching on headings + TF-IDF similarity
```

### Web Search Fallback (Python)
```python
# search_supplement.py
- Input: chapter topic + presentation title
- Output: list of supplementary facts {"fact": "...", "source": "..."}
- Tool: uses subprocess to call GStack browse or direct DuckDuckGo HTTP fetch
- Method: extract key facts (statistics, dates, regulations) from search results
```

### Search Tool Integration
**Option A — GStack browse (preferred)**
```python
# Uses headless browser for reliable scraping
import subprocess
result = subprocess.run([
    "python3", "-c",
    """
    from gstack.browse import search
    results = search("香港結婚擇日傳統 風水", num_results=5)
    print(results)
    """
], capture_output=True)
```

**Option B — DuckDuckGo direct (fallback)**
```python
# Direct HTTP to DuckDuckGo HTML (no API key needed)
import requests
from bs4 import BeautifulSoup

def duckduckgo_search(query: str, num_results: int = 5) -> list:
    url = f"https://html.duckduckgo.com/html/?q={query}"
    resp = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
    soup = BeautifulSoup(resp.text, "html.parser")
    results = []
    for item in soup.select(".result")[:num_results]:
        title = item.select_one(".result__title a").get_text(strip=True)
        snippet = item.select_one(".result__snippet").get_text(strip=True)
        results.append({"title": title, "snippet": snippet})
    return results
```

### Narrations Generator
```python
# expand_narrations.py
- Input: matched blog content + search supplement + chapter step structure
- Output: valid TypeScript narrations.ts
- Method: split content into ~30-char chunks, preserve Cantonese punctuation
```

### Tsx Bullet Expander
```python
# expand_tsx_bullets.py
- Input: matched blog content + search supplement + existing tsx structure
- Output: enhanced tsx with richer bullet strings
- Method: extract key facts from blog sections, write as bullets
```

### Runner
```bash
python3 scripts/expand_presentation_content.py --all        # full pipeline with search fallback
python3 scripts/expand_presentation_content.py 04 06 11    # specific presentations
python3 scripts/expand_presentation_content.py --dry-run   # preview only (no writes)
python3 scripts/expand_presentation_content.py --no-search  # blog only (skip search fallback)
```

---

## Search Query Strategy

For each chapter, generate search queries from:
1. **Presentation title** + **chapter name**
   - e.g., "香港結婚擇日" + "為何要揀好日子" → "香港結婚擇日風水習俗"
2. **Step-specific keywords**
   - e.g., step about cost → "香港擇日費用 風水師價錢"
   - e.g., step about tradition → "中國傳統結婚擇日習俗由來"
3. **Fact-checking queries**
   - e.g., "香港結婚法定年齡 2024"
   - e.g., "結婚註冊費用 香港 2024"

### Query Language
- Always in 繁體中文 for Hong Kong-specific results
- Include "香港" or "HK" to target local content
- Include year "2024" or "2025" for current statistics

---

## Scope Boundaries

### In scope
- `narrations.ts` — expand to 3-5 strings per step
- `tsx` — expand bullet text to substantive sentences
- Blog articles as primary content source
- **Web search (Google/DuckDuckGo) as supplement for thin chapters**
- All 40 presentations

### Out of scope
- CSS changes (don't touch styles)
- Component logic changes (don't change step rendering)
- `script.md` — leave as-is (it's already the canonical reference)
- `article.md` — thin placeholder, not the target output
- Generating brand-new content (only adapt/expand existing)
- Searching for content that has no relation to the presentation topic

### Deferred
- Audio narration recording (out of scope for this task)
- Video editing / slide animation changes

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Blog → presentation mapping wrong | Wrong content in chapters | Manual review of mapping.json before running |
| Cantonese text extraction garbled | Broken Chinese characters | Use proper UTF-8 handling, test on 04 first |
| Web search blocked or rate-limited | Can't get supplementary content | Graceful fallback to thin blog content only |
| Search results irrelevant or low-quality | Fills chapters with junk | Only use search for factual supplements (prices, dates), not opinions |
| tsx bullets too long for UI | Text overflow / broken layout | Keep bullets ≤60 chars, CSS handles truncation |
| TypeScript errors after edit | Compilation breaks | Run `npx tsc --noEmit` after each batch |
| GStack browse not available | Search step fails | Fall back to DuckDuckGo direct HTTP |

---

## Verification Checklist

After running the pipeline on all 40 presentations:
- [ ] `npx tsc --noEmit` passes on each presentation project
- [ ] narrations.ts has 3-5 strings per step (not 1)
- [ ] tsx bullet points are ≥20 chars each (not 5-15)
- [ ] No duplicate narration strings
- [ ] 3 random presentations spot-checked for content coherence
- [ ] Search fallback triggered at least once (validate online search works)
- [ ] Blog-only fallback works when search is skipped (--no-search flag)

---

## Phased Execution

**Phase 1 — Pipeline on 04 only** (pilot)
- Validate blog parsing, content matching, search fallback, TypeScript generation
- Test both blog-only and blog+search modes
- Fix any issues before scaling

**Phase 2 — Batch 01-10** (first 10 presentations)
- Run pipeline with search enabled, manual spot-check
- Verify search queries are relevant
- Refine prompts / matching if needed

**Phase 3 — Batch 11-40** (remaining 30 presentations)
- Full run with confidence from pilot

**Phase 4 — QA & Fix** (1-2 hours)
- Run TypeScript checks, fix any compilation errors
- Manual review of edge cases (missing blog mappings, failed searches)

---

## Tools

- Python 3 (BeautifulSoup for HTML parsing, requests for HTTP)
- **GStack browse** — headless browser for search and scraping
- **DuckDuckGo direct** (fallback) — no API key needed
- Existing Node.js/TypeScript toolchain (`npx tsc --noEmit`)
- No new npm packages needed

---

## Sample: How Search Supplement Works

Example: Presentation 04, Chapter 02-why (為何要揀好日子)

**Blog content sufficient** (≥200 chars for the chapter topic) → use blog content only, skip search

Example: Presentation 04, Chapter 02-why (為何要揀好日子)

**Blog content found** (from 擇吉日結婚指南.html):
- "傳統習俗認為吉日結婚可增添福氣"
- "父母長輩通常有特定要求"
- "宜嫁娶的吉日需要配合雙方八字"

**Blog is sufficient (≥200 chars covering the topic)** → use blog content only, skip search

Example: Presentation 04, Chapter 05-tips (揀日技巧)

**Blog content thin** (only brief mention of tips, <200 chars for the topic):
- Trigger web search fallback
- Search: "香港結婚擇日技巧 風水師建議"
- Results: "選擇吉日時應配合雙方出生時間...", "避免與長輩沖突的日子..."
- Synthesize search results + blog → expanded narrations

---

## Updated File
- Plan saved: `.omo/plans/expand-presentations-from-blog.md`
- Last updated: includes web search (Option B) integration