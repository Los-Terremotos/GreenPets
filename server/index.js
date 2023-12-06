"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./src/schema");
const resolvers_1 = require("./src/resolvers");
const plants_api_1 = require("./src/datasources/plants-api");
//const server = new ApolloServer<BaseContext>({ typeDefs, resolvers });
//const server = new ApolloServer<any>({ typeDefs, resolvers });
async function startApolloServer() {
    const server = new server_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    plantBasic: new plants_api_1.PlantBasic({ cache }),
                    plantExpanded: new plants_api_1.PlantExpanded({ cache }),
                },
            };
        },
    });
    console.log(`
    🌺 Server is running!
    🪴 Query at ${url}
  `);
}
startApolloServer();
// import { ApolloServer } from "apollo-server-express";
// import express from 'express';
// import { startStandaloneServer, StartStandaloneServerOptions } from "@apollo/server/standalone";
// import { typeDefs } from "./schema";
// import { resolvers } from './resolvers';
// import { PlantBasic, PlantExpanded } from "./datasources/plants-api";
// import { ContextFunction } from "apollo-server-core";
// interface MyContext {
//   dataSources: {
//     plantBasic: PlantBasic
//     plantExpanded: PlantExpanded
//   }
// }
// async function startApolloServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     dataSources: () => ({
//       plantBasic: new PlantBasic(),
//       plantExpanded: new PlantExpanded(),
//     }),
//     context: async ({ req }) => {
//       return {
//       }
//     }
//   });
//   const app = express();
//   await server.start();
//   server.applyMiddleware({ app, path: 'graphql' });
//   const port = 4000;
//   app.listen(port, () => {
//     console.log(`
//     🌺 Server is running!
//   Grow! Grow!! GROWW!!!🦠🐸🐲
//   🪴 Query at http://localhost:${port}${server.graphqlPath}
//     `)
//   })
//   // const { url } = await startStandaloneServer(server, { 
//   //   context: async ({ req }) => {
//   //     //const { cache } = server;
//   //     const plantApi = { PlantBasic, PlantExpanded }
//   //     return {
//   //       dataSources: {
//   //         plantBasic: new PlantBasic(),
//   //         plantExpanded: new PlantExpanded(),
//   //       },
//   //       // You can add more context properties if needed
//   //     };
//   //   },
//   //   listen: { post: 4000 },
//   // });
//   // console.log(`
//   // 🌺 Server is running!
//   // Grow! Grow!! GROWW!!!🦠🐸🐲
//   // 🪴 Query at http://localhost:4000${ url }
//   // `)
// }
//startApolloServer();
//startApolloServer();
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
