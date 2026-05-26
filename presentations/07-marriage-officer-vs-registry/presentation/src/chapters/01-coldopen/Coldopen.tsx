import "./Coldopen.css";

interface Props {
  step: number;
}

export function Coldopen({ step }: Props) {
  if (step === 0) return <div className="Coldopen step-0"><h2>結婚揀登記處定監禮人？</h2></div>;
  if (step === 1) return <div className="Coldopen step-1"><p>兩種方式有咩分別？等話你知。</p></div>;
  if (step === 2) return <div className="Coldopen step-2"><p>今日就比較登記處同監禮人。</p></div>;
  return <div className="Coldopen step-2"><p>今日就比較登記處同監禮人。</p></div>;
}