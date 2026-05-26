import "./Church.css";

interface Props {
  step: number;
}

export function Info3({ step }: Props) {
  if (step === 0) return <div className="Info3 step-0"><h2>特許禮拜場所</h2></div>;
  if (step === 1) return <div className="Info3 step-1"><p>包括教堂、清真寺等宗教場所</p></div>;
  if (step === 2) return <div className="Info3 step-2"><p>由神職人員主持儀式</p></div>;
  return <div className="Info3 step-2"><p>由神職人員主持儀式</p></div>;
}