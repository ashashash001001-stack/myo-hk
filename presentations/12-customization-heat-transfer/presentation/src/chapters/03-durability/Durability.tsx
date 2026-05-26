import "./Durability.css";

interface Props { step: number; }

export function Durability({ step }: Props) {
  if (step === 0) return <div className="Durability step-0"><h2>耐久性</h2></div>;
  if (step === 1) return <div className="Durability step-1"><p>不易脫落、龜裂。</p></div>;
  if (step === 2) return <div className="Durability step-2"><p>可以保存多年不變。</p></div>;
  return <div className="Durability final"><p>了解更多：myo-hk.github.io</p></div>;
}
