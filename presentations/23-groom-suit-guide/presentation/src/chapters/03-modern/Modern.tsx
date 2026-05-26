import "./Modern.css";

interface Props { step: number; }

export function Modern({ step }: Props) {
  if (step === 0) return <div className="Modern step-0"><h2>時尚款式</h2></div>;
  if (step === 1) return <div className="Modern step-1"><p>深藍色、酒紅色都好好睇。</p></div>;
  if (step === 2) return <div className="Modern step-2"><p>適合主題婚禮。</p></div>;
  return <div className="Modern final"><p>了解更多：myo-hk.github.io</p></div>;
}
