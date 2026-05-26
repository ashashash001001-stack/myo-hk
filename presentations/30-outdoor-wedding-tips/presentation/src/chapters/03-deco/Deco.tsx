import "./Deco.css";

interface Props { step: number; }

export function Deco({ step }: Props) {
  if (step === 0) return <div className="Deco step-0"><h2>場地佈置</h2></div>;
  if (step === 1) return <div className="Deco step-1"><p>可以用花拱、燈串。</p></div>;
  if (step === 2) return <div className="Deco step-2"><p>確保電力供應。</p></div>;
  return <div className="Deco final"><p>了解更多：myo-hk.github.io</p></div>;
}
