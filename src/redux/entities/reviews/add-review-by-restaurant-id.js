import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api-const';

export const addReviewByRestaurantId = createAsyncThunk(
  'reviews/addReviewByRestaurantId',
  async ({ restaurantId, review }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/review/${restaurantId}`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json();

      if (!result?.length) {
        return rejectWithValue('Список отзывов не получен');
      }

      return result;
    } catch (err) {
      console.log('get-reviews-of-restaurant.js 19 >>> err:', err);
    }
  }
);
