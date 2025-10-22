import { useContext } from 'react';
import cn from './scroll-progress-bar.module.css';
import { useScrollProgress } from './use-scroll-progress';
import { THEME_MAP, ThemeContext } from '../../providers/theme-provider';
import classNames from 'classnames';

export const ScrollProgressBar = () => {
  const scrollBarWidth = useScrollProgress();
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={classNames(cn.scrollbar, {
          [cn.gray]: theme === THEME_MAP.gray,
          [cn.blue]: theme === THEME_MAP.blue,
          [cn.green]: theme === THEME_MAP.green,
        })}
        style={{ width: scrollBarWidth }}
      />
    </>
  );
};
