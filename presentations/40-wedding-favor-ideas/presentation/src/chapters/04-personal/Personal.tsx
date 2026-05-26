import "./Personal.css";

interface Props { step: number; }

export function Personal({ step }: Props) {
  if (step === 0) return <div className="Personal step-0"><h2>個人化</h2></div>;
  if (step === 1) return <div className="Personal step-1"><p>小首飾。</p></div>;
  if (step === 2) return <div className="Personal step-2"><p>即影即有相片。</p></div>;
  return <div className="Personal final"><p>了解更多：myo-hk.github.io</p></div>;
}
