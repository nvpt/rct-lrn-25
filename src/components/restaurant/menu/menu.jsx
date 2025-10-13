import { Counter } from '../../counter/counter';
import { MenuItem } from './menu-item/menu-item';

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
