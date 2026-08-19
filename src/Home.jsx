import { Link } from 'react-router-dom'
import { useState } from 'react'
import Page from './components/Page.jsx'
import { PAGE_TITLES } from './constants/titles.js'
import portrait01 from '~assets/IMG_4611.jpg'
import giface from '~assets/GIFace_08-09-2024_selected_portrait_first_wm.gif'

function Home() {
  const [overPic, setOverPic] = useState(false);

  const content = (
    <div className="row">
      <div className="col">
        <div
          onMouseOver={() => setOverPic(true)}
          onMouseOut={() => setOverPic(false)}
        >
          <img className="img-fluid rounded mx-3 mt-1 mb-0 float-end me-0 portrait-max "
           src={overPic ? giface : portrait01} alt="Portrait or Giface"
          />
        </div>

        <div>
          <p>
          Hi, I’m Jojo, a Software Engineer with a background in enterprise systems administration. I currently work as a full-stack developer in network automation. I also develop and maintain Open Source Python software. I have 7+ years of professional Python experience and 5+ years of experience in project leadership, code review, and supporting Open Source communities.
          </p>
          <p>
          I design and integrate REST APIs and develop backend systems in Python and JavaScript. I have worked with databases ranging from lightweight SQLite solutions to enterprise PostgreSQL systems.
          </p>
          <p>
          My current focus is Python, Django and Nautobot development for network automation, including both backend and frontend work. I also maintain Python-based web applications built with Flask, Django, and Wagtail. For frontend development, I work with JavaScript, React, and Bootstrap.
          </p>
          <p>
          Before focusing primarily on software development, I worked at a senior level in enterprise systems administration, largely with Open Source technologies. That background helps me design and operate reliable, mission-critical platforms—not just write application code. Building UNIX-style CLI tools was an important step toward my professional Python career.
          </p>
          <p>
          In past infrastructure roles, I specialized in automation and DevOps practices, including CI/CD, Puppet, Ansible, Docker, and Python-based tooling. This work led to the title Infrastructure as Code Developer and gave me a strong operational perspective on building and running software.
          </p>
          <p>
          It taught me that good software is not finished when it runs: it should be understandable, testable, deployable, observable, and maintainable.
          </p>

          <p className="center">
            <strong><em><span class="badge text-bg-dark">If something's not tracked in version control it doesn't exist!</span>
            </em></strong>
          </p>

          <div className="row">
            <div className="col-12 col-md-6">
              <p className="left">
                <span className="badge text-bg-secondary">
                  <Link to="projects/foss">Open Source Work</Link>
                </span>
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p className="right">
                <span className="badge text-bg-secondary">
                  <Link to="cvops">Ops Experience</Link>
                </span>
              </p>
            </div>
            {/*
            <div className="col-6">
              <p className="right">
                <span className="badge text-bg-secondary">
                  <Link to="projects/corporate">Closed source and voluntary projects</Link>
                </span>
              </p>
            </div>
            */}
          </div>

          <div className="row">
            <div className="col-12">
              <p className="center">
                <span className="badge text-bg-secondary">
                  <Link to="cvdev">Dev Skills</Link>
                </span>
              </p>
            </div>
            {/*
            <div className="col-6">
              <p className="right">
                <span className="badge text-bg-secondary">
                  <Link to="cvart">Music/Art projects</Link>
                </span>
              </p>
            </div>
            */}
          </div>

        </div>
      </div>
    </div>

  )

  return (
    <Page title={PAGE_TITLES.HOME} subheading="" content={content} />
  )
}

export default Home;
