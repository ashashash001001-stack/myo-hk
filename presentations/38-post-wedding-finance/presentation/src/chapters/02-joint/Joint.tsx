import "./Joint.css";

interface Props { step: number; }

export function Joint({ step }: Props) {
  if (step === 0) return <div className="Joint step-0"><h2>聯名戶口</h2></div>;
  if (step === 1) return <div className="Joint step-1"><p>共同管理家庭開支。</p></div>;
  if (step === 2) return <div className="Joint step-2"><p>各自保留部分私人資金。</p></div>;
  return <div className="Joint final"><p>了解更多：myo-hk.github.io</p></div>;
}
