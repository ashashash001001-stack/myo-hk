import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  if (step === 0) return <div className="Coldopen step-0"><h2>求婚攻略</h2></div>;
  if (step === 1) return <div className="Coldopen step-1"><p>今日分享求婚準備。</p></div>;
  if (step === 2) return <div className="Coldopen step-2"><p>令你嘅求婚終生難忘。</p></div>;
  return <div className="Coldopen final"><p>了解更多：myo-hk.github.io</p></div>;
}
