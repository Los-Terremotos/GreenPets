import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import { connect } from "./services/redis";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { ContextValue } from "./types";


// interface ContextValue {
//   token: string;
//   dataSources: {
//     plantBasic: PlantBasic;
//     plantExpanded: PlantExpanded;
//   };
// }

export const getTokenFromRequest = (req) => {
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

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(` 
  🌺 Server is running!
  Grow! Grow!! GROWW!!! 🦠🐸🐲
  Server ready at http://localhost:4000/
`);


/* OLD IMPLEMENTATION */

// export const startApolloServer = async (): Promise<CustomHttpServer | undefined> => {
//   try {
//     const server = new ApolloServer<ContextValue>({
//       typeDefs,
//       resolvers,
//     });

//     const httpServer = await startStandaloneServer<ContextValue>(server, {
//       listen: {
//         port: process.env.PORT ? parseInt(process.env.PORT, 10) : 4000, // Use Heroku-provided port or default to 4000, parse the port value to a number
//       },
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
//     });

//     console.log(` 
//       🌺 Server is running!
//       Grow! Grow!! GROWW!!! 🦠🐸🐲
//       Server ready at ${httpServer.url}
//     `);

//     await connect();
//     console.log("Redis connected!");

//     return httpServer;

//   } catch (error) {
//     console.error("Error starting the server: ", error);
//     throw new Error("Server startup has f a i l e d ~")
//   }
// };

// // Execute the server only when this module is the main module
// if (require.main === module) {
//   startApolloServer();
// }

// UNCOMMENT BELOW CODE TO USE MOCK DATA WITH APOLLO SERVER

// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";
// import { typeDefs } from "./schema";
// import { addMocksToSchema } from "@graphql-tools/mock";
// import { makeExecutableSchema } from "@graphql-tools/schema";

// const mocks = {
//   Query: () => ({
//     testPlant: () => [...new Array(1)]!
//   }),
//   Plant: () => ({
//     id: "plant_01",
//     common_name: "Dan-De-Lion",
//     scientific_name: ["Dan-De-Lioness"],
//     sunlight: ["Lots"],
//     type: "Flower",
//     cycle: "Spring",
//     watering: "Often",
//     depth_water_requirement: {
//         unit: "inches",
//         value: 5
//     },
//     volume_water_requirement:  {
//         unit: "cup",
//         value: 11
//       },
//     water_period: "Daily",
//     watering_general_benchmark: {
//         unit: "cup",
//         value: 1
//       },
//     dimensions: {
//         type: "Cool",
//         min_value: 2,
//         max_value: 5,
//         unit: "inches"
//     },
//     poisonous_to_humans: true,
//     poisonous_to_pets: false,
//     drought_tolerant: true,
//     tropical: true,
//     indoor: true,
//     flowering_season: "Spring",
//     care_level: "Low",
//     description: "Beautiful flower",
//     default_image: {
//       thumbnail: "https://www.health.com/thmb/AADrlQdpWITCjFjKnfBnqWy5A8w=/2153x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dandelion-d5aed7a95a6f4b16a3e954aa78694626.jpg"
//     },
//     pruning_month: ["June"],
//     attracts:["People"]
//   }),
//   UserInfo: () => ({
//     id: 7894564,
//     userName: "ProfessorKevin",
//     userLocation:  "Palm Springs, CA",
//     userPassword: "IloveDandelions",
//     favoritePlants: ["Dandelions", "Broccoli"]
//   }),
//   Weather: () => ({
//     days: {
//       temp: 80
//     },
//     precip: 2
//   }),
// }

// async function startApolloServer() {
//   const server = new ApolloServer({
//     //for mocking data:
//     schema: addMocksToSchema({
//       schema: makeExecutableSchema({ typeDefs }),
//       mocks,
//     })
//   });

//   const { url } = await startStandaloneServer(server)
//   console.log(`
//   🌺 Server is running!
//   🪴 Query at ${url}
//   `)
// }
// startApolloServer();
