import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import GetStarted from './GetStarted'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Roadmap from './Roadmap'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Router>
      <Routes>
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
    </ApolloProvider>
  </React.StrictMode>,
)
