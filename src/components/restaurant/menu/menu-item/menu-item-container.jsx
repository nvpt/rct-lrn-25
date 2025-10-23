import { useCallback } from 'react';
import { MenuItem } from './menu-item';
import { useDispatch, useSelector } from 'react-redux';
import { selectDishById } from '../../../../redux/entities/dishes/dishes-slice';
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItemAmountById,
} from '../../../../redux/entities/cart/cart-slice';

export const MenuItemContainer = ({
  dishId,
  minDishCount,
  maxDishCount,
  className,
  isAuthorized,
}) => {
  const dispatch = useDispatch();
  const count = useSelector(
    (state) => selectCartItemAmountById(state, dishId) || 0
  );
  const incrementDish = useCallback(
    () => dispatch(addItemToCart(dishId)),
    [dispatch, dishId]
  );
  const decrementDish = useCallback(
    () => dispatch(removeItemFromCart(dishId)),
    [dispatch, dishId]
  );
  const dish = useSelector((state) => selectDishById(state, dishId));

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
