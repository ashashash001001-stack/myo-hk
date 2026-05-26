import "./Weekly.css";

interface Props { step: number; }

export function Weekly({ step }: Props) {
  if (step === 0) return <div className="Weekly step-0"><h2>每週傾偈</h2></div>;
  if (step === 1) return <div className="Weekly step-1"><p>分享一周大小事。</p></div>;
  if (step === 2) return <div className="Weekly step-2"><p>避免只係得家務傾計。</p></div>;
  return <div className="Weekly final"><p>了解更多：myo-hk.github.io</p></div>;
}
