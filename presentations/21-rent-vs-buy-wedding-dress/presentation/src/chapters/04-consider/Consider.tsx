import "./Consider.css";

interface Props { step: number; }

export function Consider({ step }: Props) {
  if (step === 0) return <div className="Consider step-0"><h2>考慮因素</h2></div>;
  if (step === 1) return <div className="Consider step-1"><p>如果你重視收藏價值，考慮買。</p></div>;
  if (step === 2) return <div className="Consider step-2"><p>如果只係著一次，租就可以。</p></div>;
  return <div className="Consider final"><p>了解更多：myo-hk.github.io</p></div>;
}
