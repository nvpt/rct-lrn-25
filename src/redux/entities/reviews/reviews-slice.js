import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../../public/normalized-mock';

const initialState = {
  ids: normalizedReviews.map((review) => review.id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewsIds: (reviewsState) => reviewsState.ids,
    selectReviewById: (reviewsState, id) => reviewsState.entities[id],
  },
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;
