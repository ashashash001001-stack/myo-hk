import "./Methods.css";

interface Props {
  step: number;
}

/* ─── SVG Icon Components ─── */

function BuildingIcon() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" className="md-building-icon">
      <rect x="12" y="16" width="40" height="44" rx="2" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2.5" />
      <line x1="12" y1="28" x2="52" y2="28" stroke="var(--accent)" strokeWidth="2" />
      <rect x="20" y="34" width="8" height="8" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      <rect x="36" y="34" width="8" height="8" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      <rect x="20" y="48" width="8" height="8" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      <rect x="36" y="48" width="8" height="8" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="md-person-icon">
      <circle cx="24" cy="12" r="8" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <path d="M12 44c0-8 5.4-14 12-14s12 6 12 14" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
    </svg>
  );
}

function OfficerIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="md-officer-icon">
      <circle cx="24" cy="12" r="8" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <path d="M12 44c0-8 5.4-14 12-14s12 6 12 14" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <rect x="20" y="4" width="8" height="4" rx="1" fill="var(--accent)" />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" className="md-compare-icon">
      <rect x="6" y="12" width="22" height="40" rx="2" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <rect x="36" y="12" width="22" height="40" rx="2" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <line x1="28" y1="32" x2="36" y2="32" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4,2" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32">
      <circle cx="16" cy="16" r="14" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <path d="M9 16l5 5 9-9" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48">
      <line x1="8" y1="24" x2="40" y2="24" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="28,14 40,24 28,34" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Main Component ─── */

export function Methods({ step }: Props) {
  /* ─── Step 0: Title - Filing methods ─── */
  if (step === 0) {
    return (
      <div className="md-scene">
        <div className="md-scene-inner">
          <BuildingIcon />
          <h2 className="md-title">遞交方法</h2>
          <p className="md-subtitle">香港有兩種主要遞交方式</p>
        </div>
      </div>
    );
  }

  /* ─── Step 1: Two methods overview ─── */
  if (step === 1) {
    return (
      <div className="md-scene">
        <div className="md-scene-inner">
          <h2 className="md-title">兩種遞交方式</h2>
          <div className="md-methods-row">
            <div className="md-method-card" style={{ animationDelay: "0ms" }}>
              <PersonIcon />
              <span className="md-method-label">親身遞交</span>
              <span className="md-method-desc">去婚姻登記處</span>
            </div>
            <div className="md-method-card" style={{ animationDelay: "300ms" }}>
              <OfficerIcon />
              <span className="md-method-label">監禮人代辦</span>
              <span className="md-method-desc">聘請婚姻監禮人</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: Method 1 - Marriage Registry ─── */
  if (step === 2) {
    return (
      <div className="md-scene">
        <div className="md-scene-inner">
          <BuildingIcon />
          <h2 className="md-title">方式一：婚姻登記處</h2>
          <div className="md-info-list">
            <div className="md-info-item" style={{ animationDelay: "0ms" }}>
              <CheckCircle />
              <span>帶同雙方身份證明文件</span>
            </div>
            <div className="md-info-item" style={{ animationDelay: "150ms" }}>
              <CheckCircle />
              <span>親自前往婚姻登記處</span>
            </div>
            <div className="md-info-item" style={{ animationDelay: "300ms" }}>
              <CheckCircle />
              <span>親身遞交並繳費</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 3: Registry locations ─── */
  if (step === 3) {
    return (
      <div className="md-scene">
        <div className="md-scene-inner">
          <h2 className="md-title">婚姻登記處位置</h2>
          <div className="md-locations-grid">
            <div className="md-location-card" style={{ animationDelay: "0ms" }}>
              <span className="md-location-area">香港區</span>
              <span className="md-location-place">灣仔稅務大樓</span>
            </div>
            <div className="md-location-card" style={{ animationDelay: "150ms" }}>
              <span className="md-location-area">九龍區</span>
              <span className="md-location-place">尖沙咀 / 九龍城</span>
            </div>
            <div className="md-location-card" style={{ animationDelay: "300ms" }}>
              <span className="md-location-area">新界區</span>
              <span className="md-location-place">沙田民政事務處</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 4: Method 2 - Marriage Officer ─── */
  if (step === 4) {
    return (
      <div className="md-scene">
        <div className="md-scene-inner">
          <OfficerIcon />
          <h2 className="md-title">方式二：婚姻監禮人</h2>
          <div className="md-info-list">
            <div className="md-info-item" style={{ animationDelay: "0ms" }}>
              <CheckCircle />
              <span>搵一位持有牌照嘅婚姻監禮人</span>
            </div>
            <div className="md-info-item" style={{ animationDelay: "150ms" }}>
              <CheckCircle />
              <span>監禮人幫你準備文件</span>
            </div>
            <div className="md-info-item" style={{ animationDelay: "300ms" }}>
              <CheckCircle />
              <span>代辦遞交，節省排隊時間</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: Comparison ─── */
  if (step === 5) {
    return (
      <div className="md-scene">
        <div className="md-scene-inner">
          <CompareIcon />
          <h2 className="md-title">點樣選擇？</h2>
          <div className="md-compare-table">
            <div className="md-compare-row md-compare-header">
              <span></span>
              <span>登記處</span>
              <span>監禮人</span>
            </div>
            <div className="md-compare-row" style={{ animationDelay: "0ms" }}>
              <span className="md-compare-label">費用</span>
              <span>較平</span>
              <span>較貴</span>
            </div>
            <div className="md-compare-row" style={{ animationDelay: "100ms" }}>
              <span className="md-compare-label">時間</span>
              <span>需排隊</span>
              <span>較方便</span>
            </div>
            <div className="md-compare-row" style={{ animationDelay: "200ms" }}>
              <span className="md-compare-label">適合</span>
              <span>時間充裕</span>
              <span>工作忙碌</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 6: Transition to fee ─── */
  if (step === 6) {
    return (
      <div className="md-scene">
        <div className="md-scene-inner md-transition-center">
          <ArrowIcon />
          <h2 className="md-transition-title">費用</h2>
          <p className="md-transition-sub">無論係邊種方式，都需要繳交費用</p>
        </div>
      </div>
    );
  }

  return null;
}