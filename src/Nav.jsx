import { NavLink } from 'react-router-dom'
import logo_jt_svg from '~assets/jt_noframe_bigger02_grey80_NoBack_center.svg'


function Nav() {

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">

      <div className="container-sm">

        <span className="navbar-brand">
          <img src={logo_jt_svg} alt="" width="55" height="55" />
        </span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" id="navbarList">
            <li className="nav-item">
              <NavLink className="nav-link d-md-none" to="/">
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  Bio
                </span>
              </NavLink>
              <NavLink className="nav-link d-none d-md-block" to="/">
                  Bio
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="nav-link d-md-none" to="/projects/foss">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      Open-source
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/projects/foss">
                      Open-source
                  </NavLink>
                  <NavLink className="nav-link d-md-none" to="/projects/exercise">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      Exercise
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/projects/exercise">
                      Exercise
                  </NavLink>
                  <NavLink className="nav-link d-md-none" to="/projects/tool">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      Tool
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/projects/tool">
                      Tool
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CV
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="nav-link d-md-none" to="/cvdev">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      CV.dev
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/cvdev">
                      CV.dev
                  </NavLink>
                  <NavLink className="nav-link d-md-none" to="/cvops">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      CV.ops
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/cvops">
                      CV.ops
                  </NavLink>
                  <NavLink className="nav-link d-md-none" to="/cvart">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      CV.art
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/cvart">
                      CV.art
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link d-md-none" to="/about">
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  Why
                </span>
              </NavLink>
              <NavLink className="nav-link d-none d-md-block" to="/about">
                  Why
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Nav;
