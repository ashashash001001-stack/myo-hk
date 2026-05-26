import "./Prep.css";

interface Props { step: number; }

export function Prep({ step }: Props) {
  if (step === 0) return <div className="Prep step-0"><h2>準備時刻</h2></div>;
  if (step === 1) return <div className="Prep step-1"><p>著好婚紗準備出門。</p></div>;
  if (step === 2) return <div className="Prep step-2"><p>父母幫手整理裙褂。</p></div>;
  return <div className="Prep final"><p>了解更多：myo-hk.github.io</p></div>;
}
