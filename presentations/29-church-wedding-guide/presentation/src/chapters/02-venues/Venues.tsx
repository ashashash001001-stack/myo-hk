import "./Venues.css";

interface Props { step: number; }

export function Venues({ step }: Props) {
  if (step === 0) return <div className="Venues step-0"><h2>教堂場地</h2></div>;
  if (step === 1) return <div className="Venues step-1"><p>禮拜堂氣氛莊嚴。</p></div>;
  if (step === 2) return <div className="Venues step-2"><p>其他教堂都可以申請。</p></div>;
  return <div className="Venues final"><p>了解更多：myo-hk.github.io</p></div>;
}
