import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'http://localhost:7080',
    cache: new InMemoryCache(),
})