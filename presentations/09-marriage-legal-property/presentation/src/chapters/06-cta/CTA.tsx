import "./CTA.css";
import { narrations } from "./narrations";

interface Props {
  step: number;
}

export function Component({ step }: Props) {
  if (step === 0) {
    return (
      <div className="Component step-0">
        <h2>📌 總結</h2>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="Component step-1">
        <div className="recap">
          <div className="recap-item">💰 分別財產制</div>
          <div className="recap-item">📝 婚前協議</div>
          <div className="recap-item">💵 稅務優惠</div>
        </div>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="Component step-2">
        <p>去 myo-hk.github.io 睇更多！</p>
        <a href="https://myo-hk.github.io" className="cta-button">
          前往網站 →
        </a>
      </div>
    );
  }
  return null;
}

export { narrations };