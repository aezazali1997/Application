const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const connect = require('./config/connectDB');
const resolvers = require('./Resolver/resolver');
connect();
const { parsed } = require('dotenv').config();
const port = 9000 || parsed.PORT;
app.use(cors());
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, '/Schema/Schema.graphql'), 'utf8'),
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ]
})
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app: app });
}
startServer();
app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})