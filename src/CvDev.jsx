import Page from './components/Page.jsx';
import TimelineEntry from './components/TimelineEntry.jsx';


function CvDev() {
  const content = (
  <>
    <div className="container py-4">
    
    <div className="row">

        <div className="col-auto text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-success">1997</span>
            </h5>
            <div className="row h-50">
                <div className="col border-end order">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>


        <TimelineEntry topic="MS-DOS Batch" descr="" topright="" />

    </div>


    <div className="row">

        <div className="col-auto text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col border-end">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-success">1998</span>
            </h5>
            <div className="row h-50">
                <div className="col border-end">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>
        
        
        <TimelineEntry topic="MS-DOS Batch" descr="" topright="" />
        <TimelineEntry topic="Bash" descr="" topright="" />

    </div>


    <div className="row">
        <div className="col-auto text-center flex-column d-none d-sm-flex">
            <div className="row h-50">
                <div className="col border-end">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <h5 className="m-2">
                <span className="badge rounded-pill bg-success">1999</span>
            </h5>
            <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
        </div>

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
