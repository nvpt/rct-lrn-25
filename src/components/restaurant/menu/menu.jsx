import { Counter } from '../../counter/counter';
import { MenuItem } from './menu-item/menu-item';

export const Menu = ({ menu }) => {
  const minDishCount = 0;
  const maxDishCount = 5;
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
