import "./oneMonth.css";

interface Props { step: number; }

export function oneMonth({ step }: Props) {
  if (step === 0) return <div className="1month step-0"><h2>1 個月前</h2></div>;
  if (step === 1) return <div className="1month step-1"><p>保持簡單護膚程序。</p></div>;
  if (step === 2) return <div className="1month step-2"><p>充足睡眠同飲水。</p></div>;
  return <div className="1month final"><p>了解更多：myo-hk.github.io</p></div>;
}
