import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../../constants/api-const';

export const requestSlice = createSlice({
  name: 'request',
  initialState: {},
  selectors: {
    selectStatus: (state, id) => state[id],
    selectIsLoading: (state, id) => state[id] === REQUEST_STATUS.pending,
  },
  extraReducers: (builder) =>
    builder.addMatcher(
      ({ type }) => !!type,
      (state, { meta }) => {
        if (meta?.requestId) {
          state[meta.requestId] = meta.requestStatus;
        }
      }
    ),
});

export const { selectStatus, selectIsLoading } = requestSlice.selectors;
