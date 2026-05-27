import "./Cut.css";

interface Props { step: number; }

export function Cut({ step }: Props) {
  if (step === 0) return <div className="Cut step-0"><h2>車工 Cut</h2></div>;
  if (step === 1) return <div className="Cut step-1"><p>影響光芒閃爍程度。</p></div>;
  if (step === 2) return <div className="Cut step-2"><p>建議揀 Excellent 車工。</p></div>;
  if (step === 3) return <div className="Cut step-3"><p>額外步驟 1</p></div>;
if (step === 4) return <div className="Cut step-4"><p>額外步驟 2</p></div>;
if (step === 5) return <div className="Cut step-5"><p>額外步驟 3</p></div>;
if (step === 6) return <div className="Cut step-6"><p>額外步驟 4</p></div>;
if (step === 7) return <div className="Cut step-7"><p>額外步驟 5</p></div>;
return <div className="Cut final"><p>了解更多：myo-hk.github.io</p></div>;
}
