import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// App entry point
import App from './App.jsx'
import Home from './Home.jsx'
import Projects from './Projects.jsx'
import ProjectsExercise from './ProjectsExercise.jsx'
import ProjectsFoss from './ProjectsFoss.jsx'
import CvDev from './CvDev.jsx'
import CvOps from './CvOps.jsx'
import CvArt from './CvArt.jsx'
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
          <Route path="/projects" element={<Projects />}>
            <Route path="/projects-foss" element={<ProjectsFoss />}/>
            <Route path="/projects-exercise" element={<ProjectsExercise />}/>
          </Route>
          <Route path="/cvdev" element={<CvDev />}/>
          <Route path="/cvops" element={<CvOps />}/>
          <Route path="/cvart" element={<CvArt />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
