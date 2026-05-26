import "./Vendors.css";
interface Props { step: number; }

const VENDORS = [
  { name: "攝影師", tip: "睇作品風格，傾合約細節", icon: "📸" },
  { name: "化妝師", tip: "預約試妝，確認髮型", icon: "💄" },
  { name: "司儀", tip: "揀有經驗嘅，確認流程", icon: "🎤" },
  { name: "場地佈置", tip: "睇實物相，確認主題", icon: "🎀" },
];

export function Vendors({ step }: Props) {
  if (step === 0) return (
    <div className="vendors step-0"><h1 className="big-q">供應商點揀好？</h1></div>
  );
  if (step >= 1 && step <= 4) {
    const v = VENDORS[step - 1];
    return (
      <div className="vendors step-card">
        <div className="vendor-icon">{v.icon}</div>
        <h2>{v.name}</h2>
        <p className="vendor-tip">{v.tip}</p>
      </div>
    );
  }
  return (
    <div className="vendors step-final">
      <h2>✅ 重要貼士</h2>
      <p>揀供應商前：<br/>✓ 睇作品<br/>✓ 睇評價<br/>✓ 傾清楚合約</p>
    </div>
  );
}
