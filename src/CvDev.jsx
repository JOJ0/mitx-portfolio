import Page from './components/Page.jsx';
import TimelineEntry from './components/TimelineEntry.jsx';
import TimelineBullet from './components/TimelineBullet.jsx';
import logo_ms from '~assets/microsoft.svg';
import logo_py from '~assets/python.svg';


function CvDev() {
  const content = (
  <>
    <div className="row">
        <TimelineBullet caption="1995-1997" />
        <TimelineEntry topic="DOS BATCH" descr="" topright="" image={ logo_ms } />
        <TimelineEntry topic="GWBASIC" descr="" topright="" image={ logo_ms } />
    </div>

    <div className="row">
        <TimelineBullet caption="1998-1999" highlight={false} />
        <TimelineEntry topic="DOS Batch" descr="" topright="" image={ logo_ms } highlight={false} />
        <TimelineEntry topic="Bash" descr="" topright="" highlight={false} />
        <TimelineEntry topic="HTML/CSS" descr="" topright="" highlight={false} />
    </div>


    <div className="row">
        <TimelineBullet caption="2000" />
        <TimelineEntry topic="PHP" descr="" topright="" />

    </div>
        <div className="row">
        <TimelineBullet caption="2016" />
        <TimelineEntry topic="Python" image={ logo_py } />
    </div>
  </>
  )

  return (
    <Page title="CV.dev" content={content} />
  )
}

export default CvDev;
