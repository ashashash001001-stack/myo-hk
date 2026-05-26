import "./Recommend.css";

interface Props { step: number; }

export function Recommend({ step }: Props) {
  if (step === 0) return <div className="Recommend step-0"><h2>My O! 建議</h2></div>;
  if (step === 1) return <div className="Recommend step-1"><p>如果你想要實用性：揀亞麻布。</p></div>;
  if (step === 2) return <div className="Recommend step-2"><p>兩款 My O! 都有高質量選擇。</p></div>;
  return <div className="Recommend final"><p>了解更多：myo-hk.github.io</p></div>;
}
