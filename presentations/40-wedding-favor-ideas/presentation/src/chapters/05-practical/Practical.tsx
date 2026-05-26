import "./Practical.css";

interface Props { step: number; }

export function Practical({ step }: Props) {
  if (step === 0) return <div className="Practical step-0"><h2>實用類</h2></div>;
  if (step === 1) return <div className="Practical step-1"><p>鎖匙扣。</p></div>;
  if (step === 2) return <div className="Practical step-2"><p>小盆栽。</p></div>;
  return <div className="Practical final"><p>了解更多：myo-hk.github.io</p></div>;
}
