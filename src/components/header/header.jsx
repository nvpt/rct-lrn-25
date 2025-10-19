import { useContext, useRef } from 'react';
import cn from './header.module.css';
import {
  THEME_CONTEXT_LIST,
  ThemeContext,
} from '../../providers/theme-provider';
import { AuthContext } from '../../providers/auth-provider';
import { Button } from '../button/button';

const someUser = {
  name: 'Zato',
};

export const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const { user, changeAuthorize } = useContext(AuthContext);
  const themeOptions = useRef(Object.values(THEME_CONTEXT_LIST));

  /**
   * Изменить тему
   */
  const handleChangeTheme = (event) => {
    const value = event.target.value;
    changeTheme(value);
  };

  return (
    <header className={cn.header}>
      <h2>HEADER</h2>

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
            {themeOptions.current.map((option) => (
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
