import "./Requirements.css";
interface Props { step: number; }
export function Ch02({ step }: Props) {
  if (step === 0) return (
    <div className="Ch02 step-0"><h2>✓ 資格要求</h2></div>
  );
  if (step === 1) return (
    <div className="Ch02 step-1">any nationality</div>
  );
  if (step === 2) return (
    <div className="Ch02 step-2">age rule</div>
  );
  return <div className="Ch02 step-2">DEFAULT</div>;
}