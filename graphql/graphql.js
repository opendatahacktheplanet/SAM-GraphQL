const { ApolloServer } = require("apollo-server-lambda");
const typeDefs = require("./schema");
const resolvers = require("./resolvers").default;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
