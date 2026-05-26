import "./Legal.css";
import { narrations } from "./narrations";

interface Props {
  step: number;
}

export function Component({ step }: Props) {
  if (step === 0) {
    return (
      <div className="Component step-0">
        <h2>📋 結婚要件</h2>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="Component step-1">
        <div className="requirements">
          <div className="req-item">
            <span className="req-icon">🎂</span>
            <span>年滿 16 歲</span>
          </div>
          <div className="req-item">
            <span className="req-icon">💑</span>
            <span>一夫一妻</span>
          </div>
          <div className="req-item">
            <span className="req-icon">🚫</span>
            <span>非近親</span>
          </div>
        </div>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="Component step-2">
        <p>⚠️ 違反規定嘅婚姻可能無效</p>
      </div>
    );
  }
  return null;
}

export { narrations };