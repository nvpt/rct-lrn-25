import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../../public/normalized-mock';

const initialState = {
  ids: normalizedDishes.map((dish) => dish.id),
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  selectors: {
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishesIds, selectDishById } = dishesSlice.selectors;
