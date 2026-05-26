import "./Budget.css";
interface Props { step: number; }

const COSTS = [
  { label: "婚宴", amount: "HK$180,000", pct: "50%" },
  { label: "婚戒", amount: "HK$40,000", pct: "11%" },
  { label: "婚紗攝影", amount: "HK$25,000", pct: "7%" },
  { label: "婚紗禮服", amount: "HK$20,000", pct: "6%" },
  { label: "其他", amount: "HK$95,000", pct: "26%" },
];

export function Budget({ step }: Props) {
  if (step === 0) return (
    <div className="budget step-0"><h1 className="big-q">結婚要幾錢？</h1></div>
  );
  if (step === 1) return (
    <div className="budget step-0"><div className="big-number" style={{fontSize:"5rem"}}>36 萬</div><p>香港結婚平均開支</p></div>
  );
  if (step >= 2 && step < 6) {
    const c = COSTS[step - 2];
    return (
      <div className="budget step-card">
        <div className="cost-label">{c.label}</div>
        <div className="cost-amount">{c.amount}</div>
        <div className="cost-bar"><div className="bar-fill" style={{width:c.pct}}/></div>
        <div className="cost-pct">{c.pct}</div>
      </div>
    );
  }
  return (
    <div className="budget step-final">
      <h2>💰 記得預留應急錢</h2>
      <p>約總預算嘅 10%，以備不時之需</p>
    </div>
  );
}
