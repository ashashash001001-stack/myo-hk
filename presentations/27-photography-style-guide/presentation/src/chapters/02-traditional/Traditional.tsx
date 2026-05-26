import "./Traditional.css";

interface Props { step: number; }

export function Traditional({ step }: Props) {
  if (step === 0) return <div className="Traditional step-0"><h2>傳統風格</h2></div>;
  if (step === 1) return <div className="Traditional step-1"><p>親友大合照必備。</p></div>;
  if (step === 2) return <div className="Traditional step-2"><p>確保每個人都影到。</p></div>;
  return <div className="Traditional final"><p>了解更多：myo-hk.github.io</p></div>;
}
