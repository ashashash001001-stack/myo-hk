import "./Size.css";

interface Props { step: number; }

export function Size({ step }: Props) {
  if (step === 0) return <div className="Size step-0"><h2>標準尺寸</h2></div>;
  if (step === 1) return <div className="Size step-1"><p>大約係 A4 紙嘅大細。</p></div>;
  if (step === 2) return <div className="Size step-2"><p>紙質係有浮水印嘅專用紙。</p></div>;
  return <div className="Size final"><p>了解更多：myo-hk.github.io</p></div>;
}
