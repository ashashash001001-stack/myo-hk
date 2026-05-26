import "./Couple.css";

interface Props { step: number; }

export function Couple({ step }: Props) {
  if (step === 0) return <div className="Couple step-0"><h2>新人合照</h2></div>;
  if (step === 1) return <div className="Couple step-1"><p>兩個人溫馨互動。</p></div>;
  if (step === 2) return <div className="Couple step-2"><p>捕捉自然笑容。</p></div>;
  return <div className="Couple final"><p>了解更多：myo-hk.github.io</p></div>;
}
