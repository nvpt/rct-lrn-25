import { Link } from 'react-router';
import cn from './home.page.module.css';
import classNames from 'classnames';
import { THEME_MAP, ThemeContext } from '../../providers/theme-provider';
import { useContext } from 'react';

export const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cn.container}>
      <h1 className={cn.title}>Добро пожаловать в каталог ресторанов</h1>

      <div className={cn.linksBLock}>
        <Link
          to='restaurants'
          className={classNames(cn.link, {
            [cn.linkThemeDefault]: theme === THEME_MAP.gray,
            [cn.linkThemeGreen]: theme === THEME_MAP.green,
            [cn.linkThemeBlue]: theme === THEME_MAP.blue,
          })}
        >
          Перейти к ресторанам
        </Link>
      </div>
    </div>
  );
};
