import { Link } from 'react-router-dom'
import Page from './components/Page.jsx';
import { Timeline } from './components/Timeline.jsx';
import { PAGE_TITLES } from './constants/titles.js'
import cv from './db_cv.json';


function CvOps() {
  const content = (
    <>
    <div className="row">
      <p>
      Systems and platforms I’ve operated or been responsible for in production.
      </p>
      <p>
      Operating systems, virtualization, storage, monitoring, configuration
      management and on‑prem/cloud platforms where I had operational
      ownership. For pure development and deployment‑target tools,
      see <Link to="/cvdev">CV.dev</Link>.
      </p>
    </div>
    <Timeline data={cv["ops"]} from={1998} to={2026} />
    </>
  );

  return (
    <Page title={PAGE_TITLES.CV_OPS} content={content} />
  )
}

export default CvOps;

