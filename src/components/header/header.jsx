import { useContext, useState } from 'react';
import cn from './header.module.css';
import { THEME_OPTIONS, ThemeContext } from '../../providers/theme-provider';
import { AuthContext } from '../../providers/auth-provider';
import { Button } from '../button/button';
import { Cart } from '../cart/cart';
import { Link, useLocation } from 'react-router';
import { someUser } from '../../../public/user-mock';
import { Modal } from '../modal/modal';
import { useSelector } from 'react-redux';
import { selectCartItemsIds } from '../../redux/entities/cart/cart-slice';

export const Header = () => {
  const [cartOpened, setCartOpened] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);
  const { user, changeAuthorize } = useContext(AuthContext);
  const location = useLocation();
  const cartItemsIds = useSelector(selectCartItemsIds) || [];

  console.log('header.jsx 20 >>> cartItemsIds:', cartItemsIds);

  /**
   * Изменить тему
   */
  const handleChangeTheme = (event) => {
    const value = event.target.value;
    changeTheme(value);
  };

  return (
    <header className={cn.header}>
      <div className={cn.leftPart}>
        <Link to={'/'} disabled={location.pathname === '/'}>
          <img
            src='../../../public/icons/home-icon.png'
            alt='Перейти на главную'
            title='Перейти на главную'
            width={'50px'}
            height={'50px'}
            className={cn.home}
          />
        </Link>
        {!!cartItemsIds?.length && (
          <div>
            <img
              src='../../../public/icons/cart.png'
              className={cn.cartIcon}
              alt='Корзина покупок'
              onClick={() => setCartOpened(true)}
            />
          </div>
        )}

        <Modal
          isOpen={cartOpened}
          setIsOpen={setCartOpened}
          className={cn.cartModal}
        >
          <Cart />
        </Modal>
      </div>

      <div className={cn.rightPart}>
        <div className={cn.user}>
          {user?.name && (
            <>
              {user.name}
              <Button title={'Выйти'} onClick={() => changeAuthorize(null)} />
            </>
          )}
          {!user?.name && (
            <Button title={'Войти'} onClick={() => changeAuthorize(someUser)} />
          )}
        </div>
        <div className={cn.themeSelector}>
          <label htmlFor='themeSelector'>Выбрать тему:</label>
          <select id='themeSelector' value={theme} onChange={handleChangeTheme}>
            {THEME_OPTIONS.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};
