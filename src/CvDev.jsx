import { Link } from 'react-router-dom'
import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvDev() {
  const rows = [];
  for (var y=1994; y <= 2024; y++) {
    rows.push(<TimelineRow data={cv["dev"]} year={y} />);
  }
  const reverseRows = rows.slice().reverse();

  const content = (
    <>
    <div className="row">
      <p>Find out which programming languages and frameworks I've been using
      over the years. For public/private clouds experience and build-related
      things, also have a look at <Link
      to="/cvops">CV.ops</Link></p>
    </div>
    {reverseRows}
    </>
  );


  return (
    <Page title="CV.dev" subheading="an alternative approach to a CV - software development" content={content} />
  )
}

export default CvDev;

