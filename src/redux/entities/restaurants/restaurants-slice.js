import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './get-restaurants';
import { getRestaurantById } from './get-restaurant-by-id';
import { REQUEST_STATUS } from '../../../constants/api-const';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState({ requestStatus: 'idle' }),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state, action) => {
        state.requestStatus = REQUEST_STATUS.pending;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = REQUEST_STATUS.fulfilled;
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.requestStatus = REQUEST_STATUS.rejected;
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        //todo перезаписывает объект в entities с соотвтутствующим id?
        entityAdapter.setOne(state, payload);
        state.requestStatus = REQUEST_STATUS.fulfilled;
      }),
});

export const {
  selectById: selectRestaurantById,
  selectIds: selectRestaurantsIds,
} = entityAdapter.getSelectors((state) => state[restaurantsSlice.name]);
