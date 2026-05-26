import "./CTA.css";

interface Props {
  step: number;
}

export function CTA({ step }: Props) {
  if (step === 0) return <div className="CTA step-0"><h2>總結</h2></div>;
  if (step === 1) return (
    <div className="CTA step-1" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", maxWidth: "600px" }}>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "16px", margin: "8px", textAlign: "center" }}>
        <strong>登記處</strong><br/><span className="big-number" style={{ fontSize: "1.5rem" }}>HK$715</span>
      </div>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "16px", margin: "8px", textAlign: "center" }}>
        <strong>監禮人</strong><br/><span className="big-number" style={{ fontSize: "1.5rem" }}>$2k-5k</span>
      </div>
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "16px", margin: "8px", textAlign: "center" }}>
        <strong>教堂</strong><br/><span className="big-number" style={{ fontSize: "1.5rem" }}>按規定</span>
      </div>
    </div>
  );
  if (step === 2) return (
    <div className="CTA step-2">
      <p>去 <strong>myo-hk.github.io</strong> 睇更多婚禮資訊！</p>
    </div>
  );
  return <div className="CTA step-2"><p>去 myo-hk.github.io 睇更多婚禮資訊！</p></div>;
}