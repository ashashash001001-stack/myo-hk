import "./Tips.css";

interface Props { step: number; }

export function Tips({ step }: Props) {
  if (step === 0) return <div className="Tips step-0"><h2>選購貼士</h2></div>;
  if (step === 1) return <div className="Tips step-1"><p>預留少量空間更方便日常使用。</p></div>;
  if (step === 2) return <div className="Tips step-2"><p>My O! 提供尺寸咨詢服務。</p></div>;
  return <div className="Tips final"><p>了解更多：myo-hk.github.io</p></div>;
}
