import { ApolloServer } from "apollo-server-express";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import { PlantBasic, PlantExpanded } from "./datasources/plants-api";
import express, { Request, Response } from "express";
// import { http } from "http";
const http = require('http');
//import { graphqlHTTP } from "express-graphql";
const app: any = express();



// set up basic Express server
// needed to set app to type any to get rid of following error on line 40:
  // type 'express' is not assignable to type 'application'. types of property 'get' are incompatible.
//const app: any = express();

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
let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();
const httpServer = http.createServer(app)
//const apolloServer = new ApolloServer({ typeDefs, resolvers });
//apolloServer.applyMiddleware({ app, path: '/graphql' });

// async function startServer() {
//   await apolloServer.start();
// }
//apolloServer.applyMiddleware({ app })

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  //console.log(`Server running on http://localhost:${PORT}`);
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
