/**
 * Test-Driven Development: Mobile Sticky Conversion Bar
 * 測試目標：驗證 sticky bar 的功能正確性
 */

const testResults = [];

function test(description, fn) {
    try {
        fn();
        testResults.push({ status: 'PASS', description });
        console.log(`✅ PASS: ${description}`);
    } catch (error) {
        testResults.push({ status: 'FAIL', description, error: error.message });
        console.log(`❌ FAIL: ${description} - ${error.message}`);
    }
}

function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(`${message}: expected "${expected}", got "${actual}"`);
    }
}

// 測試開始
console.log('🧪 開始測試 Mobile Sticky Conversion Bar\n');

// 1. DOM 元素存在性測試
test('Sticky bar 元素存在', () => {
    const bar = document.getElementById('sticky-conversion-bar');
    assert(bar !== null, '找不到 sticky-conversion-bar 元素');
});

test('Logo 圖片存在', () => {
    const logo = document.querySelector('.sticky-conversion-bar .logo');
    assert(logo !== null, '找不到 logo 圖片');
    assertEqual(logo.tagName, 'IMG', 'Logo 应该是 img 标签');
});

test('Brand 名稱存在', () => {
    const brandName = document.querySelector('.sticky-conversion-bar .brand-name');
    assert(brandName !== null, '找不到 brand-name 元素');
});

test('CTA 文案存在', () => {
    const ctaText = document.querySelector('.sticky-conversion-bar .cta-text');
    assert(ctaText !== null, '找不到 CTA 文案');
    assertEqual(ctaText.textContent.trim(), '立即查詢', 'CTA 文案內容不正確');
});

test('Instagram 按鈕存在', () => {
    const igBtn = document.querySelector('.sticky-conversion-bar .btn-ig');
    assert(igBtn !== null, '找不到 Instagram 按鈕');
});

test('WhatsApp 按鈕存在', () => {
    const waBtn = document.querySelector('.sticky-conversion-bar .btn-whatsapp');
    assert(waBtn !== null, '找不到 WhatsApp 按鈕');
});

// 2. 連結正確性測試
test('Instagram 連結正確', () => {
    const igLink = document.querySelector('.sticky-conversion-bar .btn-ig');
    const href = igLink.getAttribute('href');
    assert(href === 'https://www.instagram.com/myo.makeyourown/', 'Instagram 連結不正確');
});

test('WhatsApp 連結包含正確電話號碼', () => {
    const waLink = document.querySelector('.sticky-conversion-bar .btn-whatsapp');
    const href = waLink.getAttribute('href');
    assert(href.includes('85263796410'), 'WhatsApp 電話號碼不正確');
});

test('WhatsApp 連結包含正確訊息', () => {
    const waLink = document.querySelector('.sticky-conversion-bar .btn-whatsapp');
    const href = waLink.getAttribute('href');
    const expectedText = '你好，我從你們網站上看到這個產品！有興趣了解更多！';
    const encodedText = encodeURIComponent(expectedText);
    assert(href.includes(encodedText), 'WhatsApp 訊息內容不正確');
});

// 3. CSS 樣式測試
test('Sticky bar 定位為 fixed', () => {
    const bar = document.getElementById('sticky-conversion-bar');
    const style = window.getComputedStyle(bar);
    assertEqual(style.position, 'fixed', '定位應該是 fixed');
});

test('Sticky bar 置於底部', () => {
    const bar = document.getElementById('sticky-conversion-bar');
    const style = window.getComputedStyle(bar);
    assertEqual(style.bottom, '0px', '應該置於底部');
});

// 4. RWD 響應式測試
test('桌面版隱藏 sticky bar', () => {
    // 模擬桌面版視窗
    if (window.innerWidth >= 768) {
        const bar = document.getElementById('sticky-conversion-bar');
        const style = window.getComputedStyle(bar);
        assertEqual(style.display, 'none', '桌面版應該隱藏');
    }
});

test('Logo 圖片路徑正確', () => {
    const logo = document.querySelector('.sticky-conversion-bar .logo');
    const src = logo.getAttribute('src');
    assert(src === 'image/01_company_logo.png', 'Logo 路徑不正確');
});

test('WhatsApp 按鈕有 aria-label', () => {
    const waBtn = document.querySelector('.sticky-conversion-bar .btn-whatsapp');
    const ariaLabel = waBtn.getAttribute('aria-label');
    assertEqual(ariaLabel, 'WhatsApp', 'WhatsApp 應該有 aria-label');
});

test('Instagram 按鈕有 aria-label', () => {
    const igBtn = document.querySelector('.sticky-conversion-bar .btn-ig');
    const ariaLabel = igBtn.getAttribute('aria-label');
    assertEqual(ariaLabel, 'Instagram', 'Instagram 應該有 aria-label');
});

// 測試結果總結
console.log('\n📊 測試結果總結');
console.log('================');
const passed = testResults.filter(r => r.status === 'PASS').length;
const failed = testResults.filter(r => r.status === 'FAIL').length;
console.log(`通過: ${passed}/${testResults.length}`);
console.log(`失敗: ${failed}/${testResults.length}`);

if (failed > 0) {
    console.log('\n❌ 失敗的測試:');
    testResults.filter(r => r.status === 'FAIL').forEach(r => {
        console.log(`   - ${r.description}: ${r.error}`);
    });
}

export { testResults };