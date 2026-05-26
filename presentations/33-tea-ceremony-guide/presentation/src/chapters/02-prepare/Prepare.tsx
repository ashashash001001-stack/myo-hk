import "./Prepare.css";

interface Props { step: number; }

export function Prepare({ step }: Props) {
  if (step === 0) return <div className="Prepare step-0"><h2>準備工作</h2></div>;
  if (step === 1) return <div className="Prepare step-1"><p>冲茶用紅茶。</p></div>;
  if (step === 2) return <div className="Prepare step-2"><p>摆好座位。</p></div>;
  return <div className="Prepare final"><p>了解更多：myo-hk.github.io</p></div>;
}
