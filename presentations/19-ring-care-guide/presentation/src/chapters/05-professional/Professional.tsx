import "./Professional.css";

interface Props { step: number; }

export function Professional({ step }: Props) {
  if (step === 0) return <div className="Professional step-0"><h2>專業保養</h2></div>;
  if (step === 1) return <div className="Professional step-1"><p>珠寶店有超聲波清洗。</p></div>;
  if (step === 2) return <div className="Professional step-2"><p>可以順便檢查鑲嵌係否穩固。</p></div>;
  return <div className="Professional final"><p>了解更多：myo-hk.github.io</p></div>;
}
