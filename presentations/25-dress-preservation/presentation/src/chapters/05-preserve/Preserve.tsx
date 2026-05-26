import "./Preserve.css";

interface Props { step: number; }

export function Preserve({ step }: Props) {
  if (step === 0) return <div className="Preserve step-0"><h2>專業保存</h2></div>;
  if (step === 1) return <div className="Preserve step-1"><p>真空保存最徹底。</p></div>;
  if (step === 2) return <div className="Preserve step-2"><p>視乎你嘅保存目的。</p></div>;
  return <div className="Preserve final"><p>了解更多：myo-hk.github.io</p></div>;
}
