import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import './index.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route 
        path="/"
        element={<HomePage />}
        />
      </Routes>
    </Router>
  </React.StrictMode>,
)
