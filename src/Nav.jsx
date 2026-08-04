import { NavLink, useLocation } from 'react-router-dom'
import logo_jt_svg from '~assets/jt_noframe_bigger02_grey80_NoBack_center.svg'
import { ROUTE_TITLES } from './constants/titles.js'
import { PAGE_TITLES } from './constants/titles.js'

function Nav() {
  const { pathname } = useLocation()
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const currentTitle = ROUTE_TITLES[normalizedPath] || ''

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
              {PAGE_TITLES.PROJECTS}
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="nav-link d-md-none" to="/projects/foss">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      {PAGE_TITLES.PROJECTS_FOSS}
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/projects/foss">
                      {PAGE_TITLES.PROJECTS_FOSS}
                  </NavLink>
                  <NavLink className="nav-link d-md-none" to="/projects/tool">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      {PAGE_TITLES.PROJECTS_TOOL}
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/projects/tool">
                      {PAGE_TITLES.PROJECTS_TOOL}
                  </NavLink>
                  <NavLink className="nav-link d-md-none" to="/projects/exercise">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      {PAGE_TITLES.PROJECTS_EXERCISE}
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/projects/exercise">
                      {PAGE_TITLES.PROJECTS_EXERCISE}
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
                      {PAGE_TITLES.CV_DEV}
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/cvdev">
                      {PAGE_TITLES.CV_DEV}
                  </NavLink>
                  <NavLink className="nav-link d-md-none" to="/cvops">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      {PAGE_TITLES.CV_OPS}
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/cvops">
                      {PAGE_TITLES.CV_OPS}
                  </NavLink>
                  <NavLink className="nav-link d-md-none" to="/cvart">
                    <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                      {PAGE_TITLES.CV_ART}
                    </span>
                  </NavLink>
                  <NavLink className="nav-link d-none d-md-block" to="/cvart">
                      {PAGE_TITLES.CV_ART}
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link d-md-none" to="/about">
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  {PAGE_TITLES.ABOUT}
                </span>
              </NavLink>
              <NavLink className="nav-link d-none d-md-block" to="/about">
                  {PAGE_TITLES.ABOUT}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link d-md-none" to="/contact">
                <span data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  {PAGE_TITLES.CONTACT}
                </span>
              </NavLink>
              <NavLink className="nav-link d-none d-md-block" to="/contact">
                  {PAGE_TITLES.CONTACT}
              </NavLink>
            </li>

          </ul>
          {currentTitle && (
            <span className="navbar-page-title d-none d-md-inline-block ms-md-auto text-muted text-truncate py-3">
              {currentTitle}
            </span>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Nav;
