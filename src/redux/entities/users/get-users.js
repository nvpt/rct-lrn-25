import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api-const';
import { selectUsersIds } from './users-slice';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      const result = await response.json();
      console.log('get-users.js 11 >>> users:', result);

      if (!result?.length) {
        return rejectWithValue('Список пользователей не получен.');
      }

      return result;
    } catch (err) {
      console.log('get-users.js 20 >>> err:', err);
    }
  },
  {
    condition: (_, { getState }) => !selectUsersIds(getState())?.length,
  }
);
