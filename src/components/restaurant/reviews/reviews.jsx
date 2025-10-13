import { Counter } from '../../counter/counter';
import { ReviewForm } from './review-form/review-form';

export const Reviews = ({ reviews }) => {
  if (!reviews.length) {
    return null;
  }

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <i>
                {review.user}: {review.text} ({review.rating})
              </i>
            </li>
          );
        })}
      </ul>
      <br />
      <ReviewForm />
    </div>
  );
};
