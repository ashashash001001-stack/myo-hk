import "./Hybrid.css";

interface Props { step: number; }

export function Hybrid({ step }: Props) {
  if (step === 0) return <div className="Hybrid step-0"><h2>混合方案</h2></div>;
  if (step === 1) return <div className="Hybrid step-1"><p>晚裝日後有機會著。</p></div>;
  if (step === 2) return <div className="Hybrid step-2"><p>平衡預算同實用性。</p></div>;
  return <div className="Hybrid final"><p>了解更多：myo-hk.github.io</p></div>;
}
