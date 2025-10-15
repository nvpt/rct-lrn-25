import { Counter } from '../../counter/counter';
import { MenuItem } from './menu-item/menu-item';
import cn from './menu.module.css';

const minDishCount = 0;
const maxDishCount = 5;
export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <div>
        {menu.length ? (
          menu.map((dish) => {
            return (
              <MenuItem
                key={dish.id}
                dish={dish}
                minDishCount={minDishCount}
                maxDishCount={maxDishCount}
                className={cn.menuItem}
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
