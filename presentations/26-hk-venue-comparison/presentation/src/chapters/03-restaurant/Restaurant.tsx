import "./Restaurant.css";

interface Props { step: number; }

export function Restaurant({ step }: Props) {
  if (step === 0) return <div className="Restaurant step-0"><h2>酒樓婚宴</h2></div>;
  if (step === 1) return <div className="Restaurant step-1"><p>價錢實惠。</p></div>;
  if (step === 2) return <div className="Restaurant step-2"><p>菜式豐富。</p></div>;
  return <div className="Restaurant final"><p>了解更多：myo-hk.github.io</p></div>;
}
