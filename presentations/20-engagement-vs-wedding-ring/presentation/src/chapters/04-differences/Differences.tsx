import "./Differences.css";

interface Props { step: number; }

export function Differences({ step }: Props) {
  if (step === 0) return <div className="Differences step-0"><h2>兩者分別</h2></div>;
  if (step === 1) return <div className="Differences step-1"><p>結婚戒：一對，簡約設計。</p></div>;
  if (step === 2) return <div className="Differences step-2"><p>可以係唔同風格。</p></div>;
  return <div className="Differences final"><p>了解更多：myo-hk.github.io</p></div>;
}
