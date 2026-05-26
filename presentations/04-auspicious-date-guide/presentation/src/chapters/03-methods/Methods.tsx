import "./Methods.css";

interface Props { step: number; }

const METHODS = [
  { title: "通勝查閱", desc: "傳統方法，查通勝揀宜嫁娶嘅日子", detail: "宜：嫁娶、納采、訂盟" },
  { title: "八字配對", desc: "根據新人出生時辰八字，計算最夾嘅日子", detail: "需要雙方出生年月日時" },
  { title: "師傅擇日", desc: "搵風水師傅或擇日專家幫手", detail: "收費約 $800-$2,000" },
  { title: "網上工具", desc: "用手機 App 或網站自動計算好日", detail: "方便快捷，適合後生仔女" },
];

export function Methods({ step }: Props) {
  if (step < METHODS.length) {
    const m = METHODS[step];
    return (
      <div className="methods step-container">
        <div className="method-num">方法 {step + 1}</div>
        <h2 className="method-title">{m.title}</h2>
        <p className="method-desc">{m.desc}</p>
        <div className="method-detail">{m.detail}</div>
      </div>
    );
  }
  return (
    <div className="methods step-container final">
      <h2>📋 四種方法總覽</h2>
      <p>揀最適合你嘅方法，搵出屬於你嘅大日子</p>
    </div>
  );
}