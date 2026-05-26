import "./Tips.css";

interface Props { step: number; }

const TIPS = [
  { icon: "📆", title: "提早半年", desc: "好日好快被搶，建議半年前就決定" },
  { icon: "🔢", title: "準備後備日期", desc: "最少準備 3 個後備日子，靈活安排" },
  { icon: "🏨", title: "先訂場地", desc: "揀好日之後，第一時間 book 場地" },
  { icon: "👨‍👩‍👧", title: "考慮家人", desc: "擇日都要考慮雙方家人嘅時間同意願" },
];

export function Tips({ step }: Props) {
  if (step < TIPS.length) {
    const t = TIPS[step];
    return (
      <div className="tips step-container">
        <div className="tip-icon">{t.icon}</div>
        <h2 className="tip-title">{t.title}</h2>
        <p className="tip-desc">{t.desc}</p>
      </div>
    );
  }
  return (
    <div className="tips step-container final">
      <h2>💡 擇日貼士總結</h2>
      <p>跟住呢幾個貼士，揀日就唔會頭痛</p>
    </div>
  );
}