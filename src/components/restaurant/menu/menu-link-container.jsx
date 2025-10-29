import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectDishById } from '../../../redux/entities/dishes/dishes-slice';

export const MenuLinkContainer = ({ menuId, restaurantId, className }) => {
  const dish = useSelector((state) => selectDishById(state, menuId));
  return (
    <Link
      key={menuId}
      to={`/dish/${menuId}?restaurantId=${restaurantId}`}
      className={className}
    >
      {dish.name}
    </Link>
  );
};
