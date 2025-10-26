import { Menu } from './menu/menu';
import { Reviews } from './reviews/reviews';
import { longRead } from '../../../public/longRead';
import cn from './restaurant.module.css';
import { NavLinkCustom } from '../navlink-custom/navlink-custom';
import { Outlet } from 'react-router';

export const Restaurant = ({
  restaurant,
  restaurantNumber,
  isAuthorized,
  theme,
}) => {
  const { menu, reviews: reviewsIds, name: restaurantTitle } = restaurant;

  return (
    <div className={cn.restaurant}>
      <h2 className={cn.title}> Ресторан "{restaurantTitle}"</h2>

      <div className={cn.links}>
        <NavLinkCustom to={'menu'} className={cn.link} theme={theme}>
          Меню
        </NavLinkCustom>
        <NavLinkCustom to={'reviews'} className={cn.link} theme={theme}>
          Отзывы
        </NavLinkCustom>
      </div>
      <Outlet context={{ menu, reviewsIds, isAuthorized }} />
      <br />
      <br />
      {/* Мок для демонстрации скролл-прогресс-бара. */}
      <div>{longRead.repeat(restaurantNumber)}</div>
    </div>
  );
};
