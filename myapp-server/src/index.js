const express = require("express");
const { ApolloServer } = require('apollo-server-express');
const { readFileSync } = require('fs');
const resolvers = require('./resolvers');

const typeDefs = readFileSync('./src/typeDefs.graphql', 'utf-8');

const app = express();

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({ app })

app.get('/', (req, res) => res.end(`ここは、Node.jsでGraphQLサーバーを実現するサンプルです。`))

app.listen({ port: 4000 }, () => console.log(`GraphQL Server runnning @ http://localhost:4000{server.graphqlPath}`))
