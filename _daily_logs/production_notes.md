# Preparing for Deployment (Best Practices):

  CI/CD Services:
  Popular services include Jenkins, Travis CI, GitLab CI/CD, GitHub Actions, and others.

1. Configuration Management:

    Utilize environment variables for configuration, allowing easy adaptation to different environments (development, staging, production).

2. Separate Environments:

    Have distinct configurations for development, testing, and production.
    Use environment-specific configuration files or environment variables.

3. Optimize Build for Production:

    Ensure your build process optimizes assets for production (minification, bundling, etc.).
    Configure TypeScript to compile to the latest ECMAScript version supported by your target browsers.

4. Set Up Server Configuration:

    Configure your server to handle the deployed application correctly.
    Consider using a process manager like PM2 for Node.js applications.

5. Database Migrations:

    If applicable, include a mechanism for applying database migrations as part of the deployment process.

6. Logging and Monitoring:

    Implement logging and monitoring to catch issues early in the deployment pipeline.
    Integrate with tools like Prometheus, Grafana, or others depending on your requirements.

7. Automated Testing:

    Incorporate automated tests into your CI/CD pipeline to catch potential issues before deployment.

8. Rollback Mechanism:

    Have a rollback plan in case of deployment failures.
    Implement versioning or tagging for releases to facilitate rollbacks.


```
name: CI/CD

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Repository
      uses: actions/checkout@v2

    - name: Install Dependencies
      run: |
        cd client
        npm ci

    - name: Build and Test
      run: |
        cd client
        npm run build
        npm test

    - name: Archive Build Artifacts
      uses: actions/upload-artifact@v2
      with:
        name: build-artifacts
        path: client/build

  deploy:
    runs-on: ubuntu-latest

    needs: build

    steps:
    - name: Checkout Repository
      uses: actions/checkout@v2

    - name: Download Build Artifacts
      uses: actions/download-artifact@v2
      with:
        name: build-artifacts
        path: client/build

    - name: Deploy to Server
      run: |
        # Your deployment script or commands here
        # Example: scp -r client/build/* user@your-server:/path/to/deployment
```


## Jan 31st - Resolving TypeScript build errors:

### TypeScript errors within Client folder:

```
src/components/Navbar.tsx:14:33 - error TS6133: 'scroll' is declared but its value is never read.

14 import { Link, animateScroll as scroll } from "react-scroll";
```
Solution: Delete animateScroll as scroll


```
src/components/ViewMore.tsx:79:20 - error TS2345: Argument of type 'PlantInfo | undefined' is not assignable to parameter of type 'SetStateAction<PlantInfo | null>'.
  Type 'undefined' is not assignable to type 'SetStateAction<PlantInfo | null>'.

79       setPlantInfo(data?.plantsMoreInfo);
                      ~~~~~~~~~~~~~~~~~~~~
```
Solution: Removed the "if else" statement and replaced with `setPlantInfo(data?.plantsMoreInfo ?? null);`

With the "if else" statement, TypeScript cannot automatically determine that `data?.plantsMoreInfo` is not `undefined` inside of the "if" condition.

The nullish coalescing operator (`??`) provides a way to explicitly handle the `undefined` case. It checks if the left-hand side is `null` or `undefined` and, if so, uses the right-hand side as a default value.

```
src/Features/plantType/plantType.ts:1:1 - error TS6133: 'React' is declared but its value is never read.

1 import React from "react";
  ~~~~~~~~~~~~~~~~~~~~~~~~~~
```
Solution: Delete importy React from "react";

```
src/Features/plantType/plantType.ts:3:1 - error TS6133: 'indoor' is declared but its value is never read.

3 import { indoor } from "./plantTypeSlice";
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
Solution: Delete import { indoor } from "./plantTypeSlice";

```
src/Features/plantType/plantType.ts:6:9 - error TS6133: 'type' is declared but its value is never read.

6   const type = useAppSelector((state) => state.plantType.value)
          ~~~~
```
Solution: Added `/* eslint-disable @typescript-eslint/no-unused-vars */`

```
src/Features/plantType/plantType.ts:7:9 - error TS6133: 'dispatch' is declared but its value is never read.

7   const dispatch = useAppDispatch;
          ~~~~~~~~
```
Solution: Added `/* eslint-disable @typescript-eslint/no-unused-vars */`

```
src/pages/TestDisplay.tsx:1:1 - error TS6192: All imports in import declaration are unused.

1 import { useState, useEffect } from 'react';
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
Solution: Commented out entire component

```
src/pages/TestDisplay.tsx:2:1 - error TS6133: 'axios' is declared but its value is never read.

2 import axios from 'axios';
  ~~~~~~~~~~~~~~~~~~~~~~~~~~
```
Solution: Commented out entire component

```
src/pages/TestDisplay.tsx:4:10 - error TS6133: 'useQuery' is declared but its value is never read.

4 import { useQuery, gql } from '@apollo/client';
           ~~~~~~~~
```
Solution: Commented out entire component

```
src/pages/TestDisplay.tsx:5:1 - error TS6133: 'useParams' is declared but its value is never read.

5 import { useParams } from "react-router-dom";
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
Solution: Commented out entire component

```
src/pages/TestDisplay.tsx:6:1 - error TS6133: 'QueryResult' is declared but its value is never read.

6 import QueryResult from '../components/query-result';
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```
Solution: Commented out entire component

```
src/pages/TestDisplay.tsx:11:7 - error TS6133: 'plantKey' is declared but its value is never read.

11 const plantKey = "sk-4MQn656f96f3d272a3341";
         ~~~~~~~~
```
Solution: Deleted from file

```
src/pages/TestDisplay.tsx:17:7 - error TS6133: 'TESTQUERY' is declared but its value is never read.

17 const TESTQUERY = gql`
         ~~~~~~~~~
```
Solution: Commented out entire component

```
src/pages/TestDisplay.tsx:152:7 - error TS6133: 'TESTQUERY' is declared but its value is never read.

152 const TESTQUERY = gql`
          ~~~~~~~~~
```
Solution: Commented out entire component

```
src/styles.tsx:1:18 - error TS6133: 'createGlobalStyle' is declared but its value is never read.

1 import styled, { createGlobalStyle } from 'styled-components';
                   ~~~~~~~~~~~~~~~~~
```
Solution: Deleted `{ createGlobalStyle }`

```
Found 15 errors in 5 files.

Errors  Files
     1  src/components/Navbar.tsx:14
     1  src/components/ViewMore.tsx:79
     4  src/Features/plantType/plantType.ts:1
     8  src/pages/TestDisplay.tsx:1
     1  src/styles.tsx:1
```


```
src/Features/plantType/plantTypeSlice.ts:36:56 - error TS2339: Property 'plantType' does not exist on type '{ questions: QuestionsType[]; response: Response; queryResult: never[]; userAuth: { isAuthenticated: boolean; }; testField: { testBoolean: boolean; testInputField: string; testBGColor: string; }; ... 4 more ...; isNavbarVisible: NavbarState; }'.

36 export const selectCount = (state: RootState) => state.plantType.value
                                                          ~~~~~~~~~


Found 1 error in src/Features/plantType/plantTypeSlice.ts:36
```
Solution: Since we're not using these reducers, commented out!


### Currently `npm run build` is compiling a `dist` folder

Message from Vite about optimizing asset files:

```
vite v5.0.12 building for production...
✓ 432 modules transformed.
dist/index.html                                           0.48 kB │ gzip:   0.31 kB
dist/assets/herbal-spa-treatment-leaves-wolNmPm2.png      7.86 kB
dist/assets/UserTest1-MRWtxan8.jpeg                      67.48 kB
dist/assets/UserTest3-DF9UvjHh.png                      140.20 kB
dist/assets/IDP4-QJmpTw0I.jpg                           155.93 kB
dist/assets/ODP3-Q-Ug7Fch.jpg                           295.02 kB
dist/assets/IDP1-vZJBujqh.jpg                           309.88 kB
dist/assets/ODP2-WSKjqruS.jpg                           310.78 kB
dist/assets/IDP3-MGSMIpZX.jpg                           319.38 kB
dist/assets/ODP1-uE1tcI7H.jpg                           439.92 kB
dist/assets/UserTest2-T7TS2GpU.jpg                      461.27 kB
dist/assets/ODP4-fM0wdVeY.jpg                           671.79 kB
dist/assets/IDP2-9orrapIh.jpg                         1,059.24 kB
dist/assets/plantsInHouse-Tow4rITA.jpg                1,278.00 kB
dist/assets/index-rJdrXCm_.js                           534.97 kB │ gzip: 164.69 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 1.50s
```

There are three suggestions to improve the loading time of the application:

1. Using Dynamic import():
   - Instead of importing all assets directly into the codebase, we can use dynamic imports to load them only when needed. This is a form of **code splitting** where we break the code into smaller chunks that are loaded on demand. In the context of images, we could consider loading them conditionally, for example, when a user interacts with a specific part of the application:
```
const loadImage = async () => {
  const imageModule = await import('./path/to/image.jpg');
  const image = document.createElement('img');
  image.src = imageModule.default;
  document.body.appendChild(image);
};

// Call the function when needed
loadImage();
```

The practical use case for our project would be implementing Lazy Loading:
If certain images are not immediately needed or are not seen on the initial loaded viewport, we can lazy load them as the user scrolls down the page. This can improve initial page load performance.

Example:
```
// Add a scroll event listener to lazy load images
window.addEventListener('scroll', () => {
  if (shouldLoadImages()) {
    import('./path/to/imageLoader').then((module) => {
      module.loadImages();
    });
  }
});
```

2. Manual Chunking:
This suggestion is focused on creating specific configuration for Vite to tell it how to group and compile certain modules the way we want to be compiled. With deep understanding of the project, if we used this approach, we'd be able to specifically design what modules need to be loaded first. This would allow the user to have a smoother experience since all the content that's being loaded will be prioritized by us. 

Example:
```
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'image-related': ['module1', 'module2', 'image-handling-module'],
        },
      },
    },
  },
};

```
This approach is out of scope for our project.


3. Adjust chink size limit for Vite:
This would reconfigure when vite would give us warnings on when modules are too large. The default limit is set to 500 KB;
Example:
```
// vite.config.js
export default {
  build: {
    chunkSizeWarningLimit: 1000, // Set the limit to 1000 KB
  },
};

```
This approach would work if the warnings from the build process get annoying.



### TypeScript errors within Server folder:

```
src/types.ts:2:77 - error TS2724: '"./models"' has no exported member named 'MeasurementModel'. Did you mean 'MeasurementsModel'?

2 import { PlantListModel, PlantDetailsModel, ImageUrlModel, DimensionsModel, MeasurementModel, UserInfoModel } from './models';
                                                                              ~~~~~~~~~~~~~~~~
```
Solution: Fixed type

```
src/types.ts:3:35 - error TS2307: Cannot find module './context' or its corresponding type declarations.

3 import { DataSourceContext } from './context';
                                    ~~~~~~~~~~~


Found 2 errors in the same file, starting at: src/types.ts:2
```
Solution: 

- Need to create a `context.ts` file within root of server/src folder
- Import the classes create within the `datasources/plants-api.ts` file
- Declare and export type casing for `DataSourceContext`
- Create a `dataSources` property with an object and assign each property to be their respective classes:
```
dataSources: {
    plantBasic: PlantBasic;
    plantExpanded: PlantExpanded;
  }
``` 
This should provide the proper typing for the datasourcecontext within the `types.ts` files


```
src/resolvers.ts:13:58 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

13       return dataSources.plantExpanded.getPlantsMoreInfo(id);
                                                            ~~


Found 1 error in src/resolvers.ts:13
```
Solution: This resolver is expecting a `number` type but receiving a `string` type. Added the `parseInt()` method to adjust the string into a number

### `npm run compile` successfully builds a new `dist` folder
- Noticed that there are no confirmation logs within the terminal after a successful build
- Had to verify by deleting the `dist` folder and rerunning the `tsc` script


## Feb 6th (Debugging server deployment)

`server/src/index.ts` Code structure before adjustments:
```
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import { PlantBasic, PlantExpanded } from "./datasources/plants-api";
import { connect } from "./services/redis";
interface ContextValue {
  token: string;
  dataSources: {
    plantBasic: PlantBasic;
    plantExpanded: PlantExpanded;
  };
}

export const getTokenFromRequest = (req: any): string => {
  return req.headers.authorization || "";
};

export const startApolloServer = async () => {
  const server = new ApolloServer<ContextValue>({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
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
  });

  console.log(` 
    🌺 Server is running!
    Grow! Grow!! GROWW!!! 🦠🐸🐲
    Server ready at ${url}
  `);

  try {
    await connect();
    console.log("Redis connected!");
  } catch (e) {
    console.log("Error connecting to Redis!");
  }

  return server;
};

// Execute the server only when this module is the main module
if (require.main === module) {
  startApolloServer();
}
```

- Reconfiguring index.ts & tsconfig.json so that CORS will be enabled and functioning on deployed version
- Updated Script path in Root/package.json "start" script to :  `"start": "node server/dist/index.js",`
- Updated tsconfig modules properties:
```
"module": "ESNext",
"moduleResolution": "node",
```

- Updated tsconfig: `"types": ["node", "@graphql-codegen/cli", "graphql-tag", "cors"]` with "cors"
- Update npm
- Update heroku from 8.4.3 to 8.7.1 
- [Explains why using "typeRoots" in tsconfig helps](https://github.com/Microsoft/TypeScript/issues/17241)
- [TypeScript docs for "typeRoots"](https://www.typescriptlang.org/tsconfig#typeRoots)
- [Medium article explaining TS7016 error](https://pjausovec.medium.com/how-to-fix-error-ts7016-could-not-find-a-declaration-file-for-module-xyz-has-an-any-type-ecab588800a8)

Current build message:
```
remote:        src/index.ts(10,18): error TS7016: Could not find a declaration file for module 'cors'. '/tmp/build_29fafe4a/server/node_modules/cors/lib/index.js' implicitly has an 'any' type.
remote:          Try `npm i --save-dev @types/cors` if it exists or add a new declaration (.d.ts) file containing `declare module 'cors';`
remote: npm notice 
remote: npm notice New minor version of npm available! 10.2.4 -> 10.4.0
remote: npm notice Changelog: <https://github.com/npm/cli/releases/tag/v10.4.0>
remote: npm notice Run `npm install -g npm@10.4.0` to update!
remote: npm notice 
```
Created `types` folder in `server` folder => cords.d.ts file. Added path to "typeRoots"

(property in tsconfig):
```
"typeRoots": [
      "./node_modules/@types",
      "./types",
    ],
```

Ending here today. Current build error message:
```
remote:        src/index.ts(38,3): error TS2347: Untyped function calls may not accept type arguments.
remote:        src/index.ts(38,13): error TS2694: Namespace '"cors"' has no exported member 'CorsRequest'.
```

Helpful Links:
- [Apollo Server docs for CORS](https://www.apollographql.com/docs/apollo-server/security/cors/)
- [Apollo Server CORS credentials](https://www.apollographql.com/docs/apollo-server/security/cors/#passing-credentials-with-cors)
- [Apollo Server configuration for Express middleware](https://www.apollographql.com/docs/apollo-server/api/express-middleware/)
- [Github thread for tsconfig "module": "CommonJS" x "moduleResolution"](https://github.com/apollographql/apollo-server/issues/7222)
  


## Feb 7th

- Removed cors.Corsrequest from index.ts
- Added `  "type": "module",` to package.json in `server` folder

- tsconfig.json added:
```
 "noEmit": true,
 "allowImportingTsExtensions": true,
```

- Adding .ts extensions to all imports
- Changed tsconfig to "allowSyntheticDefaultImports": true,

Helpful links:
- Link describes how to create a `Procfile` in root directory:
- [Medium article for deploying TS to heroku](https://medium.com/developer-rants/deploying-typescript-node-js-applications-to-heroku-81dd75424ce0)


Current error message at end of day:
```
remote: Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/tmp/build_925b0605/server/dist/schema' imported from /tmp/build_925b0605/server/dist/index.js
    at finalizeResolution (node:internal/modules/esm/resolve:263:11)
    at moduleResolve (node:internal/modules/esm/resolve:908:10)
    at defaultResolve (node:internal/modules/esm/resolve:1131:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:390:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:359:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:234:38)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:85:39)
    at link (node:internal/modules/esm/module_job:84:36) {
	code: 'ERR_MODULE_NOT_FOUND',
	url: 'file:///tmp/build_925b0605/server/dist/schema'
}
```

## Feb 8th

- Added: `"type": "module",` to package.json in root
- Remove "type": "module"
- Command line: `heroku builds:cancel -a greenpets` to manually shut down a deployment
  - [Resource link here](https://stackoverflow.com/questions/50970807/how-to-kill-an-heroku-build-that-is-in-progress)
  - We needed this command because we had an recursive command within the root package.json script: `"heroku-postbuild": "cd server && npm install && npm run build && npm run start && cd .."` <- The **npm run start** here keeps the build going infinitely. 
  - THe solution was to remove that part from the script and allow the `Procfile` to handle the `npm run start` command to start the server

Helpful links:
- [Node option for "start" script](https://stackoverflow.com/questions/65384754/error-err-module-not-found-cannot-find-module)
- [Node.js docs explaining file extensions](https://nodejs.org/api/esm.html#esm_mandatory_file_extensions)

### SERVER SUCCESSFULLY DEPLOYED ON HEROKU

Major changes from previous `server/src/index.ts` implementation:
- Create an asynchronous function to start the server
- Import and instantiate `app` variable that invokes `express()`
- Import `http` from "http". Create a server from that module, passing in `app`
- Create a new property for the `ApolloServer` instantiation:
  - `plugins: [ApolloServerPluginDrainHttpServer( { httpServer })],`
- Await the ApoloServer start 
- Within the express server start,
  -  declare the pathway for the graphql endpoint
  -  invoke cors
  -  invoke express.json()
  -  invoke the expressMiddleware from `@apollo/server/express4` and pass in the server (apollo server), and configurations for the context object
-  Await a new Promise object, which will call the httpServer and listen for the port value
-  Await connection to redis server
-  Outside of the `startServer` async function, call the `startServer` and promise chaining a catch method  to log any potential error messages


## Feb 9th:

- Current error coming in from the Client side:
```
ApolloError: Failed to fetch
    at new t (index-9LcGR_gl.js:1548:152)
    at index-9LcGR_gl.js:1552:84103
    at f (index-9LcGR_gl.js:1547:8460)
    at index-9LcGR_gl.js:1547:8375
    at new Promise (<anonymous>)
    at Object.then (index-9LcGR_gl.js:1547:8342)
    at Object.error (index-9LcGR_gl.js:1547:8470)
    at qx (index-9LcGR_gl.js:1547:1949)
    at qc (index-9LcGR_gl.js:1547:2318)
    at t.error (index-9LcGR_gl.js:1547:2888)
Failed to load resource: net::ERR_BLOCKED_BY_CLIENT
Failed to load resource: the server responded with a status of 404 ()
```
- Attempting to create a apollo server graph API key

Helpful links:
- [Apollo Graph API key docs](https://www.apollographql.com/docs/apollo-server/deployment/heroku/)
- [Graph API keys](https://www.apollographql.com/docs/graphos/api-keys/#graph-api-keys)
- [Generate key here](https://studio.apollographql.com/org/kps-team/graphs/onboarding/cloud/endpoint-details)
- Sent assistance request from ApolloServer Site. Their response:
```
	
Mitchell Alderson (Apollo)

Feb 9, 2024, 13:48 PST

Hi Stephanie!
 
We apologize; this is a known bug when setting up certain types of graphs; there should be a fix for this shortly!
 
I created an example graph to force you to the correct screen, please try creating a new graph from here?
https://studio.apollographql.com/org/stephanie-serranos-team/graphs
 
Once you create your real graph, you can delete this test one from the graph settings.
 
Please let me know if you have any questions!
~ Mitch
Lead Developer Support Engineer

	
Stephanie Serrano

Feb 9, 2024, 12:59 PST

Issue about: Subscription & Billing
Reported from: https://studio.apollographql.com/org/stephanie-serranos-team/graphs/onboarding/cloud/endpoint-details?overlay=support-request

Hi there,

We're trying to connect our API endpoint but are continuously getting an error from Apollo: b107d2d7b21b48e5aa13baf436655bfc.

Please let us know what we can do to fix this!

Stephanie and Kevin
```


## Mon Feb 12th

- Contact section idea
- [Hover effect to expand flower around contact icons(check footer)](https://swabtheworld.com/en/)
- [Parallax effect for "About Us" section and possibly features/reviews](https://newestamericans.com/)


## Friday Feb 16th

- The schema.gql/graphql file we needed for the GraphOS endpoint is generated from the `client` folder with `npm run codegen`
  [Docs from codegen for example of config file](https://the-guild.dev/graphql/codegen/docs/guides/react-vue) 
- Investigate @parcel-watcher from codegen docs
- Suggested tool for graphql debugging: [Github for GraphQLSP](https://github.com/0no-co/GraphQLSP)

- Within `server/codegen.ts`, added config: 
```
"./graphql.schema.json": {
      plugins: ["introspection"]
    }
```
- Did not generate file we were looking for. Solution was to run codegen script from the client folder


## Monday Feb 19th

Confusion in terminology. 

When we talk about **introspecting** a GraphQL schema, it means to query the GraphQL server itself to retrieve its schema information dynamically. This is usually done by sending an introspection query to the GraphQL endpoint.

If we're generating a schema file using Apollo codegen within the project, that schema file is typically a staticallyy generated representation of the GraphQL schema. That schema file is generated based on the graphQL schema defined on your server, but it's not retrieved dynamically from the server.

To use Apollo Studio's schema introspection feature, we need to provide the endpoint of the GraphQL server, not the endpoint of a folder within our project where a schema file is generated.

Example would be to provide the endpoint of the GraphQL server (e.g. `https://link-to-live-server.com/graphql`)

- Back in `server/src/index.ts` file, removed `{ ContextValue } from './types` and typing from line **31**
- Referenced this simple build from [Apollo docs](https://www.apollographql.com/docs/apollo-server/deployment/heroku/)
- Activate "introspection" within the ApolloServer instantiation. **Note** introspection is deactivated by default when deploying to heroku, for security reasons. We're activating it here for testing purposes




## two weeks of confusion


## Tuesday, March 5th
- Refactored `server/src/index.ts` and CORs configuration
- Updated `client` to ApolloClient instantiation. **Removed** `credentials: true` option since the "Access-Control-Allow-Origin" property is currently set to "*"
- Client to server query is properly working again, only in development environment


## Mar 15th
- Coverted `.png` extension to `.svg` to add dynamic coloring 
- [Free conversion tool here](https://convertio.co/)


## Mar 21
**Need to do**
- Update Navbar svg for main icon
- Complete styling for `ResultsDetailCard`
- Decide on content to render for details


## Mar 27th:
- Moving commented out CORs configurations from `server/src/index.ts` to here for safe keeping. Update notes with it later:
```
  // Custom CORS middleware
  app.use((req, res, next) => {
    // dynamic paths for cors
    const allowedOrigins = ['http://localhost:5173', 'https://current--greenpets.apollographos.net/graphql', 'https://greenpets.netlify.app', 'https://greenpets-de412c97e72c.herokuapp.com/'];

    const origin = req.headers.origin;

    if (origin && allowedOrigins.includes(origin)) {
      // reflect the request origin if it's in the allowed list
      res.header('Access-Control-Allow-Origin', origin); 
    }

    //res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");

    if (req.method === "OPTIONS") {
      res.sendStatus(204);
    } else {
      next();
    }
  });
```
// Alternative CORS options:
```
const corsOptions = {
  origin: ['https://greenpets.netlify.app', 'https://studio.apollographql.com'], // Replace with your front-end app's
  credentials: false, // Allows cookies to be sent with requests
}

// Rquired logic for connecting with Express
const app = express();
// HttpServer handles incoming requests to our Express app
const httpServer = http.createServer(app);
```
// Custom logs to check if server is accepting network requests round trip
```
  // Log for all requests to see if the server is accepting
  app.use((req, res, next) => {
    console.log(`Incoming request, line 54: ${req.method} ${req.path}`);
    next();
  })

  // Log after CORS middleware to see if it passed CORS
  app.use('/graphql', (req, res, next) => {
    console.log(`Passed CORS for: ${req.method} ${req.path}`);
    next();
  });
```