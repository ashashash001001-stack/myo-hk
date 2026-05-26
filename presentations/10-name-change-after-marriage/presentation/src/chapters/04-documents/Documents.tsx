import "./Documents.css";

interface Props { step: number; }

export function Documents({ step }: Props) {
  if (step === 0) return <div className="Documents step-0"><h2>所需文件</h2></div>;
  if (step === 1) return <div className="Documents step-1"><p>身份證、護照、結婚證書。</p></div>;
  if (step === 2) return <div className="Documents step-2"><p>仲要填寫改名表格。</p></div>;
  return <div className="Documents final"><p>了解更多：myo-hk.github.io</p></div>;
}
