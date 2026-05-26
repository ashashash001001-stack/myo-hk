import "./Cleaning.css";

interface Props { step: number; }

export function Cleaning({ step }: Props) {
  if (step === 0) return <div className="Cleaning step-0"><h2>清潔方法</h2></div>;
  if (step === 1) return <div className="Cleaning step-1"><p>用溫水加少量洗潔精。</p></div>;
  if (step === 2) return <div className="Cleaning step-2"><p>用軟刷輕輕擦洗。</p></div>;
  return <div className="Cleaning final"><p>了解更多：myo-hk.github.io</p></div>;
}
