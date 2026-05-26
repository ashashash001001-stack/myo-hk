import "./Cut.css";

interface Props { step: number; }

export function Cut({ step }: Props) {
  if (step === 0) return <div className="Cut step-0"><h2>車工 Cut</h2></div>;
  if (step === 1) return <div className="Cut step-1"><p>影響光芒閃爍程度。</p></div>;
  if (step === 2) return <div className="Cut step-2"><p>建議揀 Excellent 車工。</p></div>;
  return <div className="Cut final"><p>了解更多：myo-hk.github.io</p></div>;
}
