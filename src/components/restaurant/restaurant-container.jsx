import { Restaurant } from './restaurant';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/theme-provider';
import {
  useGetRestaurantByIdQuery,
  useGetRestaurantsQuery,
} from '../../redux/services/api';

export const RestaurantContainer = ({ selectedRestaurantId }) => {
  const { data: restaurantNumber } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data:
        result.data
          ?.map((restaurant) => restaurant.id)
          ?.findIndex((id) => selectedRestaurantId === id) + 1,
    }),
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
      restaurantNumber={restaurantNumber}
      theme={theme}
    />
  );
};
