import { Counter } from '../../../counter/counter';
import cn from './menu-item.module.css';
import classNames from 'classnames';

export const MenuItem = ({
  dish,
  minDishCount,
  maxDishCount,
  className,
  isAuthorized,
  incrementDish,
  decrementDish,
  count,
}) => {
  return (
    <div className={classNames(className, cn.menuItem)}>
      {isAuthorized && (
        <Counter
          min={minDishCount}
          max={maxDishCount}
          value={count}
          increment={incrementDish}
          decrement={decrementDish}
        />
      )}
      <div className={cn.dish}>
        <div className={cn.dishName}>
          <div>{dish?.name}</div>&nbsp;<div>(Цена: {dish?.price})</div>
        </div>

        <i>Состав: {dish?.ingredients.join(', ')}</i>
      </div>
    </div>
  );
};
