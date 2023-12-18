import { ApolloServer } from "apollo-server-express";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import { PlantBasic, PlantExpanded } from "./datasources/plants-api";
import express, { Request, Response } from "express";
// import { http } from "http";
const http = require('http');
import { graphqlHTTP } from "express-graphql";

const PORT = process.env.PORT || 3000;

// set up basic Express server
// needed to set app to type any to get rid of following error on line 40:
  // type 'express' is not assignable to type 'application'. types of property 'get' are incompatible.
const app: any = express();

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, Express!');
// });

// app.listen(PORT, () => {
//   console.log(`Express server running on http://localhost:${PORT}`);
// });


interface ContextValue {
  token: string;
  dataSources: {
    plantBasic: PlantBasic;
    plantExpanded: PlantExpanded;
  };
}

const getTokenFromRequest = (req: any): string => {
  return req.headers.authorization || "";
};

// Create an Apollo Server and integrate it with Express
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`GraphQL endpoint at http://localhost:${PORT}/graphql`);
});

// const apolloServer = new ApolloServer<ContextValue>({
//   typeDefs,
//   resolvers,
// });

// const httpServer = http.createServer(app);

// apolloServer.applyMiddleware({ app, path:'/graphql' });

// apolloServer.installSubscriptionHandlers(httpServer);


// httpServer.listen(PORT, () => {
//   console.log(`Express server running on http://localhost:${PORT}`);
// });


// (async () => {
//   const { url } = await startStandaloneServer(server, {
//     context: async ({ req }) => {
//       const token = getTokenFromRequest(req);
//       const { cache } = server;
//       return {
//         token,
//         dataSources: {
//           plantBasic: new PlantBasic({ cache, token }),
//           plantExpanded: new PlantExpanded({ cache, token }),
//         },
//       };
//     },
//   });

//   console.log(` 
//     🌺 Server is running!
//     Grow! Grow!! GROWW!!! 🦠🐸🐲
//     Server ready at ${url}
//   `);
// })();


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
