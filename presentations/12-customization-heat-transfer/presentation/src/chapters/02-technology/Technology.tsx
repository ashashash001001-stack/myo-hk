import "./Technology.css";

interface Props { step: number; }

export function Technology({ step }: Props) {
  if (step === 0) return <div className="Technology step-0"><h2>熱轉印原理</h2></div>;
  if (step === 1) return <div className="Technology step-1"><p>圖案永不褪色。</p></div>;
  if (step === 2) return <div className="Technology step-2"><p>色彩鮮艷、細節分明。</p></div>;
  return <div className="Technology final"><p>了解更多：myo-hk.github.io</p></div>;
}
