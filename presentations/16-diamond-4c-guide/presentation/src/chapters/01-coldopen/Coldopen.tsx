import "./Coldopen.css";

interface Props { step: number; }

export function Coldopen({ step }: Props) {
  if (step === 0) return <div className="Coldopen step-0"><h2>鑽石 4C</h2></div>;
  if (step === 1) return <div className="Coldopen step-1"><p>4C 係國際標準。</p></div>;
  if (step === 2) return <div className="Coldopen step-2"><p>今日教你點樣揀鑽石。</p></div>;
  if (step === 3) return <div className="Coldopen step-3"><p>額外步驟 1</p></div>;
if (step === 4) return <div className="Coldopen step-4"><p>額外步驟 2</p></div>;
if (step === 5) return <div className="Coldopen step-5"><p>額外步驟 3</p></div>;
if (step === 6) return <div className="Coldopen step-6"><p>額外步驟 4</p></div>;
if (step === 7) return <div className="Coldopen step-7"><p>額外步驟 5</p></div>;
return <div className="Coldopen final"><p>了解更多：myo-hk.github.io</p></div>;
}
