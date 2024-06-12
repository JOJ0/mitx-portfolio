import Page from './components/Page.jsx'
import Card from './components/Card.jsx'

function ProjectsExercise() {
  const title = "Projects.exercise"
  const content = (
    <>
    <div className="row">
      <p>
        In 2023/2024 I'm attending the web programming course <a href="https://xpro.mit.edu/courses/course-v1:xPRO+PCCx/">Professional Certificate in Coding: Full Stack Development with MERN</a> at <a href="http://xpro.mit.edu">MITx Pro</a>. Most projects on this page were initiated during this course.
      </p>
    </div>

    <div className="row">
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="PacMen Exercise"
          text="Generates PacMen that auto-move around the screen."
          repo="http://github.com/JOJ0/mitx-pacmen"
          run="https://joj0.github.io/mitx-pacmen"
          language="JavaScript/HTML/CSS"
        />
      </div>
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="Eye Exercise"
          text="Like Xwindows Xeyes, but in the web browser"
          repo="http://github.com/JOJ0/mitx-eye"
          run="https://joj0.github.io/mitx-eye"
          docs=""
          website=""
          language="JavaScript/HTML/CSS"
        />
      </div>
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="Real Time Bus Tracker Exercise"
          text="Watch where busses currently are driving in Boston/Massachusetts on an embedded Google Map."
          repo="http://github.com/JOJ0/mitx-bustracker"
          docs="https://github.com/JOJ0/mitx-bustracker#how-to-run"
          run=""
          website=""
          language="JavaScript/HTML/CSS"
        />
      </div>
      <div className="col-6 col-sm-4 col-md-3">
        <Card
          title="Bad Bank Exercise"
          text="Using React components to build a website for an imaginary bank"
          repo="http://github.com/JOJ0/mitx-badbank"
          run=""
          docs=""
          website=""
          language="ReactJS"
        />
      </div>
    </div>
    </>
  );

  return (
    <Page title={title} content={content} />
  )
}


export default ProjectsExercise;
