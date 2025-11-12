import { Review } from './review';

export const ReviewContainer = ({ review }) => {
  if (!review) {
    return null;
  }

  return <Review review={review} />;
};
