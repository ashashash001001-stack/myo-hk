import "./Buy.css";

interface Props { step: number; }

export function Buy({ step }: Props) {
  if (step === 0) return <div className="Buy step-0"><h2>購買婚紗</h2></div>;
  if (step === 1) return <div className="Buy step-1"><p>價錢由 HK$5,000 起。</p></div>;
  if (step === 2) return <div className="Buy step-2"><p>可以定制，獨一無二。</p></div>;
  return <div className="Buy final"><p>了解更多：myo-hk.github.io</p></div>;
}
