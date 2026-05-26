import "./Ceremony.css";

interface Props { step: number; }

export function Ceremony({ step }: Props) {
  if (step === 0) return <div className="Ceremony step-0"><h2>行禮時刻</h2></div>;
  if (step === 1) return <div className="Ceremony step-1"><p>簽署結婚證書。</p></div>;
  if (step === 2) return <div className="Ceremony step-2"><p>亲吻新娘。</p></div>;
  return <div className="Ceremony final"><p>了解更多：myo-hk.github.io</p></div>;
}
