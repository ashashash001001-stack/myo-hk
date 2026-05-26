import "./Celebrant.css";

interface Props {
  step: number;
}

export function Celebrant({ step }: Props) {
  if (step === 0) return <div className="Info2 step-0"><h2>婚姻監禮人</h2></div>;
  if (step === 1) return <div className="Info2 step-1"><p>可以去任何地方行禮，時間更彈性</p></div>;
  if (step === 2) return <div className="Info2 step-2"><div className="big-number">HK$2,000 - $5,000</div><p>律師或公證人主持</p></div>;
  return <div className="Info2 step-2"><div className="big-number">HK$2,000 - $5,000</div><p>律師或公證人主持</p></div>;
}