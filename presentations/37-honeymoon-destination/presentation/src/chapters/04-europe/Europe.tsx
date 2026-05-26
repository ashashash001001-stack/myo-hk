import "./Europe.css";

interface Props { step: number; }

export function Europe({ step }: Props) {
  if (step === 0) return <div className="Europe step-0"><h2>歐洲</h2></div>;
  if (step === 1) return <div className="Europe step-1"><p>法國、意大利、瑞士。</p></div>;
  if (step === 2) return <div className="Europe step-2"><p>但預算較高。</p></div>;
  return <div className="Europe final"><p>了解更多：myo-hk.github.io</p></div>;
}
