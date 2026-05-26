import "./Documents.css";
interface Props { step: number; }
export function Ch03({ step }: Props) {
  if (step === 0) return (
    <div className="Ch03 step-0"><h2>📄 所需文件</h2></div>
  );
  if (step === 1) return (
    <div className="Ch03 step-1">passport card</div>
  );
  if (step === 2) return (
    <div className="Ch03 step-2">previous divorce docs</div>
  );
  return <div className="Ch03 step-2">DEFAULT</div>;
}