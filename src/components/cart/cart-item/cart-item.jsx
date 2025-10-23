import { useSelector } from 'react-redux';
import { selectCartItemAmountById } from '../../../redux/entities/cart/cart-slice';
import { selectDishById } from '../../../redux/entities/dishes/dishes-slice';

export const CartItem = ({ id }) => {
  const dishCount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  const { name, price } = dish;

  return (
    <div>
      {name}:{dishCount} <i>(цена: {price})</i>
    </div>
  );
};
