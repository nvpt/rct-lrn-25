import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getReviewsOfRestaurant } from './get-reviews-of-restaurant';

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviewsOfRestaurant.fulfilled, (state, payload) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const { selectIds: selectReviewsIds, selectById: selectReviewById } =
  entityAdapter.getSelectors((state) => state[reviewsSlice.name]);
