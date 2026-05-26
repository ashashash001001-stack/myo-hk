import "./Coldopen.css";
import { NARRATIONS as narrations } from "./narrations";

interface Props {
  step: number;
}

export function Coldopen({ step }: Props) {
  if (step === 0) {
    return (
      <div className="Component step-0">
        <h2>⚖️ 結婚法律</h2>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="Component step-1">
        <ul className="checklist">
          <li>✅ 結婚除咗感情，仲涉及法律問題</li>
          <li>✅ 香港嘅婚姻法例你知幾多？</li>
        </ul>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="Component step-2">
        <p>今日講下結婚嘅法律知識。</p>
        <p className="preview">法律契約 · 財產制度 · 婚前協議 · 稅務優惠</p>
      </div>
    );
  }
  return null;
}

export { narrations };