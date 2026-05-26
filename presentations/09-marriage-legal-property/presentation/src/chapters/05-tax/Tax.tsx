import "./Tax.css";
import { NARRATIONS as narrations } from "./narrations";

interface Props {
  step: number;
}

export function Tax({ step }: Props) {
  if (step === 0) {
    return (
      <div className="Component step-0">
        <h2>💵 稅務優惠</h2>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="Component step-1">
        <p className="amount">HK$264,000</p>
        <p>已婚人士免稅額</p>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="Component step-2">
        <p>合併報稅可能更著數。</p>
        <p className="tip">💡 了解夫婦分開或合併評稅</p>
      </div>
    );
  }
  return null;
}

export { narrations };