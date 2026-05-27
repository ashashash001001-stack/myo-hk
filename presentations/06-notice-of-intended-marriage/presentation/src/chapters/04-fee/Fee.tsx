import "./Fee.css";

interface Props {
  step: number;
}

/* ─── SVG Icon Components ─── */

function DollarIcon() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" className="fee-dollar-icon">
      <circle cx="32" cy="32" r="28" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2.5" />
      <text x="32" y="40" textAnchor="middle" fontSize="24" fontWeight="700" fill="var(--accent)" fontFamily="var(--font-display-en)">$</text>
    </svg>
  );
}

function PaymentIcon({ type }: { type: string }) {
  if (type === "cash") {
    return (
      <svg viewBox="0 0 48 48" width="48" height="48" className="fee-payment-icon">
        <rect x="6" y="12" width="36" height="24" rx="2" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
        <line x1="6" y1="20" x2="42" y2="20" stroke="var(--accent)" strokeWidth="1.5" />
        <rect x="10" y="26" width="12" height="6" rx="1" fill="var(--accent)" />
      </svg>
    );
  }
  if (type === "octopus") {
    return (
      <svg viewBox="0 0 48 48" width="48" height="48" className="fee-payment-icon">
        <circle cx="24" cy="24" r="16" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2" />
        <text x="24" y="29" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--accent)" fontFamily="var(--font-display-en)">八達通</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="fee-payment-icon">
      <rect x="6" y="14" width="36" height="20" rx="2" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <line x1="6" y1="22" x2="42" y2="22" stroke="var(--accent)" strokeWidth="1.5" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className="fee-receipt-icon">
      <rect x="10" y="4" width="28" height="40" rx="2" fill="var(--bg-card)" stroke="var(--accent)" strokeWidth="2" />
      <line x1="16" y1="12" x2="32" y2="12" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="18" x2="32" y2="18" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="24" x2="28" y2="24" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="24" y2="30" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
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

export function Fee({ step }: Props) {
  /* ─── Step 0: Title - Fee details ─── */
  if (step === 0) {
    return (
      <div className="fee-scene">
        <div className="fee-scene-inner">
          <DollarIcon />
          <h2 className="fee-title">費用</h2>
          <p className="fee-subtitle">遞交擬結婚通知書需要繳費</p>
        </div>
      </div>
    );
  }

  /* ─── Step 1: Fee amount ─── */
  if (step === 1) {
    return (
      <div className="fee-scene">
        <div className="fee-scene-inner">
          <div className="fee-amount-display">
            <span className="fee-currency">HK$</span>
            <span className="fee-amount">305</span>
          </div>
          <h2 className="fee-title">遞交通知書費用</h2>
          <p className="fee-desc">呢個係《婚姻條例》規定嘅標準收費</p>
          <div className="fee-note">全港統一，唔會因為遞交方式而有差異</div>
        </div>
      </div>
    );
  }

  /* ─── Step 2: Payment methods ─── */
  if (step === 2) {
    return (
      <div className="fee-scene">
        <div className="fee-scene-inner">
          <h2 className="fee-title">繳費方式</h2>
          <div className="fee-payments-grid">
            <div className="fee-payment-card" style={{ animationDelay: "0ms" }}>
              <PaymentIcon type="cash" />
              <span className="fee-payment-label">現金</span>
            </div>
            <div className="fee-payment-card" style={{ animationDelay: "150ms" }}>
              <PaymentIcon type="octopus" />
              <span className="fee-payment-label">八達通</span>
            </div>
            <div className="fee-payment-card" style={{ animationDelay: "300ms" }}>
              <PaymentIcon type="fps" />
              <span className="fee-payment-label">轉數快</span>
            </div>
          </div>
          <p className="fee-tip">建議帶定現金以防萬一</p>
        </div>
      </div>
    );
  }

  /* ─── Step 3: What the fee covers ─── */
  if (step === 3) {
    return (
      <div className="fee-scene">
        <div className="fee-scene-inner">
          <h2 className="fee-title">費用包含</h2>
          <div className="fee-includes-list">
            <div className="fee-include-item" style={{ animationDelay: "0ms" }}>
              <CheckCircle />
              <span>遞交通知書行政費用</span>
            </div>
            <div className="fee-include-item" style={{ animationDelay: "150ms" }}>
              <CheckCircle />
              <span>15日公開展示</span>
            </div>
            <div className="fee-include-item" style={{ animationDelay: "300ms" }}>
              <CheckCircle />
              <span>婚姻登記官處理</span>
            </div>
          </div>
          <div className="fee-warning-box">
            <span>注意：正式結婚行禮係另外收費</span>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 4: Receipt importance ─── */
  if (step === 4) {
    return (
      <div className="fee-scene">
        <div className="fee-scene-inner">
          <ReceiptIcon />
          <h2 className="fee-title">保留收據</h2>
          <p className="fee-desc">繳費後記得保留收據！</p>
          <div className="fee-receipt-info">
            <div className="fee-receipt-point" style={{ animationDelay: "0ms" }}>
              <CheckCircle />
              <span>係你遞交通知書嘅證明</span>
            </div>
            <div className="fee-receipt-point" style={{ animationDelay: "150ms" }}>
              <CheckCircle />
              <span>萬一有問題可作重要參考</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Step 5: Transition to display ─── */
  if (step === 5) {
    return (
      <div className="fee-scene">
        <div className="fee-scene-inner fee-transition-center">
          <ArrowIcon />
          <h2 className="fee-transition-title">公開展示期</h2>
          <p className="fee-transition-sub">繳費後，你嘅通知書會進入 15 日公開展示期</p>
        </div>
      </div>
    );
  }

  return null;
}