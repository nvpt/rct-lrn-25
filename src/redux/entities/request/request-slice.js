import { createSlice } from '@reduxjs/toolkit';

export const requestSlice = createSlice({
  name: 'request',
  initialState: {},
  selectors: {
    selectStatus: (state, id) => state[id],
    selectIsLoading: (state, id) => state[id] === 'pending',
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        (state, { meta }) => {
          state[meta.requestId] = 'pending';
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/fulfilled'),
        (state, { meta }) => {
          state[meta.requestId] = 'fulfilled';
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('/rejected'),
        (state, { meta }) => {
          state[meta.requestId] = 'rejected';
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
