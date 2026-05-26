import "./Clean.css";

interface Props { step: number; }

export function Clean({ step }: Props) {
  if (step === 0) return <div className="Clean step-0"><h2>清潔步驟</h2></div>;
  if (step === 1) return <div className="Clean step-1"><p>送去專業乾洗。</p></div>;
  if (step === 2) return <div className="Clean step-2"><p>唔好自己洗，免損壞。</p></div>;
  return <div className="Clean final"><p>了解更多：myo-hk.github.io</p></div>;
}
