import "./Cost4Banquet.css";
interface Props { step: number; }

export function Cost4Banquet({ step }: Props) {
  if (step === 0) return (
    <div className="cost4 step-0">
      <div className="hook-icon">🍽️</div>
      <h1 className="hook-text">婚宴開支</h1>
      <p className="hook-sub">最大筆開支</p>
    </div>
  );
  if (step === 1) return (
    <div className="cost4 step-1">
      <div className="big-number">$10,000 - 15,000</div>
      <h2>酒店婚宴</h2>
      <p>每圍價錢</p>
    </div>
  );
  if (step === 2) return (
    <div className="cost4 step-2">
      <h2>酒店 vs 酒樓</h2>
      <div className="comparison">
        <div className="compare-item">
          <span className="compare-label">🏨 酒店</span>
          <span className="compare-value">HK$10,000 - 15,000</span>
        </div>
        <div className="compare-item">
          <span className="compare-label">🥟 酒樓</span>
          <span className="compare-value">HK$6,000 - 10,000</span>
        </div>
      </div>
    </div>
  );
  return <div className="cost4 final">🍽️</div>;
}