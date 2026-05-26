import "./Modern.css";

interface Props { step: number; }

export function Modern({ step }: Props) {
  if (step === 0) return <div className="Modern step-0"><h2>現代睇法</h2></div>;
  if (step === 1) return <div className="Modern step-1"><p>唔需要太過介懷。</p></div>;
  if (step === 2) return <div className="Modern step-2"><p>開心最重要。</p></div>;
  return <div className="Modern final"><p>了解更多：myo-hk.github.io</p></div>;
}
