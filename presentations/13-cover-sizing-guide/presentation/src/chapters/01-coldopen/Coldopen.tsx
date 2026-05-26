import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  if (step === 0) return <div className="Coldopen step-0"><h2>證書套尺寸</h2></div>;
  if (step === 1) return <div className="Coldopen step-1"><p>太大或太小都會影響外觀。</p></div>;
  if (step === 2) return <div className="Coldopen step-2"><p>今日教你點樣揀岩嘅尺寸。</p></div>;
  return <div className="Coldopen final"><p>了解更多：myo-hk.github.io</p></div>;
}
