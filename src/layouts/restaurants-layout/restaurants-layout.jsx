import { RestaurantTab } from '../../components/restaurant-tab/restaurant-tab';
import { Tabs } from '../../components/tabs/tabs';
import cn from './restaurants-layout.module.css';
import { Outlet } from 'react-router';
import { useGetRestaurantsQuery } from '../../redux/services/api';

export const RestaurantsLayout = ({ title }) => {
  const { isError, isLoading, data: restaurants } = useGetRestaurantsQuery();

  if (isLoading) {
    return 'загрузка рессторанов...';
  }

  if (isError) {
    return 'ошибка загрузки ресторанов';
  }

  return (
    <div className={cn.restaurantPage}>
      <h1 className={cn.title}>{title}</h1>
      <div className={cn.tabWrapper}>
        <Tabs>
          {restaurants.map((restaurant) => (
            <RestaurantTab restaurant={restaurant} key={restaurant.id} />
          ))}
        </Tabs>
      </div>
      <div className={cn.restaurantWrapper}>
        <Outlet />
      </div>
    </div>
  );
};
