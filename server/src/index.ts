// import { ApolloServer } from "@apollo/server";
// //import { startStandaloneServer } from "@apollo/server/standalone";
// import { typeDefs } from "./schema";
// import resolvers from "./resolvers";
// import { connect } from "./services/redis";
// import { expressMiddleware } from "@apollo/server/express4";
// import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
// import express from "express";
// import http from "http";
// import cors from "cors";
// //import { ContextValue } from "./types";
// import { PlantBasic, PlantExpanded } from "./datasources/plants-api";

// export const getTokenFromRequest = (req: any): string => {
//   return req.headers.authorization || "";
// };

// const PORT = process.env.PORT || 4000;

// const corsOptions = {
//   origin: ['https://greenpets.netlify.app', 'https://studio.apollographql.com'], // Replace with your front-end app's
//   credentials: true, // Allows cookies to be sent with requests
// }

// // Rquired logic for connecting with Express
// const app = express();
// // HttpServer handles incoming requests to our Express app
// const httpServer = http.createServer(app);

// // cors defined before graphql endpoint
// //app.use(cors(corsOptions));

// // Enable pre-flight across-the-board
// app.options('*', cors())

// // Create async function to handle starting the server:
// async function startServer() {

//   // We tell Apollo Server to "drain" this httpServer, enabling servers to shut down gracefully
//   // Same ApolloServer initialization as before, plus the drain plugin for our HttpServer
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//     //introspection: true, // Enable introspection
//   });

//   // Ensure we wait for out server to start
//   await server.start();

//   // Set up our Express middleware to handle CORS, body parsing, and our expressMiddleware function
//   app.use(
//     '/graphql', // <- declare endpoint for graphQL path
//     cors(corsOptions), // use the configured CORS options
//     express.json(),
//     expressMiddleware(server, {
//       context: async ({ req }) => {
//         const token = getTokenFromRequest(req);
//         const { cache } = server;
//         return {
//           token,
//           dataSources: {
//             plantBasic: new PlantBasic({ cache, token }),
//             plantExpanded: new PlantExpanded({ cache, token }),
//           },
//         };
//       },
//     })
//   );
//   await new Promise<void>((resolve) =>
//     httpServer.listen({ port: PORT }, resolve)
//   );
//   console.log(`Server is running on port ${PORT}`);
//   console.log(` 
//     🌺 Server is running!
//     Grow! Grow!! GROWW!!! 🦠🐸🐲
//     Server ready at http://localhost:4000/
//   `);
//   // Modified server startup
//   // connect redis server:
//   await connect();
//   console.log("Redis connected!");
// }

// // Invoke the startServer with a catch block for errors
// startServer().catch((error) => {
//   console.error("Error within server/index file, startServer, ", error);
//   // process.exit safely ends all node.js executions upon failed attempt
//   process.exit(1);
// });


import express from "express";
import http from "http";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { PlantBasic, PlantExpanded } from "./datasources/plants-api";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import { connect } from "./services/redis";

export const getTokenFromRequest = (req: any): string => {
  return req.headers.authorization || "";
};

const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: ['https://greenpets.netlify.app', 'https://studio.apollographql.com', 'https://current--greenpets.apollographos.net/graphql'],
  credentials: true,
}

const app = express();
const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received request at ${new Date().toISOString()}: ${req.method} ${req.url}`);
  next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true,
});

app.use(
  "/graphql",
  cors(corsOptions),
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

// Error handling middleware to log errors
app.use((err: any, req: any, res: any, next: (arg0: any) => void) => {
  console.error(`Error occurred at ${new Date().toISOString()}:`, err);
  next(err);
});

async function startServer() {
  await server.start();
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`Server is running on port ${PORT}`);
  await connect();
  console.log("Redis connected!");
}

startServer().catch((error) => {
  console.error("Error within server/index file, startServer, ", error);
  process.exit(1);
});
