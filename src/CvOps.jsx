import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvOps() {
  const rows = [];
  for (var y=1998; y <= 2024; y++) {
    rows.push(<TimelineRow data={cv["ops"]} year={y} />);
  }

  return (
    <Page title="CV.ops" subheading="Work in progress. You'll find an alternative approach to a CV of my sysadmin related skills and experience here soon." content={rows} />
  )
}

export default CvOps;

