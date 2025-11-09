import { useOutletContext } from 'react-router';
import { ReviewContainer } from '../../review/review-container';
import cn from './reviews.module.css';
import { useCallback, useContext } from 'react';
import { AuthContext } from '../../../providers/auth-provider';
import { useRequest } from '../../../redux/hooks/use-request';
import { REQUEST_STATUS } from '../../../constants/api-const';
import { getUsers } from '../../../redux/entities/users/get-users';
import { ReviewFormContainer } from './review-form/review-form-container';
import { useGetReviewsByRestaurantIdQuery } from '../../../redux/services/api';

export const Reviews = () => {
  const { user } = useContext(AuthContext);
  const isAuthorized = useCallback(() => !!user?.name, [user?.name]);

  const { restaurantId } = useOutletContext();

  const usersRequestStatus = useRequest(getUsers);
  const {
    data: reviews,
    isError: isReviewsError,
    isLoading: isReviewsLoading,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);
  console.log('reviews.jsx 26 >>> reviews:', reviews);

  if (isReviewsLoading || usersRequestStatus === REQUEST_STATUS.pending) {
    return 'загрузка отзывов...';
  }

  if (isReviewsError || usersRequestStatus === REQUEST_STATUS.rejected) {
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
        <div> {isAuthorized() ? 'Оставьте первый отзыв' : 'Отсутствуют'}</div>
      )}

      <br />
      {isAuthorized() && (
        <ReviewFormContainer
          className={cn.reviewForm}
          restaurantId={restaurantId}
        />
      )}
    </div>
  );
};
