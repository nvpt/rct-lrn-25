import { useContext } from 'react';
import cn from './header.module.css';
import {
  THEME_MAP,
  THEME_OPTIONS,
  ThemeContext,
} from '../../providers/theme-provider';
import { AuthContext } from '../../providers/auth-provider';
import { Button } from '../button/button';
import { Cart } from '../cart/cart';
import { useLocation, useNavigate } from 'react-router';

const someUser = {
  name: 'Zato',
};

export const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { user, changeAuthorize } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeLinkDisabled = () => {
    return location.pathname === '/';
  };

  /**
   * Изменить тему
   */
  const handleChangeTheme = (event) => {
    const value = event.target.value;
    changeTheme(value);
  };

  const goToHome = () => {
    if (isHomeLinkDisabled()) {
      return;
    }
    navigate('/');
  };

  return (
    <header className={cn.header}>
      <div className={cn.leftPart}>
        <img
          src='../../../public/icons/home-icon.png'
          alt='Перейти на главную'
          title='Перейти на главную'
          width={'50px'}
          height={'50px'}
          className={cn.home}
          onClick={goToHome}
        />
        <Cart />
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
