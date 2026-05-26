import "./Future.css";
interface Props { step: number; }
export function Future({ step }: Props) {
  if (step === 0) return <div className="Future step-0"><h2>未來會點發展？</h2></div>;
  if (step === 1) return <div className="Future step-1"><p>社會對同婚嘅討論持續。</p></div>;
  if (step === 2) return <div className="Future step-2"><p>最終要由立法決定。</p></div>;
  return null;
}
