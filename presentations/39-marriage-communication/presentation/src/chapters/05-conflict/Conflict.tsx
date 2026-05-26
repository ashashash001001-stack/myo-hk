import "./Conflict.css";

interface Props { step: number; }

export function Conflict({ step }: Props) {
  if (step === 0) return <div className="Conflict step-0"><h2>處理衝突</h2></div>;
  if (step === 1) return <div className="Conflict step-1"><p>避免火爆時爭吵。</p></div>;
  if (step === 2) return <div className="Conflict step-2"><p>尋找共識。</p></div>;
  return <div className="Conflict final"><p>了解更多：myo-hk.github.io</p></div>;
}
