import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice';
import { Button } from '../button/button';

export const RestaurantTab = ({
  id,
  className,
  selectRestaurantId,
  selectedRestaurantId,
}) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;
  return (
    <Button
      className={className}
      key={id}
      onClick={() => selectRestaurantId(id)}
      title={name}
      isActive={selectedRestaurantId === id}
    />
  );
};
