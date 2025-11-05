import { useDispatch, useSelector } from 'react-redux';
import { RestaurantTab } from '../../components/restaurant-tab/restaurant-tab';
import { Tabs } from '../../components/tabs/tabs';
import {
  selectRequestStatus,
  selectRestaurantsIds,
} from '../../redux/entities/restaurants/restaurants-slice';
import cn from './restaurants-layout.module.css';
import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants';

export const RestaurantsLayout = ({ title }) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useSelector(selectRequestStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  if (requestStatus === 'pending') {
    return 'загрузка...';
  }

  if (requestStatus === 'rejected') {
    return 'ошибка';
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
