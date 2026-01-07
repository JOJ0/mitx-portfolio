import { Link } from 'react-router-dom'
import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvOps() {
  const rows = [];
  for (var y=1998; y <= 2025; y++) {
    rows.push(<TimelineRow data={cv["ops"]} year={y} />);
  }
  const reverseRows = rows.slice().reverse();

  const content = (
    <>
    <div className="row">
      <p>
      Things I've been managing over the years.
      </p>
      <p>
      Operating systems, "Infrastructure as Code" tools, system management
      platforms, cloud infrastructures, .... For agile tools,
      documentation-related services, databases and actual programming
      languages & shells, see <Link to="/cvdev">CV.dev</Link>
      </p>
    </div>
    {reverseRows}
    </>
  );

  return (
    <Page title="CV.ops" subheading="an alternative approach on a CV" content={content} />
  )
}

export default CvOps;

