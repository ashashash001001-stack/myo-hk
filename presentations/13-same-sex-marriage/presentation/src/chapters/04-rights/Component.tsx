import "./Rights.css";
interface Props { step: number; }
export function Rights({ step }: Props) {
  if (step === 0) return <div className="Rights step-0"><h2>同性伴侶有哪些權利？</h2></div>;
  if (step === 1) return <div className="Rights step-1"><p>遺產继承、醫療探視等。</p></div>;
  if (step === 2) return <div className="Rights step-2"><p>但税务、房屋政策仍有限制。</p></div>;
  return null;
}
