import { ReviewForm } from './review-form';
import { AuthContext } from '../../../../providers/auth-provider';
import { useContext } from 'react';
import { useAddReviewMutation } from '../../../../redux/services/api';

export const ReviewFormContainer = ({ className, restaurantId }) => {
  const { user } = useContext(AuthContext);
  // const dispatch = useDispatch();
  const [addReview, { isError, isLoading }] = useAddReviewMutation();
  const handleFormSubmit = ({ form }) => {
    // dispatch(
    //   addReviewByRestaurantId({
    //     restaurantId,
    //     review: { ...form, userId: user.userId },
    //   })
    // );

    addReview({ restaurantId, review: { ...form, userId: user.userId } });
  };

  return <ReviewForm className={className} onSubmit={handleFormSubmit} />;
};
