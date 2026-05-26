import "./Handling.css";

interface Props { step: number; }

export function Handling({ step }: Props) {
  if (step === 0) return <div className="Handling step-0"><h2>使用注意</h2></div>;
  if (step === 1) return <div className="Handling step-1"><p>避免過度摺疊。</p></div>;
  if (step === 2) return <div className="Handling step-2"><p>保持乾燥，防止發霉。</p></div>;
  return <div className="Handling final"><p>了解更多：myo-hk.github.io</p></div>;
}
