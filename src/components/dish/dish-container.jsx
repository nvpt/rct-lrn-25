import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItemAmountById,
} from '../../redux/entities/cart/cart-slice';
import { useCallback, useContext } from 'react';
import { Dish } from './dish';
import { AuthContext } from '../../providers/auth-provider';
import { selectDishById } from '../../redux/entities/dishes/dishes-slice';
import { useRequest } from '../../redux/hooks/use-request';
import { getDishById } from '../../redux/entities/dishes/get-dish-by-id';
import { REQUEST_STATUS } from '../../constants/api-const';

const MIN_DISH_COUNT = 0;
const MAX_DISH_COUNT = 5;

export const DishContainer = ({ dishId, restaurantId, className }) => {
  const { user } = useContext(AuthContext);
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

  const requestStatus = useRequest(getDishById, dishId);

  if (requestStatus === REQUEST_STATUS.pending) {
    return 'загрузка данных блюда...';
  }

  if (requestStatus === REQUEST_STATUS.rejected) {
    return 'ошибка загрузки данных по блюду';
  }

  if (!dish) {
    return null;
  }
  return (
    <Dish
      className={className}
      dish={dish}
      count={count}
      minDishCount={MIN_DISH_COUNT}
      maxDishCount={MAX_DISH_COUNT}
      incrementDish={incrementDish}
      decrementDish={decrementDish}
      isAuthorized={!!user?.name}
      restaurantId={restaurantId}
    />
  );
};
