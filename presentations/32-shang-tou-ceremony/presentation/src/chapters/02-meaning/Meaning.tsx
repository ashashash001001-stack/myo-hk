import "./Meaning.css";

interface Props { step: number; }

export function Meaning({ step }: Props) {
  if (step === 0) return <div className="Meaning step-0"><h2>儀式意義</h2></div>;
  if (step === 1) return <div className="Meaning step-1"><p>祝福新人開枝散葉。</p></div>;
  if (step === 2) return <div className="Meaning step-2"><p>祈求美滿幸福。</p></div>;
  return <div className="Meaning final"><p>了解更多：myo-hk.github.io</p></div>;
}
