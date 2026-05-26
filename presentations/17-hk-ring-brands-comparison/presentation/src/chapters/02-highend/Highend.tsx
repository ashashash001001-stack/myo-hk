import "./Highend.css";

interface Props { step: number; }

export function Highend({ step }: Props) {
  if (step === 0) return <div className="Highend step-0"><h2>高端品牌</h2></div>;
  if (step === 1) return <div className="Highend step-1"><p>設計獨特，工藝精湛。</p></div>;
  if (step === 2) return <div className="Highend step-2"><p>價錢較高但品質保証。</p></div>;
  return <div className="Highend final"><p>了解更多：myo-hk.github.io</p></div>;
}
