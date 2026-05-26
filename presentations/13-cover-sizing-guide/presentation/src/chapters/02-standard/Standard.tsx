import "./Standard.css";

interface Props { step: number; }

export function Standard({ step }: Props) {
  if (step === 0) return <div className="Standard step-0"><h2>標準尺寸</h2></div>;
  if (step === 1) return <div className="Standard step-1"><p>My O! 證書套完美配合。</p></div>;
  if (step === 2) return <div className="Standard step-2"><p>預留足夠空間保護證書。</p></div>;
  return <div className="Standard final"><p>了解更多：myo-hk.github.io</p></div>;
}
