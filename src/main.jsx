import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// App entry point
import App from './App.jsx'
import Home from './Home.jsx'
import Projects from './Projects.jsx'
// Import our SCSS (which contains bootstrap stuff!)
import './main.scss'
// Import additinoal (plain) CSS
import './main.css'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter /* basename="/app" */>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
