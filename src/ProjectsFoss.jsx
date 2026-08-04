import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import { PAGE_TITLES } from './constants/titles.js'
import projects from './db_projects.json'


function ProjectsFoss() {
  const title = PAGE_TITLES.PROJECTS_FOSS
  const subheading ="Open Source projects I'm involved with."

  const content = (
    <>
    <div className="row">
    </div>
    <div className="row">
      <CardColumns cardsList={projects["foss"]}/>
    </div>
    </>
  );

  return (
    <Page title={title} subheading={subheading} content={content} />
  )
}


export default ProjectsFoss;
