import { Link } from 'react-router';

export const MenuLinkContainer = ({ menu, restaurantId, className }) => {
  return (
    <Link
      to={`/dish/${menu.id}?restaurantId=${restaurantId}`}
      className={className}
    >
      {menu.name}
    </Link>
  );
};
