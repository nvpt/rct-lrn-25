import { configureStore } from '@reduxjs/toolkit';
import { restaurantsSlice } from './entities/restaurants/restaurants-slice';
import { reviewsSlice } from './entities/reviews/reviews-slice';
import { usersSlice } from './entities/users/users-slice';
import { dishesSlice } from './entities/dishes/dishes-slice';
import { cartSlice } from './entities/cart/cart-slice';
import { requestSlice } from './entities/request/request-slice';

const loggerMiddleWare = (store) => (next) => (action) => {
  console.log('store.js 9 >>> action:', action);
  return next(action);
};

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(loggerMiddleWare),
});
