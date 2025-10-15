import cn from './scroll-progress-bar.module.css';
import { useScrollProgress } from './use-scroll-progress';

export const ScrollProgressBar = () => {
  const scrollBarWidth = useScrollProgress();

  return <div className={cn.scrollbar} style={{ width: scrollBarWidth }} />;
};
