import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvOps() {
  const rows = [];
  for (var y=1998; y <= 2024; y++) {
    rows.push(<TimelineRow data={cv["ops"]} year={y} />);
  }

  return (
    <Page title="CV.ops" subheading="WIP - find an alternative approach to a CV here soon - sysadmin & operating" content={rows} />
  )
}

export default CvOps;

