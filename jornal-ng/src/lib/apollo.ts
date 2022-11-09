import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://content.guardianapis.com/search?api-key=dfcbfff8-c3a3-44c8-9c6b-e2373b66da9c',
    cache: new InMemoryCache(),
})