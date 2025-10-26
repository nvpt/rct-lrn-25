import { useOutletContext } from 'react-router';
import { Review } from '../../review/review';
import { ReviewContainer } from '../../review/review-container';
import { ReviewForm } from './review-form/review-form';
import cn from './reviews.module.css';

export const Reviews = () => {
  const { reviewsIds, isAuthorized } = useOutletContext();
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
        <div> {isAuthorized ? 'Оставьте первый отзыв' : 'Отсутствуют'}</div>
      )}

      <br />
      {isAuthorized && <ReviewForm className={cn.reviewForm} />}
    </div>
  );
};
