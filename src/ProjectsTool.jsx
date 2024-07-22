import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import projects from './db_projects.json'


function ProjectsTool() {
  const title = "Projects.Tool"
  const subheading = "Smaller tools and utilities. Some unmaintained, mostly opinionated, often unsophisticated code. I still use some of them on a regular basis though. Fork it and HTH!"
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
