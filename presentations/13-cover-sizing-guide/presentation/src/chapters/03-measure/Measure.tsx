import "./Measure.css";

interface Props { step: number; }

export function Measure({ step }: Props) {
  if (step === 0) return <div className="Measure step-0"><h2>點樣量度</h2></div>;
  if (step === 1) return <div className="Measure step-1"><p>注意闊度同高度。</p></div>;
  if (step === 2) return <div className="Measure step-2"><p>預留少量空間方便放入取出。</p></div>;
  return <div className="Measure final"><p>了解更多：myo-hk.github.io</p></div>;
}
