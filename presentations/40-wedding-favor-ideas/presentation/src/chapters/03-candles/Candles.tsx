import "./Candles.css";

interface Props { step: number; }

export function Candles({ step }: Props) {
  if (step === 0) return <div className="Candles step-0"><h2>香氛類</h2></div>;
  if (step === 1) return <div className="Candles step-1"><p>香薰燭。</p></div>;
  if (step === 2) return <div className="Candles step-2"><p>小瓶裝香水。</p></div>;
  return <div className="Candles final"><p>了解更多：myo-hk.github.io</p></div>;
}
