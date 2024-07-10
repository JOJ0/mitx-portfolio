import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvOps() {
  const rows = [];
  for (var y=1994; y <= 2024; y++) {
    rows.push(<TimelineRow data={cv["ops"]} year={y} />);
  }

  return (
    <Page title="CV.ops" content={rows} />
  )
}

export default CvOps;