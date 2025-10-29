import { useSelector } from 'react-redux';
import { selectCartItemsIds } from '../../redux/entities/cart/cart-slice';
import { CartItem } from './cart-item/cart-item';
import cn from './cart.module.css';

export const Cart = () => {
  const cartItemsIds = useSelector(selectCartItemsIds) || [];

  return (
    <div className={cn.cart}>
      {cartItemsIds.map((id) => (
        <CartItem id={id} key={id} />
      ))}
    </div>
  );
};
