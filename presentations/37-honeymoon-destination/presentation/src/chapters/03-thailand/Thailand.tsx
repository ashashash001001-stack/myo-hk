import "./Thailand.css";

interface Props { step: number; }

export function Thailand({ step }: Props) {
  if (step === 0) return <div className="Thailand step-0"><h2>泰國</h2></div>;
  if (step === 1) return <div className="Thailand step-1"><p>陽光海灘。</p></div>;
  if (step === 2) return <div className="Thailand step-2"><p>消費便宜。</p></div>;
  return <div className="Thailand final"><p>了解更多：myo-hk.github.io</p></div>;
}
