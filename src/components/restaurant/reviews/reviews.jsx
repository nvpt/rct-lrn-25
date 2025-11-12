import { useOutletContext } from 'react-router';
import { ReviewContainer } from '../../review/review-container';
import cn from './reviews.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/auth-provider';
import { ReviewFormContainer } from './review-form/review-form-container';
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from '../../../redux/services/api';

export const Reviews = () => {
  const { user } = useContext(AuthContext);
  const isAuthorized = !!user?.name;

  const { restaurantId } = useOutletContext();

  const { isLoading: isUsersLoading, isError: isUsersError } =
    useGetUsersQuery();
  const {
    data: reviews,
    isError: isReviewsError,
    isLoading: isReviewsLoading,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isReviewsLoading || isUsersLoading) {
    return 'загрузка отзывов...';
  }

  if (isReviewsError || isUsersError) {
    return 'ошибка загрузки отзывов...';
  }
  return (
    <div>
      <h3>Отзывы</h3>

      {reviews?.length ? (
        <ul>
          {reviews.map((review) => {
            return <ReviewContainer review={review} key={review.id} />;
          })}
        </ul>
      ) : (
        <div> {isAuthorized ? 'Оставьте первый отзыв' : 'Отсутствуют'}</div>
      )}
      <br />
      {isAuthorized && (
        <ReviewFormContainer
          className={cn.reviewForm}
          restaurantId={restaurantId}
        />
      )}
    </div>
  );
};
