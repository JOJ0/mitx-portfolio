import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import { PAGE_TITLES } from './constants/titles.js'
import cv from './db_cv.json';

function CvArt() {
  const rows = [];
  for (let y=2003; y <= 2026; y++) {
    rows.push(<TimelineRow data={cv["art"]} year={y} />);
  }
  const reverseRows = rows.slice().reverse();

  const content = (
    <>
    <div className="row">
      <p>
      DJing, event promotion and performance work over the years.
    </p>
    </div>
    {reverseRows}
    </>
  );

  return (
    <Page title={PAGE_TITLES.CV_ART} content={content} />
  )
}

export default CvArt;

