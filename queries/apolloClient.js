import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "http://192.168.0.102:3011/graphql",
    }),
    cache: new InMemoryCache(),
});