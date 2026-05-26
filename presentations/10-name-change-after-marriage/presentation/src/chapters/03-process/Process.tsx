import "./Process.css";

interface Props { step: number; }

export function Process({ step }: Props) {
  if (step === 0) return <div className="Process step-0"><h2>改名流程</h2></div>;
  if (step === 1) return <div className="Process step-1"><p>先去入境處辨理改名。</p></div>;
  if (step === 2) return <div className="Process step-2"><p>再通知各相關機構。</p></div>;
  return <div className="Process final"><p>了解更多：myo-hk.github.io</p></div>;
}
