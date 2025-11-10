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

  // todo верно ли выполнено использование кешированного значения квери? Как можно понять, что кешированное значение будет получено  ранее, чем мы обратимся к нему? Возможно, имеет создать хук для обращения к кешированному значению квери?
  // Получим ли мы здесь значение, если еще не вызывались данные ресторанов, или такий синтаксис работает только с закеширвоанными значениями? Если мы не уверены, что где-то есть и будут в принципе закешированные значения, можем ли мы здесь же прописать "обычный" вызов квери (который на стр 32)?
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

  // todo зачем нужен первый вариант синтаксиса на строке 13, если можно использовать "обычную" запись, которая ниже?
  // const { data } = useGetRestaurantsQuery();

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
