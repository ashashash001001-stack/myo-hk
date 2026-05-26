import "./Coldopen.css";
interface Props { step: number; }

export function Coldopen({ step }: Props) {
  if (step === 0) return (
    <div className="coldopen step-0">
      <div className="hook-icon">💰</div>
      <h1 className="hook-text">結婚要幾錢？</h1>
      <p className="hook-sub">逐項拆解結婚開支</p>
    </div>
  );
  if (step === 1) return (
    <div className="coldopen step-1">
      <div className="big-number">36 萬</div>
      <h2>結婚平均開支</h2>
      <p>2024 年最新數據</p>
    </div>
  );
  if (step === 2) return (
    <div className="coldopen step-2">
      <h2>5 大開支類別</h2>
      <div className="preview-grid">
        {["註冊", "婚戒", "攝影", "婚宴", "其他"].map((item, i) => (
          <div key={i} className="preview-card">{item}</div>
        ))}
      </div>
    </div>
  );
  return <div className="coldopen final">💰</div>;
}