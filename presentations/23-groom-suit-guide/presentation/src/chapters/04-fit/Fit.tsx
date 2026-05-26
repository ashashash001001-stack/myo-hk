import "./Fit.css";

interface Props { step: number; }

export function Fit({ step }: Props) {
  if (step === 0) return <div className="Fit step-0"><h2>揀岩尺寸</h2></div>;
  if (step === 1) return <div className="Fit step-1"><p>肩膀位置要啱啱好。</p></div>;
  if (step === 2) return <div className="Fit step-2"><p>褲長適中，唔好吊腳。</p></div>;
  return <div className="Fit final"><p>了解更多：myo-hk.github.io</p></div>;
}
