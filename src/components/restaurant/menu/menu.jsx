import { useOutletContext } from 'react-router';
import cn from './menu.module.css';
import { MenuLinkContainer } from './menu-link-container';
import { useGetDishesByRestaurantIdQuery } from '../../../redux/services/api';

export const Menu = () => {
  const { restaurantId } = useOutletContext();

  const {
    data: menus,
    isLoading,
    isError,
  } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return 'загрузка меню...';
  }

  if (isError) {
    return 'ошибка загрузки меню...';
  }

  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menus?.length ? (
          menus.map((menu) => {
            return (
              <li key={menu.id}>
                <MenuLinkContainer
                  menu={menu}
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
