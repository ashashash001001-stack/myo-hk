import "./Linen.css";

interface Props { step: number; }

export function Linen({ step }: Props) {
  if (step === 0) return <div className="Linen step-0"><h2>亞麻布證書套</h2></div>;
  if (step === 1) return <div className="Linen step-1"><p>透氣舒適，適合日常使用。</p></div>;
  if (step === 2) return <div className="Linen step-2"><p>價錢適中，保養方便。</p></div>;
  return <div className="Linen final"><p>了解更多：myo-hk.github.io</p></div>;
}
