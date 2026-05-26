import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  switch (step) {
    case 0: return (
      <div className="coldopen step-0">
        <div className="hook-icon">📅</div>
        <h1 className="hook-text">結婚擇日，你識幾多？</h1>
        <p className="hook-sub">由傳統習俗到現代方法，搵出最啱你嘅大日子</p>
      </div>
    );
    case 1: return (
      <div className="coldopen step-1">
        <div className="big-number">擇日</div>
        <h2>唔係淨係睇通勝咁簡單</h2>
        <p>傳統擇日背後有一套完整嘅學問</p>
      </div>
    );
    case 2: return (
      <div className="coldopen step-2">
        <h2>今日你會學到</h2>
        <div className="preview-grid">
          {["點解要擇日", "擇日方法", "2025好日", "實用貼士"].map((item, i) => (
            <div key={i} className="preview-card">{item}</div>
          ))}
        </div>
      </div>
    );
    default: return null;
  }
}