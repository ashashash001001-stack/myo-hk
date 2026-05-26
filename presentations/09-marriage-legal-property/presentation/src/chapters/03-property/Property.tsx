import "./Property.css";
import { narrations } from "./narrations";

interface Props {
  step: number;
}

export function Component({ step }: Props) {
  if (step === 0) {
    return (
      <div className="Component step-0">
        <h2>💰 分別財產制</h2>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="Component step-1">
        <p className="highlight">你嘅仍係你嘅</p>
        <p>結婚後，你嘅財產仍然係你嘅。</p>
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="Component step-2">
        <p>唔會因為結婚而改變擁有權。</p>
        <p className="note">* 聯名購買嘅財產除外</p>
      </div>
    );
  }
  return null;
}

export { narrations };