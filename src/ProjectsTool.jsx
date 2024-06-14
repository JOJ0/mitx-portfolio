import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import projects from './db_projects.json'


function ProjectsTool() {
  const title = "Projects.Tool"
  const content = (
    <>
    <div className="row">
      <p>
      Smaller tools and utilities. Mostly unmaintained, opinionated and unsophisticated code. I still use some of them on a regular basis though. Might be usable as a starting point for others. Fork it and HTH!
      </p>
    </div>

    <div className="row">
      <CardColumns cardsList={projects["tool"]}/>
    </div>
    </>
  );

  return (
    <Page title={title} content={content} />
  )
}


export default ProjectsTool;
