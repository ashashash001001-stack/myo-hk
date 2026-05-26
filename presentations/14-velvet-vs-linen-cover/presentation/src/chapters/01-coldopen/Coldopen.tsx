import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  if (step === 0) return <div className="Coldopen step-0"><h2>絨布定亞麻</h2></div>;
  if (step === 1) return <div className="Coldopen step-1"><p>兩種都好受歡迎。</p></div>;
  if (step === 2) return <div className="Coldopen step-2"><p>今日幫你分析邊種適合你。</p></div>;
  return <div className="Coldopen final"><p>了解更多：myo-hk.github.io</p></div>;
}
