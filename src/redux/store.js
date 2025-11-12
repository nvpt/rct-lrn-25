import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './entities/cart/cart-slice';
import { apiSlice } from './services/api';

const loggerMiddleWare = (store) => (next) => (action) => {
  console.log('action:', action);
  return next(action);
};

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(loggerMiddleWare, apiSlice.middleware),
});
