import "./CTA.css";

interface Props { step: number; }

export function CTA({ step }: Props) {
  if (step === 0) return <div className="CTA step-0"><h2>總結</h2></div>;
  if (step === 1) return <div className="CTA step-1"><p>209 × 298mm，記住呢個尺寸。</p></div>;
  if (step === 2) return <div className="CTA step-2"><p>去 myo-hk.github.io 睇證書套款式！</p></div>;
  return <div className="CTA final"><p>了解更多：myo-hk.github.io</p></div>;
}
