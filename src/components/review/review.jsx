import { useCallback, useContext, useState } from 'react';
import {
  useGetUsersQuery,
  useUpdateReviewMutation,
} from '../../redux/services/api';
import cn from './review.module.css';
import { AuthContext } from '../../providers/auth-provider';
import { ReviewForm } from '../restaurant/reviews/review-form/review-form';
import classNames from 'classnames';
import { Modal } from '../modal/modal';

export const Review = ({ review }) => {
  console.log('review.jsx 12 >>> review:', review);

  const [isEdit, setIsEdit] = useState(false);
  const { userId: reviewAuthorId, text, rating, id: reviewId } = review;
  const { user } = useContext(AuthContext);
  const isCurentUser = user?.userId === reviewAuthorId;
  const { data: reviewAuthor } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data.find(
        (reviewAuthor) => reviewAuthor.id === reviewAuthorId
      ),
    }),
  });

  const [updateReview, { isLoading: isUpdateReviewLoading }] =
    useUpdateReviewMutation();
  const handleFormSubmit = useCallback(
    (form) => {
      updateReview({
        review: { ...form, userId: user?.userId, id: reviewId },
      }).then(() => {
        setIsEdit(false);
      });
    },
    [updateReview, user?.userId, reviewId]
  );

  if (!reviewAuthor) {
    return null;
  }

  const { name: reviewAuthorName } = reviewAuthor;
  return (
    <li className={cn.listItem}>
      <div className={classNames({ [cn.listItemInner]: isEdit })}>
        <i>
          {reviewAuthorName}: {text} ({rating})&nbsp;
        </i>
        {isCurentUser && !isEdit && (
          <img
            className={cn.editIcon}
            src='../../../public/icons/pen.svg'
            onClick={() => setIsEdit(true)}
          />
        )}
        {isEdit && (
          <Modal isOpen={isEdit} setIsOpen={setIsEdit}>
            <ReviewForm
              className={cn.modal}
              initialValue={{ text, rating }}
              title={'Редактировать отзыв'}
              onSubmit={handleFormSubmit}
              isSubmitLoading={isUpdateReviewLoading}
            />
          </Modal>
        )}
      </div>
    </li>
  );
};
