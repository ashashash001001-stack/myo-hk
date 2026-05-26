import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  if (step === 0) return <div className="Coldopen step-0"><h2>結婚改名</h2></div>;
  if (step === 1) return <div className="Coldopen step-1"><p>呢個係好多新人考慮嘅問題。</p></div>;
  if (step === 2) return <div className="Coldopen step-2"><p>今日分析下改同名嘅流程同注意事項。</p></div>;
  return <div className="Coldopen final"><p>了解更多：myo-hk.github.io</p></div>;
}
