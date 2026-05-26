import "./Clarity.css";

interface Props { step: number; }

export function Clarity({ step }: Props) {
  if (step === 0) return <div className="Clarity step-0"><h2>淨度 Clarity</h2></div>;
  if (step === 1) return <div className="Clarity step-1"><p>IF-VS2 肉眼睇唔到雜質。</p></div>;
  if (step === 2) return <div className="Clarity step-2"><p>SI 系列係入門之選。</p></div>;
  return <div className="Clarity final"><p>了解更多：myo-hk.github.io</p></div>;
}
