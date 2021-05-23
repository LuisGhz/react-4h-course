import { Button } from './button/index';
import './index.css';

export const YesNoButtons = () => {
  return (
    <div className="buttons-content">
      <Button backgroundColor="green" textContent="Yes" />
      <Button backgroundColor="red" textContent="No" />
    </div>
  );
}