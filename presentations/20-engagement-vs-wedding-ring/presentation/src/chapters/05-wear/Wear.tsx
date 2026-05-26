import "./Wear.css";

interface Props { step: number; }

export function Wear({ step }: Props) {
  if (step === 0) return <div className="Wear step-0"><h2>佩戴方式</h2></div>;
  if (step === 1) return <div className="Wear step-1"><p>或者求婚戒套喺結婚戒外面。</p></div>;
  if (step === 2) return <div className="Wear step-2"><p>視乎你嘅喜好。</p></div>;
  return <div className="Wear final"><p>了解更多：myo-hk.github.io</p></div>;
}
