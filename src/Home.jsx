import { Link } from 'react-router-dom'
import { useState } from 'react'
import Page from './components/Page.jsx'
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
          Hi, I’m Jojo, a Software Engineer with a background in enterprise system administration. Currently, I work as a Full-Stack programmer in network automation. I also develop and maintain Open Source Python software. I have about 10 years of experience in Python programming and 5 years in project leadership, code review, and supporting Open Source communities.
          </p>
          <p>
            I have extensive experience in interfacing with and designing REST APIs, as well as writing backend code in general, using both JavaScript and Python. I have worked with databases ranging from desktop to enterprise level, including PostgreSQL and SQLite.</p>
          <p>
            When I code websites, currently I prefer using JavaScript, Bootstrap and React.js. In the past I've coded and still maintain Python based web solutions (Flask, Django, Wagtail). On my current day-job I write Django front- and backend code.
          </p>
          <p>
            With a senior- to master-level expertise in enterprise system administration, primarily using Open Source solutions, I’m not afraid to handle mission-critical servers, platforms, and app stacks—I’ve seen it all. Designing UNIX-style CLI tools is probably what led me to coding Python professionally.
          </p>
          <p>
            Since DevOps and automation became popular in my recent jobs, I had the chance to focus on that for a while, becoming quite skilled in CI/CD, Puppet, Ansible, Docker, and even further improving my Python skills. "Infrastructure as Code Developer" was the buzzwordy title I earned back then. One of my main takeaways from those experiences is that...
          </p>

          <p className="center">
            <strong><em><span class="badge text-bg-dark">If something's not tracked in version control it doesn't exist!</span>
            </em></strong>
          </p>

          <div className="row">
            <div className="col-6">
              <p className="left">
                <span className="badge text-bg-secondary">
                  <Link to="projects/foss">Free and Open Source Work</Link>
                </span>
              </p>
            </div>
            <div className="col-6">
              <p className="right">
                <span className="badge text-bg-secondary">
                  <Link to="projects/corporate">Closed source and voluntary projects</Link>
                </span>

              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <p className="center">
                <span className="badge text-bg-secondary">
                  <Link to="cvdev">Programming skill set</Link>
                </span>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <p className="left">
                <span className="badge text-bg-secondary">
                  <Link to="cvops">Ops and sysadmin experience</Link>
                </span>
              </p>
            </div>
            <div className="col-6">
              <p className="right">
                <span className="badge text-bg-secondary">
                  <Link to="cvart">Music and art projects</Link>
                </span>
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>

  )

  return (
    <Page title="Bio" subheading="graphy" content={content} />
  )
}

export default Home;
