import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/auth-provider';

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

export const useScrollProgress = () => {
  /* Текущая позиция скролла в пикселях */
  const [currentPositionInPx, setCurrentPositionInPx] = useState(0);
  const { user } = useContext(AuthContext);
  /* todo temp */
  console.log('use-scroll-progress.js 33 >>> user:', user);

  /* Высота всего документа */
  const documentHeightRef = useRef();

  useEffect(() => {
    documentHeightRef.current = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    setCurrentPositionInPx(definePositionInPx());
  }, [user?.name]);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentPositionInPx(definePositionInPx());
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [user?.name]);

  /* todo temp */
  let res =
    definePositionInPercents(currentPositionInPx, documentHeightRef.current) +
    '%';
  console.log('use-scroll-progress.js 65 >>> res:', res);

  return res;
};
