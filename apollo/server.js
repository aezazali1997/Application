const { ApolloServer, gql } = require('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const fs = require('fs');
const path = require('path');
const resolvers = require('../resolvers/resolver');

const startServer = async (app) => {
  const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, '../schema/Schema.graphql'), 'utf8'),
    resolvers,
    context: ({ req, res }) => ({ request: req, response: res }),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground,
    ]
  })
  await server.start();
  server.applyMiddleware({ app });
}
module.exports = startServer;


