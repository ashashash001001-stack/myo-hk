import "./Gifts.css";

interface Props { step: number; }

export function Gifts({ step }: Props) {
  if (step === 0) return <div className="Gifts step-0"><h2>長輩回禮</h2></div>;
  if (step === 1) return <div className="Gifts step-1"><p>叫做上床。</p></div>;
  if (step === 2) return <div className="Gifts step-2"><p>寓意幸福美滿。</p></div>;
  return <div className="Gifts final"><p>了解更多：myo-hk.github.io</p></div>;
}
