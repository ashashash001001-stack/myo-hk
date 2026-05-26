import "./Myo.css";

interface Props { step: number; }

export function Myo({ step }: Props) {
  if (step === 0) return <div className="Myo step-0"><h2>My O! 證書套</h2></div>;
  if (step === 1) return <div className="Myo step-1"><p>尺寸精準，完美收納。</p></div>;
  if (step === 2) return <div className="Myo step-2"><p>多種材質同顏色選擇。</p></div>;
  return <div className="Myo final"><p>了解更多：myo-hk.github.io</p></div>;
}
