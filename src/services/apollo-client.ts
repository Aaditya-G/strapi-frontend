import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:1337/graphql'
});

const authLink = new ApolloLink((operation, forward) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_KEY;
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
