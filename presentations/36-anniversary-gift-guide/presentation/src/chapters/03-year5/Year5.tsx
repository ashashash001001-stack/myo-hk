import "./Year5.css";

interface Props { step: number; }

export function Year5({ step }: Props) {
  if (step === 0) return <div className="Year5 step-0"><h2>第五年木婚</h2></div>;
  if (step === 1) return <div className="Year5 step-1"><p>可以送木製家具。</p></div>;
  if (step === 2) return <div className="Year5 step-2"><p>或者首飾。</p></div>;
  return <div className="Year5 final"><p>了解更多：myo-hk.github.io</p></div>;
}
