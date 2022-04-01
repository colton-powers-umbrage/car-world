const express = require('express');
const { setupAllRoutes } = require('./src/routes/index');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./src/schema.js');
const resolvers = require('./src/resolvers');
const CarWorldAPI = require('./src/datasources/car-world-api');
const app = express();

app.use(express.json({ extended: false }));

app.get('/live', (req, res) => {
  res.json({ message: 'We are live' });
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      carWorldAPI: new CarWorldAPI(),
    };
  },
});

server.start().then(res => {
  server.applyMiddleware({ path: '/v1/', app });
});

setupAllRoutes(app);

module.exports = { app };
