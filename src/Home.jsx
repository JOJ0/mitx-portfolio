import { Link } from 'react-router-dom'
import Page from './components/Page.jsx'
import portrait01 from '~assets/portrait.png'

function Home() {
  const content = (
    <>
    <div class="row">
      <div class="col-12">
        <div>
          <img class="rounded float-end me-3 w-25" src={portrait01} alt="Portrait Picture" />
        </div>
        <div>
          <p class="">
            Hi! I've been a sysadmin in my carreer so far, 15+ years working in enterprise IT. My focus has been servers and virtualization. There was Windows, VMware and a little proprietory UNIX's once, but over the years I ended up with Linux as the main platform I've been managing. Already in 1997 I was tinkering with Linux as my homeserver platform, later on it became the go-to platform of the companies I was working for, thus I got into professionally using it.
          </p>

          <p>In the last couple of years programming became more and more important in my life: private Python tinkering projects evolved to full-blown <Link to="projects/foss">open-source projects</Link>; corporate "sysadmin doing" developed into Configuration Management with tools like Ansible and Puppet, some Ruby scripting, as well as developing entire command line tools in Python.</p>

          <p>All that evolved to a desire to professionally learn "to code" and shift my carreer into full time programming. Currently I'm attending a <Link to="projects/exercise">Full Stack Web Programming</Link> course.</p>

          <p>That said, as an IT guy you'll often be the one who's also managing and coding webpages for companies or privately. Hence I'm experienced in CSS/HTML, server-side programming with Python Wagtail/Django, static site-generators like Jekyll, there was some PHP in the early days of my career and I've even designed Python/Flask based REST APIs. Now I'm expanding my expertise by focusing on the one language that seems to rule the web: JavaScript and its frameworks, all up front <Link to="https://react.dev/">React</Link>, <Link to="https://expressjs.com/">Express</Link> and <Link to="https://reactnative.dev/">React Native</Link>.</p>
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
