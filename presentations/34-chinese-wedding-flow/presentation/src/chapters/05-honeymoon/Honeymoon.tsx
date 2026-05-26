import "./Honeymoon.css";

interface Props { step: number; }

export function Honeymoon({ step }: Props) {
  if (step === 0) return <div className="Honeymoon step-0"><h2>蜜月</h2></div>;
  if (step === 1) return <div className="Honeymoon step-1"><p>傳統要去男家親戚拜訪。</p></div>;
  if (step === 2) return <div className="Honeymoon step-2"><p>現時習俗已彈性處理。</p></div>;
  return <div className="Honeymoon final"><p>了解更多：myo-hk.github.io</p></div>;
}
