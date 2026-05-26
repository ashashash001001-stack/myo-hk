import "./Classic.css";

interface Props { step: number; }

export function Classic({ step }: Props) {
  if (step === 0) return <div className="Classic step-0"><h2>經典款式</h2></div>;
  if (step === 1) return <div className="Classic step-1"><p>適合正式婚禮。</p></div>;
  if (step === 2) return <div className="Classic step-2"><p>黑色尾碼最經典。</p></div>;
  return <div className="Classic final"><p>了解更多：myo-hk.github.io</p></div>;
}
