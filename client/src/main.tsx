import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import GetStarted from "./pages/GetStarted";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./components/HomePageComponents/Roadmap";
// import TestDisplay from './pages/TestDisplay';
import { Provider } from "react-redux";
import store from "./App/store";


const client = new ApolloClient({
  link: new HttpLink({
    // dynamic URL link for connecting to server
    uri: process.env.NODE_ENV === 'production'
    ? 'https://greenpets-de412c97e72c.herokuapp.com/' 
    : 'http://localhost:4000',
    //credentials: 'include', // Need if your backend expects cookies or auth header
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            {/* <Route 
            path="/test-field"
            element={<TestDisplay />}
          /> */}
            <Route path="*" element={<HomePage />} />
            <Route path="/road-map" element={<Roadmap />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
