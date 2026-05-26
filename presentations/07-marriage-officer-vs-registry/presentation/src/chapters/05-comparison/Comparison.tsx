import "./Comparison.css";

interface Props {
  step: number;
}

export function Info4({ step }: Props) {
  if (step === 0) return <div className="Info4 step-0"><h2>三種方式比較</h2></div>;
  if (step === 1) return (
    <div className="Info4 step-1" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", maxWidth: "600px" }}>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "16px", margin: "8px", textAlign: "center" }}>
        <strong>登記處</strong><br/>最平
      </div>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "16px", margin: "8px", textAlign: "center" }}>
        <strong>監禮人</strong><br/>最自由
      </div>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "16px", margin: "8px", textAlign: "center" }}>
        <strong>教堂</strong><br/>最莊嚴
      </div>
    </div>
  );
  if (step === 2) return <div className="Info4 step-2"><p>睇你嘅預算同喜好啦。</p></div>;
  return <div className="Info4 step-2"><p>睇你嘅預算同喜好啦。</p></div>;
}