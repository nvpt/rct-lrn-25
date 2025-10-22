import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurants-slice';
import { Restaurant } from './restaurant';
import { AuthContext } from '../../providers/auth-provider';
import { useContext } from 'react';

export const RestaurantContainer = ({
  selectedRestaurantId,
  restaurantNumber,
}) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, selectedRestaurantId)
  );
  const { user } = useContext(AuthContext);

  if (!restaurant) {
    return null;
  }
  return (
    <Restaurant
      restaurant={restaurant}
      restaurantNumber={restaurantNumber}
      isAuthorized={user?.name}
    />
  );
};
