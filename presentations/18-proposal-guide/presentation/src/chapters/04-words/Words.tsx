import "./Words.css";

interface Props { step: number; }

export function Words({ step }: Props) {
  if (step === 0) return <div className="Words step-0"><h2>台詞準備</h2></div>;
  if (step === 1) return <div className="Words step-1"><p>講出你對佢嘅感受。</p></div>;
  if (step === 2) return <div className="Words step-2"><p>真誠最重要，唔需要太花巧。</p></div>;
  return <div className="Words final"><p>了解更多：myo-hk.github.io</p></div>;
}
