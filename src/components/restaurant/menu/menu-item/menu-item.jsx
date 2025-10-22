import { useContext, useState } from 'react';
import { Counter } from '../../../counter/counter';
import cn from './menu-item.module.css';
import classNames from 'classnames';
import { AuthContext } from '../../../../providers/auth-provider';

export const MenuItem = ({ dish, minDishCount, maxDishCount, className }) => {
  const { user } = useContext(AuthContext);
  const [count, setCount] = useState(minDishCount);
  const incrementDish = () => {
    setCount(count + 1);
  };
  const decrementDish = () => {
    setCount(count - 1);
  };
  return (
    <div key={dish.id} className={classNames(className, cn.menuItem)}>
      {user?.name && (
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
