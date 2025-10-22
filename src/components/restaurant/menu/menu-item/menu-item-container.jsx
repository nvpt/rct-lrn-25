import { useState } from 'react';
import { MenuItem } from './menu-item';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../../../redux/entities/dishes/dishes-slice';

export const MenuItemContainer = ({
  dishId,
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
  const dish = useSelector((state) => selectDishById(state, dishId));
  console.log('menu-item-container.jsx 21 >>> dish:', dish);

  if (!dish) {
    return null;
  }
  return (
    <MenuItem
      dish={dish}
      count={count}
      minDishCount={minDishCount}
      maxDishCount={maxDishCount}
      className={className}
      incrementDish={incrementDish}
      decrementDish={decrementDish}
      isAuthorized={isAuthorized}
    />
  );
};
