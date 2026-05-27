import "./CTA.css";

interface Props { step: number; }

export function CTA({ step }: Props) {
  if (step === 0) return <div className="CTA step-0"><h2>總結</h2></div>;
  if (step === 1) return <div className="CTA step-1"><p>唔一定要大，提升車工更閃。</p></div>;
  if (step === 2) return <div className="CTA step-2"><p>去 myo-hk.github.io 睇更多！</p></div>;
  if (step === 3) return <div className="CTA step-3"><p>額外步驟 1</p></div>;
if (step === 4) return <div className="CTA step-4"><p>額外步驟 2</p></div>;
if (step === 5) return <div className="CTA step-5"><p>額外步驟 3</p></div>;
if (step === 6) return <div className="CTA step-6"><p>額外步驟 4</p></div>;
if (step === 7) return <div className="CTA step-7"><p>額外步驟 5</p></div>;
return <div className="CTA final"><p>了解更多：myo-hk.github.io</p></div>;
}
