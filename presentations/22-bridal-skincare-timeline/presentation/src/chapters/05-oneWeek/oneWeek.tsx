import "./oneWeek.css";

interface Props { step: number; }

export function oneWeek({ step }: Props) {
  if (step === 0) return <div className="1week step-0"><h2>1 個禮拜前</h2></div>;
  if (step === 1) return <div className="1week step-1"><p>敷面膜加强保濕。</p></div>;
  if (step === 2) return <div className="1week step-2"><p>避免過度護膚。</p></div>;
  return <div className="1week final"><p>了解更多：myo-hk.github.io</p></div>;
}
