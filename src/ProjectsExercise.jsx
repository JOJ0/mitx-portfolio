import Page from './components/Page.jsx'

function ProjectsExercise() {
  const content = (
    <div className="row">
      <p>
        In 2023/2024 I'm attending a web programming course <a href="https://xpro.mit.edu/courses/course-v1:xPRO+PCCx/">Professional Certificate in Coding: Full Stack Development with MERN</a> at the <a href="http://xpro.mit.edu">MITx Pro Institute</a>. Most projects on this page were initiated during this course.
      </p>
    </div>
  );

  return (
    <Page title="Projects.exercising" content={content} />
  )
}


export default ProjectsExercise;
