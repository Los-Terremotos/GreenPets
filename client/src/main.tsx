import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import GetStarted from './GetStarted'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Roadmap from './Roadmap'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
