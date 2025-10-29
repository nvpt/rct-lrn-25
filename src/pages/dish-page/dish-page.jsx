import { useParams, useSearchParams } from 'react-router';
import { DishContainer } from '../../components/dish/dish-container';
import cn from './dish-page.module.css';
import { useCallback } from 'react';
export const DishPage = () => {
  const { dishId } = useParams();
  const [searchParams] = useSearchParams();

  const getParam = useCallback(
    (key, defaultValue = '') => {
      return searchParams.get(key) || defaultValue;
    },
    [searchParams]
  );

  const restaurantId = getParam('restaurantId');

  return (
    <div className={cn.page}>
      <DishContainer
        dishId={dishId}
        restaurantId={restaurantId}
        className={cn.dish}
      />
    </div>
  );
};
