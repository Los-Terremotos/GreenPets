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
//import { ContextValue } from "./types";
import { PlantBasic, PlantExpanded } from "./datasources/plants-api";

export const getTokenFromRequest = (req: any): string => {
  return req.headers.authorization || "";
};

const PORT = process.env.PORT || 4000;

// const corsOptions = {
//   origin: ['https://greenpets.netlify.app', 'https://studio.apollographql.com'], // Replace with your front-end app's
//   credentials: false, // Allows cookies to be sent with requests
// }

// // Rquired logic for connecting with Express
// const app = express();
// // HttpServer handles incoming requests to our Express app
// const httpServer = http.createServer(app);

// // Custom CORS middleware
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://greenpets.netlify.app");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");

//   if (req.method === "OPTIONS") {
//     res.sendStatus(204);
//   } else {
//     next();
//   }
// });


// Create async function to handle starting the server:
async function startServer() {

  // Rquired logic for connecting with Express
  const app = express();
  // HttpServer handles incoming requests to our Express app
  const httpServer = http.createServer(app);

  //"https://greenpets.netlify.app"

  // Custom CORS middleware
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4000");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");

    if (req.method === "OPTIONS") {
      res.sendStatus(204);
    } else {
      next();
    }
  });

  // We tell Apollo Server to "drain" this httpServer, enabling servers to shut down gracefully
  // Same ApolloServer initialization as before, plus the drain plugin for our HttpServer
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true, // Enable introspection
  });

  // Ensure we wait for out server to start
  await server.start();
  console.log(`Apollo Server has started, line 47 index.ts`);

  // // Log for all requests to see if the server is accepting
  // app.use((req, res, next) => {
  //   console.log(`Incoming request, line 54: ${req.method} ${req.path}`);
  //   next();
  // })

  // Set up our Express middleware to handle CORS, body parsing, and our expressMiddleware function
  app.use(
    // '/graphql', // <- declare endpoint for graphQL path
    '/', // <- declare endpoint for graphQL path
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        console.log(`Building context for request, line 55 in index.ts`)
        const token = getTokenFromRequest(req);
        console.log(`Token found, line 57: ${token ? 'Yes' : 'No'}`);
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

  // // Log after CORS middleware to see if it passed CORS
  // app.use('/graphql', (req, res, next) => {
  //   console.log(`Passed CORS for: ${req.method} ${req.path}`);
  //   next();
  // });


  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`Server is running on port ${PORT}, line 73!!!`);
  console.log(` 
    🌺 Server is running!
    Grow! Grow!! GROWW!!! 🦠🐸🐲
    Server ready at http://localhost:4000/
  `);
  // Modified server startup
  // connect redis server:
  await connect();
  console.log("Redis connected!");
}

// Invoke the startServer with a catch block for errors
startServer().catch((error) => {
  console.error("Error within server/index file, startServer, ", error);
  // process.exit safely ends all node.js executions upon failed attempt
  process.exit(1);
});

