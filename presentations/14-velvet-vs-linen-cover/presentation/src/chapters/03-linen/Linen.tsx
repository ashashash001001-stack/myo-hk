import "./Linen.css";

interface Props { step: number; }

export function Linen({ step }: Props) {
  if (step === 0) return <div className="Linen step-0"><h2>亞麻布特點</h2></div>;
  if (step === 1) return <div className="Linen step-1"><p>外觀簡約時尚。</p></div>;
  if (step === 2) return <div className="Linen step-2"><p>適合日常展示。</p></div>;
  return <div className="Linen final"><p>了解更多：myo-hk.github.io</p></div>;
}
