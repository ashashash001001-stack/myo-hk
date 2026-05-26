import "./Prenup.css";
import { NARRATIONS as narrations } from "./narrations";

interface Props {
  step: number;
}

export function Prenup({ step }: Props) {
  if (step === 0) {
    return (
      <div className="Component step-0">
        <h2>📝 婚前協議</h2>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="Component step-1">
        <p>婚前協議可以約束離婚後嘅財產分配。</p>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="Component step-2">
        <p>但要符合一定條件先有效：</p>
        <ul className="conditions">
          <li>📋 書面形式</li>
          <li>✍️ 雙方簽署</li>
          <li>💼 獨立法律意見</li>
        </ul>
        <p className="recommend">建議諮詢律師</p>
      </div>
    );
  }
  return null;
}

export { narrations };