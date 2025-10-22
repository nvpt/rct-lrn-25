import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurants/restaurants-slice';
import { reviewsSlice } from './entities/reviews/reviews-slice';
import { usersSlice } from './entities/users/users-slice';

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: reviewsSlice.reducer,
  },
});
