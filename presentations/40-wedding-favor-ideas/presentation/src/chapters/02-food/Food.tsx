import "./Food.css";

interface Props { step: number; }

export function Food({ step }: Props) {
  if (step === 0) return <div className="Food step-0"><h2>食品類</h2></div>;
  if (step === 1) return <div className="Food step-1"><p>蜂蜜、果醬好特別。</p></div>;
  if (step === 2) return <div className="Food step-2"><p>小包裝茶葉、咖啡。</p></div>;
  return <div className="Food final"><p>了解更多：myo-hk.github.io</p></div>;
}
