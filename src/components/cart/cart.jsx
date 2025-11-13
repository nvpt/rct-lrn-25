import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  selectCartItemsIds,
} from '../../redux/entities/cart/cart-slice';
import { CartItem } from './cart-item/cart-item';
import cn from './cart.module.css';
import { Button } from '../button/button';
import { useCallback } from 'react';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItemsIds = useSelector(selectCartItemsIds) || [];

  const handleClear = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className={cn.cart}>
      <h3>Список покупок</h3>
      <div className={cn.cartList}>
        {cartItemsIds.map((id) => (
          <CartItem id={id} key={id} />
        ))}
      </div>
      <Button
        className={cn.clearButton}
        title='Очистить корзину'
        onClick={() => handleClear()}
      />
    </div>
  );
};
