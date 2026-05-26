import "./Checklist.css";
interface Props { step: number; }

const CATEGORIES = [
  { title: "文件法律", items: ["擬結婚通知書", "身份證", "見證人 2 位"] },
  { title: "婚禮必需品", items: ["婚紗禮服", "結婚戒指", "婚鞋", "證書套"] },
  { title: "場地飲食", items: ["婚宴場地", "菜單試菜", "酒水", "結婚蛋糕"] },
  { title: "婚禮當日", items: ["利是封", "回禮禮物", "後備衣物", "急救包"] },
];

export function Checklist({ step }: Props) {
  if (step < CATEGORIES.length) {
    const c = CATEGORIES[step];
    return (
      <div className="checklist step-container">
        <h2 className="cat-title">{c.title}</h2>
        <div className="items-col">
          {c.items.map((item, i) => (
            <div key={i} className="check-item">☐ {item}</div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="checklist step-container final">
      <h2>📋 全部 checklist</h2>
      <p>下載完整 checklist，逐項打勾</p>
    </div>
  );
}
