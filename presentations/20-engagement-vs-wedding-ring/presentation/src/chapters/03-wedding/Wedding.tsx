import "./Wedding.css";

interface Props { step: number; }

export function Wedding({ step }: Props) {
  if (step === 0) return <div className="Wedding step-0"><h2>結婚戒指</h2></div>;
  if (step === 1) return <div className="Wedding step-1"><p>象徵婚姻契約。</p></div>;
  if (step === 2) return <div className="Wedding step-2"><p>喺婚禮上交換。</p></div>;
  return <div className="Wedding final"><p>了解更多：myo-hk.github.io</p></div>;
}
