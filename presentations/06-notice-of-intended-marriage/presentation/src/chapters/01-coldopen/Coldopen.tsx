import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  if (step === 0) return <div className="Coldopen step-0"><h2>擬結婚通知書</h2></div>;
  if (step === 1) return <div className="Coldopen step-1"><p>由遞交到可以行禮，最少要等 15 日。</p></div>;
  if (step === 2) return <div className="Coldopen step-2"><p>今日就教你成個流程。</p></div>;
  return <div className="Coldopen final"><p>了解更多：myo-hk.github.io</p></div>;
}
