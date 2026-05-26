import "./sixMonths.css";

interface Props { step: number; }

export function sixMonths({ step }: Props) {
  if (step === 0) return <div className="6months step-0"><h2>6 個月前</h2></div>;
  if (step === 1) return <div className="6months step-1"><p>揾專業 facial 幫手。</p></div>;
  if (step === 2) return <div className="6months step-2"><p>試用唔同護膚品。</p></div>;
  return <div className="6months final"><p>了解更多：myo-hk.github.io</p></div>;
}
