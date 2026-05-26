import "./Listen.css";

interface Props { step: number; }

export function Listen({ step }: Props) {
  if (step === 0) return <div className="Listen step-0"><h2>聆聽技巧</h2></div>;
  if (step === 1) return <div className="Listen step-1"><p>唔好打斷對方。</p></div>;
  if (step === 2) return <div className="Listen step-2"><p>嘗試理解對方立場。</p></div>;
  return <div className="Listen final"><p>了解更多：myo-hk.github.io</p></div>;
}
