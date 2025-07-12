import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://iqtest.jumatechs.xyz/graphql",
    }),
    cache: new InMemoryCache(),
});