import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './entities/users/users-slice';
import { cartSlice } from './entities/cart/cart-slice';
import { requestSlice } from './entities/request/request-slice';
import { apiSlice } from './services/api';

const loggerMiddleWare = (store) => (next) => (action) => {
  console.log('store.js 9 >>> action:', action);
  return next(action);
};

export const store = configureStore({
  reducer: {
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(loggerMiddleWare, apiSlice.middleware),
});
