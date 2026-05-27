import "./Display.css";

interface Props {
  step: number;
}

/* ─── SVG Icon Components ─── */

function CalendarIcon() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" className="ds-calendar-icon">
      <rect x="8" y="12" width="48" height="44" rx="4" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2.5" />
      <line x1="8" y1="24" x2="56" y2="24" stroke="var(--accent)" strokeWidth="2" />
      <line x1="20" y1="8" x2="20" y2="20" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="8" x2="44" y2="20" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <text x="32" y="44" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--accent)" fontFamily="var(--font-display-en)">15</text>
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="ds-doc-icon">
      <rect x="8" y="4" width="32" height="40" rx="2" fill="var(--bg-card)" stroke="var(--accent)" strokeWidth="2" />
      <line x1="14" y1="14" x2="34" y2="14" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="20" x2="34" y2="20" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="26" x2="28" y2="26" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="ds-eye-icon">
      <ellipse cx="24" cy="24" rx="18" ry="12" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" fill="var(--accent)" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="ds-warning-icon">
      <path d="M24 6L4 42h40L24 6z" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2.5" />
      <line x1="24" y1="20" x2="24" y2="30" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="35" r="2" fill="var(--accent)" />
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

function CertificateIcon() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <rect x="8" y="8" width="48" height="48" rx="4" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2.5" />
      <path d="M20 32l8 8 16-16" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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

export function Display({ step }: Props) {
  /* ─── Step 0: Title - Public display period ─── */
  if (step === 0) {
    return (
      <div className="ds-scene">
        <div className="ds-scene-inner">
          <CalendarIcon />
          <h2 className="ds-title">公開展示期</h2>
          <p className="ds-subtitle">通知書會喺婚姻登記處公開展示</p>
        </div>
      </div>
    );
  }

  /* ─── Step 1: 15-day display period ─── */
  if (step === 1) {
    return (
      <div className="ds-scene">
        <div className="ds-scene-inner">
          <div className="ds-big-number">15</div>
          <h2 className="ds-title">日公開展示</h2>
          <p className="ds-desc">由遞交當日起計算，唔可以縮短或跳過</p>
          <div className="ds-info-row">
            <div className="ds-info-item" style={{ animationDelay: "0ms" }}>
              <span className="ds-info-label">法律規定</span>
              <span className="ds-info-value">不可跳過</span>
            </div>
            <div className="ds-info-item" style={{ animationDelay: "200ms" }}>
              <span className="ds-info-label">最短時間</span>
              <span className="ds-info-value">15 日</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: What information is displayed ─── */
  if (step === 2) {
    return (
      <div className="ds-scene">
        <div className="ds-scene-inner">
          <DocumentIcon />
          <h2 className="ds-title">展示咩資料？</h2>
          <div className="ds-display-items">
            <div className="ds-display-item" style={{ animationDelay: "0ms" }}>
              <CheckCircle />
              <span>雙方姓名</span>
            </div>
            <div className="ds-display-item" style={{ animationDelay: "150ms" }}>
              <CheckCircle />
              <span>結婚日期預定</span>
            </div>
            <div className="ds-display-item" style={{ animationDelay: "300ms" }}>
              <CheckCircle />
              <span>舉行地點</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 3: Public access ─── */
  if (step === 3) {
    return (
      <div className="ds-scene">
        <div className="ds-scene-inner">
          <EyeIcon />
          <h2 className="ds-title">公眾查閱</h2>
          <p className="ds-desc">任何人都可以查閱呢啲資料</p>
          <div className="ds-purpose-box">
            <p>公開展示嘅目的係讓公眾監察，確保婚姻係雙方自願同埋符合法定要求。</p>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 4: Objection process ─── */
  if (step === 4) {
    return (
      <div className="ds-scene">
        <div className="ds-scene-inner">
          <WarningIcon />
          <h2 className="ds-title">反對機制</h2>
          <p className="ds-desc">如果發現問題可以向有關當局提出反對</p>
          <div className="ds-objection-info">
            <div className="ds-objection-point" style={{ animationDelay: "0ms" }}>
              <CheckCircle />
              <span>政府部門會認真處理</span>
            </div>
            <div className="ds-objection-point" style={{ animationDelay: "150ms" }}>
              <CheckCircle />
              <span>正常申請好少被反對</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: After the display period ─── */
  if (step === 5) {
    return (
      <div className="ds-scene">
        <div className="ds-scene-inner">
          <CertificateIcon />
          <h2 className="ds-title">15 日後</h2>
          <p className="ds-desc">如無收到有效反對，你將收到：</p>
          <div className="ds-cert-box">
            <span className="ds-cert-title">婚姻登記官證明書</span>
            <span className="ds-cert-desc">可以舉行婚禮嘅重要文件</span>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 6: Transition to summary ─── */
  if (step === 6) {
    return (
      <div className="ds-scene">
        <div className="ds-scene-inner ds-transition-center">
          <ArrowIcon />
          <h2 className="ds-transition-title">總結</h2>
          <p className="ds-transition-sub">遞交擬結婚通知書嘅完整流程就差唔多了</p>
        </div>
      </div>
    );
  }

  return null;
}