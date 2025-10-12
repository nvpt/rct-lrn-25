import { useEffect, useState } from 'react';
import cn from './scroll-progress-bar.module.css';

/**
 * Определение текущей позиции скролла в пикселях
 * @returns
 */
const definePositionInPx = () => {
  let res = Math.max(
    document.body.scrollTop || document.documentElement.scrollTop
  );
  return res;
};

/**
 * Рассчет позиции скролла в процентах
 */
const definePositionInPercents = (currentPosition, documentHeight) => {
  /* Высота видимой области */
  const windowHeight = window.innerHeight;

  /* Максимально возможное здначение прокрутки скролла в пикселях */
  const endScrollPosition = documentHeight - windowHeight;

  /* При первичной инициализации documentHeight = windowHeight, и endScrollPosition = 0 */
  return endScrollPosition ? (currentPosition * 100) / endScrollPosition : 0;
};

export const ScrollProgressBar = () => {
  /* Текущая позиция скролла в пикселях */
  const [currentPositionInPx, setCurrentPositionInPx] = useState(0);

  /* Высота всего документа */
  const [documentHeight, setDocumentHeight] = useState();

  useEffect(() => {
    setDocumentHeight(
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
    );
    setCurrentPositionInPx(definePositionInPx());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentPositionInPx(definePositionInPx());
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPositionInPx]);

  return (
    <div className={cn.scrollbar}>
      <div
        className={cn.scrollbarContainer}
        style={{
          width:
            definePositionInPercents(currentPositionInPx, documentHeight) + '%',
        }}
      ></div>
    </div>
  );
};
