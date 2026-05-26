import "./Savings.css";

interface Props { step: number; }

export function Savings({ step }: Props) {
  if (step === 0) return <div className="Savings step-0"><h2>儲蓄計劃</h2></div>;
  if (step === 1) return <div className="Savings step-1"><p>為將來打算。</p></div>;
  if (step === 2) return <div className="Savings step-2"><p>置業、生育等。</p></div>;
  return <div className="Savings final"><p>了解更多：myo-hk.github.io</p></div>;
}
