import { useOutletContext } from 'react-router';
import cn from './menu.module.css';
import { MenuLinkContainer } from './menu-link-container';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurantById } from '../../../redux/entities/restaurants/restaurants-slice';
import { useEffect } from 'react';
import { getRestaurantById } from '../../../redux/entities/restaurants/get-restaurant-by-id';
import {
  selectDishesIds,
  selectDishesRequestStatus,
} from '../../../redux/entities/dishes/dishes-slice';
import { REQUEST_STATUS } from '../../../constants/api-const';
import { getDishesOfRestaurant } from '../../../redux/entities/dishes/get-dishes-of-restaurant';

export const Menu = () => {
  const { restaurantId } = useOutletContext();
  const requestDishesStatus = useSelector(selectDishesRequestStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesOfRestaurant(restaurantId));
  }, [dispatch, restaurantId]);
  const menuIds = useSelector(selectDishesIds);

  if (requestDishesStatus === REQUEST_STATUS.pending) {
    return 'загрузка меню...';
  }

  if (requestDishesStatus === REQUEST_STATUS.rejected) {
    return 'ошибка загрузки меню...';
  }

  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menuIds?.length ? (
          menuIds.map((menuId) => {
            return (
              <li key={menuId}>
                <MenuLinkContainer
                  menuId={menuId}
                  restaurantId={restaurantId}
                  className={cn.menuItem}
                />
              </li>
            );
          })
        ) : (
          <div>Не указано</div>
        )}
      </ul>
    </div>
  );
};
