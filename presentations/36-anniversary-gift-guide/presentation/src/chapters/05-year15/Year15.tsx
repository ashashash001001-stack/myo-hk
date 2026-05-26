import "./Year15.css";

interface Props { step: number; }

export function Year15({ step }: Props) {
  if (step === 0) return <div className="Year15 step-0"><h2>第十五年水晶婚</h2></div>;
  if (step === 1) return <div className="Year15 step-1"><p>可以送水晶製品。</p></div>;
  if (step === 2) return <div className="Year15 step-2"><p>象徵晶瑩剔透。</p></div>;
  return <div className="Year15 final"><p>了解更多：myo-hk.github.io</p></div>;
}
