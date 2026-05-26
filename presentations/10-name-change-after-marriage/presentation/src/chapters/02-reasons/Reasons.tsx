import "./Reasons.css";

interface Props { step: number; }

export function Reasons({ step }: Props) {
  if (step === 0) return <div className="Reasons step-0"><h2>改名原因</h2></div>;
  if (step === 1) return <div className="Reasons step-1"><p>有人因為傳統，有人因為方便。</p></div>;
  if (step === 2) return <div className="Reasons step-2"><p>亦有人選擇保持自己嘅姓氏。</p></div>;
  return <div className="Reasons final"><p>了解更多：myo-hk.github.io</p></div>;
}
