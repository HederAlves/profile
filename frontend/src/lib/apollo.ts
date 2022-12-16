import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

export  default client;

// import  ApolloClient, { InMemoryCache }  from "apollo-boost";

// const client = new ApolloClient({
//     uri: 'http://localhost:4000/graphql',
//     cache: new InMemoryCache(),
// })

// export default client;