import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test.describe('Lighthouse audit fixes', () => {

  // ====================================================
  // TEST 1: llms.txt structure compliance
  // ====================================================
  test('llms.txt should contain properly formatted links', () => {
    const llmsPath = path.resolve(__dirname, '..', 'llms.txt');
    const content = fs.readFileSync(llmsPath, 'utf-8');

    // Must start with an H1 heading
    expect(content).toMatch(/^# /m);

    // Must contain at least one properly formatted link: - [Title](url)
    const linkLines = content.split('\n').filter(line => /^- \[.+\]\(https?:\/\/.+\)/.test(line));
    expect(linkLines.length).toBeGreaterThan(0);

    // Each link should have a valid URL
    for (const link of linkLines) {
      const urlMatch = link.match(/\((.+)\)/);
      expect(urlMatch).not.toBeNull();
      if (urlMatch) {
        expect(urlMatch[1]).toMatch(/^https?:\/\//);
      }
    }
  });

  // ====================================================
  // TEST 2: Image aspect ratio correctness
  // ====================================================
  test('design style images should maintain natural aspect ratio', async ({ page }) => {
    await page.goto('/');

    // Wait for Swiper images to load
    await page.waitForSelector('.design-style-card img', { timeout: 10000 });

    const images = page.locator('.design-style-card img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const naturalWidth = await img.evaluate(el => (el as HTMLImageElement).naturalWidth);
      const naturalHeight = await img.evaluate(el => (el as HTMLImageElement).naturalHeight);
      const displayedWidth = await img.evaluate(el => (el as HTMLImageElement).clientWidth);
      const displayedHeight = await img.evaluate(el => (el as HTMLImageElement).clientHeight);

      if (naturalWidth > 0 && naturalHeight > 0 && displayedWidth > 0 && displayedHeight > 0) {
        const naturalRatio = naturalWidth / naturalHeight;
        const displayedRatio = displayedWidth / displayedHeight;

        // Assert aspect ratio deviation is no more than 5%
        const deviation = Math.abs(naturalRatio - displayedRatio) / naturalRatio;
        expect(deviation).toBeLessThan(0.05);
      }
    }
  });

  // ====================================================
  // TEST 3: Color contrast on key UI elements
  // ====================================================
  test('feature icons should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');

    // Check .feature-icon class color - should not use low-contrast #CD853F
    const iconEl = page.locator('.feature-icon').first();
    const color = await iconEl.evaluate(el => getComputedStyle(el).color);
    const rgb = color.match(/\d+/g)?.map(Number);

    if (rgb && rgb.length === 3) {
      // Relative luminance of the text color
      const luminance = (r: number, g: number, b: number) => {
        const [rl, gl, bl] = [r, g, b].map(v => {
          v = v / 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
      };

      const textLuminance = luminance(rgb[0], rgb[1], rgb[2]);
      const bgLuminance = luminance(255, 255, 255); // white background
      const lighter = Math.max(textLuminance, bgLuminance);
      const darker = Math.min(textLuminance, bgLuminance);
      const contrastRatio = (lighter + 0.05) / (darker + 0.05);

      // WCAG AA requires 4.5:1 for normal text
      expect(contrastRatio).toBeGreaterThan(4.5);
    }
  });

  // ====================================================
  // TEST: Scroll-depth script should not query layout on load
  // ====================================================
  test('scroll-depth script should not eagerly compute docHeight', async ({ page }) => {
    await page.goto('/');

    const hasLazyPattern = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script');
      for (const script of scripts) {
        if (script.textContent?.includes('scrollDepths')) {
          return script.textContent.includes('getDocHeight') || script.textContent.includes('docHeight = 0');
        }
      }
      return false;
    });
    expect(hasLazyPattern).toBe(true);
  });

  // ====================================================
  // TEST: Color preview images should use thumbnail variants
  // ====================================================
  test('color preview images should use thumbnail variants', async ({ page }) => {
    await page.goto('/');

    const colorImages = page.locator('.color-option-card .select-option-image');
    const count = await colorImages.count();
    expect(count).toBe(2);

    for (let i = 0; i < count; i++) {
      const src = await colorImages.nth(i).getAttribute('src');
      expect(src).toMatch(/thumb\.webp$/);
    }
  });

  test('nav links should have sufficient color contrast on white background', async ({ page }) => {
    await page.goto('/');

    const navLinks = page.locator('.desktop-nav-links a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const link = navLinks.nth(i);
      const color = await link.evaluate(el => getComputedStyle(el).color);
      const rgb = color.match(/\d+/g)?.map(Number);

      if (rgb && rgb.length === 3) {
        const luminance = (r: number, g: number, b: number) => {
          const [rl, gl, bl] = [r, g, b].map(v => {
            v = v / 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
          });
          return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
        };

        const textLuminance = luminance(rgb[0], rgb[1], rgb[2]);
        const bgLuminance = luminance(255, 255, 255);
        const lighter = Math.max(textLuminance, bgLuminance);
        const darker = Math.min(textLuminance, bgLuminance);
        const contrastRatio = (lighter + 0.05) / (darker + 0.05);
        expect(contrastRatio).toBeGreaterThan(4.5);
      }
    }
  });
});
