import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { selectDishById } from '../../../redux/entities/dishes/dishes-slice';

export const MenuLinkContainer = ({ dishId, restaurantId, className }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  return (
    <Link
      key={dishId}
      to={`/dish/${dishId}?restaurantId=${restaurantId}`}
      className={className}
    >
      {dish.name}
    </Link>
  );
};
