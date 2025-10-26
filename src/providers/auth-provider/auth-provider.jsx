import { useCallback, useState } from 'react';
import { AuthContext, initialAuthContext } from '.';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/entities/cart/cart-slice';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialAuthContext.user);
  const dispatch = useDispatch();
  const changeAuthorize = useCallback(
    (user) => {
      if (!user) {
        dispatch(clearCart());
      }
      setUser(user);
    },
    [dispatch]
  );
  return (
    <AuthContext value={{ ...initialAuthContext, user, changeAuthorize }}>
      {children}
    </AuthContext>
  );
};
