import "./Advice.css";

interface Props { step: number; }

export function Advice({ step }: Props) {
  if (step === 0) return <div className="Advice step-0"><h2>過大禮貼士</h2></div>;
  if (step === 1) return <div className="Advice step-1"><p>了解雙方習俗。</p></div>;
  if (step === 2) return <div className="Advice step-2"><p>保持輕鬆心情。</p></div>;
  return <div className="Advice final"><p>了解更多：myo-hk.github.io</p></div>;
}
