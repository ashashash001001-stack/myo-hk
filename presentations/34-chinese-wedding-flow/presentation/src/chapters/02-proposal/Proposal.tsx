import "./Proposal.css";

interface Props { step: number; }

export function Proposal({ step }: Props) {
  if (step === 0) return <div className="Proposal step-0"><h2>提親</h2></div>;
  if (step === 1) return <div className="Proposal step-1"><p>帶備禮品。</p></div>;
  if (step === 2) return <div className="Proposal step-2"><p>傾婚期。</p></div>;
  return <div className="Proposal final"><p>了解更多：myo-hk.github.io</p></div>;
}
