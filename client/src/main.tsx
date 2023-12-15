import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import GetStarted from './GetStarted'
//import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Roadmap from './Roadmap'
import TestDisplay from './pages/TestDisplay';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
//   cache: new InMemoryCache(),
// })

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
//   {
//     path: '/testField',
//     element: <TestDisplay />,
//   },
// ]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route 
          path="/test-field"
          element={<TestDisplay />}
        />
        <Route 
          path="/"
          element={<HomePage />}
        />
        <Route 
          path="/get-started"
          element={<GetStarted />}
          />
        <Route 
          path="/road-map"
          element={<Roadmap />}
        />
        
      </Routes>
    </Router>
  </React.StrictMode>
)
