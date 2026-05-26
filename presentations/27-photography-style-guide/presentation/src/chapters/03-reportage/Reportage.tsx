import "./Reportage.css";

interface Props { step: number; }

export function Reportage({ step }: Props) {
  if (step === 0) return <div className="Reportage step-0"><h2>紀實風格</h2></div>;
  if (step === 1) return <div className="Reportage step-1"><p>唔干預婚禮流程。</p></div>;
  if (step === 2) return <div className="Reportage step-2"><p>故事性強。</p></div>;
  return <div className="Reportage final"><p>了解更多：myo-hk.github.io</p></div>;
}
