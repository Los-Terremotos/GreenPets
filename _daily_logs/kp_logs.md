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

## Wednesday Dec. 6th
- Uninstall `apollo-server-core` && `apollo-server-express` since both are **deprecated**
- Followed docs here to update index.ts file:
  - [Docs](https://www.apollographql.com/docs/apollo-server/migration)
- Current error on `getTokenFromRequest` method:
  ```Cannot find name 'getTokenFromRequest'.ts(2304)
  any```