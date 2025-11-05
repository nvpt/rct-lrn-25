import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api-const';

export const getRestaurantById = createAsyncThunk(
  'restaurants/getRestaurantById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/restaurant/${id}`);
      const result = await response.json();

      if (!result) {
        return rejectWithValue('Ресторан не найден.');
      }

      return result;

      // todo здесь тоже отработает rejected?
    } catch (err) {
      console.log('get-restaurant-by-id.js 20 >>> err:', err);
    }
  }
);
