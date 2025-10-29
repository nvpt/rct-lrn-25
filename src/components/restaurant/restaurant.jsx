import { longRead } from '../../../public/longRead';
import cn from './restaurant.module.css';
import { NavLinkCustom } from '../navlink-custom/navlink-custom';
import { Outlet } from 'react-router';

export const Restaurant = ({ restaurant, restaurantNumber, theme }) => {
  const { name: restaurantTitle, id: restaurantId } = restaurant;

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

      {/* Меню и Отзывы */}
      <Outlet context={{ restaurantId }} />
      <br />
      <br />
      {/* Мок для демонстрации скролл-прогресс-бара. */}
      <div>{longRead.repeat(restaurantNumber)}</div>
    </div>
  );
};
