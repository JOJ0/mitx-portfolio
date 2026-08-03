import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import projects from './db_projects.json'


function ProjectsTool() {
  const title = "Projects.Tool"
  const subheading = "Utils, tools, unsophisticated projects"
  const content = (
    <>
    <div className="row">
    </div>

    <div className="row">
      <CardColumns cardsList={projects["tool"]}/>
    </div>
    </>
  );

  return (
    <Page title={title} subheading={subheading} content={content} />
  )
}


export default ProjectsTool;
