import Page from './components/Page.jsx'
import Card from './components/Card.jsx'
import projects from './db_projects.json'


function ProjectsExercise() {
  const title = "Projects.Exercise";

  const CardColumns = () => {
    const cols = projects["exercise"].map((col, index) => {
      return (
        <div key={index} className="col-6 col-sm-4 col-md-3">
          <Card
            title={col.title}
            text={col.text}
            repo={col.repo}
            run={col.run}
            language={col.language}
          />
        </div>
      );
    });
    return cols;
  };

  const content = (
    <>
    <div className="row">
      <p>
        In 2023/2024 I attended the web programming course <a href="https://xpro.mit.edu/courses/course-v1:xPRO+PCCx/">Professional Certificate in Coding: Full Stack Development with MERN</a> at <a href="http://xpro.mit.edu">MITx Pro</a>. Most projects on this page were initiated during this course.
      </p>
    </div>

    <div className="row">
      <CardColumns />
    </div>
    </>
  );

  return (
    <Page title={title} content={content} />
  )
}


export default ProjectsExercise;
