import { useParams } from 'react-router';
import { RestaurantContainer } from '../../components/restaurant/restaurant-container';
import { ScrollProgressBar } from '../../components/scroll-progress-bar/scroll-progress-bar';

export const RestaurantPage = ({}) => {
  const { restaurantId } = useParams();

  return (
    <>
      <ScrollProgressBar key={restaurantId} />
      <RestaurantContainer selectedRestaurantId={restaurantId} />
    </>
  );
};
