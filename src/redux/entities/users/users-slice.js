import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsers } from './get-users';

const entityAdapter = createEntityAdapter();
export const usersSlice = createSlice({
  name: 'users',
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

export const { selectById: selectUserById, selectIds: selectUsersIds } =
  entityAdapter.getSelectors((state) => state[usersSlice.name]);
