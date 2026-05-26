import "./Process.css";

interface Props { step: number; }

export function Process({ step }: Props) {
  if (step === 0) return <div className="Process step-0"><h2>過程習俗</h2></div>;
  if (step === 1) return <div className="Process step-1"><p>女家點收並回禮。</p></div>;
  if (step === 2) return <div className="Process step-2"><p>儀式完成後大家一起食。</p></div>;
  return <div className="Process final"><p>了解更多：myo-hk.github.io</p></div>;
}
