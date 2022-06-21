import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4od8x711yon01z29un3g1pw/master',
  cache: new InMemoryCache()
});