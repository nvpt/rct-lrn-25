import { useSelector } from 'react-redux';
import { selectCartItemAmountById } from '../../../redux/entities/cart/cart-slice';
import { useGetDishByIdQuery } from '../../../redux/services/api';

export const CartItem = ({ id }) => {
  const dishCount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;
  const { data: dish } = useGetDishByIdQuery(id);

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
