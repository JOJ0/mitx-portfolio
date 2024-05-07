import Page from './components/Page.jsx';
import TimelineEntry from './components/TimelineEntry.jsx';
import TimelineBullet from './components/TimelineBullet.jsx';


function CvDev() {
  const content = (
  <>
    <div className="row">
        <TimelineBullet caption="1995-1997" />
        <TimelineEntry topic="MS-DOS Batch" descr="" topright="" />
    </div>

    <div className="row">
        <TimelineBullet caption="1998-1999" highlight={false} />
        <TimelineEntry topic="MS-DOS Batch" descr="" topright="" highlight={false} />
        <TimelineEntry topic="Bash" descr="" topright="" highlight={false} />
        <TimelineEntry topic="HTML/CSS" descr="" topright="" highlight={false} />
    </div>


    <div className="row">
        <TimelineBullet caption="2000" />
        <TimelineEntry topic="PHP" descr="" topright="" />

    </div>
  </>
  )

  return (
    <Page title="CV.dev" content={content} />
  )
}

export default CvDev;
