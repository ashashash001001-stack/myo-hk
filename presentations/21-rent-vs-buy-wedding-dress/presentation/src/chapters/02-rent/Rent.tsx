import "./Rent.css";

interface Props { step: number; }

export function Rent({ step }: Props) {
  if (step === 0) return <div className="Rent step-0"><h2>租用婚紗</h2></div>;
  if (step === 1) return <div className="Rent step-1"><p>香港婚紗租賃約 HK$3,000-10,000。</p></div>;
  if (step === 2) return <div className="Rent step-2"><p>選擇多，款式新。</p></div>;
  return <div className="Rent final"><p>了解更多：myo-hk.github.io</p></div>;
}
