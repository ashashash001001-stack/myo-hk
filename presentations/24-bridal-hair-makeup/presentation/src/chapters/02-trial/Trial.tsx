import "./Trial.css";

interface Props { step: number; }

export function Trial({ step }: Props) {
  if (step === 0) return <div className="Trial step-0"><h2>試妝時間</h2></div>;
  if (step === 1) return <div className="Trial step-1"><p>試多幾個風格。</p></div>;
  if (step === 2) return <div className="Trial step-2"><p>確認最終造型。</p></div>;
  return <div className="Trial final"><p>了解更多：myo-hk.github.io</p></div>;
}
