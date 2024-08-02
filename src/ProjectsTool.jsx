import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import projects from './db_projects.json'


function ProjectsTool() {
  const title = "Projects.Tool"
  const subheading = "smaller utilities I wrote for myself. Might be opinionated or unsophisticated code. Fork them! HTH!"
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
