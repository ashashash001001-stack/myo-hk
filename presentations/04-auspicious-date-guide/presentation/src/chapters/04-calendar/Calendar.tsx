import "./Calendar.css";

interface Props { step: number; }

const MONTHS = [
  { month: "2025年1月", dates: "1月1日、1月15日、1月28日", note: "年初宜嫁娶" },
  { month: "2025年3月", dates: "3月8日、3月22日", note: "春季好日多" },
  { month: "2025年5月", dates: "5月10日、5月24日", note: "黃金婚禮旺季" },
  { month: "2025年10月", dates: "10月4日、10月18日、10月25日", note: "秋季最受歡迎" },
  { month: "2025年11月", dates: "11月8日、11月22日", note: "天氣涼爽適宜" },
  { month: "2025年12月", dates: "12月6日、12月20日", note: "聖誕婚禮熱門" },
];

export function Calendar({ step }: Props) {
  if (step < MONTHS.length) {
    const m = MONTHS[step];
    return (
      <div className="calendar step-container">
        <div className="cal-month">{m.month}</div>
        <div className="cal-dates">{m.dates}</div>
        <div className="cal-note">{m.note}</div>
      </div>
    );
  }
  return (
    <div className="calendar step-container final">
      <h2>📅 2025 結婚好日</h2>
      <p>以上只係部分好日，完整列表可以去我哋網站睇</p>
    </div>
  );
}