import "./Storage.css";

interface Props { step: number; }

export function Storage({ step }: Props) {
  if (step === 0) return <div className="Storage step-0"><h2>存放注意</h2></div>;
  if (step === 1) return <div className="Storage step-1"><p>獨立擺放避免刮花。</p></div>;
  if (step === 2) return <div className="Storage step-2"><p>可以放入防潮珠。</p></div>;
  return <div className="Storage final"><p>了解更多：myo-hk.github.io</p></div>;
}
