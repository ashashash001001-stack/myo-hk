import "./Photo.css";

interface Props { step: number; }

export function Photo({ step }: Props) {
  if (step === 0) return <div className="Photo step-0"><h2>攝影注意</h2></div>;
  if (step === 1) return <div className="Photo step-1"><p>戶外光線強要帶反光板。</p></div>;
  if (step === 2) return <div className="Photo step-2"><p>捕捉自然風景。</p></div>;
  return <div className="Photo final"><p>了解更多：myo-hk.github.io</p></div>;
}
