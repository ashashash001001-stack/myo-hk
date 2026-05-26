import "./CTA.css";
interface Props { step: number; }

const STEPS = ["確認資格", "準備文件", "交通知書", "揀場地", "婚禮+婚後"];

export function CTA({ step }: Props) {
  if (step === 0) return (
    <div className="cta step-0"><h2>🎯 總結</h2><p>籌備婚禮無難度，一步步嚟就得</p></div>
  );
  if (step === 1) return (
    <div className="cta steps-list">
      <h2>五步搞掂</h2>
      <div className="steps-col">
        {STEPS.map((s, i) => (
          <div key={i} className="step-num">{i+1}. {s}</div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="cta final-cta">
      <h2>超過 400 篇香港婚禮教學文章</h2>
      <a href="https://myo-hk.github.io/" className="cta-link" target="_blank">myo-hk.github.io</a>
      <p className="cta-sub">由籌備到婚後，一站式婚禮資訊</p>
    </div>
  );
}
