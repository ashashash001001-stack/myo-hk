import "./CTA.css";

interface Props { step: number; }

export function CTA({ step }: Props) {
  if (step === 0) return <div className="CTA step-0"><h2>總結</h2></div>;
  if (step === 1) return <div className="CTA step-1"><p>根據雙方習俗進行。</p></div>;
  if (step === 2) return <div className="CTA step-2"><p>去 myo-hk.github.io 睇更多！</p></div>;
  return <div className="CTA final"><p>了解更多：myo-hk.github.io</p></div>;
}
