import "./Cta.css";
interface Props { step: number; }
export function Ch06({ step }: Props) {
  if (step === 0) return (
    <div className="Ch06 step-0"><h2>總結</h2></div>
  );
  if (step === 1) return (
    <div className="Ch06 step-1">steps summary</div>
  );
  if (step === 2) return (
    <div className="Ch06 step-2"><a href="https://myo-hk.github.io" target="_blank" rel="noopener noreferrer">myo-hk.github.io</a></div>
  );
  return <div className="Ch06 step-2">DEFAULT</div>;
}