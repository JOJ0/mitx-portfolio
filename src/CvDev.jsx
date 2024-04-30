import Page from './components/Page.jsx'


function CvDev() {
  const content = (
  <>
    <div className="container py-4">
    <h2 className="font-weight-light text-center text-muted py-3">Cv.dev timeline</h2>

    
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


        <div className="col py-2">

            <div className="card">
                <div className="card-body">
                    <div className="float-end text-muted">Mon, Jan 9th 2021 7:00 AM</div>
                    <h4 className="card-title text-muted">PHP</h4>
                    <p className="card-text">text</p>
                </div>
            </div>
        </div>

        <div className="col py-2">
            <div className="card">
                <div className="card-body">
                    <div className="float-end text-muted">Mon, Jan 9th 2021 7:00 AM</div>
                    <h4 className="card-title text-muted">VBscript</h4>
                    <p className="card-text">text</p>
                </div>
            </div>
        </div>

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
        
        
        <div className="col py-2">
            <div className="card border-success shadow">
                <div className="card-body">
                    <div className="float-end text-success">Tue, Jan 10th 2021 8:30 AM</div>

                    <h4 className="card-title text-success">PHP</h4>
                    <p className="card-text">text</p>
                    <button className="btn btn-sm btn-outline-secondary" type="button" data-bs-target="#t2_details" data-bs-toggle="collapse">Show Details ▼</button>
                    <div className="collapse border" id="t2_details">
                        <div className="p-2 text-monospace">
                            <div>08:30 - 09:00 Breakfast in CR 2A</div>
                            <div>09:00 - 10:30 Live sessions in CR 3</div>
                            <div>10:30 - 10:45 Break</div>
                            <div>10:45 - 12:00 Live sessions in CR 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col py-2">
            <div className="card">
                <div className="card-body">
                    <div className="float-end text-muted">Mon, Jan 9th 2021 7:00 AM</div>
                    <h4 className="card-title text-muted">VBscript</h4>
                    <p className="card-text">text</p>
                </div>
            </div>
        </div>

        <div className="col py-2">
            <div className="card">
                <div className="card-body">
                    <div className="float-end text-muted">Mon, Jan 9th 2021 7:00 AM</div>
                    <h4 className="card-title text-muted">Bash</h4>
                    <p className="card-text">text</p>
                </div>
            </div>
        </div>


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

        <div className="col py-2">
            <div className="card">
                <div className="card-body">
                    <div className="float-end text-muted">Thu, Jan 12th 2021 11:30 AM</div>
                    <h4 className="card-title">Day 4 Wrap-up</h4>
                    <p className="card-text">text</p>
                </div>
            </div>
        </div>
    </div>

</div>


  </>
  )

  return (
    <Page title="CV.dev" content={content} />
  )
}

export default CvDev;
