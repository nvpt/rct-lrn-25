import { useGetUsersQuery } from '../../redux/services/api';
import cn from './review.module.css';

export const Review = ({ review, changeReview }) => {
  const { userId, text, rating } = review;

  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data.find((userData) => userData.id === userId),
    }),
  });

  if (!user) {
    return null;
  }

  const { name: userName } = user;
  return (
    <li>
      <i>
        {userName}: {text} ({rating})
      </i>
    </li>
  );
};
