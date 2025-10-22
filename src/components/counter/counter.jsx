import { Button } from '../button/button';
import cn from './counter.module.css';

export const Counter = ({ min = 0, max = 5, value, increment, decrement }) => {
  const handleDecrement = () => {
    if (value > min) {
      decrement();
    }
  };
  const handleIncrement = () => {
    if (value < max) {
      increment();
    }
  };
  return (
    <div className={cn.counter}>
      <Button onClick={handleDecrement} className={cn.button} title={'-'} />
      <span>{value}</span>
      <Button onClick={handleIncrement} className={cn.button} title={'+'} />
    </div>
  );
};
