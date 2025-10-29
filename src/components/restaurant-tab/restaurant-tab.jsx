import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme-provider';
import { NavLinkCustom } from '../navlink-custom/navlink-custom';
import cn from './restaurant-tab.module.css';

export const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { theme } = useContext(ThemeContext);

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;
  return (
    <NavLinkCustom to={`/restaurants/${id}`} className={cn.tab} theme={theme}>
      {name}
    </NavLinkCustom>
  );
};
