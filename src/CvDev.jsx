import Page from './components/Page.jsx';
import TimelineEntry from './components/TimelineEntry.jsx';
import TimelineBullet from './components/TimelineBullet.jsx';


function CvDev() {
  const content = (
  <>
    <div className="container py-4">
    
    <div className="row">
        <TimelineBullet caption="1995" />
        <TimelineEntry topic="MS-DOS Batch" descr="" topright="" />
    </div>

    <div className="row">

        <TimelineBullet caption="1996" />
        <TimelineEntry topic="MS-DOS Batch" descr="" topright="" />
    </div>

    <div className="row">
        <TimelineBullet caption="1997" />
        <TimelineEntry topic="MS-DOS Batch" descr="" topright="" />
    </div>


    <div className="row">
        <TimelineBullet caption="1998" highlight={false} />
        <TimelineEntry topic="MS-DOS Batch" descr="" topright="" highlight={false} />
        <TimelineEntry topic="Bash" descr="" topright="" highlight={false} />
    </div>


    <div className="row">
        <TimelineBullet caption="1999" />
        <TimelineEntry topic="MS-DOS Batch" descr="" topright="" />
        <TimelineEntry topic="Bash" descr="" topright="" />

    </div>

</div>


  </>
  )

  return (
    <Page title="CV.dev" content={content} />
  )
}

export default CvDev;
