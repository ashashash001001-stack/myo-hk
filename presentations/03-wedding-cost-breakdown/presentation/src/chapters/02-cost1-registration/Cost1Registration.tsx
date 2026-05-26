import "./Cost1Registration.css";
interface Props { step: number; }

export function Cost1Registration({ step }: Props) {
  if (step === 0) return (
    <div className="cost1 step-0">
      <div className="hook-icon">📄</div>
      <h1 className="hook-text">註冊費用</h1>
      <p className="hook-sub">最基本嘅開支</p>
    </div>
  );
  if (step === 1) return (
    <div className="cost1 step-1">
      <div className="big-number">HK$305</div>
      <h2>擬結婚通知書</h2>
      <p>登記處費用 HK$715</p>
    </div>
  );
  if (step === 2) return (
    <div className="cost1 step-2">
      <h2>監禮人費用</h2>
      <div className="comparison">
        <div className="compare-item">
          <span className="compare-label">登記處</span>
          <span className="compare-value">HK$715</span>
        </div>
        <div className="compare-item">
          <span className="compare-label">監禮人</span>
          <span className="compare-value">HK$2,000 - 5,000</span>
        </div>
      </div>
    </div>
  );
  return <div className="cost1 final">📄</div>;
}