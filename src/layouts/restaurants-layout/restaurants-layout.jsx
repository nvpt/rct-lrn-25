import { useSelector } from 'react-redux';
import { RestaurantTab } from '../../components/restaurant-tab/restaurant-tab';
import { RestaurantContainer } from '../../components/restaurant/restaurant-container';
import { ScrollProgressBar } from '../../components/scroll-progress-bar/scroll-progress-bar';
import { Tabs } from '../../components/tabs/tabs';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/restaurants-slice';
import cn from './restaurants-layout.module.css';
import { Outlet } from 'react-router';

export const RestaurantsLayout = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <div className={cn.restaurantPage}>
      <h1 className={cn.title}>{title}</h1>
      <div className={cn.tabWrapper}>
        <Tabs>
          {restaurantsIds.map((id) => (
            <RestaurantTab id={id} key={id} />
          ))}
        </Tabs>
      </div>
      <div className={cn.restaurantWrapper}>
        <Outlet />
      </div>
    </div>
  );
};
