import "./Storage.css";

interface Props { step: number; }

export function Storage({ step }: Props) {
  if (step === 0) return <div className="Storage step-0"><h2>存放方式</h2></div>;
  if (step === 1) return <div className="Storage step-1"><p>避免陽光直射。</p></div>;
  if (step === 2) return <div className="Storage step-2"><p>唔好放入膠袋，最好用塵套。</p></div>;
  return <div className="Storage final"><p>了解更多：myo-hk.github.io</p></div>;
}
