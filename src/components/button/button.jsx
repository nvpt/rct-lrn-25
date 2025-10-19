import { useContext } from 'react';
import cn from './button.module.css';
import classNames from 'classnames';
import {
  THEME_CONTEXT_LIST,
  ThemeContext,
} from '../../providers/theme-provider';
export const Button = ({
  title,
  onClick,
  className,
  style,
  disabled,
  type = 'button',
}) => {
  const { theme } = useContext(ThemeContext);

  /**
   * Наличие класса active в списке проброшенных в данных компонент
   * @returns
   */
  const isActive = () => {
    return (
      className?.trim()?.split(' ')?.length &&
      className.split(' ').includes('active')
    );
  };

  return (
    <button
      type={type}
      className={classNames(className, cn.button, {
        [cn.buttonThemeDefault]: theme === THEME_CONTEXT_LIST.gray,
        [cn.buttonThemeGreen]: theme === THEME_CONTEXT_LIST.green,
        [cn.buttonThemeBlue]: theme === THEME_CONTEXT_LIST.blue,
        [cn.active]: isActive(),
      })}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
