import "./Where.css";

interface Props { step: number; }

export function Where({ step }: Props) {
  if (step === 0) return <div className="Where step-0"><h2>地點選擇</h2></div>;
  if (step === 1) return <div className="Where step-1"><p>可以係第一次約會嘅地方。</p></div>;
  if (step === 2) return <div className="Where step-2"><p>或者係浪漫嘅海邊。</p></div>;
  return <div className="Where final"><p>了解更多：myo-hk.github.io</p></div>;
}
