import { Link } from 'react-router-dom'
import Page from './components/Page.jsx';
import { Timeline } from './components/Timeline.jsx';
import { PAGE_TITLES } from './constants/titles.js'
import cv from './db_cv.json';


function CvDev() {
  const content = (
    <>
    <div className="row">
      <p>
      Programming languages, frameworks, libraries, databases and
      developer/deployment tools I've been using over the years. For
      systems and platforms I’ve operated or been responsible for,
      see <Link to="/cvops">CV.ops</Link>
    </p>
    </div>
    <Timeline data={cv["dev"]} from={1994} to={2026} />
    </>
  );

  return (
    <Page title={PAGE_TITLES.CV_DEV} content={content} />
  )
}

export default CvDev;

