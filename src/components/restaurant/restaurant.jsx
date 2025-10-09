import { Counter } from '../counter/counter';
import { Menu } from './menu/menu';
import { Reviews } from './reviews/reviews';

export const Restaurant = ({ restaurant }) => {
  const { menu, reviews, name: restaurantTitle } = restaurant;
  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ textAlign: 'center' }}> Ресторан "{restaurantTitle}"</h2>
      <Menu menu={menu} />
      <br />
      <br />
      <Reviews reviews={reviews} />
    </div>
  );
};
