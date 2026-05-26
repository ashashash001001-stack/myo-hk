import "./Debt.css";

interface Props { step: number; }

export function Debt({ step }: Props) {
  if (step === 0) return <div className="Debt step-0"><h2>債務管理</h2></div>;
  if (step === 1) return <div className="Debt step-1"><p>婚後債務共同承擔。</p></div>;
  if (step === 2) return <div className="Debt step-2"><p>建議提前傾清楚。</p></div>;
  return <div className="Debt final"><p>了解更多：myo-hk.github.io</p></div>;
}
