import { useContext } from 'react';
import cn from './button.module.css';
import classNames from 'classnames';
import { THEME_MAP, ThemeContext } from '../../providers/theme-provider';
export const Button = ({
  title,
  onClick,
  className,
  style,
  disabled,
  type = 'button',
  isActive = false,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type={type}
      className={classNames(className, cn.button, {
        [cn.buttonThemeDefault]: theme === THEME_MAP.gray,
        [cn.buttonThemeGreen]: theme === THEME_MAP.green,
        [cn.buttonThemeBlue]: theme === THEME_MAP.blue,
        [cn.active]: isActive,
      })}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
