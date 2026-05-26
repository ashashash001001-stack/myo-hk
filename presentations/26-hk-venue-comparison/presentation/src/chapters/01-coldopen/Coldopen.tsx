import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  if (step === 0) return <div className="Coldopen step-0"><h2>香港婚禮場地</h2></div>;
  if (step === 1) return <div className="Coldopen step-1"><p>價錢同特點係點？</p></div>;
  if (step === 2) return <div className="Coldopen step-2"><p>今日為你比較。</p></div>;
  return <div className="Coldopen final"><p>了解更多：myo-hk.github.io</p></div>;
}
