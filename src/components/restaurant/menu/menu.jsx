import { useOutletContext } from 'react-router';
import cn from './menu.module.css';
import { MenuLinkContainer } from './menu-link-container';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../../redux/entities/restaurants/restaurants-slice';

export const Menu = () => {
  const { restaurantId } = useOutletContext();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { menu: menuIds } = restaurant;

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
