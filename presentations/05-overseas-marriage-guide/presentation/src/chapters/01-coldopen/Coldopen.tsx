import "./Coldopen.css";
interface Props { step: number; }
export function Coldopen({ step }: Props) {
  if (step === 0) return (
    <div className="Ch01 step-0"><h2>🌍 海外人士結婚</h2></div>
  );
  if (step === 1) return (
    <div className="Ch01 step-1">welcome illustration</div>
  );
  if (step === 2) return (
    <div className="Ch01 step-2">4 preview cards</div>
  );
  return <div className="Ch01 step-2">DEFAULT</div>;
}