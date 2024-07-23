import { NavLink } from 'react-router-dom'
import logo_jt_svg from '~assets/jt_noframe_bigger02_grey80_NoBack_center.svg'

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

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
              <NavLink className="nav-link" to="/">Bio</NavLink>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
              </a>

              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="nav-link" to="/projects/foss">Open-source</NavLink>
                  <NavLink className="nav-link" to="/projects/exercise">Exercise</NavLink>
                  <NavLink className="nav-link" to="/projects/tool">Tool</NavLink>
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

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">Why</NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Nav;
