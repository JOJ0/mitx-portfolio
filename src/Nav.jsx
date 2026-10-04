import { useEffect } from 'react'
import { Collapse, Dropdown } from 'bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import logo_jt_svg from '~assets/jt_noframe_bigger02_grey80_NoBack_center.svg'
import { ROUTE_TITLES, ROUTE_SUBHEADINGS } from './constants/titles.js'
import { PAGE_TITLES } from './constants/titles.js'

function Nav() {
  const { pathname } = useLocation()
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const currentTitle = ROUTE_TITLES[normalizedPath] || ''
  const currentSubheading = ROUTE_SUBHEADINGS[normalizedPath] || ''

  useEffect(() => {
    const menu = document.getElementById('navbarNav')
    if (menu?.classList.contains('show')) {
      Collapse.getOrCreateInstance(menu).hide()
    }
    document.querySelectorAll('#navbarNav .dropdown-toggle.show').forEach(el => {
      Dropdown.getOrCreateInstance(el).hide()
    })
  }, [pathname])

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
              <NavLink className="nav-link" to="/">
                  Bio
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {PAGE_TITLES.PROJECTS}
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="nav-link" to="/projects/foss">
                      {PAGE_TITLES.PROJECTS_FOSS}
                  </NavLink>
                  <NavLink className="nav-link" to="/projects/tool">
                      {PAGE_TITLES.PROJECTS_TOOL}
                  </NavLink>
                  <NavLink className="nav-link" to="/projects/exercise">
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
                  <NavLink className="nav-link" to="/cvdev">
                      {PAGE_TITLES.CV_DEV}
                  </NavLink>
                  <NavLink className="nav-link" to="/cvops">
                      {PAGE_TITLES.CV_OPS}
                  </NavLink>
                  <NavLink className="nav-link" to="/cvart">
                      {PAGE_TITLES.CV_ART}
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                  {PAGE_TITLES.ABOUT}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                  {PAGE_TITLES.CONTACT}
              </NavLink>
            </li>

          </ul>
          {currentTitle && (
            <div className="navbar-page-heading d-none d-md-block ms-md-auto text-end align-self-end">
              <div className="navbar-page-title text-muted text-truncate pt-3">
                {currentTitle}
              </div>
              <div className="page-subheading text-muted fst-italic">{currentSubheading}</div>
            </div>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Nav;
