import "./Coldopen.css";

interface Props {
  step: number;
}

/* ─── SVG Icon Components ─── */

function NoticeIcon({ animated }: { animated: boolean }) {
  return (
    <svg
      className={`cd-notice-icon${animated ? " cd-icon-animated" : ""}`}
      viewBox="0 0 64 64"
      width="64"
      height="64"
    >
      <rect
        x="8"
        y="4"
        width="48"
        height="56"
        rx="4"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
      />
      <line x1="16" y1="16" x2="48" y2="16" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="24" x2="48" y2="24" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="32" x2="40" y2="32" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="48" r="12" fill="var(--accent)" />
      <text x="48" y="53" textAnchor="middle" fontSize="14" fontWeight="700" fill="white" fontFamily="var(--font-display-cn)">15</text>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="cd-clock-icon" viewBox="0 0 48 48" width="48" height="48">
      <circle cx="24" cy="24" r="20" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <line x1="24" y1="24" x2="24" y2="14" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="24" x2="32" y2="28" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="cd-heart-icon" viewBox="0 0 48 48" width="48" height="48">
      <path
        d="M24 42s-16-10.4-16-21c0-6.1 4.9-11 11-11 3.8 0 7.2 1.9 9.4 4.8h0.2C30.8 12.9 34.2 11 38 11c6.1 0 11 4.9 11 11 0 10.6-16 21-16 21z"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="cd-check-icon" viewBox="0 0 48 48" width="48" height="48">
      <circle cx="24" cy="24" r="20" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <path d="M14 24l7 7 13-13" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="cd-arrow-icon" viewBox="0 0 48 48" width="48" height="48">
      <line x1="8" y1="24" x2="40" y2="24" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      <polyline points="28,14 40,24 28,34" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Main Component ─── */

export function Coldopen({ step }: Props) {
  /* ─── Step 0: Hook - What is Notice of Intended Marriage ─── */
  if (step === 0) {
    return (
      <div className="cd-scene">
        <div className="cd-scene-inner">
          <NoticeIcon animated />
          <h2 className="cd-title">遞交擬結婚通知書</h2>
          <p className="cd-subtitle">香港合法結婚嘅第一步</p>
          <div className="cd-step-indicator">第一步</div>
        </div>
      </div>
    );
  }

  /* ─── Step 1: Why it matters ─── */
  if (step === 1) {
    return (
      <div className="cd-scene">
        <div className="cd-scene-inner">
          <HeartIcon />
          <h2 className="cd-title">點解要遞交通知書？</h2>
          <p className="cd-desc">
            好多人以為結婚係去登記處排隊就得，
            <br />
            但其實之前仲有一步——
          </p>
          <div className="cd-highlight-box">
            <span>要先確認你哋係合資格結婚</span>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: Timeline overview ─── */
  if (step === 2) {
    return (
      <div className="cd-scene">
        <div className="cd-scene-inner">
          <ClockIcon />
          <h2 className="cd-title">由遞交到行禮</h2>
          <div className="cd-timeline">
            <div className="cd-timeline-item" style={{ animationDelay: "0ms" }}>
              <span className="cd-timeline-num">1</span>
              <span className="cd-timeline-text">遞交通知書</span>
            </div>
            <div className="cd-timeline-arrow">→</div>
            <div className="cd-timeline-item" style={{ animationDelay: "200ms" }}>
              <span className="cd-timeline-num">2</span>
              <span className="cd-timeline-text">等待 15 日</span>
            </div>
            <div className="cd-timeline-arrow">→</div>
            <div className="cd-timeline-item" style={{ animationDelay: "400ms" }}>
              <span className="cd-timeline-num">3</span>
              <span className="cd-timeline-text">正式行禮</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 3: 15-day waiting period explained ─── */
  if (step === 3) {
    return (
      <div className="cd-scene">
        <div className="cd-scene-inner">
          <div className="cd-big-number">15</div>
          <h2 className="cd-title">日等待期</h2>
          <p className="cd-desc">呢個係法律規定嘅等待期，唔可以縮短</p>
          <div className="cd-info-cards">
            <div className="cd-info-card" style={{ animationDelay: "0ms" }}>
              <span className="cd-info-label">法律規定</span>
              <span className="cd-info-value">不可跳過</span>
            </div>
            <div className="cd-info-card" style={{ animationDelay: "200ms" }}>
              <span className="cd-info-label">最短時間</span>
              <span className="cd-info-value">15 日</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 4: What happens during waiting period ─── */
  if (step === 4) {
    return (
      <div className="cd-scene">
        <div className="cd-scene-inner">
          <h2 className="cd-title">等待期間發生咩事？</h2>
          <div className="cd-process-list">
            <div className="cd-process-item" style={{ animationDelay: "0ms" }}>
              <CheckCircleIcon />
              <span>通知書喺登記處公開展示</span>
            </div>
            <div className="cd-process-item" style={{ animationDelay: "200ms" }}>
              <CheckCircleIcon />
              <span>公眾可以查閱資料</span>
            </div>
            <div className="cd-process-item" style={{ animationDelay: "400ms" }}>
              <CheckCircleIcon />
              <span>如有問題可提出反對</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: What comes after ─── */
  if (step === 5) {
    return (
      <div className="cd-scene">
        <div className="cd-scene-inner">
          <h2 className="cd-title">15 日後點算？</h2>
          <div className="cd-result-card">
            <div className="cd-result-icon">
              <svg viewBox="0 0 64 64" width="64" height="64">
                <rect x="8" y="4" width="48" height="56" rx="4" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
                <path d="M20 32l8 8 16-16" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="cd-result-title">婚姻登記官證明書</h3>
            <p className="cd-result-desc">如無反對，你將收到呢張證明書，就可以正式舉行婚禮</p>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 6: Transition to eligibility ─── */
  if (step === 6) {
    return (
      <div className="cd-scene">
        <div className="cd-scene-inner cd-transition-center">
          <ArrowIcon />
          <h2 className="cd-transition-title">資格要求</h2>
          <p className="cd-transition-sub">遞交通知書之前，先要確認你哋係合資格結婚</p>
        </div>
      </div>
    );
  }

  return null;
}