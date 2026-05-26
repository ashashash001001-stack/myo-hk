import "./Registry.css";

interface Props {
  step: number;
}

export function Registry({ step }: Props) {
  if (step === 0) return <div className="Info1 step-0"><h2>婚姻登記處</h2></div>;
  if (step === 1) return <div className="Info1 step-1"><p>香港有 5 間婚姻登記處</p></div>;
  if (step === 2) return <div className="Info1 step-2"><div className="big-number">HK$715</div><p>標準費用｜非辦公時間 HK$1,935</p></div>;
  return <div className="Info1 step-2"><div className="big-number">HK$715</div><p>標準費用｜非辦公時間 HK$1,935</p></div>;
}