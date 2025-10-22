import { Menu } from './menu/menu';
import { Reviews } from './reviews/reviews';
import { longRead } from '../../../public/longRead';
import cn from './restaurant.module.css';

export const Restaurant = ({ restaurant, restaurantNumber, isAuthorized }) => {
  const { menu, reviews, name: restaurantTitle } = restaurant;

  return (
    <div className={cn.restaurant}>
      <h2 className={cn.title}> Ресторан "{restaurantTitle}"</h2>
      <Menu menu={menu} isAuthorized={isAuthorized} />
      <br />
      <br />
      <Reviews reviewsIds={reviews} isAuthorized={isAuthorized} />
      {/* Мок для демонстрации скролл-прогресс-бара. */}
      <div>{longRead.repeat(restaurantNumber)}</div>
    </div>
  );
};
