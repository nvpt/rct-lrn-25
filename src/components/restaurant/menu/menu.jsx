import { MenuItem } from './menu-item/menu-item';
import { MenuItemContainer } from './menu-item/menu-item-container';
import cn from './menu.module.css';

const minDishCount = 0;
const maxDishCount = 5;
export const Menu = ({ menu, isAuthorized }) => {
  return (
    <div>
      <h3>Меню</h3>
      <div>
        {menu.length ? (
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
