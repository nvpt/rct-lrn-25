import { ReviewForm } from './review-form';
import { AuthContext } from '../../../../providers/auth-provider';
import { useCallback, useContext } from 'react';
import { useAddReviewMutation } from '../../../../redux/services/api';

export const ReviewFormContainer = ({ className, restaurantId }) => {
  const { user } = useContext(AuthContext);
  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();
  const handleFormSubmit = useCallback(
    (form) => {
      addReview({ restaurantId, review: { ...form, userId: user.userId } });
    },
    [addReview, restaurantId, user.userId]
  );

  return (
    <>
      <ReviewForm
        className={className}
        onSubmit={handleFormSubmit}
        title={'Оставить отзыв'}
        isSubmitLoading={isAddReviewLoading}
      />
    </>
  );
};
