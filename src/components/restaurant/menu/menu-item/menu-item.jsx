import { useState } from 'react';
import { Counter } from '../../../counter/counter';

export const MenuItem = ({ dish, minDishCount, maxDishCount }) => {
  const [count, setCount] = useState(minDishCount);
  const incrementDish = () => {
    setCount(count + 1);
  };
  const decrementDish = () => {
    setCount(count - 1);
  };
  return (
    <div
      key={dish.id}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '15px',
      }}
    >
      <Counter
        min={minDishCount}
        max={maxDishCount}
        value={count}
        increment={incrementDish}
        decrement={decrementDish}
      />
      <div key={dish.id}>{dish.name}</div>
    </div>
  );
};
