import "./Avoid.css";

interface Props { step: number; }

export function Avoid({ step }: Props) {
  if (step === 0) return <div className="Avoid step-0"><h2>避免事項</h2></div>;
  if (step === 1) return <div className="Avoid step-1"><p>唔好壓喺其他衣物下面。</p></div>;
  if (step === 2) return <div className="Avoid step-2"><p>避免潮濕環境。</p></div>;
  return <div className="Avoid final"><p>了解更多：myo-hk.github.io</p></div>;
}
