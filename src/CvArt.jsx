import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import { PAGE_TITLES } from './constants/titles.js'
import cv from './db_cv.json';

function CvArt() {
  const rows = [];
  for (var y=2005; y <= 2025; y++) {
    rows.push(<TimelineRow data={cv["art"]} year={y} />);
  }

  return (
    <Page title={PAGE_TITLES.CV_ART} subheading="find an alternative approach on a CV here soon" content={rows} />
  )
}

export default CvArt;

