import "./Taiwan.css";

interface Props { step: number; }

export function Taiwan({ step }: Props) {
  if (step === 0) return <div className="Taiwan step-0"><h2>台灣</h2></div>;
  if (step === 1) return <div className="Taiwan step-1"><p>美食多、交通方便。</p></div>;
  if (step === 2) return <div className="Taiwan step-2"><p>適合預算有限嘅新人。</p></div>;
  return <div className="Taiwan final"><p>了解更多：myo-hk.github.io</p></div>;
}
