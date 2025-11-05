import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getDishesOfRestaurant } from './get-dishes-of-restaurant';

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getDishesOfRestaurant.fulfilled, (state, payload) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const { selectIds: selectDishesIds, selectById: selectDishById } =
  entityAdapter.getSelectors((state) => state[dishesSlice.name]);
