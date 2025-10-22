import { useState } from 'react';
import { Counter } from '../../../counter/counter';
import cn from './menu-item.module.css';
import classNames from 'classnames';

export const MenuItem = ({
  dish,
  minDishCount,
  maxDishCount,
  className,
  isAuthorized,
}) => {
  const [count, setCount] = useState(minDishCount);
  const incrementDish = () => {
    setCount(count + 1);
  };
  const decrementDish = () => {
    setCount(count - 1);
  };
  return (
    <div key={dish.id} className={classNames(className, cn.menuItem)}>
      {isAuthorized && (
        <Counter
          min={minDishCount}
          max={maxDishCount}
          value={count}
          increment={incrementDish}
          decrement={decrementDish}
        />
      )}
      <div key={dish.id}>{dish.name}</div>
    </div>
  );
};
