import classNames from 'classnames';
import cn from './dish.module.css';
import { Counter } from '../counter/counter';
import { Link } from 'react-router';
export const Dish = ({
  dish,
  minDishCount,
  maxDishCount,
  className,
  isAuthorized,
  incrementDish,
  decrementDish,
  count,
  restaurantId,
}) => {
  return (
    <div className={classNames(className, cn.wrapper)}>
      <div className={cn.description}>
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

      <Link to={`/restaurants/${restaurantId}`} className={cn.link}>
        Вернуться на страницу ресторана
      </Link>
    </div>
  );
};
