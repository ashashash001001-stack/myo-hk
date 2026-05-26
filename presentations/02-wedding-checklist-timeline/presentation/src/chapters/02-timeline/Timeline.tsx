import "./Timeline.css";

interface Props { step: number; }

const MONTHS = [
  { range: "12-9 個月", items: ["確定婚期", "訂預算", "賓客名單", "預訂場地"] },
  { range: "8-6 個月", items: ["交通知書", "買婚戒", "揀婚紗", "預訂攝影"] },
  { range: "5-3 個月", items: ["發請柬", "試妝", "確認菜單", "買證書套"] },
  { range: "2-1 個月", items: ["確認人數", "婚紗修改", "買配件", "準備利是"] },
  { range: "最後 1 個月", items: ["確認細節", "打包蜜月", "美容", "休息"] },
];

export function Timeline({ step }: Props) {
  if (step < MONTHS.length) {
    const m = MONTHS[step];
    return (
      <div className="timeline step-container">
        <div className="month-badge">{m.range}</div>
        <div className="items-grid">
          {m.items.map((item, i) => (
            <div key={i} className="item-card">{item}</div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="timeline step-container final">
      <h2>✅ 12 個月時間表</h2>
      <p>跟住呢個時間表，籌備婚禮就唔會手忙腳亂</p>
    </div>
  );
}
