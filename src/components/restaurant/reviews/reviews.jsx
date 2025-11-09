import { useOutletContext } from 'react-router';
import { ReviewContainer } from '../../review/review-container';
import { ReviewForm } from './review-form/review-form';
import cn from './reviews.module.css';
import { useCallback, useContext } from 'react';
import { AuthContext } from '../../../providers/auth-provider';
import { useSelector } from 'react-redux';
import { selectReviewsIds } from '../../../redux/entities/reviews/reviews-slice';
import { useRequest } from '../../../redux/hooks/use-request';
import { getReviewsOfRestaurant } from '../../../redux/entities/reviews/get-reviews-of-restaurant';
import { REQUEST_STATUS } from '../../../constants/api-const';
import { getUsers } from '../../../redux/entities/users/get-users';
import { ReviewFormContainer } from './review-form/review-form-container';

export const Reviews = () => {
  const reviewsIds = useSelector(selectReviewsIds);

  const { user } = useContext(AuthContext);
  const isAuthorized = useCallback(() => !!user?.name, [user?.name]);

  const { restaurantId } = useOutletContext();
  const rewiewsRequestStatus = useRequest(getReviewsOfRestaurant, restaurantId);
  const usersRequestStatus = useRequest(getUsers);

  if (
    rewiewsRequestStatus === REQUEST_STATUS.pending ||
    usersRequestStatus === REQUEST_STATUS.pending
  ) {
    return 'загрузка отзывов...';
  }

  if (
    rewiewsRequestStatus === REQUEST_STATUS.rejected ||
    usersRequestStatus === REQUEST_STATUS.rejected
  ) {
    return 'ошибка загрузки отзывов...';
  }
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
      {isAuthorized() && (
        <ReviewFormContainer
          className={cn.reviewForm}
          restaurantId={restaurantId}
        />
      )}
    </div>
  );
};
