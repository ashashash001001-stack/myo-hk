import "./CTA.css";
interface Props { step: number; }
export function CTA({ step }: Props) {
  if (step === 0) return <div className="CTA step-0"><h2>總結香港同婚法律地位。</h2></div>;
  if (step === 1) return <div className="CTA step-1"><p>香港暫時不承認，但有其他選項。</p></div>;
  if (step === 2) return <div className="CTA step-2"><p>去 myo-hk.github.io 睇更多！</p></div>;
  return null;
}
