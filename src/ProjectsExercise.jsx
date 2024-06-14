import Page from './components/Page.jsx'
import { Card, CardColumns } from './components/Card.jsx'
import projects from './db_projects.json'


function ProjectsExercise() {
  const title = "Projects.Exercise";

  const content = (
    <>
    <div className="row">
      <p>
        In 2023/2024 I attended the web programming course <a href="https://xpro.mit.edu/courses/course-v1:xPRO+PCCx/">Professional Certificate in Coding: Full Stack Development with MERN</a> at <a href="http://xpro.mit.edu">MITx Pro</a>. Most projects on this page were initiated during this course.
      </p>
    </div>

    <div className="row">
      <CardColumns cardsList={projects["exercise"]}/>
    </div>
    </>
  );

  return (
    <Page title={title} content={content} />
  )
}


export default ProjectsExercise;
