import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api-const';

export const getDishesOfRestaurant = createAsyncThunk(
  'dishes/getDishesOfRestaurant',
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/dishes?restaurantId=${restaurantId}`
      );
      const result = await response.json();
      console.log('get-dishes-of-restaurant.js 12 >>> result:', result);

      if (!result?.length) {
        return rejectWithValue('Список блюд не получен');
      }

      return result;
    } catch (err) {
      console.log('get-dishes-of-restaurant.js 19 >>> err:', err);
    }
  }
);
