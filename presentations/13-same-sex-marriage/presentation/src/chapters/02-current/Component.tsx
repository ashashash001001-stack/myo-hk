import "./Current.css";
interface Props { step: number; }
export function Current({ step }: Props) {
  if (step === 0) return <div className="Current step-0"><h2>目前香港法院點樣說？</h2></div>;
  if (step === 1) return <div className="Current step-1"><p>香港唔承認同性婚姻，但唔會驅逐外國同性伴侶。</p></div>;
  if (step === 2) return <div className="Current step-2"><p>外籍人士可以繼續以其他簽證留港。</p></div>;
  return null;
}
