import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import './index.css'
import GetStartedTest from './GetStartedTest'

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
        element={<GetStartedTest />}
        />
        <Route 
        path="/road-map"
        element={<Roadmap />}
        />
        
      </Routes>
    </Router>
  </React.StrictMode>,
)
