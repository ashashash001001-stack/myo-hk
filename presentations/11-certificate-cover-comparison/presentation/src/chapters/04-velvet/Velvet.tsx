import "./Velvet.css";

interface Props { step: number; }

export function Velvet({ step }: Props) {
  if (step === 0) return <div className="Velvet step-0"><h2>絨布證書套</h2></div>;
  if (step === 1) return <div className="Velvet step-1"><p>手感柔軟，保護性強。</p></div>;
  if (step === 2) return <div className="Velvet step-2"><p>適合特別場合使用。</p></div>;
  return <div className="Velvet final"><p>了解更多：myo-hk.github.io</p></div>;
}
