import { useState } from 'react';
import { Counter } from '../../../counter/counter';
import cn from './menu-item.module.css';

export const MenuItem = ({ dish, minDishCount, maxDishCount }) => {
  const [count, setCount] = useState(minDishCount);
  const incrementDish = () => {
    setCount(count + 1);
  };
  const decrementDish = () => {
    setCount(count - 1);
  };
  return (
    <div key={dish.id} className={cn.menuItem}>
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
