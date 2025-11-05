import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState({ requestStatus: 'idle' }),
  selectors: {
    selectRequestStatus: (restaurantsState) => restaurantsState.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state, action) => {
        state.requestStatus = 'pending';
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = 'fulfilled ';
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.requestStatus = 'rejected';
      }),
});

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantsIds,
} = entityAdapter.getSelectors((state) => state[restaurantsSlice.name]);

export const { selectRequestStatus } = restaurantsSlice.selectors;
