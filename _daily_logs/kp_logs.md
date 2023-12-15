# KP's daily logs / notes for Green Pets

## Wed Nov. 22nd

### Setting up branch & adding quality of life improvements to repo
- Project set up exists on ```dev``` branch. Used cli command ```git clone -b dev https://github.com/Los-Terremotos/GreenPets.git``` to clone ```dev``` branch
```git clone -b <branch> <remote_repo>```

- Created a pull request to add pull_request_template.md. Followed directions from [instructions here](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository).

### Adding Frontend Dependencies
- React-router-dom: `npm install react-router-dom`
  - [Docs](https://reactrouter.com/en/main/start/tutorial)
- Styled components: `npm install styled-components`
  - [Docs](https://styled-components.com/docs/basics#installation)
- @apollo/client graphql: `npm install @apollo/client graphql`
  - [Docs](https://www.apollographql.com/docs/react/get-started)
- Jest: `npm install --save-dev jest`
  - [Docs](https://jestjs.io/docs/getting-started)
- React testing library: `npm install --save-dev @testing-library/react`
  - [Docs](https://testing-library.com/docs/react-testing-library/intro/)
- Testing for react components that use GraphQL: [Documentation here](https://www.apollographql.com/docs/react/development-testing/testing/)
  - **Decision** to use **Jest** because it works well with React and supports snapshot testing. It's main benefit is to showcase ability to write unit tests, integration tests, and snapshot tests for React components and TypeScript Code.
  - Opt against Cypress, since Cypress is more emphasized for end-to-end testing

- Install "Jest" for backend testing as well : 
  - [Testing checklist](https://dev.to/amplication/best-practices-in-testing-graphql-apis-499n)
- **Updated Node.js to version 20.10** due to "EBADENGINE" error when attempting to install jest to server folder


## Friday December 1st, 2023

### Ticket 18 - FS Testing
- Created a FS-UnitTesting branch
- Installing `react-test-renderer` for both client / server folders, for rendering snapshots
  - `npm install --save-dev react-test-renderer`
- Installing babel dependencies, for both client & server folders
  - `npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer`
  - `npm install --save-dev @babel/preset-typescript`
- Add "test": "jest" script to package.json file 
- Create `babel.config.js` file:
```
export const presets = [
  '@babel/preset-env',
  ['@babel/preset-react', { runtime: 'automatic' }],
  '@babel/preset-typescript', 
];
```

### Need to do next
- Create sample tests for both front end and back end


## Saturday December 2nd, 2023
- Researching proper way to setup jest with typescript, within a monorepo
  - [Docs for installing with typescript](https://jestjs.io/docs/getting-started#using-typescript)
- **Note** Need to install `ts-node` to be able to use jest to test type-checking during tests.
  - Babel does not support type-checking within react. It focuses on transforming code syntax and features
- Install additional dependencies: `npm install --save-dev ts-jest @types/jest`
  - [Docs for ts-jest](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation)
  - [Help with setting up](https://www.npmjs.com/package/@testing-library/jest-dom#with-typescript)
- Set up file `jest.config.js` with root folder. Below is the suggested configuration using ES6 module syntax
```
export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const testMatch = [
  "**/__tests__/**/*.ts?(x)",
  "**/?(*.)+(spec|test).ts?(x)"
];

```
- Next, create a separate typescript config file within root folder just for tests: `tsconfig.test.json`
```
{
  "extends": "./tsconfig.json", // Reference your main tsconfig.json
  "compilerOptions": {
    "jsx": "react-jsx", // If you're using React
    "esModuleInterop": true
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}

```
- Next, create testing folders in root directory: `/client/tests/__tests__/(create test files here)`
- Here is initial test file to check content on homepage App.tsx:
```
import React from "react";
import { render, screen } from "@testing-library/react";
import App from '../../src/App';


test('renders App component', () => {
  render(<App />);

  // Use screen.getByText to find elements by their text content
  const titleElement = screen.getByText(/Green Pets/i);
  const buttonElement = screen.getByText(/Test login here/i);
  const comingSoonElement = screen.getByText(/c o m i n g s o o n /i);

  // Assert that the elements are in the document
  expect(titleElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(comingSoonElement).toBeInTheDocument();
})
```
- Will see an error on the matcher "toBeInTheDocument" assertion. Requires package `npm install --save-dev @testing-library/jest-dom`
  - [Docs](https://www.npmjs.com/package/@testing-library/jest-dom)
  - [Docs for jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
- Within the `jest.config.js` file, import `import '@testing-library/jest-dom';` at the top
- Then, added this: `export const setupFilesAfterEnv = ['<rootDir>/jest.setup.js'];`
  - This option is an array of file paths that Jest will execute after the test framework has been installed in the environment but before each test suite is executed
- Finally, added `"./jest.config.js"` into the **"include"** array within the `tsconfig.test.json` file
- .eslintrc.cjs Added "jest":true to env property.
- Changed this configuration: `export const setupFilesAfterEnv = ['@testing-library/jest-dom'];`
- Added: `"types": ["jest", "@types/testing-library__jest-dom"]` to compiler options in tsconfig.test.
- Install types for testing libraray jest-dom: `npm install --save-dev @types/testing-library__jest-dom`
- Install "ts-node": `npm install --save-dev ts-node`
- Added `"esModuleInterop": true` to both **tsconfig.json** files, within the **"compilerOptions"** configuration
- Added `/* eslint-disable @typescript-eslint/no-unused-vars */` to top of App.test.tsx file
- Will commit current code and reset project, hoping will reset the eslint and fix the error. Current error when running `npm test`:
```
Kevins-MacBook-Pro:client KP824$ npm test

> client@0.0.0 test
> jest

 FAIL  tests/__tests__/App.test.tsx
  ● Test suite failed to run

    tests/__tests__/App.test.tsx:2:1 - error TS6133: 'React' is declared but its value is never read.

    2 import React from "react";
      ~~~~~~~~~~~~~~~~~~~~~~~~~~

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.329 s
Ran all test suites.
```

### After restart of vs code:
-Error in App.test.tsx file:
```
Cannot find name 'test'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`.ts(2582)
```

- Updated "jsx" configration to "react-jsxdev"
- Added "tests" to the "includes" config within the tsconfig.json property
- Added the following to the `jest.config.ts` file. This configuration is an array of regex that Jest will use to determine which files should not be transformed. The regex expression `\\.css$` targets CSS files specifically 
```
transformIgnorePatterns: [
    '/node_modules/',
    '\\.css$'
  ]
```
- [Thread that gave clue to include "tests" folder within tsconfig.config "include" config](https://github.com/Microsoft/TypeScript/issues/31226)
- [Also helpful thread](https://stackoverflow.com/questions/63904196/esmoduleinterop-flag-set-still-getting-default-import-error)
  - `"include": ["src", "tests"],`

- Tried alternative : `npm install --save-dev identity-obj-proxy`

```
moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
```
- Next, updated testEnvironment in jest.config.ts to `testEnvironment: 'jsdom',  // Set test environment to jsdom`
- Installed **jsdom**: `npm install --save-dev jest-environment-jsdom`
  - [Docs](https://www.npmjs.com/package/jest-environment-jsdom)
- Test FINALLY PASSING! SUCCESS!!!

### Need to do next: 
- Check if same amount of installing is required for back end testing in jest. 
- Currently only have client folder working properly


## Monday December 4th
- Created new branch for ticket #7. Will create a display that will render the data from the endpoints passed through.
- Created pages folder and moved App/HomePage to folder
- Updated `main.tsx` with createRoot + router configurations to route from home page to the test display component
- Created TestDisplay component & added styling for display structure
- Install axios: `npm install axios`
- Imported Plant list and Plant details into the test display component. 



## Tuesday December 5th
- Styled display components. Had issues with getting the DataContent components to fit within the DisplayPage container. The proper fix was using "max-height" on the DisplayContainer
- Imported fetch requests for the three available endpoints for free tier plant API
- Created mock data files to render for testing up coming results page
- The Plant List endpoint will return 1 page of up to 30 plants
- Will need to select since plant ID and then send a second request to get specific plant details

- Code block from Stephanie. Required inputs from user to properly write query to the API
- Reference later when creating questionnaire page
```
export function processParams(inputNumber: number, inputString: string) {
  const numToString: { [key: number]: string } = {
    1: "none",
    2: "minimum",
    3: "average",
    4: "frequent",
  };

  const wateringParam = numToString[inputNumber];

  let indoorParam;
  if (inputString === "indoor"  inputString === "Indoor") {
    indoorParam = 1;
  } else if (inputString === "outdoor"  inputString === "Outdoor") {
    indoorParam = 0;
  }
  return {
    wateringParam,
    indoorParam,
  };
}
```

## Wednesday Dec. 6th
- Uninstall `apollo-server-core` && `apollo-server-express` since both are **deprecated**
- Followed docs here to update index.ts file:
  - [Docs](https://www.apollographql.com/docs/apollo-server/migration)
- Current error on `getTokenFromRequest` method:
  ```Cannot find name 'getTokenFromRequest'.ts(2304)
  any```