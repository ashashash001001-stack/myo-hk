import "./Outdoor.css";

interface Props { step: number; }

export function Outdoor({ step }: Props) {
  if (step === 0) return <div className="Outdoor step-0"><h2>戶外婚禮</h2></div>;
  if (step === 1) return <div className="Outdoor step-1"><p>海邊、花園都好浪漫。</p></div>;
  if (step === 2) return <div className="Outdoor step-2"><p>但要睇天氣。</p></div>;
  return <div className="Outdoor final"><p>了解更多：myo-hk.github.io</p></div>;
}
