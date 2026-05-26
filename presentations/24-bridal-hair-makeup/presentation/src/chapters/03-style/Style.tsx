import "./Style.css";

interface Props { step: number; }

export function Style({ step }: Props) {
  if (step === 0) return <div className="Style step-0"><h2>風格選擇</h2></div>;
  if (step === 1) return <div className="Style step-1"><p>韓式妝容係熱門選擇。</p></div>;
  if (step === 2) return <div className="Style step-2"><p>要配合婚紗風格。</p></div>;
  return <div className="Style final"><p>了解更多：myo-hk.github.io</p></div>;
}
