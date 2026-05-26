import "./Colors.css";

interface Props { step: number; }

export function Colors({ step }: Props) {
  if (step === 0) return <div className="Colors step-0"><h2>色彩表現</h2></div>;
  if (step === 1) return <div className="Colors step-1"><p>任何圖案都可以完美呈現。</p></div>;
  if (step === 2) return <div className="Colors step-2"><p>顏色鮮豔立體。</p></div>;
  return <div className="Colors final"><p>了解更多：myo-hk.github.io</p></div>;
}
