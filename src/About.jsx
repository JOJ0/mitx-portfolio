import { Link } from 'react-router-dom'
import Page from './components/Page.jsx'

function About() {
  const content = (
    <>
    <div class="row">
      <div class="col-12">
        <div>
          <p>
            The main reason this website exists is to give recruiters a chance to easily find out who I am and what skill-set I have to offer. It mostly is about the "What I do for a living side of things" but might link to other parts of my life in the future.
      .
          </p>
          <p>
            The site's tech-stack is React.js, Bootstrap, ReactRouter, Vite.js as the tooling, and some GitHub actions magic to deploy it to GitHub pages.
          </p>
          <p>
            ... and all the latter being the second reason why it's here. It gives me a playground for things I learn. 
          </p>

        </div>
      </div>
    </div>

    </>
  )

  return (
    <Page title="Why" subheading="is this website here?" content={content} />
  )
}

export default About;
