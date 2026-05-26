import "./Cost3Photo.css";
interface Props { step: number; }

export function Cost3Photo({ step }: Props) {
  if (step === 0) return (
    <div className="cost3 step-0">
      <div className="hook-icon">📸</div>
      <h1 className="hook-text">攝影費用</h1>
      <p className="hook-sub">記錄大日子嘅重要投資</p>
    </div>
  );
  if (step === 1) return (
    <div className="cost3 step-1">
      <div className="big-number">$15,000 - 35,000</div>
      <h2>婚禮攝影套餐</h2>
      <p>包括攝影師 + 錄影</p>
    </div>
  );
  if (step === 2) return (
    <div className="cost3 step-2">
      <h2>套餐包括</h2>
      <div className="steps-col">
        <div className="step-num">📷 婚禮當日拍攝</div>
        <div className="step-num">🎞️ 後期製作</div>
        <div className="step-num">📖 實體相簿</div>
      </div>
    </div>
  );
  return <div className="cost3 final">📸</div>;
}