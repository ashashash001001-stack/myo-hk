import "./Methods.css";

interface Props { step: number; }

export function Methods({ step }: Props) {
  if (step === 0) return <div className="Methods step-0"><h2>遞交方法</h2></div>;
  if (step === 1) return <div className="Methods step-1"><p>親身去婚姻登記處排隊。</p></div>;
  if (step === 2) return <div className="Methods step-2"><p>或者揾婚姻監禮人代辦。</p></div>;
  return <div className="Methods final"><p>了解更多：myo-hk.github.io</p></div>;
}
