import "./Eligibility.css";

interface Props { step: number; }

export function Eligibility({ step }: Props) {
  if (step === 0) return <div className="Eligibility step-0"><h2>資格要求</h2></div>;
  if (step === 1) return <div className="Eligibility step-1"><p>年滿 16 歲、一夫一妻、非近親。</p></div>;
  if (step === 2) return <div className="Eligibility step-2"><p>任何國籍都可以申請。</p></div>;
  return <div className="Eligibility final"><p>了解更多：myo-hk.github.io</p></div>;
}
