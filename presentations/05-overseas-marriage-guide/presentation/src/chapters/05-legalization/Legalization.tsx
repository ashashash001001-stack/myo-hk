import "./Legalization.css";
interface Props { step: number; }
export function Legalization({ step }: Props) {
  if (step === 0) return (
    <div className="Ch05 step-0"><h2>⚖️ 法律認受</h2></div>
  );
  if (step === 1) return (
    <div className="Ch05 step-1">HK cert accepted overseas</div>
  );
  if (step === 2) return (
    <div className="Ch05 step-2">translation/notarization needed</div>
  );
  return <div className="Ch05 step-2">DEFAULT</div>;
}