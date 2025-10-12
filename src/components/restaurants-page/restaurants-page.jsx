import { useState } from 'react';
import { restaurants } from '../../../public/mock';
import { Restaurant } from '../restaurant/restaurant';
import { Tabs } from '../tabs/tabs';
import { ScrollProgressBar } from '../scroll-progress-bar/scroll-progress-bar';

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
   * Получение номера таба для моков скроллбара. После МР удалить
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
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
      }}
    >
      <ScrollProgressBar key={selectedRestaurant.id} />
      <h1 style={{ paddingLeft: '30px' }}>{title}</h1>
      <div style={{ marginBottom: '30px' }}>
        <Tabs
          items={restaurants}
          selectItem={selectItem}
          selectedId={selectedRestaurantId}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flex: '1',
          width: '100%',
          border: '1px solid',
          padding: '30px',
          marginBottom: '30px',
        }}
      >
        {selectedRestaurant && (
          <Restaurant
            key={selectedRestaurant.id}
            restaurant={selectedRestaurant}
            /* todo: временный мок для демонстрации скроллбара. После код-ревью удалить */
            number={restaurantNumber(selectedRestaurant)}
          />
        )}
      </div>
    </div>
  );
};
