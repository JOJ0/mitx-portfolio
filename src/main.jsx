import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// App entry point
import App from './App.jsx'
// Import our SCSS (which contains bootstrap stuff!)
import './main.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter /* basename="/app" */>
    <Routes>
      <Route path="/" element={<App />}/>
    </Routes>
  </BrowserRouter>
)
