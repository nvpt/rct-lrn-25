import { useState } from 'react';
import { restaurants } from '../../../public/mock';
import { Restaurant } from '../restaurant/restaurant';
import { Tabs } from '../tabs/tabs';
import { ScrollProgressBar } from '../scroll-progress-bar/scroll-progress-bar';
import cn from './restaurant-page.module.css';

const INITIAL_RESTAURANT_ID = restaurants[0].id;
export const RestaurantsPage = ({ title }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    INITIAL_RESTAURANT_ID
  );
  const selectItem = (id) => {
    if (id === selectedRestaurantId) {
      return;
    }
    setSelectedRestaurantId(id);
  };

  const selectedRestaurant = restaurants.find(
    (restaurant) => restaurant.id === selectedRestaurantId
  );

  /**
   * Получение номера таба для моков скролл-прогресс-бара.
   */
  const restaurantNumber = (selectedRestaurant) => {
    return (
      restaurants.findIndex(
        (restaurant) => selectedRestaurant.id === restaurant.id
      ) + 1
    );
  };

  return (
    <div className={cn.restaurantPage}>
      <ScrollProgressBar key={selectedRestaurant.id} />
      <h1 className={cn.title}>{title}</h1>
      <div className={cn.tabWrapper}>
        <Tabs
          items={restaurants}
          selectItem={selectItem}
          selectedId={selectedRestaurantId}
        />
      </div>
      <div className={cn.restaurantWrapper}>
        {selectedRestaurant && (
          <Restaurant
            key={selectedRestaurant.id}
            restaurant={selectedRestaurant}
            /* Тех. параметр для демонстрации скролл-прогресс-бара. */
            number={restaurantNumber(selectedRestaurant)}
          />
        )}
      </div>
    </div>
  );
};
