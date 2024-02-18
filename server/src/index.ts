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

// declare PORT environmental value so that heroku can set it's domain
const PORT = process.env.PORT || 4000;

// Create async function to handle starting the server:
async function startServer() {

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

  //<cors.CorsRequest>
  // {
  //   origin: [
  //     "https://greenpets.netlify.app"
  //   ]
  // }
  // Set up our Express middleware to handle CORS, body parsing, and our expressMiddleware function
  app.use(
    '/graphql', // <- declare endpoint for graphQL path
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

  await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(` 
    🌺 Server is running!
    Grow! Grow!! GROWW!!! 🦠🐸🐲
    Server ready at http://localhost:4000/
  `);

  // Modified server startup
  // connect redis server:
  await connect();
  console.log("Redis connected!");
};

// Invoke the startServer with a catch block for errors
startServer().catch((error) => {
  console.error("Error within server/index file, startServer, ", error);
  // process.exit safely ends all node.js executions upon failed attempt
  process.exit(1);
});
