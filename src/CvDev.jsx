import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvDev() {
  const rows = [];
  for (var y=1994; y <= 2024; y++) {
    rows.push(<TimelineRow data={cv["dev"]} year={y} />);
  }

  return (
    <Page title="CV.dev" subheading="An alternative approach to a CV - my skills and experience around software development over the years." content={rows} />
  )
}

export default CvDev;

