import "./Eligibility.css";

interface Props {
  step: number;
}

/* ─── SVG Icon Components ─── */

function CheckCircle({ animated }: { animated: boolean }) {
  return (
    <svg
      className={`el-check-circle${animated ? " el-check-animated" : ""}`}
      viewBox="0 0 32 32"
      width="32"
      height="32"
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        opacity="0.3"
      />
      <path
        className="el-check-path"
        d="M9 16l5 5 9-9"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="30"
        strokeDashoffset={animated ? "0" : "30"}
      />
    </svg>
  );
}

function AgeIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="el-doc-svg">
      <circle cx="24" cy="24" r="20" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
      <text x="24" y="29" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--accent)" fontFamily="var(--font-display-en)">16+</text>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="el-doc-svg">
      <path
        d="M24 40s-14-9-14-18c0-5 4-9 9-9 3.1 0 5.9 1.6 7.7 4h0.2C28.1 14.6 30.9 13 34 13c5 0 9 4 9 9 0 9-14 18-14 18z"
        fill="var(--accent-light)"
        stroke="var(--accent)"
        strokeWidth="2"
      />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="el-doc-svg">
      <circle cx="16" cy="14" r="6" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5" />
      <circle cx="32" cy="14" r="6" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5" />
      <path d="M8 38c0-6 4-10 8-10h16c4 0 8 4 8 10" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="1.5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="el-doc-svg">
      <circle cx="24" cy="24" r="18" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <ellipse cx="24" cy="24" rx="8" ry="18" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      <line x1="6" y1="24" x2="42" y2="24" stroke="var(--accent)" strokeWidth="1.5" />
      <line x1="10" y1="14" x2="38" y2="14" stroke="var(--accent)" strokeWidth="1" />
      <line x1="10" y1="34" x2="38" y2="34" stroke="var(--accent)" strokeWidth="1" />
    </svg>
  );
}

function SummaryIcon() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64">
      <rect x="8" y="8" width="48" height="48" rx="8" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2.5" />
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

export function Eligibility({ step }: Props) {
  /* ─── Step 0: Title - Eligibility requirements ─── */
  if (step === 0) {
    return (
      <div className="el-scene">
        <div className="el-scene-inner">
          <p className="el-legal-ref">香港法例第 181 章《婚姻條例》</p>
          <h2 className="el-step-title">資格要求</h2>
          <p className="el-step-subtitle">並不是所有人都可以係香港結婚</p>
        </div>
      </div>
    );
  }

  /* ─── Step 1: Age requirement ─── */
  if (step === 1) {
    return (
      <div className="el-scene">
        <div className="el-scene-inner">
          <AgeIcon />
          <h2 className="el-step-title">年齡要求</h2>
          <div className="el-conditions-list">
            <div className="el-condition-card" style={{ animationDelay: "0ms" }}>
              <CheckCircle animated />
              <div className="el-condition-text">
                <span className="el-condition-label">年滿 16 歲</span>
                <span className="el-condition-desc">最低法定結婚年齡</span>
              </div>
            </div>
            <div className="el-condition-card" style={{ animationDelay: "300ms" }}>
              <CheckCircle animated />
              <div className="el-condition-text">
                <span className="el-condition-label">未滿 21 歲</span>
                <span className="el-condition-desc">需父母或監護人書面同意</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: Marital status ─── */
  if (step === 2) {
    return (
      <div className="el-scene">
        <div className="el-scene-inner">
          <HeartIcon />
          <h2 className="el-step-title">婚姻狀況</h2>
          <div className="el-conditions-list">
            <div className="el-condition-card" style={{ animationDelay: "0ms" }}>
              <CheckCircle animated />
              <div className="el-condition-text">
                <span className="el-condition-label">必須單身</span>
                <span className="el-condition-desc">香港只承認一夫一妻制</span>
              </div>
            </div>
            <div className="el-condition-card" style={{ animationDelay: "300ms" }}>
              <CheckCircle animated />
              <div className="el-condition-text">
                <span className="el-condition-label">離婚人士</span>
                <span className="el-condition-desc">需提交法庭發出嘅離婚判令</span>
              </div>
            </div>
            <div className="el-condition-card" style={{ animationDelay: "600ms" }}>
              <CheckCircle animated />
              <div className="el-condition-text">
                <span className="el-condition-label">鰥夫或寡婦</span>
                <span className="el-condition-desc">需提交前配偶嘅死亡證明書</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 3: Not related by blood ─── */
  if (step === 3) {
    return (
      <div className="el-scene">
        <div className="el-scene-inner">
          <FamilyIcon />
          <h2 className="el-step-title">非近親關係</h2>
          <p className="el-step-subtitle">雙方唔可以係法律定義嘅近親</p>
          <div className="el-info-box">
            <p>香港《婚姻條例》清楚列出禁婚親屬範圍，近親結婚係唔被接納。</p>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 4: Nationality not restricted ─── */
  if (step === 4) {
    return (
      <div className="el-scene">
        <div className="el-scene-inner">
          <GlobeIcon />
          <h2 className="el-step-title">不限國籍</h2>
          <div className="el-docs-row">
            <div className="el-doc-card" style={{ animationDelay: "0ms" }}>
              <span className="el-doc-label">香港居民</span>
              <span className="el-doc-desc">帶身份證即可</span>
            </div>
            <div className="el-doc-card" style={{ animationDelay: "300ms" }}>
              <span className="el-doc-label">海外人士</span>
              <span className="el-doc-desc">帶有效旅行證件</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: Summary of requirements ─── */
  if (step === 5) {
    return (
      <div className="el-scene">
        <div className="el-scene-inner">
          <SummaryIcon />
          <h2 className="el-step-title">資格總結</h2>
          <div className="el-conditions-grid">
            <div className="el-summary-card" style={{ animationDelay: "0ms" }}>
              <span className="el-summary-num">1</span>
              <span className="el-summary-label">年滿 16 歲</span>
            </div>
            <div className="el-summary-card" style={{ animationDelay: "150ms" }}>
              <span className="el-summary-num">2</span>
              <span className="el-summary-label">單身身份</span>
            </div>
            <div className="el-summary-card" style={{ animationDelay: "300ms" }}>
              <span className="el-summary-num">3</span>
              <span className="el-summary-label">非近親</span>
            </div>
            <div className="el-summary-card" style={{ animationDelay: "450ms" }}>
              <span className="el-summary-num">4</span>
              <span className="el-summary-label">不限國籍</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 6: Transition to methods ─── */
  if (step === 6) {
    return (
      <div className="el-scene">
        <div className="el-scene-inner el-transition-center">
          <ArrowIcon />
          <h2 className="el-transition-title">遞交方法</h2>
          <p className="el-transition-sub">確認資格後，選擇適合你嘅遞交方式</p>
        </div>
      </div>
    );
  }

  return null;
}