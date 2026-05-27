import "./Color.css";

interface Props { step: number; }

export function Color({ step }: Props) {
  if (step === 0) return <div className="Color step-0"><h2>顏色 Color</h2></div>;
  if (step === 1) return <div className="Color step-1"><p>D-F 最白，H 色之後開始帶黃。</p></div>;
  if (step === 2) return <div className="Color step-2"><p>性價比最高係 G-H 色。</p></div>;
  if (step === 3) return <div className="Color step-3"><p>額外步驟 1</p></div>;
if (step === 4) return <div className="Color step-4"><p>額外步驟 2</p></div>;
if (step === 5) return <div className="Color step-5"><p>額外步驟 3</p></div>;
if (step === 6) return <div className="Color step-6"><p>額外步驟 4</p></div>;
if (step === 7) return <div className="Color step-7"><p>額外步驟 5</p></div>;
return <div className="Color final"><p>了解更多：myo-hk.github.io</p></div>;
}
