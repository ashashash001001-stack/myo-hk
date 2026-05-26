import "./Mix.css";

interface Props { step: number; }

export function Mix({ step }: Props) {
  if (step === 0) return <div className="Mix step-0"><h2>混合風格</h2></div>;
  if (step === 1) return <div className="Mix step-1"><p>傳統加紀實互補。</p></div>;
  if (step === 2) return <div className="Mix step-2"><p>最穩妥嘅選擇。</p></div>;
  return <div className="Mix final"><p>了解更多：myo-hk.github.io</p></div>;
}
