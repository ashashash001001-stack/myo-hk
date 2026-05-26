import "./Timeline.css";

interface Props { step: number; }

export function Timeline({ step }: Props) {
  if (step === 0) return <div className="Timeline step-0"><h2>所需時間</h2></div>;
  if (step === 1) return <div className="Timeline step-1"><p>一般約 1-2 個禮拜完成。</p></div>;
  if (step === 2) return <div className="Timeline step-2"><p>記得提前計劃，預留時間。</p></div>;
  return <div className="Timeline final"><p>了解更多：myo-hk.github.io</p></div>;
}
