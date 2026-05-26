import "./Midrange.css";

interface Props { step: number; }

export function Midrange({ step }: Props) {
  if (step === 0) return <div className="Midrange step-0"><h2>中高價位</h2></div>;
  if (step === 1) return <div className="Midrange step-1"><p>款式多，價錢適中。</p></div>;
  if (step === 2) return <div className="Midrange step-2"><p>香港到處都有分店。</p></div>;
  return <div className="Midrange final"><p>了解更多：myo-hk.github.io</p></div>;
}
