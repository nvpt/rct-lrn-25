import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},

  reducers: {
    addItemToCart: (cartState, { payload }) => {
      cartState[payload] = (cartState[payload] || 0) + 1;
    },
    removeItemFromCart: (cartState, { payload }) => {
      cartState[payload] = cartState[payload] - 1;

      if (cartState[payload] <= 0) {
        delete cartState[payload];
      }
    },
  },
  selectors: {
    selectCartItemsIds: (cartState) => Object.keys(cartState),
    selectCartItemAmountById: (cartState, id) => cartState[id],
  },
});

export const { selectCartItemsIds, selectCartItemAmountById } =
  cartSlice.selectors;

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
