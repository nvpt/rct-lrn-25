import { useState } from 'react';
import { restaurants } from '../../../public/mock';
import { Restaurant } from '../restaurant/restaurant';
import { Tabs } from '../tabs/tabs';

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
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
      }}
    >
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
        {restaurants
          .filter((restaurant) => restaurant.id === selectedRestaurantId)
          .map((restaurant) => (
            <Restaurant restaurant={restaurant} key={restaurant.id} />
          ))}
      </div>
    </div>
  );
};
