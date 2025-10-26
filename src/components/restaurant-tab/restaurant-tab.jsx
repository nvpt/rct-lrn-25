import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme-provider';
import { LinkCustom } from '../navlink-custom/navlink-custom';

export const RestaurantTab = ({ id, className }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { theme } = useContext(ThemeContext);

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;
  return (
    <LinkCustom to={`/restaurants/${id}`} className={className} theme={theme}>
      {name}
    </LinkCustom>
  );
};
