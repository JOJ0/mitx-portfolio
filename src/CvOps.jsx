import { Link } from 'react-router-dom'
import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import { PAGE_TITLES } from './constants/titles.js'
import cv from './db_cv.json';


function CvOps() {
  const rows = [];
  for (var y=1998; y <= 2026; y++) {
    rows.push(<TimelineRow data={cv["ops"]} year={y} />);
  }
  const reverseRows = rows.slice().reverse();

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
    {reverseRows}
    </>
  );

  return (
    <Page title={PAGE_TITLES.CV_OPS} subheading="an alternative approach on a CV" content={content} />
  )
}

export default CvOps;

