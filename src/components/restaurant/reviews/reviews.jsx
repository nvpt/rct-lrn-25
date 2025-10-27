import { useOutletContext } from 'react-router';
import { ReviewContainer } from '../../review/review-container';
import { ReviewForm } from './review-form/review-form';
import cn from './reviews.module.css';
import { useCallback, useContext } from 'react';
import { AuthContext } from '../../../providers/auth-provider';

export const Reviews = () => {
  const { reviewsIds } = useOutletContext();
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
