import { useOutletContext } from 'react-router';
import cn from './menu.module.css';
import { MenuLinkContainer } from './menu-link-container';
import { useSelector } from 'react-redux';
import {
  selectDishesIds
} from '../../../redux/entities/dishes/dishes-slice';
import { REQUEST_STATUS } from '../../../constants/api-const';
import { getDishesOfRestaurant } from '../../../redux/entities/dishes/get-dishes-of-restaurant';
import { useRequest } from '../../../redux/hooks/use-request';

export const Menu = () => {
  const { restaurantId } = useOutletContext();

  const requestStatus = useRequest(getDishesOfRestaurant, restaurantId);

  const menuIds = useSelector(selectDishesIds);

  if (requestStatus === REQUEST_STATUS.pending) {
    return 'загрузка меню...';
  }

  if (requestStatus === REQUEST_STATUS.rejected) {
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
