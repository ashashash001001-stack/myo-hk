import "./Display.css";

interface Props { step: number; }

export function Display({ step }: Props) {
  if (step === 0) return <div className="Display step-0"><h2>公開展示</h2></div>;
  if (step === 1) return <div className="Display step-1"><p>展示期間，公眾可以查閱。</p></div>;
  if (step === 2) return <div className="Display step-2"><p>冇人反對，就正式通過。</p></div>;
  return <div className="Display final"><p>了解更多：myo-hk.github.io</p></div>;
}
