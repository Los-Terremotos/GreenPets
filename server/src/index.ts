import { ApolloServer } from "@apollo/server";
//import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import { connect } from "./services/redis";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { ContextValue } from "./types";
import { PlantBasic, PlantExpanded } from "./datasources/plants-api";


export const getTokenFromRequest = (req: any): string => {
  return req.headers.authorization || "";
};


// Rquired logic for connecting with Express
const app = express();
// HttpServer handles incoming requests to our Express app
const httpServer = http.createServer(app);

// We tell Apollo Server to "drain" this httpServer, enabling servers to shut down gracefully
// Same ApolloServer initialization as before, plus the drain plugin for our HttpServer
const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer( { httpServer })],
});

// Ensure we wait for out server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing, and our expressMiddleware function
app.use(
  '/',
  cors(),
  express.json(),
  // expressMiddleware accepts the same arguments as an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req }) => {
      const token = getTokenFromRequest(req);
      const { cache } = server;
      return {
        token,
        dataSources: {
          plantBasic: new PlantBasic({ cache, token }),
          plantExpanded: new PlantExpanded({ cache, token }),
        },
      };
    },
  })
);

// Modified server startup
// connect redis server:
await connect();
console.log("Redis connected!");

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(` 
  🌺 Server is running!
  Grow! Grow!! GROWW!!! 🦠🐸🐲
  Server ready at http://localhost:4000/
`);