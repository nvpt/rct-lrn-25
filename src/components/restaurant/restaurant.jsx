import { Menu } from './menu/menu';
import { Reviews } from './reviews/reviews';
import { longRead } from '../../../public/longRead';
import cn from './restaurant.module.css';

export const Restaurant = ({ restaurant, number }) => {
  const { menu, reviews, name: restaurantTitle } = restaurant;
  return (
    <div className={cn.restaurant}>
      <h2 className={cn.title}> Ресторан "{restaurantTitle}"</h2>
      <Menu menu={menu} />
      <br />
      <br />
      <Reviews reviews={reviews} />
      {/* Мок для демонстрации скролл-прогресс-бара. todo: После код-ревью удалить */}
      <div>{longRead.repeat(number)}</div>
    </div>
  );
};
