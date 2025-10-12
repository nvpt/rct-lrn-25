import { Menu } from './menu/menu';
import { Reviews } from './reviews/reviews';
import { longRead } from '../../../public/longRead';

export const Restaurant = ({ restaurant, number }) => {
  const { menu, reviews, name: restaurantTitle } = restaurant;
  return (
    <div style={{ width: '100%' }}>
      <div>number {number}</div>
      <h2 style={{ textAlign: 'center' }}> Ресторан "{restaurantTitle}"</h2>
      <Menu menu={menu} />
      <br />
      <br />
      <Reviews reviews={reviews} />
      {/* Мок для демонстрации скроллбара. todo: После код-ревью удалить */}
      <div>{longRead.repeat(number)}</div>
    </div>
  );
};
