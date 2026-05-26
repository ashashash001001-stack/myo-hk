import "./Carat.css";

interface Props { step: number; }

export function Carat({ step }: Props) {
  if (step === 0) return <div className="Carat step-0"><h2>克拉 Carat</h2></div>;
  if (step === 1) return <div className="Carat step-1"><p>1 克拉 = 0.2 克。</p></div>;
  if (step === 2) return <div className="Carat step-2"><p>視乎預算，同等級越大越貴。</p></div>;
  return <div className="Carat final"><p>了解更多：myo-hk.github.io</p></div>;
}
