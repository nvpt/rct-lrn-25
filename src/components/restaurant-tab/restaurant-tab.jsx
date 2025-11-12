import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme-provider';
import { NavLinkCustom } from '../navlink-custom/navlink-custom';
import cn from './restaurant-tab.module.css';

export const RestaurantTab = ({ restaurant }) => {
  const { theme } = useContext(ThemeContext);

  if (!restaurant) {
    return null;
  }

  const { name, id } = restaurant;
  return (
    <NavLinkCustom to={`/restaurants/${id}`} className={cn.tab} theme={theme}>
      {name}
    </NavLinkCustom>
  );
};
