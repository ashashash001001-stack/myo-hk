import "./Modern.css";

interface Props { step: number; }

export function Modern({ step }: Props) {
  if (step === 0) return <div className="Modern step-0"><h2>現代做法</h2></div>;
  if (step === 1) return <div className="Modern step-1"><p>視乎雙方家庭。</p></div>;
  if (step === 2) return <div className="Modern step-2"><p>心意緊要，唔需要太介懷。</p></div>;
  return <div className="Modern final"><p>了解更多：myo-hk.github.io</p></div>;
}
