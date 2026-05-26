import "./Hair.css";

interface Props { step: number; }

export function Hair({ step }: Props) {
  if (step === 0) return <div className="Hair step-0"><h2>髮型設計</h2></div>;
  if (step === 1) return <div className="Hair step-1"><p>長髮可以set，短髮可以夾。</p></div>;
  if (step === 2) return <div className="Hair step-2"><p>鮮花配飾增加氣質。</p></div>;
  return <div className="Hair final"><p>了解更多：myo-hk.github.io</p></div>;
}
