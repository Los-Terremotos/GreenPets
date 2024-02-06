import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import GetStarted from './pages/GetStarted'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Roadmap from './components/HomePageComponents/Roadmap'
// import TestDisplay from './pages/TestDisplay';
import { Provider } from 'react-redux';
import store from "./App/store";


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
      <Router>
        <Routes>
          {/* <Route 
            path="/test-field"
            element={<TestDisplay />}
          /> */}
          <Route 
            path="/"
            element={<HomePage />}
          />
          <Route 
            path="/road-map"
            element={<Roadmap />}
          />
          <Route 
            path="/get-started"
            element={<GetStarted />}
          />
        </Routes>
      </Router>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)
