import "./Custom.css";

interface Props { step: number; }

export function Custom({ step }: Props) {
  if (step === 0) return <div className="Custom step-0"><h2>客製化</h2></div>;
  if (step === 1) return <div className="Custom step-1"><p>自由選擇顏色、字體、圖案。</p></div>;
  if (step === 2) return <div className="Custom step-2"><p>打造独一无二嘅證書套。</p></div>;
  return <div className="Custom final"><p>了解更多：myo-hk.github.io</p></div>;
}
