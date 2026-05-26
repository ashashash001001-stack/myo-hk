import "./Process.css";
interface Props { step: number; }
export function Process({ step }: Props) {
  if (step === 0) return (
    <div className="Ch04 step-0"><h2>📋 登記流程</h2></div>
  );
  if (step === 1) return (
    <div className="Ch04 step-1">notice fee HK$305</div>
  );
  if (step === 2) return (
    <div className="Ch04 step-2">15‑day wait</div>
  );
  return <div className="Ch04 step-2">DEFAULT</div>;
}