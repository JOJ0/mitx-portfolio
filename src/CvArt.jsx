import Page from './components/Page.jsx';
import { ArtTimeline } from './components/ArtTimeline.jsx';
import { PAGE_TITLES } from './constants/titles.js'
import cv from './db_cv.json';

function CvArt() {
  const content = (
    <>
    <div className="row">
      <p>
      DJing, event promotion and performance work over the years.
    </p>
    </div>
    <ArtTimeline data={cv["art"]} from={2003} to={2026} />
    </>
  );

  return (
    <Page title={PAGE_TITLES.CV_ART} content={content} />
  )
}

export default CvArt;

