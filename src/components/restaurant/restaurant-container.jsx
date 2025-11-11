import { Restaurant } from './restaurant';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme-provider';
import {
  useGetRestaurantByIdQuery,
  useGetRestaurantsQuery,
} from '../../redux/services/api';

export const RestaurantContainer = ({ selectedRestaurantId }) => {
  let restaurantsIds = [];
  let restaurantNumber = 0;

  useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      restaurantsIds = result.data.map((restaurant) => restaurant.id);

      /**
       * Получение номера таба для моков скролл-прогресс-бара.
       */
      restaurantNumber = (selectedRestaurantId) => {
        return (
          restaurantsIds.findIndex((id) => selectedRestaurantId === id) + 1
        );
      };
      return result;
    },
  });

  const {
    isLoading,
    isError,
    data: restaurant,
  } = useGetRestaurantByIdQuery(selectedRestaurantId);

  const { theme } = useContext(ThemeContext);

  if (isLoading) {
    return 'загрузка данных ресторана...';
  }

  if (isError) {
    return 'ошибка загрузки данных по ресторану';
  }

  if (!restaurant) {
    return null;
  }

  return (
    <Restaurant
      restaurant={restaurant}
      restaurantNumber={restaurantNumber(selectedRestaurantId)}
      theme={theme}
    />
  );
};
