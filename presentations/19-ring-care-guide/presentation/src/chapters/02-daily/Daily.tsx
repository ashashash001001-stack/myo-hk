import "./Daily.css";

interface Props { step: number; }

export function Daily({ step }: Props) {
  if (step === 0) return <div className="Daily step-0"><h2>日常護理</h2></div>;
  if (step === 1) return <div className="Daily step-1"><p>避免接觸化學品。</p></div>;
  if (step === 2) return <div className="Daily step-2"><p>佩戴時都要避免撞擊。</p></div>;
  return <div className="Daily final"><p>了解更多：myo-hk.github.io</p></div>;
}
