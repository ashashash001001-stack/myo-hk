import "./Time.css";

interface Props { step: number; }

export function Time({ step }: Props) {
  if (step === 0) return <div className="Time step-0"><h2>時間習俗</h2></div>;
  if (step === 1) return <div className="Time step-1"><p>凌晨 12 點開始。</p></div>;
  if (step === 2) return <div className="Time step-2"><p>需要用木梳梳頭。</p></div>;
  return <div className="Time final"><p>了解更多：myo-hk.github.io</p></div>;
}
