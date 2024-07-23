import { Link } from 'react-router-dom'
import Page from './components/Page.jsx'
import portrait01 from '~assets/portrait.png'

function Home() {
  const content = (
    <>
    <div class="row">
      <div class="col-12">
        <div>
          <img class="img-fluid rounded float-end me-3 portrait-max" src={portrait01} alt="Portrait Picture" />
        </div>

        <div>
          <p>
            Hi, I'm Jojo. I develop and help maintain Python Open Source software. I have about 10 years experience of Python programming and about 5 in project maintaining, reviewing code and taking care of project communities. In my last job I wrote a Python-based toolset that interacts with in-house API's to help install and orchestrate KVM Virtual Machines.
          </p>
          <p>
            I also code websites. Currently I would use a modern approach using JavaScript, Bootstrap and React.js for that. Express.js if a JavaScript backend is desired. In the past I've coded and still maintain Python based web solutions (Flask, Django, Wagtail).
          </p>
          <p>
            I have a senior/master level background in enterprise system administration of all kinds of (mostly) Open Source based solutions.
          </p>
          <p>
            Since DevOps and automation became popular in my last jobs, I had the chance to focus on that and became quite good in using CI/CD, Puppet, Ansible, Docker and even further improve my Python skills. "Infrastructure as Code Developer" was the buzzwordy title I earned last.
          </p>
          <p>
            If something's not tracked in version control it's not existing!
          </p>
          <p>
            Get an overview of <Link to="projects/foss">the FOSS projects I'm involved with here</Link>, and find out what <Link to="projects/corporate">corporate (closed source) projects I'm proud of there - WIP/coming soon</Link>.
          </p>
          <p>
            An overview of my programming skillset is found  <Link to="cvdev">in this alternative approach on a CV</Link>
          </p>
          <p>
            Similarily my ops and sysadmin experience <Link to="cvops">is summarized here - WIP/coming soon</Link>
          </p>
          <p>
            Last but surely not least I have some experience in the music and art scene. I've organized <Link to="cvart">music events, DJ nights and participated in art projects - WIP/coming soon</Link>.
          </p>

        </div>
      </div>
    </div>

    </>
  )

  return (
    <Page title="Bio" content={content} />
  )
}

export default Home;
