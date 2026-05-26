import "./Accessories.css";

interface Props { step: number; }

export function Accessories({ step }: Props) {
  if (step === 0) return <div className="Accessories step-0"><h2>配飾選擇</h2></div>;
  if (step === 1) return <div className="Accessories step-1"><p>袋巾、胸針可加分。</p></div>;
  if (step === 2) return <div className="Accessories step-2"><p>腰封適合傳統場合。</p></div>;
  return <div className="Accessories final"><p>了解更多：myo-hk.github.io</p></div>;
}
