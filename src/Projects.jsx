import Page from './components/Page.jsx'

function Projects() {
  const content = (
          <div className="row">
            <p>
              Currently (2023/2024) I'm attending the course <a href="https://xpro.mit.edu/courses/course-v1:xPRO+PCCx/">Professional Certificate in Coding: Full Stack Development with MERN</a> at the <a href="http://xpro.mit.edu">MITx institute</a>. Some examples of what I've been working on during that learning experience.
            </p>
          </div>
  );

  return (
    <Page title="Projects" content={content} />
  )
}


export default Projects;
