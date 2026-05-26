import "./Gifts.css";

interface Props { step: number; }

export function Gifts({ step }: Props) {
  if (step === 0) return <div className="Gifts step-0"><h2>禮品清單</h2></div>;
  if (step === 1) return <div className="Gifts step-1"><p>有金器、首飾、衣料。</p></div>;
  if (step === 2) return <div className="Gifts step-2"><p>水果、茶葉、酒。</p></div>;
  return <div className="Gifts final"><p>了解更多：myo-hk.github.io</p></div>;
}
