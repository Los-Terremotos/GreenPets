# Daily Notes for Green Pets

## Wed Nov. 22nd

## File structure initialization
- Created new repo on git hub organization
- **Decision** to structure project as a **Monorepo with multiple packages** or a **multifile monorepo**.
  - This decision allows for some monorepos benefits of shared versioning and centralized management, while allowing for a more distinct separation of concerns between frontend and backend. 
- Client's simple setup: In GreenPets folder, ran command ```npx install vite@latest``` and initialized **client** folder 
 
### Setting up **server** folder
- Create **server** folder `cd server`
- `npm init -y`
- `npm install --save express graphql @swc/cli @swc/node @apollo/server`
- `npm install --save-dev nodemon typescript @types/node`
-  By pass using "express-graphql" since we're going to be using Apollo Server instead
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
  - Option 1: - User inputs location
              - We fetch user location in weather app of plants using long, lat
              - Take searchable terms of weather conditions that fit with Plant API fields (ie: "sunlight": ["full sun", "part shade", "] )   
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
