import "./Dress.css";

interface Props { step: number; }

export function Dress({ step }: Props) {
  if (step === 0) return <div className="Dress step-0"><h2>著裝注意</h2></div>;
  if (step === 1) return <div className="Dress step-1"><p>婚紗長裙拖尾要注意。</p></div>;
  if (step === 2) return <div className="Dress step-2"><p>避免過份暴露。</p></div>;
  return <div className="Dress final"><p>了解更多：myo-hk.github.io</p></div>;
}
