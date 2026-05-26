import "./Fashion.css";

interface Props { step: number; }

export function Fashion({ step }: Props) {
  if (step === 0) return <div className="Fashion step-0"><h2>時尚風格</h2></div>;
  if (step === 1) return <div className="Fashion step-1"><p>適合有風格嘅新人。</p></div>;
  if (step === 2) return <div className="Fashion step-2"><p>畫面有質感。</p></div>;
  return <div className="Fashion final"><p>了解更多：myo-hk.github.io</p></div>;
}
