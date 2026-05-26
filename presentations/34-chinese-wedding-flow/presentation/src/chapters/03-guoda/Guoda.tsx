import "./Guoda.css";

interface Props { step: number; }

export function Guoda({ step }: Props) {
  if (step === 0) return <div className="Guoda step-0"><h2>過大禮</h2></div>;
  if (step === 1) return <div className="Guoda step-1"><p>點收後回禮。</p></div>;
  if (step === 2) return <div className="Guoda step-2"><p>確定婚期。</p></div>;
  return <div className="Guoda final"><p>了解更多：myo-hk.github.io</p></div>;
}
