import "./Linen.css";

interface Props { step: number; }

const FEATURES = [
  { label: "透氣舒適", desc: "天然植物纖維，適合香港潮濕天氣" },
  { label: "色彩鮮艷", desc: "熱轉印效果比皮革更繽紛" },
  { label: "輕巧便攜", desc: "成日取出展示或者帶去海外都方便" },
];

const CARE_TIPS = [
  "用濕布輕輕擦拭就得",
  "唔需要特別護理產品",
  "避免長時間浸水",
];

function LinenIcon({ animated }: { animated: boolean }) {
  return (
    <svg className={`ln-icon-svg${animated ? " ln-icon-animated" : ""}`} viewBox="0 0 80 60" width="80" height="60">
      <rect x="4" y="4" width="72" height="52" rx="4" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2"/>
      <line x1="4" y1="14" x2="76" y2="14" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
      <line x1="4" y1="24" x2="76" y2="24" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
      <line x1="4" y1="34" x2="76" y2="34" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
      <line x1="4" y1="44" x2="76" y2="44" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
      <line x1="18" y1="4" x2="18" y2="56" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
      <line x1="32" y1="4" x2="32" y2="56" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
      <line x1="46" y1="4" x2="46" y2="56" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
      <line x1="60" y1="4" x2="60" y2="56" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

function CheckCircle({ animated }: { animated: boolean }) {
  return (
    <svg className={`ln-check-circle${animated ? " ln-check-animated" : ""}`} viewBox="0 0 32 32" width="32" height="32">
      <circle cx="16" cy="16" r="14" fill="none" stroke="var(--accent)" strokeWidth="2.5" opacity="0.3"/>
      <path className="ln-check-path" d="M9 16l5 5 9-9" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="30" strokeDashoffset={animated ? "0" : "30"}/>
    </svg>
  );
}

function PrintIcon({ animated }: { animated: boolean }) {
  return (
    <svg className={`ln-print-icon${animated ? " ln-print-animated" : ""}`} viewBox="0 0 64 64" width="64" height="64">
      <rect x="12" y="8" width="40" height="48" rx="4" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2"/>
      <rect x="18" y="16" width="28" height="20" rx="2" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
      <line x1="22" y1="42" x2="42" y2="42" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="22" y1="48" x2="38" y2="48" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      <circle cx="32" cy="32" r="6" fill="var(--accent)" opacity="0.2"/>
    </svg>
  );
}

export function Linen({ step }: Props) {
  /* ─── Step 0: Title card ─── */
  if (step === 0) {
    return (
      <div className="Linen ln-scene">
        <div className="ln-scene-inner">
          <p className="ln-chapter-label">第三章</p>
          <h2 className="ln-step-title">亞麻布證書套</h2>
          <p className="ln-step-subtitle">熱門之選，性價比極高</p>
          <LinenIcon animated />
        </div>
      </div>
    );
  }

  /* ─── Step 1: Breathable and comfortable ─── */
  if (step === 1) {
    return (
      <div className="Linen ln-scene">
        <div className="ln-scene-inner">
          <h2 className="ln-step-title">透氣舒適</h2>
          <p className="ln-step-subtitle">天然植物纖維，適合香港潮濕天氣</p>
          <div className="ln-features-grid">
            {FEATURES.map((f, i) => (
              <div key={f.label} className="ln-feature-card" style={{ animationDelay: `${i * 400}ms` }}>
                <CheckCircle animated />
                <div className="ln-feature-text">
                  <span className="ln-feature-label">{f.label}</span>
                  <span className="ln-feature-desc">{f.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: Heat transfer printing ─── */
  if (step === 2) {
    return (
      <div className="Linen ln-scene">
        <div className="ln-scene-inner">
          <h2 className="ln-step-title">熱轉印技術</h2>
          <p className="ln-step-subtitle">圖案永不褪色，色彩持久亮麗</p>
          <div className="ln-print-showcase">
            <PrintIcon animated />
            <div className="ln-print-text">
              <p>My O! 採用專業熱轉印技術，</p>
              <p>通過高温將墨水滲透入布料纖維，</p>
              <p>形成持久亮麗嘅圖案效果。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 3: Vibrant colors ─── */
  if (step === 3) {
    return (
      <div className="Linen ln-scene">
        <div className="ln-scene-inner">
          <h2 className="ln-step-title">色彩鮮艷</h2>
          <p className="ln-step-subtitle">金色、粉色、淺藍色都得</p>
          <div className="ln-colors-ribbon">
            <div className="ln-color-dot" style={{ backgroundColor: "#D4AF37", animationDelay: "0ms" }} />
            <div className="ln-color-dot" style={{ backgroundColor: "#FFB6C1", animationDelay: "150ms" }} />
            <div className="ln-color-dot" style={{ backgroundColor: "#87CEEB", animationDelay: "300ms" }} />
            <div className="ln-color-dot" style={{ backgroundColor: "#98FB98", animationDelay: "450ms" }} />
            <div className="ln-color-dot" style={{ backgroundColor: "#DDA0DD", animationDelay: "600ms" }} />
          </div>
          <p className="ln-colors-note">亞麻布印刷效果比皮革更色彩繽紛，適合年輕活潑風格。</p>
        </div>
      </div>
    );
  }

  /* ─── Step 4: Easy care ─── */
  if (step === 4) {
    return (
      <div className="Linen ln-scene">
        <div className="ln-scene-inner">
          <h2 className="ln-step-title">保養簡單</h2>
          <p className="ln-step-subtitle">用濕布輕輕擦拭就得</p>
          <div className="ln-care-list">
            {CARE_TIPS.map((tip, i) => (
              <div key={tip} className="ln-care-item" style={{ animationDelay: `${i * 400}ms` }}>
                <CheckCircle animated />
                <span className="ln-care-text">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: Lightweight and portable ─── */
  if (step === 5) {
    return (
      <div className="Linen ln-scene">
        <div className="ln-scene-inner">
          <h2 className="ln-step-title">輕巧便攜</h2>
          <p className="ln-step-subtitle">成日取出展示或者帶去海外都方便</p>
          <div className="ln-portable-showcase">
            <div className="ln-portable-icon">
              <svg viewBox="0 0 64 64" width="64" height="64">
                <rect x="8" y="16" width="48" height="36" rx="4" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2"/>
                <path d="M20 28 L32 36 L44 28" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
                <line x1="32" y1="36" x2="32" y2="44" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="ln-portable-text">
              <p>亞麻布質地輕盈，唔似皮革咁重。</p>
              <p>如果你成日要取出嚟展示，或者去海外結婚時帶埋，亞麻布係最好嘅選擇。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 6: Stylish and affordable ─── */
  if (step === 6) {
    return (
      <div className="Linen ln-scene">
        <div className="ln-scene-inner ln-transition-center">
          <div className="ln-big-check-wrap">
            <svg className="ln-big-check-svg" viewBox="0 0 120 120" width="120" height="120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="var(--accent)" strokeWidth="4" opacity="0.15"/>
              <path className="ln-big-check-path" d="M30 60l20 20 40-40" fill="none" stroke="var(--accent)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="200"/>
            </svg>
          </div>
          <h2 className="ln-transition-title">亞麻布：簡約時尚</h2>
          <p className="ln-transition-sub">價錢大眾化，深受年輕夫婦歡迎</p>
        </div>
      </div>
    );
  }

  return null;
}