import "./Wedding.css";

interface Props { step: number; }

export function Wedding({ step }: Props) {
  if (step === 0) return <div className="Wedding step-0"><h2>婚禮日</h2></div>;
  if (step === 1) return <div className="Wedding step-1"><p>過大禮、敬茶。</p></div>;
  if (step === 2) return <div className="Wedding step-2"><p>婚宴、回門。</p></div>;
  return <div className="Wedding final"><p>了解更多：myo-hk.github.io</p></div>;
}
