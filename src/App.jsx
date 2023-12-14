import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="container-sm">
        <Outlet />
      </div>
    </>
  )
}

export default App;
