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



## February 9th

### Addressing Client side error when attempting to send fetch request to server side

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

[Apollo docs for handling heroku deployment](https://www.apollographql.com/docs/apollo-server/deployment/heroku/)
[Registerting for a Graph QL API key](https://www.apollographql.com/docs/graphos/api-keys/#graph-api-keys)
