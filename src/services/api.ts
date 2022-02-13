import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const API_KEY = 'ckey_0c90f5637b39427e81cc0ac70a1';
const API_URL = 'https://api.covalenthq.com';

export const tokenApi = createApi({
  reducerPath: 'tokenApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
  }),

  endpoints: (builder) => ({
    getTokenById: builder.query<any, any>({
      query: ({ address, chainId }) => {
        return `/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${API_KEY}`;
      },
    }),
  }),
});

export const { useGetTokenByIdQuery } = tokenApi;
