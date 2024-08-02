import { useState } from 'react'
import Nav from './Nav.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper-head">
        <div className="container-xs">
          <Nav />
        </div>
      </div>
      <div className="wrapper-main">
        <div className="container-sm">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App;
