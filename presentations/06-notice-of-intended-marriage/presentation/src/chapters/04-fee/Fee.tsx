import "./Fee.css";

interface Props { step: number; }

export function Fee({ step }: Props) {
  if (step === 0) return <div className="Fee step-0"><h2>費用</h2></div>;
  if (step === 1) return <div className="Fee step-1"><p>可以俾現金、八達通、轉數快。</p></div>;
  if (step === 2) return <div className="Fee step-2"><p>繳費後取得收據。</p></div>;
  return <div className="Fee final"><p>了解更多：myo-hk.github.io</p></div>;
}
