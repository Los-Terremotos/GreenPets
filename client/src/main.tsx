import React from 'react'
//import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage'
import TestDisplay from './pages/TestDisplay'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/testField',
    element: <TestDisplay />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route path="/testField">
//           <TestDisplay />
//         </Route>
//         <Route path='/'>
//           <HomePage />
//         </Route>
//       </Switch>
//     </Router>
//   </React.StrictMode>,
// )
