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


## Additional tests to consider for this component:
- Test that the Navbar is hidden when the scroll position is below a certain threshold and becomes visible once it exceeds this threshold. In involves mocking the `window.scrollY` value and simulating a scroll event
- Theme toggle -> state verification: Verify the actual change in the state of the theme. For example, check if the DOM reflects these changes appropriately, perhaps by checking the class or style changes in the Navbar that would reflect a theme change
- Simulate different viewport sizes and test these conditions to check responsiveness. This can be done using tools that allow us to set the viewport size in Jest or by simulating media queries
- Integration with Route -> Route Integration: Verify that the Navbar interacts correctly with the route on navigation events that it does not directly initiate but needs to react to, ensuring the active link is highlighted or selected based on the route
- Implement accessibility standards and check if the navbar is navigable via keyboard and having proper ARIA attreibutes where necessary. Check  to ensure compliance with accessibility standards and improves usability for all users
- (Advnaced) Performance Metrics - > Efficiency on Scrolls: Can use mocks and spies to measure if functions are called excessively or if they're throttled/debounced as expected. This generall requires a couple steps:
  - 1. Mocking the scroll event: This test mocks the scroll event to simulate rapid user scrolling
  - 2. Functino Spying: Spes on the function we would have implemented to handle scrolling, which should be debounced or throttled
  - 3. Expectations: Expectation is taht despite 100 rapid scroll events, the function handling the scroll should not be called 100 times if it's properly debounced or throttled. You'll need to adjust the `toHaveBeenCalledTimes` based on your throttle debounce settings.


## April 24th 
### Unit test for Navbar visiblilty based on scroll position
- Need to install package that simplifies mocking a redux store:
- [docs here](https://github.com/reduxjs/redux-mock-store)
- TypeScript types: [download here](https://www.npmjs.com/package/@types/redux-mock-store)
- **Note**: When importing `configureStore` for **`redux-mock-store`**, please import it as ***configureMockStore*** instead of **configureStore**. This prevents any confusion or mix up with the actual `configureStore` usage. 
  - The difference in usage here is that in the previous test cases, we were actually importing the real reducers to test the actual state change within the mocked routes
  - In this latest test where we will test the position and visibility of the Navbar, we will use a mockStore where real reducers will not be necessary

- Creating new test suite (describe block) for this unit test
- Before the "describe" block, instantiate a "mockStore" and assign it the value of `configureMockStore` that accepts an empty array
- Inside the `describe` block, initialize a store;
  - Note the following TypeScript typings: `MockStoreEnhanced<unknown, NonNullable<unknown>> | Store<unknown, UnknownAction, unknown>;`
    - These typing values were given to us as a `Quick Fix` solution. This type declaration is attempting to cover both types of real Redux store (`Store<unknown, UnknownAction, unknown>`)
 and a mocked store (`MockStoreEnhanced<unkown, NonNullable<unknown>>`).
    - The `unknown` type is a TypeScript way of saying that the value can be anything; it's a more type-safe counterpart to JavaScript's `any`:
      - `UnknownAction`: is a type that represents all possible actions that could be dispatched in the Reduc ecosystem
      - `NonNullable<unknown>`: ensures that `unknown` is not `null` or `undefined`
 
- Next, we need to set up `beforeEach` and `afterEach` functions to set up our unit test environments:
  - In the `beforeEach` function, initialize the mock store and set the `inNavbarVisible` initial state to `false`
  - Then dispatch the store and assign it as a mock function of jest: `store.dispatch = jest.fn()`
    - This particular assetion allows us to check specifically how many times we're interacting with the mocked store of redux. Many types of tests can be born from this simple setup.
  - In the `afterEach` function, we reset the `window.scrollY` position to its default value, which is zero

- Now to write our two test cases:
1. Navbar should become visible when window scrolls past 150px
  - We use the render method and create a mocked `Provider`, passing in the mocked store as an attribute
  - Initially, we used a `<Router>` element here to set the route to the `<Navbar />`, however, that caused many TypeScript issues. The solution to this is to utlize the `<MemoryRouter>` from `react-router-dom` instead. This and the `<BrowserRouter>` are the most efficient and widely used components when it comes to unit testing. It's because they are higher-level router components, that are able to hanle the navigation and ocation props interally, without the necessary typings.
  - `<Navbar />` nested in the `<MemoryRouter>` tags
  - Initially, we simulated a scroll to a specific position to test, but found out that the method `window.scrollTo` does not work in the jsdom like Jest does. So instead need to manually assign the scrollY position to test it
  - The end assertion: `expect(store.dispatch).toHaveBeenCalledWith(setNavbarVisibility(true));`

2. Test Navbar should be not visible when window.scrollY position is less than 150px
   - The setup for this test case is very similar
   - Manually set the `window.scrollY = 100` to be less than 150px
   - The final assertion is to check that the `setNavbarVisibility(false)` state value is set to false


## April 30th
- Unit testing for Hero Section component
- Import `@testing-library/jest-dom` so that it can provide custom DOM element matchers for Jest
- This setup requires us to import react-redux's `Provider`, which makes the Redux store available to the connected components in the application and test environment
- Import the proper `react-router-dom` components to handle routing within the test environment
- Import the store for Redux
- Import the `HeroSection` original component
- Import `userEvent` library to simulate user actions
- Import `ThemeProvider` so that test render is able to properly read the styled components props (ran into test errors when initially setting this up without the `ThemeProvider`)
- Import the object for initial theme (just to use as a place holder)

1. Test for text content within the `HeroSection` component:
  - Set up this test case so that it renders the `HeroSection` within the necessary providers that it requires to operate
  - The assertions that we'll use focus on `.getByText` where it will search for a single instance of the inserted string value, & `.toBeInTheDocument()`
  - `/Greener Living, One Tap Away/i` assertion is using Regular Expression because it will by pass the `<br /> html tag that exists within the react component. This allows the test case to still search for the desired content without rendering an error

2. Second unit test will simulate user clicking on a button and if that button will reroute user to `/get-started` page
  - Before we create the test case, we need to create a helper component, `TestLocationDisplay`. This component instantiates a variable `location` and assigns it the value of `useLocation()` method from `react-router-dom`
  - We then return a HTML div element with two required attributes:
    - 1. `data-testid` which we assign to string value of "test-location:
    - 2. `data-location` which we assign to JSX value = `location.pathname`
  - In the setup render section of this test case, we utilize `<MemoryRouter initialEntries={['/]}>` instead of the `<BrowserRouter>` element. MemortyRouter allows us to customize specific routes within our test environment without having to declare everything that exists within the real application.
    - In this scenario, we setup `<Routes>` -> with two `<Route>` pathways:
      - 1. `<Route path='/' element={<HeroSection />} />`
      - 2. `<Route path='/get-started' element={<TestLocationDisplay />} />`
        - In the second route, we can see we're rendering the `TestLocationDisplay` helper component from earlier
        - Also notice that we've set it's path to where the user is expected to be routed towards
   - Next, we simulate a user click with `await userEvent.click(screen.getByText(/Find your pet now!/i));`
   - The assertion checks if the route the user has been set to has a path value of `/get-started/`:
      `expect(screen.getByTestId('test-location').getAttribute('data-location')).toBe('/get-started');`


## June 13th
```
 PASS  __tests__/Navbar.test.tsx (6.12 s)
  ● Console

    console.warn
      You rendered descendant <Routes> (or called `useRoutes()`) at "/" (under <Route path="/">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.
      
      Please change the parent <Route path="/"> to <Route path="*">.

      102 |   
      103 |   test("Clicking 'Get Started' button redirects to /get-started page", async () =>{
    > 104 |     render(
          |           ^
      105 |       <Provider store={store}>
      106 |         <MemoryRouter initialEntries={['/']}>
      107 |           <Routes>
```
- Can ignore this message for now when running all tests.
- The `<MemoryRouter initialEntries={['/']}` component is the parent component which declares the starting path at `"/"`. Tests will not navigate deeper than the layers that are provided here so tests should be able to pass.

### Begin testing About Us Section

- Update to `tsconfig.json` file:
  - Within the `"types"` property, added two values to the array: `"jest", "@testing-library/jest-dom",`
  - This resolved an issue where running this specific test file was failing before.

General Approach on what functionality to test for within this component:

- **First, understand component's functionality:**
  - Displays a title, subtitle and body text.
  - It uses `styled-components` for styling.
  - It uses Redux to determine which image to display based on the `themestate`.

- **Identify Key functionalities to test:**
  - Rendering all of text elements (title, subtitle, body).
  - Presence of specific class names or styled applied by `styled-components`.
  - Conditional rendering of the `LeafStyle` image based on the `themestate`.

- **Write tests for each functionality:**
  - a. Rendering tests: Ensure that the component renders correctly with all its elements.
  - b. Conditional rendering tests: Test that the correct image is displayed based on the `themeState`.
  - c. Style and Class Tests: Test that elements have the correct styles or class names.
- For this step, we need to install new library: `npm install --save-dev jest-styled-components`
- When installing, came across this message:
```
npm warn deprecated @vitejs/plugin-react-refresh@1.3.6: This package has been deprecated in favor of @vitejs/plugin-react
```
- Uninstalled deprecated version and upgraded to the suggested package:
`npm install --save-dev @vitejs/plugin-react`


- Added test case to check standard styles within styled components
- Assertions for media queries are currently failing. The media query styles are not found on the mocked component within the test case.





### Additional unit tests we can implement:
- Adding accessibility attributes throughout our components, then testing if the attributes exists
- Testing the toggling of the theme value (requires setting up a mock version of the store and testing mocked state)



