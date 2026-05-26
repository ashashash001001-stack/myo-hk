import "./ColdOpen.css";
interface Props { step: number; }
export function ColdOpen({ step }: Props) {
  if (step === 0) return <div className="ColdOpen step-0"><h2>香港對同婚嘅態度近年有變化。</h2></div>;
  if (step === 1) return <div className="ColdOpen step-1"><p>2022 年終審法院裁定唔承認同性婚姻。</p></div>;
  if (step === 2) return <div className="ColdOpen step-2"><p>今日客觀分析香港同婚嘅法律地位。</p></div>;
  return null;
}
