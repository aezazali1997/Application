const express = require('express');
const cors = require('cors');
const app = express();
const { createDB } = require('./controllers/appController');
const connect = require('./config/connectDB');
var { graphqlHTTP } = require('express-graphql');
const Schema = require('./Schema/Schema');
const resolvers = require('./Resolver/resolver');

connect();
const port = process.env.PORT || 9000;
require('dotenv').config();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  rootValue: resolvers.root,
  graphiql: process.env.NODE_ENV === 'development',
}));
app.use('/save', createDB)
app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})