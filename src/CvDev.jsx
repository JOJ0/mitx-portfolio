import Page from './components/Page.jsx';
import { TimelineRow } from './components/TimelineRow.jsx';
import cv from './db_cv.json';


function CvDev() {
  const content = (
  <>
    <TimelineRow data={cv["dev"]} year="1994" />
    <TimelineRow data={cv["dev"]} year="1995-1997" />
    <TimelineRow data={cv["dev"]} year="1998-2000" />
    <TimelineRow data={cv["dev"]} year="2001" />
    <TimelineRow data={cv["dev"]} year="2002" />
    <TimelineRow data={cv["dev"]} year="2003-2004" />
    <TimelineRow data={cv["dev"]} year="2005-2006" />
    <TimelineRow data={cv["dev"]} year="2007" />
    <TimelineRow data={cv["dev"]} year="2008" />
    <TimelineRow data={cv["dev"]} year="2009-2014" />
    <TimelineRow data={cv["dev"]} year="2015-2017" />
    <TimelineRow data={cv["dev"]} year="2018-2019" />
    <TimelineRow data={cv["dev"]} year="2020" />
    <TimelineRow data={cv["dev"]} year="2021" />
    <TimelineRow data={cv["dev"]} year="2022" />
    <TimelineRow data={cv["dev"]} year="2023-2024" />

  </>
  )

  return (
    <Page title="CV.dev" content={content} />
  )
}

export default CvDev;
