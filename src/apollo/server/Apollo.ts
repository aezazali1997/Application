import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: 'http://localhost:9000/graphql',
});
const authLink = setContext((_, { headers }) => {
  let token = localStorage.getItem('okta-token-storage');
  if (token) {
    const parsed: any = JSON.parse(token);
    token = parsed.accessToken.accessToken;
  }
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ addTypename: false }),
});
export default client;
