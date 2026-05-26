import "./Year10.css";

interface Props { step: number; }

export function Year10({ step }: Props) {
  if (step === 0) return <div className="Year10 step-0"><h2>第十年錫婚</h2></div>;
  if (step === 1) return <div className="Year10 step-1"><p>可以送錫器。</p></div>;
  if (step === 2) return <div className="Year10 step-2"><p>象徵堅固不摧。</p></div>;
  return <div className="Year10 final"><p>了解更多：myo-hk.github.io</p></div>;
}
