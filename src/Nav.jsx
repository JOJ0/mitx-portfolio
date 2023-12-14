function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container-sm">

        <span className="navbar-brand">
          <img src="assets/jt_noframe_bigger02_grey80_NoBack_center.svg" alt="" width="35" height="35" />
        </span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" id="navbarList">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Nav;
