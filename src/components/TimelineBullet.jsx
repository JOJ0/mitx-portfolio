function TimelineBullet(props) {

  return(
        <div className="col-auto text-center flex-column d-none d-sm-flex">

            <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>

            <h5 className="m-2">
                <span className="badge rounded-pill bg-success">{props.caption}</span>
            </h5>

            <div className="row h-50">
                <div className="col border-end order">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>

        </div>
  )
}

export default TimelineBullet;
