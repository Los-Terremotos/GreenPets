# Daily Notes for Mattox

## Tuesday Nov. 28nd

## File structure initialization
- Removed files from Vite's setup
- Renamed App.tsx to HomePage.tsx 
- Moved all css into ```index.css``` since it's hosting HomePage


 
### Setting up **HomePage.tsx** file
- Create **HomePage.tsx** file
- Insert boiler plate HTML code into our React component which we'll import into our ```main.tsx``` file.
- Installed mui npm package
- Import mui component into ```HomePage.tsx``` file
- imported images for header section

## Dec 3rd

## Setting up Routes for multi-page navigation

- Installed npm package `npm i react-router-dom`
- Imported the components from the react-router library into the `main.tsx` file.
- Created the first route with the following code.
```<Router>
      <Routes>
        <Route 
        path="/"
        element={<HomePage />}
        />
      </Routes>
    </Router>```
- installed the npm package for react-icons
```npm i react-icons```
- Creating multiple routing options using the Link component from React-router library
- various buttons and nav bac icons now support routing
- various styling was implemented on home page and roadmap page.
- Added a Get Started button on the home page to direct users to the application.

## Dec 4-5th
### Responsive landing page
- Reevaluated our initial landing page and wanted to not make it so hacky.
- site is now responsive using flex, flex direction and other css properties.
- utilized media queries to change the layout based on the max-width of the view port.

## Dec 8th
- Researching Redux and Redux Toolkit

## Dec 9th
- Starting on implementing Redux TK by following documentation here
- Created the App folder inside the /src directory
  - This folder contains the root reducer and store configuration.
- Created the Features folder inside the /src directory
 - This folder contains subfolders for each feature of your application. Each subfolder includes slices, selectors, actions, and tests
 - installed the npm package for the type definitions that were listed here --> https://redux-toolkit.js.org/tutorials/typescript 
  - npm install @types/react-redux

- Added this eslint config rule to remove errors for eslint 
  - "no-unused-vars": "off",
  - "@typescript-eslint/no-unused-vars": "warn"
- Created our slice state and action types
   - features/plantType/plantTypeSlice.ts
   - features/plantType/plantType.ts


This defines an interface named plantTypeState with a single property value, which is of type boolean. It's essentially describing the structure of the state for the 'plantType' slice.

interface plantTypeState {
  value: boolean;
}

This sets the initial state for the 'plantType' slice. The initial state has a value property, and it's set to false. This is the starting point for the state of your slice.

const initialState: plantTypeState = {
  value: false,
};


createSlice is a function from Redux Toolkit that generates a slice of the Redux store, including actions, action creators, and a reducer.
name: 'plantType' specifies the name of this slice.
initialState sets the initial state for this slice.
Inside the reducers field:
indoor is a reducer function. When the 'indoor' action is dispatched, it sets state.value to true.
changePlantType is another reducer function. When the 'changePlantType' action is dispatched with a boolean payload, it sets state.value to the value of the payload.

export const plantTypeSlice = createSlice({
  name: 'plantType',
  initialState,
  reducers: {
    indoor: (state) => {
      state.value = true;
    },
    changePlantType: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

Setting plantType to false:
dispatch(plantTypeSlice.actions.changePlantType(false));

Setting plantType to true:
dispatch(plantTypeSlice.actions.indoor());