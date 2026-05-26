import "./Custom.css";

interface Props { step: number; }

export function Custom({ step }: Props) {
  if (step === 0) return <div className="Custom step-0"><h2>My O! 應用</h2></div>;
  if (step === 1) return <div className="Custom step-1"><p>確保每件產品都完美。</p></div>;
  if (step === 2) return <div className="Custom step-2"><p>提供多種客製化選項。</p></div>;
  return <div className="Custom final"><p>了解更多：myo-hk.github.io</p></div>;
}
