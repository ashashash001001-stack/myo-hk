import "./Content.css";

interface Props { step: number; }

export function Content({ step }: Props) {
  if (step === 0) return <div className="Content step-0"><h2>證書內容</h2></div>;
  if (step === 1) return <div className="Content step-1"><p>新人姓名、結婚日期、地點。</p></div>;
  if (step === 2) return <div className="Content step-2"><p>仲有登記官同見證人簽名。</p></div>;
  return <div className="Content final"><p>了解更多：myo-hk.github.io</p></div>;
}
