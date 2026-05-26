import "./threeMonths.css";

interface Props { step: number; }

export function threeMonths({ step }: Props) {
  if (step === 0) return <div className="3months step-0"><h2>3 個月前</h2></div>;
  if (step === 1) return <div className="3months step-1"><p>開始美白療程。</p></div>;
  if (step === 2) return <div className="3months step-2"><p>確保皮膚狀態穩定。</p></div>;
  return <div className="3months final"><p>了解更多：myo-hk.github.io</p></div>;
}
