import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';

function CvArt() {
  const rows = [];
  for (var y=2005; y <= 2024; y++) {
    rows.push(<TimelineRow data={cv["art"]} year={y} />);
  }

  return (
    <Page title="CV.art" subheading="find an alternative approach on a CV here soon - art related projects." content={rows} />
  )
}

export default CvArt;

