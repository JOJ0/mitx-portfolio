import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import { PAGE_TITLES } from './constants/titles.js'
import projects from './db_projects.json'


function ProjectsTool() {
  const title = PAGE_TITLES.PROJECTS_TOOL
  const subheading = "Utils, helpers, unsophisticated projects"
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
