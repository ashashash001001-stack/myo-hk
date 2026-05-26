import "./Order.css";

interface Props { step: number; }

export function Order({ step }: Props) {
  if (step === 0) return <div className="Order step-0"><h2>敬茶順序</h2></div>;
  if (step === 1) return <div className="Order step-1"><p>再敬其他長輩。</p></div>;
  if (step === 2) return <div className="Order step-2"><p>由新郎新娘依次進行。</p></div>;
  return <div className="Order final"><p>了解更多：myo-hk.github.io</p></div>;
}
