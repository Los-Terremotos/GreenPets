## March 22 
- Generated additional mock data for plant details requests
  - Will use these to create a custom functino to extract the specific care taking guides from the detailed response JSON
- Wrapped the "get-started" page with a `themeProvider` from styled components to enable theme props to be passed to the `ResultsDetailCard` component


**NEED TO DO's**
- Update schema/models files to include detailed information that we want to pull from the detailed API request
  - Example "Care_guides" and not "care_level"
- Add icons to plants that demonstrate info about plants. Example: Poisonous icon for plants vs pets/humans
- https://www.flaticon.com/free-icon/poison_3953085


## Monday March 25th
- Restructuring ResultsDetailCard so that content can be displayed in its on container, with a clean white background. Opting for simple text display, such as an unordered list with list of data.

List of desired properties from `data.plantsMoreInfo`:
```
scientific_name: string,
origin: string[],
type: string,
watering: string, // using for questionnaire
watering_general_benchmark: object{
  value: string, //ex. "6-12"
  unit: string, // ex. "days"
},
sunlight: string[], // ex. "full sun", "part shade", "filtered shade"
pruning_month: string[], // ex. "February", "March", "April", "June", "July", "August"
maintenance: "string", // using for questionnaire?
care-guides: string, // need to fetch JSON response from this link to acquire guide instructions,
drought_tolerant: boolean,
thorny: boolean,
indoor: boolean,
flowers: boolean, // combine with fruit with ternary statement?
fruit: boolean,  // combine with flowers with ternary statement?
medicinal?: boolean,
poisonous_to_humans: int, 
poisonous_to_pets: int,
description: string,
default_image: object{
  thumbnail: string,
}
```

- Suggestion of organizing data into more digestible and thematic groups:
  1. Overview:
    - scientific name
    - type
    - origin
    - description
    - maintenance level
    - default image
  
  2. Care details
    - watering requirements
    - sunlight needs
    - soil requirements
    - pruning requirements
  
  3. Growth & Propagation
    - growth rate
    - dimension
    - propagation methods
    - hardiness
  
  4. Healthy & saftey
    - Pest susceptibility
    - Drought tolerance
    - Salt tolerance
    - Thorny
    - Poisonous to Humans & pets
  
  5. Environmental Preferences
    - Indoor/outdoor
    - drought tolerant
    - salt tolerant
    - temperature ranges
  
  6. Flora & fauna
    - Flowers
    - Fruit
    - Leaf Details
    - Attracts wildlife
  
  7. Additional Resources?
    - care guides
    - hardiness map
    - medicinal uses


**Note** Response object for running get request on care-guide within PlantDetailsQuery:
```
{
  "data": [
      {
          "id": 47,
          "species_id": 5,
          "common_name": "Fraser Fir",
          "scientific_name": [
              "Abies fraseri"
          ],
          "section": [
              {
                  "id": 1199,
                  "type": "watering",
                  "description": "Fraser Fir (Abies fraseri) should be watered once every 2 weeks in the spring and summer. In the fall and winter, Fraser Fir should be watered only when the top few inches of soil become dry (around once a month). Water thoroughly until water runs out of the drainage holes. It is important to check the plant's soil moisture levels before watering to ensure that the soil doesn't become too wet."
              },
              {
                  "id": 1200,
                  "type": "sunlight",
                  "description": "Fraser Fir (Abies fraseri) plants require full sun to thrive and will benefit from at least 6 hours of direct sunlight each day. This species usually does better in cooler climates, where it will receive partial or filtered light for the remainder of the day. It is important to remember that during the summer months, when the days are longer, Fraser Fir can still become stressed from too much exposure to sunlight, especially when temperatures are very high. To avoid sunscald or other damage, make sure to give your Fraser Fir some shade in the afternoon or on particularly hot days."
              },
              {
                  "id": 1201,
                  "type": "pruning",
                  "description": "Pruning should generally be done in late winter or early spring, when the Fraser Fir tree is dormant. Otherwise, it is best to prune in the summer. Pruning should be done lightly, taking no more than 10-15% of the tree's foliage away. This will allow the tree time to heal and put its energy into new growth and development. If you have to prune more than that, divide it up over several years."
              }
          ]
      }
  ],
  "to": 1,
  "per_page": 30,
  "current_page": 1,
  "from": 1,
  "last_page": 1,
  "total": 1
}
```

**Note**
- Be sure to update the query and its specific fields within the `ViewMore` component, specifically in the `MoreInfo` graphql query.
- Need to update interace for `PlantInfo` within types file

- When updating models within the `server/src/models.tsx`:
```
export type PruningModel = {
  amount: GLfloat;
  interval: String;
};
```
Here are some links to explain how and why "GLfloat" is used:
[Why GLint & GLfloat?](https://stackoverflow.com/questions/12326404/why-is-there-glint-and-glfloat)
[Their differences](https://community.khronos.org/t/difference-between-glfloat-and-float/12482)

- Successfully updated `server/src/schema.ts` & `server/src/models.ts` files with all of the type defintions that are availale for the plants detail query request
- Updated the `MORE_INFO` query within the `ViewMore.tsx` component to include all the new details added to the schema/model files in server side


Typescript error:
```
Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TabDataMapping'.
  No index signature with a parameter of type 'string' was found on type 'TabDataMapping'.ts(7053)
const tabDataMapping: TabDataMapping
```
Before: `ContentTabs.tsx` line 70
```
const contentFields = tabDataMapping[activeTab];
```

Solution:
```
const contentFields = tabDataMapping[activeTab as keyof TabDataMapping];
```

- Error occurs because `activeTab` is a string value but TS doesn't know at compile time which specific string it will be.
- Solution is to use type assertion to assure TS that the key we're using will indeed exist on the `tabDataMapping` object. Setting it `as keyof TabDataMapping` ensures TS that the `activeTab` will certainly be a key of `TabDataMapping`.

- Updated `client/src/types.ts` file, specifically the `interface PlanInto` to include all detailed fields
- Moved the `TabDataMapping` variable to its own file within `ResultsPageComponents` file. This will create more space in the `ContentTabs` component.
- Updated all the tab categories within `tabDataMapping` with new fields that were added to `PlantInfo` types 
- Now, the `ContentTabs` component is dynamically rendering the fields that are included from the `TabDataMapping`. 

**Need to**
- Update styling to show fields that have boolean values
- Update styling to make data larger
- Can test certain data field types and get rid of them if they serve no purpose

## Tuesday Mar 26th
- Created `fetchCareGuides.tsx` file within the utils folder
- Current issue is running into "cyclic object value" type errors. Basically cannot use "JSON.stringify()" on an already stringified object 
- Add `$` to the `active` prop in the `ContentTab` to make it a static prop

### Current Data Flow Process:
1. Click on `ViewMoreBtn`
    a. If the data has **NOT** been fetched before, `useLazyQuery` will trigger (!called conditional activated), and `getPlantInfo()` is executed
    b. If the data has **ALREADY** been fetched and resides in cache, `if (data)` conditional will trigger and modal will open with the cached data being passed through

- The expected outcome, to access a particular property from the intial fetched data response object, then one of two scenarios. Save that string to state, or immediately do another fetch request on it and **THEN** save that response to state. Which ever is more efficient. 

- Adding the `fetchCareGuides(data.plantsMoreInfo)` after the toggle of modal and its data is working as intended. This is the proper place to call it since it will trigger the first time a plant's detailed are fetched. 
- Current error from and logs from the `fetchCareGuides` component:
```
LINE 5 IN FETCH CARE GUIDES fetchCareGuides.tsx:5:12
.
.
.
KEY: care_guides fetchCareGuides.tsx:9:12
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://perenual.com/api/species-care-guide-list?species_id=2193&key=sk-4MQn656f96f3d272a3341. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 302.

Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://perenual.com/api/species-care-guide-list?species_id=2193&key=sk-4MQn656f96f3d272a3341. (Reason: CORS request did not succeed). Status code: (null).

Failed to fetch care guides. fetchCareGuides.tsx line 15 
Object { stack: "AxiosError@http://localhost:5173/node_modules/.vite/deps/axios.js?v=f39d15a5:377:18\nhandleError@http://localhost:5173/node_modules/.vite/deps/axios.js?v=f39d15a5:1453:14\nEventHandlerNonNull*dispatchXhrRequest@http://localhost:5173/node_modules/.vite/deps/axios.js?v=f39d15a5:1452:5\nxhr_default<@http://localhost:5173/node_modules/.vite/deps/axios.js?v=f39d15a5:1376:10\ndispatchRequest@http://localhost:5173/node_modules/.vite/deps/axios.js?v=f39d15a5:1593:10\nrequest@http://localhost:5173/node_modules/.vite/deps/axios.js?v=f39d15a5:1858:33\nforEachMethodNoData/Axios.prototype[method]@http://localhost:5173/node_modules/.vite/deps/axios.js?v=f39d15a5:1877:17\nwrap@http://localhost:5173/node_modules/.vite/deps/axios.js?v=f39d15a5:8:15\nfetchCareGuides@http://localhost:5173/src/utils/fetchCareGuides.tsx?t=1711511140676:10:52\nonCompleted@http://localhost:5173/src/components/ResultsPageComponents/ViewMore.tsx?t=1711511318478:131:28\nInternalState2.prototype.handleErrorOrCompleted/<@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:16574:19\npromise callback*InternalState2.prototype.handleErrorOrCompleted@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:16570:27\nInternalState2.prototype.setResult@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:16564:12\nonNext@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:16424:17\nnotifySubscription@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8609:13\nonNotify@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8653:21\nnext@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8691:13\niterateObserversSafely/<@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9158:23\niterateObserversSafely@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9157:23\nObservableQuery2.prototype.reportResult@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:14100:31\nnext@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:14052:17\niterateObserversSafely/<@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9158:23\niterateObserversSafely@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9157:23\nnext@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9241:35\nnotifySubscription@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8609:13\nonNotify@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8653:21\nnext@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8691:13\nasyncMap/</makeCallback/</promiseQueue<@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9183:29\npromise callback*asyncMap/</makeCallback/<@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9182:56\nnotifySubscription@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8609:13\nonNotify@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8653:21\nnext@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8691:13\niterateObserversSafely/<@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9158:23\niterateObserversSafely@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9157:23\nnext@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:9241:35\nnotifySubscription@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8609:13\nonNotify@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8653:21\nnext@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:8691:13\n", message: "Network Error", name: "AxiosError", code: "ERR_NETWORK", config: {…}, request: XMLHttpRequest }
get-started:13441:25
KEY: soil fetchCareGuides.tsx:9:12
.
.
.
...
```

- CORS error is occurring because the Host Website (http://perenual.com) is blocking the request, since our development environment as well as production link does **not** have the necessary headers to have the request accepted
  
  - Four potential solutions:
1.  Server-side Fix: Meaning the host of the API data can modify their "Access-Control-Allow-Origin" to include our domain
2.  Proxy Server: Using a fake server to make the request for us, usually as a script in `package.json`. These proxy can forward requests from the application to the API server, appearing as if they were made from the same origin. This works because the development server is a Node.js server and not subject to the browser's security constraints. Detail to note here is that it **only** works in development environment
3.  Development tools: Comes in forms of browser extentions or dev tools that can be downloaded and used. These are usually for development environment only!
4.  Backend Forwarding: This approach is to route requests through our own backend server. The server can make requests to external APIs and then pass the data back to the frontend. This method allows us to keep the API keys and other sensitive information secure on the server.
   

So best approach in this scenario is to use **Sever-Side Request Forwarding**:
- This approach will help us bypass CORS restrictions, enhances security since we're not sharing API key's, centralizes the API requests from a single endpoint (in this case, our own server). This single endpoint will allow us to have more control over how the requests and data is retrieved. We have flexibility to manipulate the data however we'd like before sending it back to the frontend. 

General Steps to implementing this:
1. Frontend sends URL to Backend
2. Backend (express.js with typescript): Create an App route that serves as an `api/fetch-care-guide/` pathway for your server request can come through. In `Server/index.tsx`
3. Within the app route, setup a try / catch block. 
4. Retrieve the care guide URL through a `request.body` object from the front end
5. use axios to send a get request utilizing the URL address from the front end
6. Return the response in a json object
7. Properly configure the front end function that handles the Post request
General implementation:
```
async function fetchCareGuide(careGuideUrl) {
    try {
        const response = await fetch('/api/fetch-care-guide', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ careGuideUrl }),
        });
        const data = await response.json();
        console.log(data); // Use the fetched data as needed in your frontend
    } catch (error) {
        console.error('Error fetching care guide from backend:', error);
    }
}
```
8. Once the data is retrieved and console logged, we can manipulate it however we see fit


- Needed to install `axios` to server package.json
- Created api router path to accept POST request from front end client
  - Caching solution exists but not properly implemented
- Updated `fetchCareGuides` to include parsing function and generate a object with key, value pairs for the care guides.
- **Need to** create a slice and save that variable to state


## March 28th
- Merged with branch/ticket 107 that successfully saves "Care_guides" object into state. Object now is to stylize the results modal in dynamic fashion
- Added `$` to a couple props in `FeatureCard` component to make them static props 
- Within `ViewMore` component, line 133 - 134 is where the `CareGuides` state is being set to an object where we can extract the care guide information and render it into Content Tabs
- `CareGuides` is created and set in `Features/DetailCard/cardSlice.ts` file
- Used `useSelector` and `RootState` to import the `CareGuides` state into `ContentTabs` component
- Cleaned up the `TabDataMapping` array to remove clutter data that is not worth displaying
- Created a helper function to capitalize and create space for titles in the data
- Created a styled component for list data in an array
- Learned that the "hardiness map" displayed for each plant is actually very complex and rendered on a series of pre exisiting layered images from `www.perenual.com`. The pre existing images set foundational layers and each hardiness map is composed of layered images unique to the plant that is being identified. 
  - This was apparent when looking at the page source code of the `full_url` propety from the `hardiness_locations` field. 
  - The complexity of rendering this map image is a but beyond the scope of our project, so I think it is safe to safe that we will have to forego rendering a hardiness map for our details 
- Utilized a similar conditional statement to identify the "care_guides" field
  - When the field is mapped to in the `TabDataMapping`, there is a conditional check to ensure that the data stored in state is not null or undefined, then a variable `entries` is instantiated and assigned so the deconstructed values of the object of care guides that was saved in state.
  - Next, we map through that `entries` variable and render it's key (the title of the care guide), and its value (the description respective to the care title)
  - Adjusted stylying (specifically `min-height: 20px` and `height: auto`) so that the data will have proper spacing and visibility

**Need To** 
- Find Nested anchor tag error somewhere in codebase:
```
Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
a
a
O2@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1263:6
div
O2@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1263:6
div
O2@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1263:6
CallToActionSection
div
O2@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1263:6
tt@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1203:32
HomePage@http://localhost:5173/src/pages/HomePage.tsx?t=1711684700162:33:35
RenderedRoute@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=f39d15a5:3550:7
Routes@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=f39d15a5:3984:7
Router@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=f39d15a5:3932:7
BrowserRouter@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=f39d15a5:4664:7
ApolloProvider@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:16175:16
Provider@http://localhost:5173/node_modules/.vite/deps/react-redux.js?v=f39d15a5:1092:18
```
- Current error from browser:
```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `ContentTabs`. See https://reactjs.org/link/warning-keys for more information.
ContentTabs@http://localhost:5173/src/components/ResultsPageComponents/ContentTabs.tsx?t=1711702805763:84:47
div
O2@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1263:6
div
O2@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1263:6
ResultsDetailCard@http://localhost:5173/src/components/ResultsPageComponents/ResultsDetailCard.tsx?t=1711702805763:60:27
div
O2@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1263:6
Modal@http://localhost:5173/src/components/Modal.tsx?t=1711702805763:38:36
div
O2@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1263:6
Results@http://localhost:5173/src/components/ResultsPageComponents/Results.tsx?t=1711702805763:80:39
main
O2@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1263:6
tt@http://localhost:5173/node_modules/.vite/deps/styled-components.js?v=f39d15a5:1203:32
GetStarted@http://localhost:5173/src/pages/GetStarted.tsx?t=1711702805763:44:39
RenderedRoute@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=f39d15a5:3550:7
Routes@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=f39d15a5:3984:7
Router@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=f39d15a5:3932:7
BrowserRouter@http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=f39d15a5:4664:7
ApolloProvider@http://localhost:5173/node_modules/.vite/deps/@apollo_client.js?v=f39d15a5:16175:16
Provider@http://localhost:5173/node_modules/.vite/deps/react-redux.js?v=f39d15a5:1092:18 get-started:13441:25
    overrideMethod get-started:13441
    React 5
    ContentTabs ContentTabs.tsx:151
    React 13
    onClick ContentTabs.tsx:144
    React 23
    <anonymous> main.tsx:29
```


## March 29th
- Need to fix title of results detail card to `Common Name`
- Render data of boolean values for `Flowers & Fauna` section and  `Health & Safety` section
- Added an additional "else if" conditional to check if the `fieldValue` typeof was `boolean`, then used a ternary conditional to render "Yes" or "No"
- At this point the `renderTabContent()` function is filled with multiple "if" and "else if" conditionals
### Begin refactoring and modularizing `renderTabContent()` function
- Started by abstracting three separate functions:
  1. Creating a function to render simple string data
  2. A function to render array data
  3. A function to render object data
**Note** Needed three separate functions here because each of them utlizes a different interface to properly typecheck the data that is being passed through it as an argument
- Created multiple interfaces at the top of `ContentTabs`. Decision to keep helper functions as well as type declarations within this file so that it's more organized and easier to digest the large `renderTabContent` function
- Ran into a series of typescript issues in regards to the "undefined" data that could potentially be passed through
  - Resolved a couple of these by updating and removing **ALL** unused data fields from `PlantsMoreInfo` data shape
  - Started by removing all the unused fields from `Server/src/schema` & `server/src/models`. Ran `npm run codege` to ensure type generation is successful
  - Updated `client/src/types/` and removed all unused interfaces/fields in there. Then updated `ViewMore` -> `MoreInfo` query fields
  - Ran `npm run codegen` in client folder to ensure all queried fields have proper typing
  