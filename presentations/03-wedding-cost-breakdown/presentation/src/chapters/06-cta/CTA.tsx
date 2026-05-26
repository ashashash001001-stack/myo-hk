import "./CTA.css";
interface Props { step: number; }

const CATEGORIES = ["註冊費用", "婚戒預算", "攝影費用", "婚宴開支", "其他雜項"];

export function CTA({ step }: Props) {
  if (step === 0) return (
    <div className="cta step-0">
      <h2>🎯 總結</h2>
      <p>結婚開支分 5 大類</p>
    </div>
  );
  if (step === 1) return (
    <div className="cta steps-list">
      <h2>豐儉由人</h2>
      <div className="steps-col">
        {CATEGORIES.map((s, i) => (
          <div key={i} className="step-num">{i+1}. {s}</div>
        ))}
      </div>
      <p className="total-estimate">最平方案約 HK$100,000</p>
    </div>
  );
  return (
    <div className="cta final-cta">
      <h2>超過 400 篇香港婚禮教學文章</h2>
      <a href="https://myo-hk.github.io/" className="cta-link" target="_blank">myo-hk.github.io</a>
      <p className="cta-sub">睇更多慳錢貼士</p>
    </div>
  );
}