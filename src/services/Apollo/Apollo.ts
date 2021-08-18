import { ApolloClient,createHttpLink, InMemoryCache } from '@apollo/client'

const httpLink = createHttpLink({
  uri: "http://localhost:9000/graphql"
});
export const client =new ApolloClient({
  link:httpLink,
  cache:new InMemoryCache()
})