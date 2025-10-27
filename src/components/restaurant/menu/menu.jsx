import { useOutletContext } from 'react-router';
import cn from './menu.module.css';
import { MenuLinkContainer } from './menu-link-container';

export const Menu = () => {
  const { menu, restaurantId } = useOutletContext();
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu?.length ? (
          menu.map((dishId) => {
            return (
              <li key={dishId}>
                <MenuLinkContainer
                  dishId={dishId}
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
