import "./Booking.css";

interface Props { step: number; }

export function Booking({ step }: Props) {
  if (step === 0) return <div className="Booking step-0"><h2>預約流程</h2></div>;
  if (step === 1) return <div className="Booking step-1"><p>繳交訂金確認日期。</p></div>;
  if (step === 2) return <div className="Booking step-2"><p>提供婚前輔導証明。</p></div>;
  return <div className="Booking final"><p>了解更多：myo-hk.github.io</p></div>;
}
