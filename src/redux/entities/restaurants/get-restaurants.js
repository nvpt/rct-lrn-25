import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api-const';
import { selectRestaurantsIds } from './restaurants-slice';

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/restaurants`);
      const result = await response.json();

      if (!result?.length) {
        return rejectWithValue('Список ресторанов не получен.');
      }

      return result;
    } catch (err) {
      console.log('get-restaurants.js 20 >>> err:', err);
    }
  },
  {
    condition: (_, { getState }) => !selectRestaurantsIds(getState())?.length,
  }
);
