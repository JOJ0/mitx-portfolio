import { Link } from 'react-router-dom'
import Page from './components/Page.jsx'
import portrait01 from '~assets/portrait.png'

function Home() {
  const content = (
    <div className="row">
      <div className="col">
        <div>
          <img className="img-fluid rounded mx-3 mt-1 mb-0 float-end me-0 portrait-max " src={portrait01} alt="Portrait" />
        </div>

        <div>
          <p>
            Hi, I'm Jojo. I develop and maintain Python Open Source software. I have about 10 years experience of Python programming and 5 in project leadership, code review, and supporting communities.
          </p>
          <p>
            I use Python as a DevOps tool as well - one interesting experience on a recent job was writing an application that interacts with in-house API's to help install and orchestrate KVM Virtual Machines.
          </p>
          <p>
            When I code websites, currently I would use a modern approach using JavaScript, Bootstrap and React.js for that. Express.js if a JavaScript backend is desired. In the past I've coded and still maintain Python based web solutions (Flask, Django, Wagtail).
          </p>
          <p>
            With a senior/master level background in enterprise system administration of all kinds of (mostly) Open Source based solutions, I'm not afraid of handling mission-critical servers, platforms and app-stacks. I've seen it all.
          </p>
          <p>
            Since DevOps and automation became popular in my last jobs, I had the chance to focus on that and became quite good in using CI/CD, Puppet, Ansible, Docker and even further improve my Python skills. "Infrastructure as Code Developer" was the buzzwordy title I earned last..... 
          </p>

          <p className="center">
            <strong><em>If something's not tracked in version control it's not existing!</em></strong>
          </p>

          <div className="row">
            <div className="col-8">
              <p className="left">
                Get an overview of <Link to="projects/foss">the FOSS projects I'm involved with</Link>, and find out what <Link to="projects/corporate">corporate (closed source) projects I'm proud of - WIP/coming soon</Link>.
              </p>
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="col-8">
              <p className="right">
                An overview of my programming skill set is found  <Link to="cvdev">in this alternative approach on a CV</Link>.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <p className="left">
                Similarily my ops and sysadmin experience <Link to="cvops">is summarized here</Link>.
              </p>
            </div>
          </div>

          <div className="row justify-content-end">
            <div className="col-8">
              <p className="right">
                Last but surely not least I have some experience in the music and art scene. I've organized <Link to="cvart">music events, DJ nights and participated in art projects - WIP/coming soon</Link>.
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
