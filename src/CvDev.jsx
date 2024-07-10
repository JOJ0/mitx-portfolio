import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvDev() {
  const years = ["1994","1995","1996"];
  const rows = [];
  for (var y=1994; y <= 2024; y++) {
    rows.push(<TimelineRow data={cv["dev"]} year={y} />);
  }

  return (
    <Page title="CV.dev" content={rows} />
  )
}

export default CvDev;
