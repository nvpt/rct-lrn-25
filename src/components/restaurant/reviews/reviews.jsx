import { Review } from '../../review/review';
import { ReviewContainer } from '../../review/review-container';
import { ReviewForm } from './review-form/review-form';
import cn from './reviews.module.css';

export const Reviews = ({ reviewsIds, isAuthorized }) => {
  if (!reviewsIds.length) {
    return null;
  }

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviewsIds.map((reviewId) => {
          return <ReviewContainer reviewId={reviewId} key={reviewId} />;
        })}
      </ul>
      <br />
      {isAuthorized && <ReviewForm className={cn.reviewForm} />}
    </div>
  );
};
