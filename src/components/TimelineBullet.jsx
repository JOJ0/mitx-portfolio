export function TimelineBullet(props) {
  let hl = props.highlight;

  return(
        <div className="col-md-3 text-center flex-column d-sm-flex">

            <div className="row h-50">
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>

            <h2 className="m-2">
                <span className={hl ? "badge rounded-pill bg-success" : "badge rounded-pill bg-dark"}>{props.caption}</span>
            </h2>

            <div className="row h-50">
                <div className="col border-end order">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>

        </div>
  )
}

