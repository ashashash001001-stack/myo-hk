import "./Year1.css";

interface Props { step: number; }

export function Year1({ step }: Props) {
  if (step === 0) return <div className="Year1 step-0"><h2>第一年紙婚</h2></div>;
  if (step === 1) return <div className="Year1 step-1"><p>可以送卡片、相冊。</p></div>;
  if (step === 2) return <div className="Year1 step-2"><p>象徵愛情開始。</p></div>;
  return <div className="Year1 final"><p>了解更多：myo-hk.github.io</p></div>;
}
