import { useState } from 'react'
import Nav from './Nav.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="site-shell">
      <div className="wrapper-head">
        <Nav />
      </div>
      <div className="wrapper-main">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
