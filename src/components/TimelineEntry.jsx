function TimelineEntry(props) {

  return(
        <div className="col-sm-2 py-2">

            <div className={props.highlight ? "card border-success shadow" : "card"}>
                <div className="card-body">
                    <div className={props.highlight ? "float-end text-success" : "float-end text-muted"} >{ props.topright }</div>
                    <h4 className={props.highlight ? "card-title text-success" : "card-title text-muted"}>{ props.topic }</h4>
                    <p className="card-text">{ props.descr }</p>
                </div>
            </div>
        </div>
  )
}

export default TimelineEntry;
