import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import { PAGE_TITLES } from './constants/titles.js'
import projects from './db_projects.json'


function ProjectsExercise() {
  const title = PAGE_TITLES.PROJECTS_EXERCISE;
  const subheading = 'Fun, Experiments, Playground'

  const content = (
    <>
    <div className="row">
      <div className="col">
      </div>
    </div>

    <div className="row">
      <CardColumns cardsList={projects["exercise"]}/>
    </div>
    </>
  );

  return (
    <Page title={title} subheading={subheading} content={content} />
  )
}


export default ProjectsExercise;
