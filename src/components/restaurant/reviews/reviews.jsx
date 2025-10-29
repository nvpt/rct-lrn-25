import { useOutletContext } from 'react-router';
import { ReviewContainer } from '../../review/review-container';
import { ReviewForm } from './review-form/review-form';
import cn from './reviews.module.css';
import { useCallback, useContext } from 'react';
import { AuthContext } from '../../../providers/auth-provider';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../../redux/entities/restaurants/restaurants-slice';

export const Reviews = () => {
  const { restaurantId } = useOutletContext();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { reviews: reviewsIds } = restaurant;

  const { user } = useContext(AuthContext);
  const isAuthorized = useCallback(() => !!user?.name, [user?.name]);
  return (
    <div>
      <h3>Отзывы</h3>

      {reviewsIds?.length ? (
        <ul>
          {reviewsIds.map((reviewId) => {
            return <ReviewContainer reviewId={reviewId} key={reviewId} />;
          })}
        </ul>
      ) : (
        <div> {isAuthorized() ? 'Оставьте первый отзыв' : 'Отсутствуют'}</div>
      )}

      <br />
      {isAuthorized() && <ReviewForm className={cn.reviewForm} />}
    </div>
  );
};
