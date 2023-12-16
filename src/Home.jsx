import Page from './components/Page.jsx'
import portrait01 from '~assets/portrait.png'

function Home() {
  const content = (
    <>
    <div class="row">
      <div class="col-12">
        <div>
          <img class="rounded float-start me-3 w-25" src={portrait01} alt="Portrait Picture" />
        </div>
        <div>
          <p class="">
            Hi! I've been a sysadmin in my carreer so far, 15+ years working in enterprise IT. My focus has been servers and virtualization. There was Windows, VMware and a little proprietory UNIX's once, but over the years I ended up with Linux as the main platform I've been managing. Already in 1997 I was tinkering with Linux as my homeserver platform, later on it became the go-to platform of the companies I was working for, thus I got into professionally using it.
          </p>

          <p>In the last couple of years programming became more and more important in my life: private Python tinkering projects evolved to full-blown Open Source projects; corporate "sysadmin doing" developed into Configuration Management with tools like Ansible and Puppet, Python scripting, or even Ruby.</p>

          <p>All that evolved to a desire to professionally learn "to code" and shift my carreer into full time programming. Currently I'm attending a course teaching me "Full Stack Web Programming". Have a look at the <a href="projects.html">projects page</a> to get more details on how that goes.</p>

          <p>That said, as an IT guy you'll always be the one who's also managing or even coding webpages for companies or privately. Hence I have quite some experience in CSS/HTML, server-side programming with Python Wagtail/Django, static site-generators like Jekyll and there even was some PHP in the early days of my carreer. I'm now expanding my expertise to evolve into an even more skilled web and application developer by focusing on the one language that seems to rule the modern web: JavaScript and its frameworks, all up front ReactJs and ReactNative.</p>
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
