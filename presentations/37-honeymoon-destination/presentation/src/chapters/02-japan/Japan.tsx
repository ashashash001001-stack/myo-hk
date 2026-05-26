import "./Japan.css";

interface Props { step: number; }

export function Japan({ step }: Props) {
  if (step === 0) return <div className="Japan step-0"><h2>日本</h2></div>;
  if (step === 1) return <div className="Japan step-1"><p>東京、大阪、沖繩。</p></div>;
  if (step === 2) return <div className="Japan step-2"><p>美食購物兼備。</p></div>;
  return <div className="Japan final"><p>了解更多：myo-hk.github.io</p></div>;
}
