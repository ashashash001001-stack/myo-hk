import "./Actions.css";

interface Props { step: number; }

export function Actions({ step }: Props) {
  if (step === 0) return <div className="Actions step-0"><h2>行為禁忌</h2></div>;
  if (step === 1) return <div className="Actions step-1"><p>孕婦不能見証婚禮。</p></div>;
  if (step === 2) return <div className="Actions step-2"><p>寡婦被視為不吉利。</p></div>;
  return <div className="Actions final"><p>了解更多：myo-hk.github.io</p></div>;
}
