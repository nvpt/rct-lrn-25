import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants';
import { getRestaurantById } from './get-restaurant-by-id';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantsIds,
} = entityAdapter.getSelectors((state) => state[restaurantsSlice.name]);
