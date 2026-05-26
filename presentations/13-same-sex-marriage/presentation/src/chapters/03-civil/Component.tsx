import "./Civil.css";
interface Props { step: number; }
export function Civil({ step }: Props) {
  if (step === 0) return <div className="Civil step-0"><h2>民事結合係另一個選擇。</h2></div>;
  if (step === 1) return <div className="Civil step-1"><p>外國同性伴侶可以喺香港做民事宣誓。</p></div>;
  if (step === 2) return <div className="Civil step-2"><p>呢個唔係婚姻，但可以獲得一定程度保障。</p></div>;
  return null;
}
