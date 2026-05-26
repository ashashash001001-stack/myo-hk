import "./Hotel.css";

interface Props { step: number; }

export function Hotel({ step }: Props) {
  if (step === 0) return <div className="Hotel step-0"><h2>酒店婚禮</h2></div>;
  if (step === 1) return <div className="Hotel step-1"><p>一站式服務，方便。</p></div>;
  if (step === 2) return <div className="Hotel step-2"><p>價錢較高但環境靚。</p></div>;
  return <div className="Hotel final"><p>了解更多：myo-hk.github.io</p></div>;
}
