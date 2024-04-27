import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
    reducerPath: 'dataApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/games',
    }),

    endpoints: (build) => ({
        getGames: build.query({
            query: (param) => param,
        }),
    }),
});

export const { useGetGamesQuery } = dataApi;
