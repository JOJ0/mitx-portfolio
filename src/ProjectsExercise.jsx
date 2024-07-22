import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import projects from './db_projects.json'


function ProjectsExercise() {
  const title = "Projects.Exercise";
  const subheading = 'Most projects on this page were initiated throughout my completion of "Professional Certificate in Coding: Full Stack Development with MERN" at "MIT xPro".'

  const content = (
    <>
    <div className="row">
      <div className="col">
        <p>
          <a href="https://xpro.mit.edu/courses/course-v1:xPRO+PCCx/">Course description</a> on the website of the course provider <a href="http://xpro.mit.edu">Massachusetts Institute of Technology xPro</a>
        </p>
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
