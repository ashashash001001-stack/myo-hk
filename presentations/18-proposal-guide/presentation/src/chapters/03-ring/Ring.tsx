import "./Ring.css";

interface Props { step: number; }

export function Ring({ step }: Props) {
  if (step === 0) return <div className="Ring step-0"><h2>戒指準備</h2></div>;
  if (step === 1) return <div className="Ring step-1"><p>預算之內選擇最好嘅。</p></div>;
  if (step === 2) return <div className="Ring step-2"><p>唔需要太大，心意緊要。</p></div>;
  return <div className="Ring final"><p>了解更多：myo-hk.github.io</p></div>;
}
