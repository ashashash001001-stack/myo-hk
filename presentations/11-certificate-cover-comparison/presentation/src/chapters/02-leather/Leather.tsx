import "./Leather.css";

interface Props { step: number; }

export function Leather({ step }: Props) {
  if (step === 0) return <div className="Leather step-0"><h2>皮革證書套</h2></div>;
  if (step === 1) return <div className="Leather step-1"><p>真皮高貴大方，耐用持久。</p></div>;
  if (step === 2) return <div className="Leather step-2"><p>價錢較貴但最有質感。</p></div>;
  return <div className="Leather final"><p>了解更多：myo-hk.github.io</p></div>;
}
