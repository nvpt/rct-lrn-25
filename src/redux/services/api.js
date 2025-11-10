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

    // todo каким образом при тегировании осуществлять предварительный вывод данных в форме (до загрузки с сервера)?
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: () => [{ type: 'reviews', id: 'ALL' }],
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getUsers: builder.query({
      query: () => '/users',
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
  useGetDishByIdQuery,
  useGetDishesByRestaurantIdQuery,
  useGetUsersQuery,
} = apiSlice;
