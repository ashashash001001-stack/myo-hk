import "./Kneeling.css";

interface Props { step: number; }

export function Kneeling({ step }: Props) {
  if (step === 0) return <div className="Kneeling step-0"><h2>跪拜禮儀</h2></div>;
  if (step === 1) return <div className="Kneeling step-1"><p>雙手奉茶。</p></div>;
  if (step === 2) return <div className="Kneeling step-2"><p>輕輕鞠躬。</p></div>;
  return <div className="Kneeling final"><p>了解更多：myo-hk.github.io</p></div>;
}
