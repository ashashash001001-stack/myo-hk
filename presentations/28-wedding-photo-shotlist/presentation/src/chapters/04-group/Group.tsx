import "./Group.css";

interface Props { step: number; }

export function Group({ step }: Props) {
  if (step === 0) return <div className="Group step-0"><h2>大合照</h2></div>;
  if (step === 1) return <div className="Group step-1"><p>兄弟姊妹團合照。</p></div>;
  if (step === 2) return <div className="Group step-2"><p>同學朋友合照。</p></div>;
  return <div className="Group final"><p>了解更多：myo-hk.github.io</p></div>;
}
