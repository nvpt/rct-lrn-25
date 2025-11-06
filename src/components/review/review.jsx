import { useSelector } from 'react-redux';
import { selectUserById } from '../../redux/entities/users/users-slice';

export const Review = ({ review }) => {
  const { userId, text, rating } = review;

  const user = useSelector((state) => selectUserById(state, userId));

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
