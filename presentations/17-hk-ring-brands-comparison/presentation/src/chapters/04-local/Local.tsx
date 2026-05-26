import "./Local.css";

interface Props { step: number; }

export function Local({ step }: Props) {
  if (step === 0) return <div className="Local step-0"><h2>本地品牌</h2></div>;
  if (step === 1) return <div className="Local step-1"><p>設計獨特，性價比高。</p></div>;
  if (step === 2) return <div className="Local step-2"><p>可以訂造心水款式。</p></div>;
  return <div className="Local final"><p>了解更多：myo-hk.github.io</p></div>;
}
