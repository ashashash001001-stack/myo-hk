import "./Engagement.css";

interface Props { step: number; }

export function Engagement({ step }: Props) {
  if (step === 0) return <div className="Engagement step-0"><h2>求婚戒</h2></div>;
  if (step === 1) return <div className="Engagement step-1"><p>象徵 commitment。</p></div>;
  if (step === 2) return <div className="Engagement step-2"><p>通常喺求婚時送出。</p></div>;
  return <div className="Engagement final"><p>了解更多：myo-hk.github.io</p></div>;
}
