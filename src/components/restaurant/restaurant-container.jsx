import { useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurantsIds,
} from '../../redux/entities/restaurants/restaurants-slice';
import { Restaurant } from './restaurant';
import { AuthContext } from '../../providers/auth-provider';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme-provider';

export const RestaurantContainer = ({ selectedRestaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, selectedRestaurantId)
  );
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  if (!restaurant) {
    return null;
  }

  /**
   * Получение номера таба для моков скролл-прогресс-бара.
   */
  const restaurantNumber = (selectedRestaurantId) => {
    return restaurantsIds.findIndex((id) => selectedRestaurantId === id) + 1;
  };

  return (
    <Restaurant
      restaurant={restaurant}
      restaurantNumber={restaurantNumber(selectedRestaurantId)}
      isAuthorized={user?.name}
      theme={theme}
    />
  );
};
