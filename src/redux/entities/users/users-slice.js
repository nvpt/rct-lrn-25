import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../../public/normalized-mock';

const initialState = {
  ids: normalizedUsers.map((user) => user.id),
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUsersIds: (usersState) => usersState.ids,
    selectUserById: (usersState, id) => usersState.entities[id],
  },
});

export const { selectUsersIds, selectUserById } = usersSlice.selectors;
