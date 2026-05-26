import "./Budget.css";

interface Props { step: number; }

export function Budget({ step }: Props) {
  if (step === 0) return <div className="Budget step-0"><h2>家庭預算</h2></div>;
  if (step === 1) return <div className="Budget step-1"><p>儲蓄目標。</p></div>;
  if (step === 2) return <div className="Budget step-2"><p>控制不必要消費。</p></div>;
  return <div className="Budget final"><p>了解更多：myo-hk.github.io</p></div>;
}
