import { useOutletContext } from 'react-router';
import { MenuItemContainer } from './menu-item/menu-item-container';
import cn from './menu.module.css';

const minDishCount = 0;
const maxDishCount = 5;
export const Menu = () => {
  const { menu, isAuthorized } = useOutletContext();
  return (
    <div>
      <h3>Меню</h3>
      <div>
        {menu?.length ? (
          menu.map((dishId) => {
            return (
              <MenuItemContainer
                key={dishId}
                dishId={dishId}
                minDishCount={minDishCount}
                maxDishCount={maxDishCount}
                className={cn.menuItem}
                isAuthorized={isAuthorized}
              />
            );
          })
        ) : (
          <div>Не указано</div>
        )}
      </div>
    </div>
  );
};
