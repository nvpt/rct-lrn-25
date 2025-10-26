import classNames from 'classnames';
import cn from './navlink-custom.module.css';
import { THEME_MAP } from '../../providers/theme-provider';
import { NavLink } from 'react-router';

export const NavLinkCustom = ({ children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        classNames(cn.link, props.className, {
          [cn.linkThemeDefault]: props.theme === THEME_MAP.gray,
          [cn.linkThemeGreen]: props.theme === THEME_MAP.green,
          [cn.linkThemeBlue]: props.theme === THEME_MAP.blue,
          [cn.active]: isActive,
        })
      }
    >
      {children}
    </NavLink>
  );
};
