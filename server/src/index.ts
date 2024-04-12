import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import { connect } from "./services/redis";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { PlantBasic, PlantExpanded } from "./datasources/plants-api";
import { router } from "./routers/apiRouter";
import bodyParser from 'body-parser';



export const getTokenFromRequest = (req: any): string => {
  return req.headers.authorization || "";
};

const PORT = process.env.PORT || 4000;

// Define CORS options outside of the startServer function
const corsOptions = {
  origin: ['http://localhost:5173', 'https://current--greenpets.apollographos.net/graphql', 'https://greenpets.netlify.app', 'https://greenpets-de412c97e72c.herokuapp.com', 'https://main--greenpets.netlify.app/'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};


// Create async function to handle starting the server:
async function startServer() {

  // Rquired logic for connecting with Express
  const app = express();
  // Ensures proper parsing of request body for TypeScript
  app.use(bodyParser.json());
  // HttpServer handles incoming requests to our Express app
  const httpServer = http.createServer(app);

  app.use(cors(corsOptions));

  app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next();
  });

  // API Routes
  console.log(`GUTEN TAG FROM INDEX.TS LiNe 45: `)
  app.use('/api', router);

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


  // Set up our Express middleware to handle CORS, body parsing, and our expressMiddleware function
  app.use(
    // '/graphql', // <- declare endpoint for graphQL path
    '/', // <- declare endpoint for graphQL path
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


  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(`Server is running on port ${PORT}, line 73!!!`);
  console.log(` 
    🌺 Server is running!
    Grow! Grow!! GROWW!!! 🦠🐸🐲
    Server ready at http://localhost:${PORT}
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