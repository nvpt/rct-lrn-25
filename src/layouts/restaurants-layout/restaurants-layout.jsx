import { useSelector } from 'react-redux';
import { RestaurantTab } from '../../components/restaurant-tab/restaurant-tab';
import { Tabs } from '../../components/tabs/tabs';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/restaurants-slice';
import cn from './restaurants-layout.module.css';
import { Outlet } from 'react-router';
import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants';
import { REQUEST_STATUS } from '../../constants/api-const';
import { useRequest } from '../../redux/hooks/use-request';

export const RestaurantsLayout = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === REQUEST_STATUS.pending) {
    return 'загрузка рессторанов...';
  }

  if (requestStatus === REQUEST_STATUS.rejected) {
    return 'ошибка загрузки ресторанов';
  }

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
