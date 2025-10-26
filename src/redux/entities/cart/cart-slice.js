import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,

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
    clearCart: () => {
      return initialState;
    },
  },
  selectors: {
    selectCartItemAmountById: (cartState, id) => cartState[id],
  },
});

const selectCartSlice = (state) => state[cartSlice.name];
export const selectCartItemsIds = createSelector(
  [selectCartSlice],
  (cartState) => Object.keys(cartState)
);

export const { selectCartItemAmountById } = cartSlice.selectors;

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
