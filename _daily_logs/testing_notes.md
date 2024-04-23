## April 3rd 2024
- Start of TESTING w/ J E S T ! ! !
- General functionalities that we will be testing: business logic, component rendering based on props, state management, and event handling.
- "Test the contract, not the implementation". This means that we'll be testing if the component is behaving as expected. We are NOT testing **HOW** it achieves that behavior. This approach allows the code to be refactored and updated over time, without having to rewrite the tests.
- Write clear, descriptive test cases. This will allow us to better understand what is being tested and also easier to understand test failures.'
- [Helpful article for Jest](https://testrigor.com/blog/jest-testing/)
- [Awesome guide/tutorial](https://www.robinwieruch.de/react-testing-library/)
- Added a `moduleNameMapper` configuration in the `jest.config.ts` file
- Created a `__mock__` folder within `__tests__` folder. Then created a `fileMock.js` file that included `module.exports = 'test-file-stub`
  - This setup tells Jest to replace imports of the specified file types with the export from `fileMock.js`, effectively bypassing the syntax error when encountering binary files
  - This is mainly used when we create mock data to be used in unit testing
- In file `.eslintrc.cjs`, added `node: true` to the environment property: `env: { browser: true, es2020: true, jest: true, node: true },`
  - This will tell the ES linter to accept the environment with all the contents added to the propery. In this case, modules and imports/exports would be accepted without triggering linting errors


## April 5th
- Created pull request for adjustments in code to deploy to main
- Completed `HomePage.tests.tsx`:
  - We import the `Provider` component wrapper from `react-redux`, so we're able to pass state into our test unit
  - We import the `HomePage` component
  - Using `jest.mock(arg1 (the import location of component we want to mock), arg2 (the returned result of how we want it to display in our test))`, we create mocks of all the sections that exists within HomePage
  - Notice, inthis test we're only going to text if the components are rendered as text within the file


## April 6th:
- Start unit testing within `Navbar` component:
- Using **Real Store** vs **Mock Store** (state management) in unit testing:
  - Pros of **Real Store**:
    1. Realistic Tests: This is most appropriate when writing integration tests when testing to see how components integrate with global state
    2. Ease of Setup: Importing and wrapping components in the provider with the real store is straightforward. Requires less setup compared to mocking a store or specific slices of state.
   
  - Cons of **Real Store**:
    1. Complexity and Speed: Tests are generally more complex and slower as using the real store requires more logic and external dependencies. This is a result for integration tests.

    For unit tests, the goal is to isolate the component as much as possible.
    2. State Persistemce: State can persist between tests if not handled correctly. This requires proper implementation of `beforeEach/beforeAll` and `afterEach/afterAll` hooks to avoid unwanted changes in initial state


  - Pros of **Mock Store**:
    1. Isolation: Mock stores can be tailored to the needs of unit tests, gives more control.
    2. Simplicity: Can explicitly define all state that is required for the test at hand
    3. No State Persistence: Each test creates the specific state it requires and the mocked states only exists where they're needed. No worrying about state persistence across tests.
  
  - Cons of **Mock Store**:
    1. Less Realistic: Tests might not fully capture the interactions and behaviors of the real application, especially for integration tests
    2. Additional Setup: Requires more setup to create a mock environment and provide the relevant state and dispatch functions.

- Updated `"include"` property within `tsconfig.json` to `"__tests__"` so that TypeScript can successfully apply types to testing files

### Navbar component unit testing
- To simulate user actions on site, installed two additional libraries:
  - `npm install @testing-library/user-event` & `npm install @testing-library/dom`
- [Docs for user events here](https://testing-library.com/docs/user-event/intro)

### Notes for configuring a mock store for unit testing:
```
Adapting Your Store Configuration for Testing
When you want to customize the store for testing, you can recreate a similar structure to what you have in your application's store configuration. Here's how you can adapt your renderWithRedux function using your existing reducers, allowing for optional overriding or partial reducer setup:

javascript
Copy code
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
// Import your reducers
import responseSliceReducer from '../Features/Response/responseSlice';
// import other reducers...

// Optional: Create a helper function to configure a test store
const createTestStore = (overrideReducers = {}) => {
  return configureStore({
    reducer: {
      // Use your actual reducers, but allow them to be overridden or omitted in tests
      response: responseSliceReducer,
      // add other reducers...
      ...overrideReducers, // This allows overriding specific reducers for a test
    },
  });
};

const renderWithRedux = (
  component,
  { initialState, store = createTestStore() } = {}
) => {
  // If there's an initialState, dispatch an action to initialize it
  if (initialState) {
    store.dispatch({ type: 'INIT_STATE', payload: initialState });
  }

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store, // This allows you to interact with the store in your tests
  };
};

export default renderWithRedux;

Notes on Testing with Custom Store Configurations
Override Specific Reducers: The overrideReducers parameter in createTestStore allows you to provide mock or simplified reducers for specific slices of state relevant to the component you're testing. This is useful when you want to isolate the component from the rest of the application state or when you need to test specific state behaviors without setting up the entire store.

Initial State: If your tests require the store to start with a specific state, you can dispatch an initial action to set this state. This approach requires you to handle the INIT_STATE action in your reducers, which might not always be desirable. An alternative is to directly use the preloadedState option of configureStore to set the initial state, but this requires setting up the entire state shape expected by your reducers.

Testing Slice Isolation: For tests that only involve interactions with a single slice of state, consider directly importing and using the slice reducer in a test-specific store setup. This approach is very focused and ignores the broader application state, which can be beneficial for unit testing.

This setup keeps your tests flexible and closely aligned with the actual store configuration in your application, while still allowing for the customization needed for focused testing.
```

**Need To-DO's:***
- Implement accessibiliy features throughout our front end
- Writing tests to check if all interactive elements are accessible by keyboard and screen readers
- Ensuring labels, roles and properties are correctly set for interactive elements

## April 23rd:
### Notes on test case "Theme toggle click dispatches setLightMode action"
- To begin, we create a full store configuration that uses the reducers that are only used within the original Navbar component. In this scenario, we are checking the existence of the reducers "isNavbarVisible" and "lightModeToggle". This isolated state allows to test the component's interaction with Redux without affecting the entire app's state.

- Best practice to explicitly set initial state and test the expected state outcome. Added assertion to explicitly check initial state of test store to have `lightMode` to be `false`
    
- Next, we instantiate a variable named `dispatchSpy` and assign it to the value of jest's `spyOn` method, passing in the imported redux `store` file, and string argument 'dispatch'. This spy will record all dispatch actions called during the test, allowing us to verify if specific actions were dispatched as expected when interacting with the component.

- Next, we render a mock version of the application as well as the `Navbar` component, wrapped in both Redux `Provider` and `BrowserRouter`. This ensures that the component behaves as it would in the actual application environment. 

- This is followed by a simulated `await userEvent.click(screen.getByText(/Surprise?/i));` action, where are click on a button with the specified text of "Surprise?". This action returns a promise when it triggers events that happen asynchronously, hence the use of `await`.

- The next step is to expect that our previously declared variable "dispatchSpy" to have called/dispatched  an action type, which is a combination of the "createSlice" name as well as the reducer's key property name. The action type we check for is `lightModeTheme/SetLightMode`, and it should match exactly what is defined in the redux store.

- Assert the test store's `lightMode` to be `true`

- The final step is to call "mockRestore()" method on the `dispatchSpy` variable, which I assume will reset the redux store to the initial state values. This step is important to prevent the spy from affecting other tests, ensuring that each test runs independently without unintended interactions from leftovers of previous tests.

- Current time to test entire `Navbar.test.tsx` file is 2.083 s

### Test case for clicking 'Get Started' button, redirect to /get-started page
- First, we create a dedicated component, `TestLocationDisplay` to make process of capturing and asserting on the route more explicit and clear. Import a hook from `react-route-dom` called `useLocation`.
  - Declare a variable `location` and assign it the inovcation of `useLocation();
  - The component returns a `div` element with two attributes: `data-testid` and `data-location`
    - `data-testid` is assigned "test-location"
    - `data-location` is assigned `{location.pathname}`
- Next, create the test case for checking the click on "Get Started button"
- Need to import a couple of testing utility objects that can inteact with React Router's history object:
  - MemoryRouter, Route, Routes
  - User `MemoryRouter` instead of `BrowserRouter` for testing. Allows us to initialize routes with an array of entires (`initialEntries`) which simulate the history stack. This is useful for both initializing the router in a specific state and for checking how interactions change the routes. We assign this route to `['/']`
  - `Routes` and `Route` components: Need to set these up similar to how we configure them in the application. THis ensures that navigation changes behave as they would in the live application.
- Routes Setup: The first `Route` pathway is set to `"/"` and rendered as the root path element. All other routes will render the `TestLocationDisplay` element. The idea is that if the route changes upon clicking the "Get Started" button, the `TestLocationDisplay` will show the new route.
- The first simulation is that we will click on the screen for a button with the `/Get Started/i` text.
- The assertion is that if we check the "test-location" and attribute "data-location", it will be set to 'get-started' 

Current time to pass all four test cases: 1.82 s