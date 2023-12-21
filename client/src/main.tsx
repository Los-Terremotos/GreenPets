import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import GetStarted from './pages/GetStarted'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Roadmap from './pages/Roadmap'

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
