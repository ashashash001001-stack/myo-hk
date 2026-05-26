import "./Church.css";

interface Props { step: number; }

export function Church({ step }: Props) {
  if (step === 0) return <div className="Church step-0"><h2>教堂行禮</h2></div>;
  if (step === 1) return <div className="Church step-1"><p>氣氛莊嚴感人。</p></div>;
  if (step === 2) return <div className="Church step-2"><p>需要提前預約。</p></div>;
  return <div className="Church final"><p>了解更多：myo-hk.github.io</p></div>;
}
