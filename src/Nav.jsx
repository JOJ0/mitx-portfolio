import { NavLink } from 'react-router-dom'

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container-sm">

        <span className="navbar-brand">
          <img src="src/assets/jt_noframe_bigger02_grey80_NoBack_center.svg" alt="" width="35" height="35" />
        </span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" id="navbarList">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
              </a>

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="nav-link" to="/cvdev">Open Source</NavLink>
                  <NavLink className="nav-link" to="/cvdev">Exercising</NavLink>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CV
              </a>

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="nav-link" to="/cvdev">CV.dev</NavLink>
                  <NavLink className="nav-link" to="/cvops">CV.ops</NavLink>
                  <NavLink className="nav-link" to="/cvart">CV.art</NavLink>
                </li>
              </ul>
            </li>


          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Nav;
