import "./Coldopen.css";

interface Props { step: number; }

const MATERIALS = [
  { label: "皮革", desc: "真皮質感，高貴大方", icon: "leather" },
  { label: "亞麻布", desc: "透氣舒適，價錢大眾化", icon: "linen" },
  { label: "絨布", desc: "外觀奢華，手感柔軟", icon: "velvet" },
];

function CoverIcon({ type, animated }: { type: string; animated: boolean }) {
  if (type === "leather") {
    return (
      <svg className={`cd-icon-svg${animated ? " cd-icon-animated" : ""}`} viewBox="0 0 64 64" width="64" height="64">
        <rect x="8" y="12" width="48" height="40" rx="4" fill="var(--accent2-light)" stroke="var(--accent2)" strokeWidth="2"/>
        <rect x="14" y="18" width="36" height="28" rx="2" fill="none" stroke="var(--accent2)" strokeWidth="1.5" opacity="0.5"/>
        <path d="M24 28 Q32 24 40 28 Q32 32 24 28" fill="var(--accent2)" opacity="0.3"/>
        <line x1="20" y1="36" x2="44" y2="36" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="20" y1="40" x2="38" y2="40" stroke="var(--accent2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      </svg>
    );
  }
  if (type === "linen") {
    return (
      <svg className={`cd-icon-svg${animated ? " cd-icon-animated" : ""}`} viewBox="0 0 64 64" width="64" height="64">
        <rect x="8" y="12" width="48" height="40" rx="4" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2"/>
        <line x1="8" y1="20" x2="56" y2="20" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
        <line x1="8" y1="28" x2="56" y2="28" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
        <line x1="8" y1="36" x2="56" y2="36" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
        <line x1="8" y1="44" x2="56" y2="44" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
        <line x1="20" y1="12" x2="20" y2="52" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
        <line x1="32" y1="12" x2="32" y2="52" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
        <line x1="44" y1="12" x2="44" y2="52" stroke="var(--accent)" strokeWidth="1" opacity="0.3"/>
      </svg>
    );
  }
  return (
    <svg className={`cd-icon-svg${animated ? " cd-icon-animated" : ""}`} viewBox="0 0 64 64" width="64" height="64">
      <rect x="8" y="12" width="48" height="40" rx="4" fill="var(--text-muted)" stroke="var(--text)" strokeWidth="2"/>
      <ellipse cx="32" cy="32" rx="16" ry="12" fill="none" stroke="var(--surface)" strokeWidth="1.5" opacity="0.5"/>
      <path d="M20 32 Q32 20 44 32" fill="none" stroke="var(--surface)" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

function CheckIcon({ animated }: { animated: boolean }) {
  return (
    <svg className={`cd-check-svg${animated ? " cd-check-animated" : ""}`} viewBox="0 0 32 32" width="32" height="32">
      <circle cx="16" cy="16" r="14" fill="none" stroke="var(--accent)" strokeWidth="2.5" opacity="0.3"/>
      <path className="cd-check-path" d="M9 16l5 5 9-9" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="30" strokeDashoffset={animated ? "0" : "30"}/>
    </svg>
  );
}

export function Coldopen({ step }: Props) {
  /* ─── Step 0: Title card with intro ─── */
  if (step === 0) {
    return (
      <div className="Coldopen cd-scene">
        <div className="cd-scene-inner">
          <p className="cd-legal-ref">結婚證書套比較指南</p>
          <h2 className="cd-step-title">結婚證書套<br/>有邊幾種？</h2>
          <p className="cd-step-subtitle">皮革、亞麻布、絨布三大類</p>
        </div>
      </div>
    );
  }

  /* ─── Step 1: Three materials overview ─── */
  if (step === 1) {
    return (
      <div className="Coldopen cd-scene">
        <div className="cd-scene-inner">
          <h2 className="cd-step-title">三大材質分類</h2>
          <p className="cd-step-subtitle">每種都有獨特風格同優缺點</p>
          <div className="cd-materials-row">
            {MATERIALS.map((m, i) => (
              <div key={m.label} className="cd-material-card" style={{ animationDelay: `${i * 500}ms` }}>
                <CoverIcon type={m.icon} animated />
                <span className="cd-material-label">{m.label}</span>
                <span className="cd-material-desc">{m.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: Different characteristics ─── */
  if (step === 2) {
    return (
      <div className="Coldopen cd-scene">
        <div className="cd-scene-inner">
          <h2 className="cd-step-title">唔同材質有唔同特色</h2>
          <div className="cd-compare-list">
            <div className="cd-compare-item cd-from-left" style={{ animationDelay: "200ms" }}>
              <CheckIcon animated />
              <div>
                <span className="cd-compare-title">皮革</span>
                <span className="cd-compare-detail">高貴真皮質感，需要定期保養</span>
              </div>
            </div>
            <div className="cd-compare-item cd-from-right" style={{ animationDelay: "600ms" }}>
              <CheckIcon animated />
              <div>
                <span className="cd-compare-title">亞麻布</span>
                <span className="cd-compare-detail">透氣舒適，印刷效果鮮艷</span>
              </div>
            </div>
            <div className="cd-compare-item cd-from-left" style={{ animationDelay: "1000ms" }}>
              <CheckIcon animated />
              <div>
                <span className="cd-compare-title">絨布</span>
                <span className="cd-compare-detail">外觀奢華，適合隆重場合</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 3: Price range ─── */
  if (step === 3) {
    return (
      <div className="Coldopen cd-scene">
        <div className="cd-scene-inner">
          <h2 className="cd-step-title">價錢範圍</h2>
          <p className="cd-step-subtitle">由幾百到幾千蚊都有</p>
          <div className="cd-price-row">
            <div className="cd-price-card cd-from-bottom" style={{ animationDelay: "200ms" }}>
              <span className="cd-price-label">亞麻布</span>
              <span className="cd-price-value">$400-800</span>
              <span className="cd-price-note">性價比最高</span>
            </div>
            <div className="cd-price-card cd-from-bottom" style={{ animationDelay: "500ms" }}>
              <span className="cd-price-label">絨布</span>
              <span className="cd-price-value">$600-1200</span>
              <span className="cd-price-note">價錢適中</span>
            </div>
            <div className="cd-price-card cd-from-bottom" style={{ animationDelay: "800ms" }}>
              <span className="cd-price-label">皮革</span>
              <span className="cd-price-value">$1000-3000</span>
              <span className="cd-price-note">最貴但最有質感</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 4: Consider style and budget ─── */
  if (step === 4) {
    return (
      <div className="Coldopen cd-scene">
        <div className="cd-scene-inner">
          <h2 className="cd-step-title">點樣選擇？</h2>
          <p className="cd-step-subtitle">考慮風格同預算</p>
          <div className="cd-tips-list">
            <div className="cd-tip-item cd-from-left" style={{ animationDelay: "200ms" }}>
              <span className="cd-tip-num">1</span>
              <span className="cd-tip-text">先設定預算範圍</span>
            </div>
            <div className="cd-tip-item cd-from-right" style={{ animationDelay: "400ms" }}>
              <span className="cd-tip-num">2</span>
              <span className="cd-tip-text">再考慮婚禮風格</span>
            </div>
            <div className="cd-tip-item cd-from-left" style={{ animationDelay: "600ms" }}>
              <span className="cd-tip-num">3</span>
              <span className="cd-tip-text">最後睇保養需求</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: My O! options ─── */
  if (step === 5) {
    return (
      <div className="Coldopen cd-scene">
        <div className="cd-scene-inner">
          <h2 className="cd-step-title">My O! 提供多款選擇</h2>
          <p className="cd-step-subtitle">全部都可以客製化</p>
          <div className="cd-features-row">
            <div className="cd-feature-card cd-from-left" style={{ animationDelay: "200ms" }}>
              <span className="cd-feature-icon">🎨</span>
              <span className="cd-feature-label">多色可選</span>
            </div>
            <div className="cd-feature-card cd-from-bottom" style={{ animationDelay: "400ms" }}>
              <span className="cd-feature-icon">✍️</span>
              <span className="cd-feature-label">書法字款</span>
            </div>
            <div className="cd-feature-card cd-from-right" style={{ animationDelay: "600ms" }}>
              <span className="cd-feature-icon">🖼️</span>
              <span className="cd-feature-label">自訂圖案</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 6: Transition ─── */
  if (step === 6) {
    return (
      <div className="Coldopen cd-scene">
        <div className="cd-scene-inner cd-transition-center">
          <div className="cd-big-check-wrap">
            <svg className="cd-big-check-svg" viewBox="0 0 120 120" width="120" height="120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="var(--accent)" strokeWidth="4" opacity="0.15"/>
              <path className="cd-big-check-path" d="M30 60l20 20 40-40" fill="none" stroke="var(--accent)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="200" strokeDashoffset="200"/>
            </svg>
          </div>
          <h2 className="cd-transition-title">準備好比較了嗎？</h2>
          <p className="cd-transition-sub">以下逐款介紹，等你搵到最適合嘅</p>
        </div>
      </div>
    );
  }

  return null;
}