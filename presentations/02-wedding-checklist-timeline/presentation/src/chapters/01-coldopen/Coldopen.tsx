import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  switch (step) {
    case 0: return (
      <div className="coldopen step-0">
        <div className="hook-icon">💍</div>
        <h1 className="hook-text">結婚，你準備好未？</h1>
        <p className="hook-sub">由決定到行禮，一個完整嘅時間表</p>
      </div>
    );
    case 1: return (
      <div className="coldopen step-1">
        <div className="big-number">12</div>
        <h2>個月嘅籌備旅程</h2>
        <p>由決定結婚到正式行禮，每一步都要好好規劃</p>
      </div>
    );
    case 2: return (
      <div className="coldopen step-2">
        <h2>今日你會學到</h2>
        <div className="preview-grid">
          {["時間表", "費用預算", "場地選擇", "供應商", "註冊程序", "婚後事項"].map((item, i) => (
            <div key={i} className="preview-card">{item}</div>
          ))}
        </div>
      </div>
    );
    default: return null;
  }
}
