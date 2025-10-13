import { useState } from 'react';
import { restaurants } from '../../../public/mock';
import { Restaurant } from '../restaurant/restaurant';
import { Tabs } from '../tabs/tabs';
import { ScrollProgressBar } from '../scroll-progress-bar/scroll-progress-bar';
import cn from './restaurant-page.module.css';

export const RestaurantsPage = ({ title }) => {
  const INITIAL_RESTAURANT_ID = restaurants[0].id;
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
   * Получение номера таба для моков скролл-прогресс-бара. После МР удалить
   * todo: после код-ревью удалить
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
            /* todo: временный мок для демонстрации скролл-прогресс-бара. После код-ревью удалить */
            number={restaurantNumber(selectedRestaurant)}
          />
        )}
      </div>
    </div>
  );
};
