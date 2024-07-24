import { useState } from 'react'
import Nav from './Nav.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default App;
