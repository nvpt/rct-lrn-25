import { useState } from 'react';
// import { restaurants } from '../../../public/mock';
import { Restaurant } from '../restaurant/restaurant';
import { Tabs } from '../tabs/tabs';
import { ScrollProgressBar } from '../scroll-progress-bar/scroll-progress-bar';
import cn from './restaurant-page.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/restaurants-slice';
import { RestaurantTab } from '../restaurant-tab/restaurant-tab';
import { RestaurantContainer } from '../restaurant/restaurant-container';

export const RestaurantsPage = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurantsIds[0]
  );
  const selectRestaurantId = (id) => {
    if (id === selectedRestaurantId) {
      return;
    }
    setSelectedRestaurantId(id);
  };

  /**
   * Получение номера таба для моков скролл-прогресс-бара.
   */
  const restaurantNumber = (selectedRestaurantId) => {
    return restaurantsIds.findIndex((id) => selectedRestaurantId === id) + 1;
  };

  return (
    <div className={cn.restaurantPage}>
      <ScrollProgressBar key={selectedRestaurantId} />
      <h1 className={cn.title}>{title}</h1>
      <div className={cn.tabWrapper}>
        <Tabs>
          {restaurantsIds.map((id) => (
            <RestaurantTab
              id={id}
              className={cn.tab}
              key={id}
              selectRestaurantId={selectRestaurantId}
              selectedRestaurantId={selectedRestaurantId}
            />
          ))}
        </Tabs>
      </div>
      <div className={cn.restaurantWrapper}>
        {selectedRestaurantId && (
          <RestaurantContainer
            key={selectedRestaurantId}
            selectedRestaurantId={selectedRestaurantId}
            /* Тех. параметр для демонстрации скролл-прогресс-бара. */
            restaurantNumber={restaurantNumber(selectedRestaurantId)}
          />
        )}
      </div>
    </div>
  );
};
