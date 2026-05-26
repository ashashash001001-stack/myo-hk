import "./Logistics.css";

interface Props { step: number; }

export function Logistics({ step }: Props) {
  if (step === 0) return <div className="Logistics step-0"><h2>物流安排</h2></div>;
  if (step === 1) return <div className="Logistics step-1"><p>音響設備要測試。</p></div>;
  if (step === 2) return <div className="Logistics step-2"><p>食物保溫措施。</p></div>;
  return <div className="Logistics final"><p>了解更多：myo-hk.github.io</p></div>;
}
