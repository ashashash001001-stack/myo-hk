import "./Care.css";

interface Props { step: number; }

export function Care({ step }: Props) {
  if (step === 0) return <div className="Care step-0"><h2>保護方法</h2></div>;
  if (step === 1) return <div className="Care step-1"><p>用證書套可以有效保護。</p></div>;
  if (step === 2) return <div className="Care step-2"><p>避免摺疊同陽光直射。</p></div>;
  return <div className="Care final"><p>了解更多：myo-hk.github.io</p></div>;
}
