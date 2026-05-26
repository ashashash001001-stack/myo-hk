import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  if (step === 0) return <div className="Coldopen step-0"><h2>結婚週年禮物</h2></div>;
  if (step === 1) return <div className="Coldopen step-1"><p>每年都有特別意義。</p></div>;
  if (step === 2) return <div className="Coldopen step-2"><p>今日分享禮物指南。</p></div>;
  return <div className="Coldopen final"><p>了解更多：myo-hk.github.io</p></div>;
}
