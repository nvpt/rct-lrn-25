import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api-const';
import { selectReviewsIds } from './reviews-slice';

export const getReviewsOfRestaurant = createAsyncThunk(
  'reviews/getReviewsOfRestaurant',
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/reviews?restaurantId=${restaurantId}`
      );
      const result = await response.json();
      console.log('get-reviews-of-restaurant.js 12 >>> result:', result);

      if (!result?.length) {
        return rejectWithValue('Список отзывов не получен');
      }

      return result;
    } catch (err) {
      console.log('get-reviews-of-restaurant.js 19 >>> err:', err);
    }
  },
  {
    condition: (_, { getState }) => !selectReviewsIds(getState())?.length,
  }
);
