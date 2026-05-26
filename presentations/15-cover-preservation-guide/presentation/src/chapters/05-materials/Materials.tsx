import "./Materials.css";

interface Props { step: number; }

export function Materials({ step }: Props) {
  if (step === 0) return <div className="Materials step-0"><h2>材質保養</h2></div>;
  if (step === 1) return <div className="Materials step-1"><p>皮革：定期上油。</p></div>;
  if (step === 2) return <div className="Materials step-2"><p>布料：注意防潮。</p></div>;
  return <div className="Materials final"><p>了解更多：myo-hk.github.io</p></div>;
}
