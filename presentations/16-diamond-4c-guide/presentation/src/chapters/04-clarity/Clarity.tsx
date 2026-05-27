import "./Clarity.css";

interface Props { step: number; }

export function Clarity({ step }: Props) {
  if (step === 0) return <div className="Clarity step-0"><h2>淨度 Clarity</h2></div>;
  if (step === 1) return <div className="Clarity step-1"><p>IF-VS2 肉眼睇唔到雜質。</p></div>;
  if (step === 2) return <div className="Clarity step-2"><p>SI 系列係入門之選。</p></div>;
  if (step === 3) return <div className="Clarity step-3"><p>額外步驟 1</p></div>;
if (step === 4) return <div className="Clarity step-4"><p>額外步驟 2</p></div>;
if (step === 5) return <div className="Clarity step-5"><p>額外步驟 3</p></div>;
if (step === 6) return <div className="Clarity step-6"><p>額外步驟 4</p></div>;
if (step === 7) return <div className="Clarity step-7"><p>額外步驟 5</p></div>;
return <div className="Clarity final"><p>了解更多：myo-hk.github.io</p></div>;
}
