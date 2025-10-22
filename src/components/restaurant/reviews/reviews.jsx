import { useContext } from 'react';
import { Counter } from '../../counter/counter';
import { ReviewForm } from './review-form/review-form';
import cn from './reviews.module.css';
import { AuthContext } from '../../../providers/auth-provider';

export const Reviews = ({ reviews }) => {
  const { user } = useContext(AuthContext);
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
      {user?.name && <ReviewForm className={cn.reviewForm} />}
    </div>
  );
};
