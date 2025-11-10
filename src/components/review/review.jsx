import { useGetUsersQuery } from '../../redux/services/api';

export const Review = ({ review }) => {
  const { userId, text, rating } = review;
  let user = null;

  useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      console.log('review.jsx 9 >>> result:', result);

      const users = result?.data;
      user = users.find((userData) => userData.id === userId);
      return result;
    },
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
