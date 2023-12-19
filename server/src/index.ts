import { ApolloServer } from "apollo-server-express";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import { PlantBasic, PlantExpanded } from "./datasources/plants-api";
import express, { Request, Response } from "express";
const http = require('http');

const app: any = express();


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
let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers
  })
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();
const httpServer = http.createServer(app)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`GraphQL endpoint at http://localhost:${PORT}/graphql`);
});

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
