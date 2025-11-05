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
    builder
      .addMatcher(
        ({ type }) => type.endsWith(`/${REQUEST_STATUS.pending}`),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.pending;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(`/${REQUEST_STATUS.fulfilled}`),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.fulfilled;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(`/${REQUEST_STATUS.rejected}`),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS.rejected;
        }
      ),
  // todo по идее можно так:
  // builder.addMatcher(
  //   ({ type }) => !!type,
  //   (state, { meta }) => {
  //     if (meta?.requestId) {
  //       state[meta.requestId] = meta.requestStatus;
  //     }
  //   }
  // ),
});

export const { selectStatus, selectIsLoading } = requestSlice.selectors;
