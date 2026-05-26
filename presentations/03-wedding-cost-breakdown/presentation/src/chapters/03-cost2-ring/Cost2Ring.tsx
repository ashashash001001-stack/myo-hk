import "./Cost2Ring.css";
interface Props { step: number; }

export function Cost2Ring({ step }: Props) {
  if (step === 0) return (
    <div className="cost2 step-0">
      <div className="hook-icon">💍</div>
      <h1 className="hook-text">婚戒預算</h1>
      <p className="hook-sub">新人最重視嘅開支之一</p>
    </div>
  );
  if (step === 1) return (
    <div className="cost2 step-1">
      <div className="big-number">$10,000 - 50,000</div>
      <h2>一對結婚戒指</h2>
      <p>視乎款式同品牌</p>
    </div>
  );
  if (step === 2) return (
    <div className="cost2 step-2">
      <h2>鑽石 vs 素戒</h2>
      <div className="comparison">
        <div className="compare-item">
          <span className="compare-label">💎 鑽石戒指</span>
          <span className="compare-value">視乎 4C 級別</span>
        </div>
        <div className="compare-item">
          <span className="compare-label">⭕ 素色戒指</span>
          <span className="compare-value">約 HK$5,000 起</span>
        </div>
      </div>
    </div>
  );
  return <div className="cost2 final">💍</div>;
}