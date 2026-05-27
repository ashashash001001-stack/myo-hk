import "./CTA.css";

interface Props {
  step: number;
}

/* ─── SVG Icon Components ─── */

function SummaryIcon() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" className="cta-summary-icon">
      <rect x="8" y="8" width="48" height="48" rx="8" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2.5" />
      <path d="M20 32l8 8 16-16" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RecapIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="cta-recap-icon">
      <circle cx="24" cy="24" r="18" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <line x1="24" y1="14" x2="24" y2="26" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="32" r="2" fill="var(--accent)" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="cta-key-icon">
      <circle cx="14" cy="20" r="8" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <line x1="20" y1="26" x2="40" y2="42" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="34" x2="36" y2="38" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="cta-cert-icon">
      <rect x="6" y="10" width="36" height="28" rx="2" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <line x1="12" y1="18" x2="36" y2="18" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="24" x2="30" y2="24" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="30" x2="24" y2="30" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="cta-globe-icon">
      <circle cx="24" cy="24" r="18" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <ellipse cx="24" cy="24" rx="8" ry="18" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="var(--accent)" strokeWidth="1.5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="cta-heart-icon">
      <path
        d="M24 42s-16-10.4-16-21c0-6.1 4.9-11 11-11 3.8 0 7.2 1.9 9.4 4.8h0.2C30.8 12.9 34.2 11 38 11c6.1 0 11 4.9 11 11 0 10.6-16 21-16 21z"
        fill="var(--accent-light)"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Main Component ─── */

export function CTA({ step }: Props) {
  /* ─── Step 0: Title - Summary ─── */
  if (step === 0) {
    return (
      <div className="cta-scene">
        <div className="cta-scene-inner">
          <SummaryIcon />
          <h2 className="cta-title">總結</h2>
          <p className="cta-subtitle">遞交擬結婚通知書完整流程</p>
        </div>
      </div>
    );
  }

  /* ─── Step 1: Process recap ─── */
  if (step === 1) {
    return (
      <div className="cta-scene">
        <div className="cta-scene-inner">
          <RecapIcon />
          <h2 className="cta-title">流程回顧</h2>
          <div className="cta-steps-flow">
            <div className="cta-flow-step" style={{ animationDelay: "0ms" }}>
              <span className="cta-flow-num">1</span>
              <span className="cta-flow-text">確認資格</span>
            </div>
            <div className="cta-flow-arrow">→</div>
            <div className="cta-flow-step" style={{ animationDelay: "150ms" }}>
              <span className="cta-flow-num">2</span>
              <span className="cta-flow-text">遞交通知書</span>
            </div>
            <div className="cta-flow-arrow">→</div>
            <div className="cta-flow-step" style={{ animationDelay: "300ms" }}>
              <span className="cta-flow-num">3</span>
              <span className="cta-flow-text">等 15 日</span>
            </div>
            <div className="cta-flow-arrow">→</div>
            <div className="cta-flow-step" style={{ animationDelay: "450ms" }}>
              <span className="cta-flow-num">4</span>
              <span className="cta-flow-text">正式行禮</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: Key numbers to remember ─── */
  if (step === 2) {
    return (
      <div className="cta-scene">
        <div className="cta-scene-inner">
          <KeyIcon />
          <h2 className="cta-title">記住呢三個數字</h2>
          <div className="cta-key-numbers">
            <div className="cta-key-card" style={{ animationDelay: "0ms" }}>
              <span className="cta-key-num">16</span>
              <span className="cta-key-label">歲（最低年齡）</span>
            </div>
            <div className="cta-key-card" style={{ animationDelay: "200ms" }}>
              <span className="cta-key-num">305</span>
              <span className="cta-key-label">蚊（費用）</span>
            </div>
            <div className="cta-key-card" style={{ animationDelay: "400ms" }}>
              <span className="cta-key-num">15</span>
              <span className="cta-key-label">日（等待期）</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 3: After notice is approved ─── */
  if (step === 3) {
    return (
      <div className="cta-scene">
        <div className="cta-scene-inner">
          <CertificateIcon />
          <h2 className="cta-title">通知書獲批之後</h2>
          <div className="cta-reminder-box">
            <p>記得帶同「婚姻登記官證明書」去婚禮場地</p>
            <span className="cta-reminder-note">否則係唔可以完成結婚程序</span>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 4: Where to get more info ─── */
  if (step === 4) {
    return (
      <div className="cta-scene">
        <div className="cta-scene-inner">
          <GlobeIcon />
          <h2 className="cta-title">更多資訊</h2>
          <p className="cta-desc">想知多啲關於香港結婚嘅資訊？</p>
          <div className="cta-links-box">
            <div className="cta-link-item" style={{ animationDelay: "0ms" }}>
              <span>點樣選擇證書套</span>
            </div>
            <div className="cta-link-item" style={{ animationDelay: "150ms" }}>
              <span>婚禮場地推薦</span>
            </div>
            <div className="cta-link-item" style={{ animationDelay: "300ms" }}>
              <span>結婚習俗完整攻略</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: Final CTA ─── */
  if (step === 5) {
    return (
      <div className="cta-scene">
        <div className="cta-scene-inner cta-final-center">
          <HeartIcon />
          <h2 className="cta-final-title">myo-hk.github.io</h2>
          <p className="cta-final-desc">全面嘅香港結婚指南</p>
          <div className="cta-website-box">
            <span>幫你準備完美嘅大日子</span>
          </div>
          <p className="cta-bookmark">記得 bookmark 我哋！</p>
        </div>
      </div>
    );
  }

  return null;
}