import "./Comparison.css";

interface Props { step: number; }

export function Comparison({ step }: Props) {
  if (step === 0) return <div className="Comparison step-0"><h2>兩者比較</h2></div>;
  if (step === 1) return <div className="Comparison step-1"><p>亞麻布： 舒適但外觀一般。</p></div>;
  if (step === 2) return <div className="Comparison step-2"><p>視乎你嘅需要同偏好。</p></div>;
  return <div className="Comparison final"><p>了解更多：myo-hk.github.io</p></div>;
}
