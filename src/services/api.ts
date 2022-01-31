import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const TOKEN_ID = "0x5cc61a78f164885776aa610fb0fe1257df78e59b";
const API_KEY = "ckey_0c90f5637b39427e81cc0ac70a1";
const CHAIN_ID = 250;
const API_URL = "https://api.covalenthq.com";
const ADDRESS = "0xbc80Fa4B52d4efe5dDD8D3b26d34029579C4FBb2";

export const tokenApi = createApi({
  reducerPath: "tokenApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/v1/${CHAIN_ID}/address/${ADDRESS}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${API_KEY}`,
  }),

  endpoints: (builder) => ({
    getTokenById: builder.query<any, any>({
      query: () => ``,
    }),
  }),
});

console.log(tokenApi.useGetTokenByIdQuery);

export const { useGetTokenByIdQuery } = tokenApi;
