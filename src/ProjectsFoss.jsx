import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import projects from './db_projects.json'


function ProjectsFoss() {
  const title = "Projects.FOSS"
  const content = (
    <>
    <div className="row">
      <p>
      (Free and) open-source software projects I'm involved with.
      </p>
    </div>
    <div className="row">
      <CardColumns cardsList={projects["foss"]}/>
    </div>
    </>
  );

  return (
    <Page title={title} content={content} />
  )
}


export default ProjectsFoss;
