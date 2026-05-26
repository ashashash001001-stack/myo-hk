import "./Dates.css";

interface Props { step: number; }

export function Dates({ step }: Props) {
  if (step === 0) return <div className="Dates step-0"><h2>日子禁忌</h2></div>;
  if (step === 1) return <div className="Dates step-1"><p>傳統認為帶喪氣。</p></div>;
  if (step === 2) return <div className="Dates step-2"><p>鬼月結婚被認為不吉利。</p></div>;
  return <div className="Dates final"><p>了解更多：myo-hk.github.io</p></div>;
}
