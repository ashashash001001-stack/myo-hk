import "./Photography.css";

interface Props { step: number; }

export function Photography({ step }: Props) {
  if (step === 0) return <div className="Photography step-0"><h2>記錄時刻</h2></div>;
  if (step === 1) return <div className="Photography step-1"><p>或者請專業攝影師。</p></div>;
  if (step === 2) return <div className="Photography step-2"><p>捕捉呢個珍貴時刻。</p></div>;
  return <div className="Photography final"><p>了解更多：myo-hk.github.io</p></div>;
}
