import "./Fitting.css";

interface Props { step: number; }

export function Fitting({ step }: Props) {
  if (step === 0) return <div className="Fitting step-0"><h2>試用測試</h2></div>;
  if (step === 1) return <div className="Fitting step-1"><p>確認尺寸啱啱好。</p></div>;
  if (step === 2) return <div className="Fitting step-2"><p>如果太緊可以聯絡我們。</p></div>;
  return <div className="Fitting final"><p>了解更多：myo-hk.github.io</p></div>;
}
