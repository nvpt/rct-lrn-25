import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api-const';
import { selectDishById } from './dishes-slice';

export const getDishById = createAsyncThunk(
  'dishes/getDishById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/dish/${id}`);
      const result = await response.json();

      if (!result) {
        return rejectWithValue('Блюдо не найдено');
      }

      return result;
    } catch (err) {
      console.log('get-dish-by-id.js 18 >>> err:', err);
    }
  },

  // todo нет смысла, так как все данные подтягиваются на странице меню ресторана
  {
    condition: (id, { getState }) => !selectDishById(getState(), id),
  }
);
