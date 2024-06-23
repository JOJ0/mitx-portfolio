import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvDev() {
  const content = (
  <>
    <TimelineRow data={cv["dev"]} year="1994" />
    <TimelineRow data={cv["dev"]} year="1995-1997" />
    <TimelineRow data={cv["dev"]} year="1998"
    <TimelineRow data={cv["dev"]} year="1999-2001"
    <TimelineRow data={cv["dev"]} year="2002-2004"
    <TimelineRow data={cv["dev"]} year="2005-2006"
  
  
  
  
  
  </>
  )

  return (
    <Page title="CV.dev" content={content} />
  )
}

export default CvDev;
