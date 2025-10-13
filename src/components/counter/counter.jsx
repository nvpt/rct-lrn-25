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
      <button type='button' onClick={handleDecrement} className={cn.button}>
        -
      </button>
      <span>{value}</span>
      <button type='button' onClick={handleIncrement} className={cn.button}>
        +
      </button>
    </div>
  );
};
