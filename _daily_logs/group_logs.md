# Daily Notes for Green Pets

## Wed Nov. 22nd

## File structure initialization

- Created new repo on git hub organization
- **Decision** to structure project as a **Monorepo with multiple packages** or a **multifile monorepo**.
  - This decision allows for some monorepos benefits of shared versioning and centralized management, while allowing for a more distinct separation of concerns between frontend and backend.
- Client's simple setup: In GreenPets folder, ran command `npx install vite@latest` and initialized **client** folder

### Setting up **server** folder

- Create **server** folder `cd server`
- `npm init -y`
- `npm install --save express graphql @swc/cli @swc/node @apollo/server`
- `npm install --save-dev nodemon typescript @types/node`
- By pass using "express-graphql" since we're going to be using Apollo Server instead
- Create "tsconfig.json" file, and add boiler plate:
  ```
  {
  "compilerOptions": {
    "target": "esnext",  // Adjust the target based on your Node.js version
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
    }
  }
  ```

## Monday November 27th :

- Referencing API docs to assist in schema generation.
  - [Plant API Docs](https://perenual.com/docs/api)

### Questions to Research / or Group Discussion:

- What is required to implement a searching assistant for plant names in the input bar?
- Discuss user experience for Front end development
  - Option 1: - User inputs location - We fetch user location in weather app of plants using long, lat - Take searchable terms of weather conditions that fit with Plant API fields (ie: "sunlight": ["full sun", "part shade", "] )  
     - Search Plant API's for plants that share similar data from Above's weather conditions

## Tuesday November 28th:

- Insert sensitive data here:

### Questions to Research for Nov. 28th:

- Only 100 API calls per day. Research caching solution to implement for backend (Apollo caching, redis, ) to help maximize use of free API calls.

## Wednesday November 29th:

- Goal today is to install codegen for generating types
  - [Docs](https://www.apollographql.com/docs/apollo-server/workflow/generate-types)
- Installed with `npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers`
  - [Docs](https://the-guild.dev/graphql/codegen/plugins)
- Choices made when initializing codegen:

```
    Welcome to GraphQL Code Generator!
    Answer few questions and we will setup everything for you.

? What type of application are you building? Application built with React
? Where is your schema?: (path or url) ./server/src/schema.ts
? Where are your operations and fragments?: (src/**/*.tsx)
? Where to write the output: src/gql/
? Do you want to generate an introspection file? Yes
? How to name the config file? codegen.ts
? What script in package.json should run the codegen? codegen
```

- Had to look up with `introspection` file is. Looking to add it to .gitignore
- Within the code gen boiler plate, had to adjust the **schema** path
- Within the `scehma.ts` file, do **NOT** include colons after keyword `type`
- Use cli `npx graphql-code-generator init`
- ^ Results in error. Reference solution below

```
stephanieserrano@Stephanies-MBP server % npm run codegen
> server@1.0.0 codegen
> graphql-codegen --config codegen.ts

(node:75435) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 outputs
 outputs
 outputs
 ✖
      Unable to find any GraphQL type definitions for the following pointer
✔ Parse Configuration
⚠ Generate outputs
  ❯ Generate to src/gql/
    ✔ Load GraphQL schemas
    ✖
      Unable to find any GraphQL type definitions for the following pointers:
      - ./src/**/*.tsx
    ◼ Generate
  ❯ Generate to ./graphql.schema.json
    ✔ Load GraphQL schemas
    ✖
      Unable to find any GraphQL type definitions for the following pointers:
      - ./src/**/*.tsx
    ◼ Generate
```

- This error occurs because there are not written queries or mutations available for the codgen to parse through. Can ignore this error and continue coding out the main server file (index.ts)
  - [Stackover flow solution](https://stackoverflow.com/questions/58904403/unable-to-find-any-graphql-type-definitions-for-the-following-pointers-src)
- [Blog of Codegen Tutorial](https://blog.logrocket.com/making-graphql-requests-easy-with-react-typescript-and-react-query/)

### Now building index.ts file

- Import `Apollo server` from "@apollo/server", `startStandAloneServer` from "@apolloserver/standalone", and `typeDefs` from "./schema"
- [Docs](https://www.apollographql.com/docs/apollo-server/getting-started)
- Installed mocking data packages:
  - cli command: `npm install @graphql-tools/mock @graphql-tools/schema`
  - import into "index" file
  ```
  import { addMocksToSchema } from "@graphql-tools/mock";
  import { makeExecutableSchema } from "@graphql-tools/schema";
  ```
- Declare a **mock** variable and assign values following the schema structure

### Next Steps:

- Get apollo explorer working
- Write test queries
- [Docs](https://www.apollographql.com/tutorials/lift-off-part1/06-apollo-explorer)

## Thursday November 30th

- Error with placement of `codegen.ts` file. Needed to be moved into the `src` folder within the `server` folder
  - [Solution found here](https://bobbyhadz.com/blog/typescript-file-is-not-under-rootdir)
- Added script to run development server
  - `ts-node-dev --respawn ./src/index.ts`
- Uncommented variables and console.log within the **startApolloServer** function within the `index.ts` file
- installed ts-node `npm i ts-node`
- installed ts-node-dev `npm i ts-node-dev`
- [ERROR] 14:43:12 Error: Query root type must be provided.
  - Solution. Needed to add a `type Query` field to corresponding

### Mock Data Drama

- When working with mock data, make sure you are adding your mock data to the apollo server and remove any instances of it pointing to your schema. See below for code:

```
async function startApolloServer() {
  const server = new ApolloServer({
    //for mocking data:
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    })
  });



  const { url } = await startStandaloneServer(server)
  console.log(`
  🌺 Server is running!
  🪴 Query at ${url}
  `)
}
startApolloServer();
```

- [Stack Overflow with Examples of Mock Data](https://stackoverflow.com/questions/42201641/mocking-graphql-server)
  - TL;DR - Do not need to use anonymous functions to set the values for each field
- Mock data is now currently querying properly within the Apollo Server Sandbox

### Next Steps

- Set up Apollo/Client on the front end
- Test render the mock data on the front end in console or as data/components
- [Docs](https://www.apollographql.com/tutorials/lift-off-part1/09-codegen)
  - Start at codgen tab, to generate types for the front end

## Friday Dec. 1st

- Created `models.ts` file
  - Export each type to match the schema file
  - Within each type, label each field with the correct data type from schema
  - **Note** The type references to other types do not need to be included within the each model. This is because each type will have its own declared model
  - Within the plants-api file, the models main utility is to declare each inputs types, mainly so Codegen can process and generate types for the front end

### Creating API's routes

- Created `datasources` folder, then `plants-api.ts` file
- Need to install **Rest Data Source module** from apollo

  - [Docs for data source and use case](https://www.apollographql.com/docs/apollo-server/v2/data/data-sources/)
  - [Follow along from tutorial](https://www.apollographql.com/tutorials/lift-off-part2/04-implementing-our-restdatasource)
  - Command to install: `npm install @apollo/datasource-rest`
  - Add `import { RESTDataSource } from "@apollo/datasource-rest";` to file

- Need to install dotenv so we're able to import secrets
  - `npm install dotenv` [Docs](https://www.npmjs.com/package/dotenv)
- Within the root of the server/src folder, created `config.ts` file

```
import dotenv from 'dotenv';
dotenv.config();

...
export const NAME_OF_API_OR_SECRETS = process.env.NAME_OF_API_OR_SECRETS;
```

- Back in `plants-api.ts` file, import necessary models from `models.ts` file
  - Create individual classes for each API key
  - Set a `baseURL` and assign it to their respective API endpoint
  - Define required methods within each class, which will perform the desired fetch requests
    - [Docs](https://www.apollographql.com/docs/apollo-server/data/fetching-rest/#http-methods)
  - Create notes on which RESTful requests will be needed for each API (see `plants-api.ts` file)

### Need to do nexts:

- Write the methods for each class API
- Write Resolvers
- Clarify notes for accuracy

## Set up database:

- Using ElephantSQL (PostgresQL)
- Created two tables: users and plants

```
CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    userEmail VARCHAR(255),
    userPassword VARCHAR(255),
    userLocation VARCHAR(255)
);
```

```
CREATE TABLE plants (
    plantId SERIAL PRIMARY KEY,
    plantName VARCHAR(255),
    plantImage VARCHAR(255),
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(userId)
);
```

- Set up database URI in `.env` and `config.ts` files
- Set up `dbConfig.ts` file in the database folder
- Check Google Doc for db URI

## Monday Dec. 4th

### Error Encountered:

    "rootDir": "./src", Matched by default include pattern '**/*'ts
    [Stack Overflow Link](https://stackoverflow.com/questions/57422458/error-ts6059-file-is-not-under-rootdir-rootdir-is-expected-to-contain-al)
    - Removed ``"rootDir": "./src"``, from ``tsconfig.json`` file

### No longer working with weather API

- Today, we decided that leveraging the weather API would no longer serve our needs.
- While developing helper functions to provide user data to concatenate onto our data source base URLs, we realized that we didn't know what user input the Plant API would require.
- The Plant API can take the following parameters in its URL: order, edible, poisonous, cycle, watering, sunlight, indoor, hardiness-- none of which can be provided by the Weather API.
- Having previously investigated determining the user's hardiness zone, we knew that there were too many steps involved that would then take away from the focus of utilizing GraphQL.
- In the end, we proposed that instead of receiving the user's input, we would have the user rate themselves on a scale (which we would correlate to a helper function that would determine watering frequency) and how sunny their area is.

## Tuesday Dec. 5th

- Reconfigured schema
- Reconfigured data source file to match the 2 separate fetch requests needed to get the most specific plant info
- Created a helper function to work in conjunction with the data source file
- Created resolvers for the API calls
- Reconfigured codegen file:
  -- added `plugins: ["typescript", "typescript-resolvers"]` in order to ensure that the resolvers were being built in the graphql.ts file.
  -- added `config: {
        contextType: "./context#DataSourceContext",
        mappers: {
          PlantList: "./models#PlantList",
          PlantDetails: "./models#PlantDetails",
          ImageUrlModel: "./models#ImageUrlModel",
          DimensionsModel: "./models#DimensionsModel",
          MeasurementModel: "./models#MeasurementModel",
          UserInfoModel: "./models#UserInfoModel",
        },
      }`
- Current error in index.ts file:

```
No overload matches this call.
  Overload 1 of 2, '(server: ApolloServer<BaseContext>, options?: (StartStandaloneServerOptions<BaseContext> & { listen?: ListenOptions | undefined; }) | undefined): Promise<...>', gave the following error.
    Argument of type 'ApolloServer<GraphQLResolveInfo>' is not assignable to parameter of type 'ApolloServer<BaseContext>'.
      Type 'BaseContext' is missing the following properties from type 'GraphQLResolveInfo': fieldName, fieldNodes, returnType, parentType, and 6 more.
  Overload 2 of 2, '(server: ApolloServer<GraphQLResolveInfo>, options: StartStandaloneServerOptions<GraphQLResolveInfo> & Required<...> & { ...; }): Promise<...>', gave the following error. Type '() => Promise<{ dataSources: { plantBasic: PlantBasic; plantExpanded: PlantExpanded; }; }>' is not assignable to type 'ContextFunction<[StandaloneServerContextFunctionArgument], GraphQLResolveInfo>'.
      Type 'Promise<{ dataSources: { plantBasic: PlantBasic; plantExpanded: PlantExpanded; }; }>' is not assignable to type 'Promise<GraphQLResolveInfo>'.
        Type '{ dataSources: { plantBasic: PlantBasic; plantExpanded: PlantExpanded; }; }' is missing the following properties from type 'GraphQLResolveInfo': fieldName, fieldNodes, returnType, parentType, and 6 more.ts(2769)
index.d.ts(13, 5): The expected type comes from property 'context' which is declared here on type 'StartStandaloneServerOptions<GraphQLResolveInfo> & Required<Pick<StartStandaloneServerOptions<GraphQLResolveInfo>, "context">> & { ...; }'
(alias) startStandaloneServer(server: ApolloServer<BaseContext>, options?: (StartStandaloneServerOptions<BaseContext> & {
    listen?: ListenOptions | undefined;
}) | undefined): Promise<...> (+1 overload)
import startStandaloneServer
```


## Wednesday Dec 6th:

- Installed apollo-server-core `npm i apollo-server-core`
- Added `"types": ["node", "apollo-server-core"]` to tsconfig.json
- Install apollo-server-express `npm i apollo-server-express`
- Install @types/express `npm i @types/express`
- Inside gql.ts, commented documents material and the export functions below
- graphql.ts, deleted duplicate type Identifiers
- **Note** Running codegen multiple times will create duplicate Identifiers, WHICH NEED TO BE DELETED TO PREVENT ERRORS
- Inside tsconf.json, uncommented the "rootDir" prop, then moved the codegen config file into the source folder. Restart project
- Added the following to tsconfig.json
```
"include": [
    "./src/**/*",
    "./server/*",
    "cypress/**/*.ts",
  ]
```


### Current issues:
- Found 22 errors in 2 files.

Errors  Files
     2  src/gql/gql.ts:5  // Error from documents and graphql functions
    20  src/gql/graphql.ts:12  // These are the duplicate type Identifiers generated by codeGen

- Within models.ts file, needed to add "Model" to the end of each type field
- Reran build and 
```
stephanieserrano@Stephanies-MBP server % npm start

> server@1.0.0 start
> npm run compile && node ./dist/index.ts


> server@1.0.0 compile
> tsc

node:internal/modules/cjs/loader:1147
  throw err;
  ^

Error: Cannot find module '/Users/stephanieserrano/GreenPets/server/dist/index.ts'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
    at Module._load (node:internal/modules/cjs/loader:985:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

```

## Thursday, Dec 7th 2023

### Notes for Kevin from Steph:

- ``getTokenFromRequest`` keeps erroring out, like you said.
- I tried combining the ``index.ts`` and ``plants-api.ts`` files thinking that possibly there was something under the hood in one of the ``plants-api`` imports that gave us access to the ``getTokenFromRequest`` function.
- That didn't work. 
- Following info from ChatGPT:
- I looked into what getTokenForRequest actually does: it is not a built-in function or feature specifically associated with Apollo Server. Instead, it's a pattern or utility function that developers commonly implement in their Apollo Server setups to extract authentication tokens (or other specific pieces of information) from incoming HTTP requests.
- In the context of an Apollo Server application, especially when dealing with authentication, it's a frequent requirement to extract tokens (like JWTs or API keys) from the request headers. ``getTokenFromRequest`` is a custom function that you would write to handle this extraction. The function typically looks at the request headers and returns the token, which can then be used in your resolvers or data sources for authentication purposes.
- You would typically use this function in the ``context`` function when setting up your Apollo Server. The context function is called with every request to the server, allowing you to extract the token and pass it to your resolvers or data sources.
- By doing this, you make the extracted token available in the context of every resolver, enabling you to handle authentication or other token-related logic.
- So, essentially we need to create ``getTokenFromRequest`` before calling it in the ``context`` function. I have included this in the ``index.ts`` file: 
```
const getTokenFromRequest = (req: any): string => {
  return req.headers.authorization || '';
};
```
- I'm unsure if this is what we need exactly, but it did get rid of the error. I looked ALL OVER the internet for information and couldn't find anything.
- After implementing this function to get rid of the error on ``index.ts``, I ran npm start and started getting those same errors from yesterday. Current error: 
```
Error: Cannot find module '/Users/stephanieserrano/GreenPets/server/dist/index.ts'
```
- Changed ``"start": "npm run compile && node ./dist/index.ts",`` to ``"start": "npm run compile && node ./dist/index.js",`` because our npm start script runs npm run compile (which compiles the TS files to JS) and then tries to run node ./dist/index.ts. However, this is incorrect because Node.js cannot run TypeScript files directly. The command should target the JavaScript file that results from the compilation, typically node ./dist/index.js.
- Updated the ``tsconfig.json`` file's ``include`` array to include the folders within the src file
- Added an ``exclude`` array to ``tsconfig.json`` to include ``node_modules``
- npm start now starts the server successfully!
- Question still remaining: can we get rid of all of the files that have duplicated? example: we have a ``codegen.ts`` and a ``codegen.js`` in the root dir


- Cleansed server folder of the ".js" files. 
- Moved codegen.ts, index.ts, models.ts back into the `src` folder

Errors again!!! 😫
```
tephanieserrano@Stephanies-MBP server % npm start

> server@1.0.0 start
> node ./dist/index.js

(node:30698) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```

- [Issue Docs](https://github.com/yarnpkg/yarn/issues/9013)
- [Blog about the issue](https://stackforgeeks.com/blog/punycode-error-while-running-backend-server)
- [Stack over flow possible solution](https://stackoverflow.com/questions/68774489/punycode-is-deprecated-in-npm-what-should-i-replace-it-with)
- [GitHub issue](https://github.com/nodemailer/nodemailer/issues/1599)

```
stephanieserrano@Stephanies-MBP server % npm start          

> server@1.0.0 start
> node ./dist/index.js

(node:31898) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```
- [Another GitHub issue](https://github.com/yarnpkg/yarn/issues/9005)
- The production build is **blocked** by the deprecation of the `punycode` module that is packages with Node.js 
  - Solutions: 1) Wait for package to be updated
               2) Downgrade Node.js to version 20.9 so that it is compatible with punycode
  - **MUST REVISIT THIS ISSUE FOR DEPLOYMENT**
- Running project in `dev` is successful


## Friday Dec 8th.
- Current issue, running codegen script is failing. 
```
Error: ENOENT: no such file or directory, open '/Users/stephanieserrano/GreenPets/server/codegen.ts'
```
- In ``codegen.ts`` file:
  - Changed ``schema: "./schema.ts",``. Previously, codegen was located in the root folder, not in the src folder with the schema file.
  - Actually...JK! We need to move the ``codegen.ts`` file back into the server folder. Because package.json also lives in the server folder. Needs to be at the same level as what it is processing. xoxo, Professor Kevin

- Current issue, when running test queries in Apollo Server Sandbox, response error shows:
```
{
  "data": {
    "plantsBasicInfo": null
  },
  "errors": [
    {
      "message": "Expected Iterable, but did not find one for field \"Query.plantsBasicInfo\".",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "plantsBasicInfo"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "stacktrace": [
          "GraphQLError: Expected Iterable, but did not find one for field \"Query.plantsBasicInfo\".",
          "    at completeListValue (/Users/stephanieserrano/GreenPets/server/node_modules/graphql/execution/execute.js:679:11)",
          "    at completeValue (/Users/stephanieserrano/GreenPets/server/node_modules/graphql/execution/execute.js:618:12)",
          "    at /Users/stephanieserrano/GreenPets/server/node_modules/graphql/execution/execute.js:497:9",
          "    at processTicksAndRejections (node:internal/process/task_queues:95:5)",
          "    at async Promise.all (index 0)",
          "    at execute (/Users/stephanieserrano/GreenPets/server/node_modules/@apollo/server/src/requestPipeline.ts:545:31)",
          "    at processGraphQLRequest (/Users/stephanieserrano/GreenPets/server/node_modules/@apollo/server/src/requestPipeline.ts:431:26)",
          "    at internalExecuteOperation (/Users/stephanieserrano/GreenPets/server/node_modules/@apollo/server/src/ApolloServer.ts:1309:12)",
          "    at runHttpQuery (/Users/stephanieserrano/GreenPets/server/node_modules/@apollo/server/src/runHttpQuery.ts:232:27)",
          "    at runPotentiallyBatchedHttpQuery (/Users/stephanieserrano/GreenPets/server/node_modules/@apollo/server/src/httpBatching.ts:85:12)"
        ]
      }
    }
  ]
}
```
- Need to validate return function within the ```resolvers.ts``` file, lines 6 & 12
  - `getPlantsMoreInfo(id)` endpoint is current working within apollo server
  - `getPlantsBasicInfo` does not work
  
// Start of notes after daily stand-ups

- Within Schema file, line 69 in file `schema.ts`, ` plantsBasicInfo(inputNumber: Int!, inputString: String!): [PlantList]`. The expected response is an array of objects. However, when query is made, error message shows: "Expected Iterable, but did not find one for field \"Query.plantsBasicInfo\"."
- [Lead topic from stack overflow](https://stackoverflow.com/questions/46513476/graphql-expected-iterable-but-did-not-find-one-for-field-xxx-yyy)

- Fixed the error "Expected Iterable, but did not find one for field \"Query.plantsBasicInfo\". by changing the resolver file and adding this: 
```
.then((result: PlantListModel[]) => [result])
```
- Current error: "Cannot return null for non-nullable field PlantList.id."
- console.logged the request object being sent to the server and received this: ``headers: {}
Request path for PlantBasic: undefined`` which means that headers and path aren't being logged correctly. 
- Next step: logging the full URL to see if our argument values were passed in correctly.
-console log received: 
```
Full URL: https://perenual.com/api/species-list?key=sk-uNmR656650b903d513175&indoor=undefined&watering=none
```
- Next step: console logging in the `processParams` function and in the `getPlantBasicInfo` function
- Console log: 
```
inputNumber: 1, inputString: minimum
wateringParam: none, indoorParam: undefined
wateringParam: none, indoorParam: undefined
Full URL: https://perenual.com/api/species-list?key=sk-uNmR656650b903d513175&indoor=undefined&watering=none

```
- This indicates that what each function is expecting needs to change.
- Error was in my variables in the apollo server sandbox. I was passing in incorrect values. This current configuration gets the correct console logs in the terminal:
```
{
  "inputNumber": 3,
  "inputString": "indoor",
}
```
- Found on a (github forum)[https://github.com/apollographql/apollo-server/issues/5550]: "me and permissions throw without authentication. In this case, both are throwing errors, however one is throwing that the authentication is missing (which is correct), and the other is saying it's non-nullable (which is incorrect, since it threw the same error)."
- It is possible that the error isn't that the fields are nullable, rather something to do with auth
- [Based on GitHub Issues, current bug still exists and no resolution has been provided](https://github.com/apollographql/federation/pull/983)

**Notes for Steph!**  I didn't get your notes from after our session. I found a template for how to write REST Api route with mutiple parameters (optional?). I have not yet tried it on the API though, but I will once I have some time. Hope these help!
- In `plants-api.ts` Fetch request for the `getPlantsBasicInfo` failing
- [Documentation for REST Api routes (**RESTDataSource**)](https://github.com/apollographql/datasource-rest)
- [Convo with GPT about writing REST API's with parameters](https://chat.openai.com/share/f7e27412-481f-4cee-a938-20a526234037)
  

## Monday Dec 11th
- Still battling query error from Apollo server sandbox:
```
{
  "data": {
    "plantsBasicInfo": [
      null
    ]
  },
  "errors": [
    {
      "message": "Cannot return null for non-nullable field PlantList.id.",
      "locations": [
        {
          "line": 3,
          "column": 5
        }
      ],
      "path": [
        "plantsBasicInfo",
        0,
        "id"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "stacktrace": [
          "Error: Cannot return null for non-nullable field PlantList.id.",
          "    at completeValue (/Users/pastryavenger/Work_Projects/GreenPets/server/node_modules/graphql/execution/execute.js:605:13)",
          "    at executeField (/Users/pastryavenger/Work_Projects/GreenPets/server/node_modules/graphql/execution/execute.js:500:19)",
          "    at executeFields (/Users/pastryavenger/Work_Projects/GreenPets/server/node_modules/graphql/execution/execute.js:414:22)",
          "    at completeObjectValue (/Users/pastryavenger/Work_Projects/GreenPets/server/node_modules/graphql/execution/execute.js:925:10)",
          "    at completeValue (/Users/pastryavenger/Work_Projects/GreenPets/server/node_modules/graphql/execution/execute.js:646:12)",
          "    at /Users/pastryavenger/Work_Projects/GreenPets/server/node_modules/graphql/execution/execute.js:707:25",
          "    at Function.from (<anonymous>)",
          "    at completeListValue (/Users/pastryavenger/Work_Projects/GreenPets/server/node_modules/graphql/execution/execute.js:687:34)",
          "    at completeValue (/Users/pastryavenger/Work_Projects/GreenPets/server/node_modules/graphql/execution/execute.js:618:12)",
          "    at /Users/pastryavenger/Work_Projects/GreenPets/server/node_modules/graphql/execution/execute.js:497:9"
        ]
      }
    }
  ]
}
```

- Reconfigured codegen.ts file. Removed the "preset" config since that is to generate types for the front end. 
- Also updated the property for "generates" path to `"src/types.ts"`. This will generate all the types into a single file within the source folder


## Tuesday December 12th

- Affirmed that bug is not coming from resolver file, because when replaced with hard coded values, resolvers will successfully return those values
- To debug, console logged dataSources in the `plants-api.ts` file. Discovered that the response within the `getPlantsBasicInfo` api route is returning an entire webpage HTML document. 
  - Note to use this console log to capture the response in a more condensed manner: `console.log("RESPONSE:", JSON.stringify(response, null, 2));`
    - Additional notes on the arguments within logs `PlanApiResponsev2.js` file

- Testing in Post man **GET** request `https://perenual.com/api/species-list?key=sk-uNmR656650b903d513175&indoor=1&watering=minimum` is successful. However, running in apollo server is failed.
- Noticed that the request from API is never failing and the promise is not being rejected. The thread of execution never enters the `catch(error)` block so that it console logs the error for us. 

- Need to further research this "token" issue within the `index.ts` file:
```
Object literal may only specify known properties, and 'token' does not exist in type 'DataSourceConfig'.ts(2353)
(property) token: string
```
- [START HERE TOMORROW](https://github.com/apollographql/datasource-rest)
- Next step is to overwrite the api route with basic RESTful api instead of graphQL


## Wednesday Deber 13th
- Stephanie was able to successfully debug the getBasicPlantsInfo API route issue!!! Thank you Stephanie!!! 💐
  
### Changes in the `resolver.ts` file
- It was unnecessary to return the results within an array []. This was tried in a `.then()` block, but removed
- Import types model for `PlantListModel` was also not needed and removed
- Ended up removing the try/catch block from the resolver. Through console logging, we verified that the resolver is working as expected and was even able to return hard coded data if we were to use mock data for testing. Below is the code we used for testing this:

```
plantsBasicInfo: async () => {
  return [
    { id: "1", common_name: "Test Plant", watering: "average", default_image: {thumbnail: "hello"} }, 
    { id: "2", common_name: "Test2 Plant", watering: "tons", default_image: {thumbnail: "EWWWWWWWW"} }
  ];
},
```

### Changes in the `plants-api.ts` file

**Issue 1:**
- Possible reason the following code did not work:  the use of template literals to append the params could not have been encoded correctly (even though on the console logs, they were visibly accurate)
```
const response = await this.get<PlantListModel[]>(
  `/species-list?key=${PLANT_API}&indoor=${indoorParam}&watering=${wateringParam}`
);
```
**Issue 2:**
We were returning `response` and since we were using the `get` method of `RESTDataSource`, it automatically parsed the JSON response. It is possible that the API response structure didn't match the expected type we had assigned to it (`PlantListModel[]`).

**Fix 1:**
- We changed our baseURL variable to include the endpoint and API key. And then appended our additional paramaters with the proper encoding.
```
override baseURL = `https://perenual.com/api/species-list?key=${PLANT_API}`;
let requestUrl = this.baseURL;
if (indoorParam !== null) {
  requestUrl += `&indoor=${encodeURIComponent(indoorParam)}`;
}
if (wateringParam !== null) {
  requestUrl += `&watering=${encodeURIComponent(wateringParam)}`;
}
```
  - `encodedURIComponent` is used to ensure that special characters in the parameters are properly encoded for a URL.

**Fix 2: **
Instead of using the `get` method from `RESTDataSource`, we used native `fetch`, which allows direct control over the response handling, where we were able to extract the `data` field from the JSON response, which is what we were expecting in the GraphQL schema. 
```
// Perform the fetch request
const response = await fetch(requestUrl, { ... });

// Parse the response body as JSON
const responseBody = await response.json();

// Return the data from the response body
return responseBody.data;
```

For context, this was the original code for the **PlantBasic** and **getPlantsBasicInfo** route:
```
export class PlantBasic extends RESTDataSource {
  override baseURL = `https://perenual.com/api`;
  private token: string;

  constructor(options: { token: string; cache: KeyValueCache }) {
    super(options);
    this.token = options.token;
  }

  override willSendRequest(path: string, request: AugmentedRequest) {
    request.headers.authorization = this.token;
  }
  
  async getPlantsBasicInfo(inputNumber: number, inputString: string) {
    try {
      const { wateringParam, indoorParam } = processParams(
        inputNumber,
        inputString
      );
      //const query = `&indoor=${indoorParam}&watering=${wateringParam}`;
      const response = await this.get<PlantListModel[]>(
        `/species-list?key=${PLANT_API}&indoor=${indoorParam}&watering=${wateringParam}`
      );
      return response;
    } catch (error) {
      console.error("Error in getPlantsBasicInfo:", error);
      throw error;
    }
  }
}
```


## Tuesday Dec 19th
- Error that we're dealing with:
```
await server.start() before calling server.applyMiddleware()`
```

[Research to resolve apollo server instantiation with express](https://stackoverflow.com/questions/68354656/unhandledpromiserejectionwarning-error-you-must-await-server-start-before) 

- Error: await server.start() before calling server.applyMiddleware()`

- Need to instantiate Apollo server and start it asynchronously (need to be in the same context)
  - Before I had instantiating the Apollo server and starting it separate