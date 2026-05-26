import "./Weather.css";

interface Props { step: number; }

export function Weather({ step }: Props) {
  if (step === 0) return <div className="Weather step-0"><h2>天氣應對</h2></div>;
  if (step === 1) return <div className="Weather step-1"><p>夏天準備風扇同埋防晒。</p></div>;
  if (step === 2) return <div className="Weather step-2"><p>雨季带遮。</p></div>;
  return <div className="Weather final"><p>了解更多：myo-hk.github.io</p></div>;
}
