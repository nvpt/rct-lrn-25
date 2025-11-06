import { useSelector } from 'react-redux';
import {
  selectRestaurantById,
  selectRestaurantsIds,
} from '../../redux/entities/restaurants/restaurants-slice';
import { Restaurant } from './restaurant';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme-provider';
import { useRequest } from '../../redux/hooks/use-request';
import { getRestaurantById } from '../../redux/entities/restaurants/get-restaurant-by-id';
import { REQUEST_STATUS } from '../../constants/api-const';

export const RestaurantContainer = ({ selectedRestaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, selectedRestaurantId)
  );
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const requestStatus = useRequest(getRestaurantById, selectedRestaurantId);

  const { theme } = useContext(ThemeContext);

  if (requestStatus === REQUEST_STATUS.pending) {
    return 'загрузка данных ресторана...';
  }

  if (requestStatus === REQUEST_STATUS.rejected) {
    return 'ошибка загрузки данных по ресторану';
  }

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
      theme={theme}
    />
  );
};
