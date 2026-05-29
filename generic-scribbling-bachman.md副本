# Plan: Upgrade Presentations 02-40 to P01 Quality

## Context

Presentations 02-40 exist as scaffolds with placeholder content (emoji icons, minimal steps, empty source files). P01 (Hong Kong Wedding Flow) is the gold standard: 6 chapters, 20 steps, custom SVG icons, glassmorphism cards, staggered CSS animations, rich Cantonese narrations. Goal: bring all 38 to the same quality level.

**User decisions:**
- Content: AI-assisted generation (web research + AI for article/script/outline)
- Pace: Go all at once (validate pipeline on P02 first, then batch through all 38)
- Audio: Visual only (no MP3 narration synthesis)

## Current State

| Dimension | P01 (Target) | P02 | P03-40 |
|-----------|-------------|-----|--------|
| article.md | 120 lines | 232 lines | 0 lines |
| script.md | 94 lines | 61 lines | 0 lines |
| outline.md | 161 lines | 0 lines | 0 lines |
| Chapters | 6 | 6 | 6 |
| Total steps | 20 | 22 | 7-19 |
| Icons | Custom SVG | Emoji | Emoji |
| CSS animations | Rich | Basic | Basic |

## Phase 1: Content Generation (All 38)

Per presentation, generate:
1. **article.md** — 1500-3000 word Cantonese Chinese article (research-backed, HK-specific data)
2. **outline.md** — 6-chapter structure with step counts
3. **script.md** — 18-22 narration entries, 80-150 chars each, conversational Cantonese

**Process:** Research topic → generate article → extract outline → write script
**Sequence:** P02 (pilot, article exists) → P03-P40 (content-first, then code)

## Phase 2: Component Upgrade (Per Presentation)

For each of 6 chapters, upgrade or generate:
- `Component.tsx` — step-based rendering with SVG icons, glassmorphism cards, staggered animations
- `Component.css` — scene layout, card styling, animation keyframes 
- `narrations.ts` — narration arrays from script.md
- `registry/chapters.ts` — import wiring

**4 chapter archetypes** (from P01):
1. **Coldopen** (ch 01): Hook → hero number promise → preview cards (3 steps)
2. **InfoCards** (ch 02-05): Staggered SVG icon cards with glassmorphism (3-5 steps each)
3. **ComparisonTable** (when applicable): Side-by-side options
4. **Summary** (ch 06): Recap → key numbers → CTA with myo-hk.github.io (3-4 steps)

**Each chapter must match P01 patterns:**
- Custom SVG icons (no emoji) — inline SVGs using `var(--accent)` for theme compatibility
- Staggered `animationDelay` on cards (80-120ms intervals)
- Glassmorphism: `background: var(--card-glass-bg)`, `backdrop-filter`, `border-radius: var(--r-card)`
- Hero numbers: `var(--hero-num-weight)`, `var(--hero-num-track)`, `var(--accent)` color
- Fade-in + slide-up on step entry
- Transition steps (checkmark animation, "next up" teaser)

## Phase 3: Build & Verify

- `npm run build` per presentation via `build-all.sh`
- Verify `dist/index.html` + `dist/assets/*` exist per presentation

**Verification checklist per presentation:**
- [ ] article.md > 0 bytes
- [ ] outline.md > 0 bytes  
- [ ] script.md > 0 bytes
- [ ] 6 chapters in registry
- [ ] 18-22 total steps
- [ ] No emoji in TSX components
- [ ] `npm run build` succeeds
- [ ] Coldopen has 3 steps (hook, promise, preview)
- [ ] Final chapter has myo-hk.github.io CTA

## Key Reference Files

| File | Purpose |
|------|---------|
| `01-*/.../Eligibility.tsx` | Best example of component quality (SVG icons, steps, animations) |
| `01-*/.../registry/chapters.ts` | Registry wiring pattern |
| `01-*/.../styles/base.css` | Design primitives (card-glass, hero-num, scene-pad) |
| `01-*/.../styles/tokens.css` | Theme variables (per-presentation, already scaffolded) |
| `build-scripts/build-all.sh` | Batch build pipeline |
| `_scaffold.sh` | Original scaffold pattern |