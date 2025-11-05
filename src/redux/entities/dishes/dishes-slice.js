import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDishesOfRestaurant } from './get-dishes-of-restaurant';
import { REQUEST_STATUS } from '../../../constants/api-const';

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState({ requestStatus: 'idle' }),
  extraReducers: (builder) =>
    builder
      .addCase(getDishesOfRestaurant.pending, (state) => {
        state.requestStatus = REQUEST_STATUS.pending;
      })
      .addCase(getDishesOfRestaurant.fulfilled, (state, payload) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = REQUEST_STATUS.fulfilled;
      })
      .addCase(getDishesOfRestaurant.rejected, (state) => {
        state.requestStatus = REQUEST_STATUS.rejected;
      }),
});

export const { selectIds: selectDishesIds, selectById: selectDishById } =
  entityAdapter.getSelectors((state) => state[dishesSlice.name]);
