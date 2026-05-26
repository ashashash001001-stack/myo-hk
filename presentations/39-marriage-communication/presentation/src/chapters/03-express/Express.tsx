import "./Express.css";

interface Props { step: number; }

export function Express({ step }: Props) {
  if (step === 0) return <div className="Express step-0"><h2>表達感受</h2></div>;
  if (step === 1) return <div className="Express step-1"><p>例如：我感到傷心。</p></div>;
  if (step === 2) return <div className="Express step-2"><p>避免：你總係...。</p></div>;
  return <div className="Express final"><p>了解更多：myo-hk.github.io</p></div>;
}
