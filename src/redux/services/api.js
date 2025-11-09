import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api-const';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['reviews'],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => '/restaurants',
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: () => [{ type: 'reviews', id: 'ALL' }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `review/${restaurantId}`,
        body: review,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'reviews', id: 'ALL' }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useLazyGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
} = apiSlice;
