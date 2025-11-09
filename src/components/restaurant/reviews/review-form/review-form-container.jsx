import { useDispatch } from 'react-redux';
import { ReviewForm } from './review-form';
import { addReviewByRestaurantId } from '../../../../redux/entities/reviews/add-review-by-restaurant-id';
import { AuthContext } from '../../../../providers/auth-provider';
import { useContext } from 'react';

export const ReviewFormContainer = ({ className, restaurantId }) => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  const handleFormSubmit = ({ form }) => {
    dispatch(
      addReviewByRestaurantId({
        restaurantId,
        review: { ...form, userId: user.userId },
      })
    );
  };

  return <ReviewForm className={className} onSubmit={handleFormSubmit} />;
};
