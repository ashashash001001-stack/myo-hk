import "./Why.css";

interface Props { step: number; }

const REASONS = [
  { icon: "🙏", title: "傳統習俗", desc: "華人社會重視良辰吉日，擇日係對雙方家庭嘅尊重" },
  { icon: "💑", title: "婚姻美滿", desc: "好日寓意新人白頭到老，家庭和睦" },
  { icon: "👨‍👩‍👧‍👦", title: "長輩安心", desc: "揀個好日，令雙方家長都放心滿意" },
  { icon: "📈", title: "趨吉避凶", desc: "避開沖煞，為婚姻開個好頭" },
];

export function Why({ step }: Props) {
  if (step < REASONS.length) {
    const r = REASONS[step];
    return (
      <div className="why step-container">
        <div className="reason-icon">{r.icon}</div>
        <h2 className="reason-title">{r.title}</h2>
        <p className="reason-desc">{r.desc}</p>
      </div>
    );
  }
  return (
    <div className="why step-container final">
      <h2>✅ 擇日唔係迷信</h2>
      <p>而係對婚姻一份美好嘅祝福同期盼</p>
    </div>
  );
}