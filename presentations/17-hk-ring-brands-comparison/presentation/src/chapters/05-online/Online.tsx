import "./Online.css";

interface Props { step: number; }

export function Online({ step }: Props) {
  if (step === 0) return <div className="Online step-0"><h2>網上品牌</h2></div>;
  if (step === 1) return <div className="Online step-1"><p>價錢實惠，選擇多。</p></div>;
  if (step === 2) return <div className="Online step-2"><p>但要留意真假保証。</p></div>;
  return <div className="Online final"><p>了解更多：myo-hk.github.io</p></div>;
}
