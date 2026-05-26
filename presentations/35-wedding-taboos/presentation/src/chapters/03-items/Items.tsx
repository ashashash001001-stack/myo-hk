import "./Items.css";

interface Props { step: number; }

export function Items({ step }: Props) {
  if (step === 0) return <div className="Items step-0"><h2>物品禁忌</h2></div>;
  if (step === 1) return <div className="Items step-1"><p>避免送傘。</p></div>;
  if (step === 2) return <div className="Items step-2"><p>避免送綠色野。</p></div>;
  return <div className="Items final"><p>了解更多：myo-hk.github.io</p></div>;
}
