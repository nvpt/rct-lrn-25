import { useContext } from 'react';
import cn from './scroll-progress-bar.module.css';
import { useScrollProgress } from './use-scroll-progress';
import { ThemeContext } from '../../providers/theme-provider';

export const ScrollProgressBar = () => {
  const scrollBarWidth = useScrollProgress();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={cn.scrollbar}
      style={{ width: scrollBarWidth, backgroundColor: `light${theme}` }}
    />
  );
};
