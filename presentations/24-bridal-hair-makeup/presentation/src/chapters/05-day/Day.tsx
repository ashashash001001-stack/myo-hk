import "./Day.css";

interface Props { step: number; }

export function Day({ step }: Props) {
  if (step === 0) return <div className="Day step-0"><h2>婚禮日準備</h2></div>;
  if (step === 1) return <div className="Day step-1"><p>預留足夠時間。</p></div>;
  if (step === 2) return <div className="Day step-2"><p>帶備後備化妝品。</p></div>;
  return <div className="Day final"><p>了解更多：myo-hk.github.io</p></div>;
}
