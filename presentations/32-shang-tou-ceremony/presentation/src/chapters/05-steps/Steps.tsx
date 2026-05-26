import "./Steps.css";

interface Props { step: number; }

export function Steps({ step }: Props) {
  if (step === 0) return <div className="Steps step-0"><h2>儀式步驟</h2></div>;
  if (step === 1) return <div className="Steps step-1"><p>由家長梳頭。</p></div>;
  if (step === 2) return <div className="Steps step-2"><p>邊梳邊講吉祥語。</p></div>;
  return <div className="Steps final"><p>了解更多：myo-hk.github.io</p></div>;
}
