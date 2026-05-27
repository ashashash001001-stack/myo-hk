import "./Carat.css";

interface Props { step: number; }

export function Carat({ step }: Props) {
  if (step === 0) return <div className="Carat step-0"><h2>克拉 Carat</h2></div>;
  if (step === 1) return <div className="Carat step-1"><p>1 克拉 = 0.2 克。</p></div>;
  if (step === 2) return <div className="Carat step-2"><p>視乎預算，同等級越大越貴。</p></div>;
  if (step === 3) return <div className="Carat step-3"><p>額外步驟 1</p></div>;
if (step === 4) return <div className="Carat step-4"><p>額外步驟 2</p></div>;
if (step === 5) return <div className="Carat step-5"><p>額外步驟 3</p></div>;
if (step === 6) return <div className="Carat step-6"><p>額外步驟 4</p></div>;
if (step === 7) return <div className="Carat step-7"><p>額外步驟 5</p></div>;
return <div className="Carat final"><p>了解更多：myo-hk.github.io</p></div>;
}
