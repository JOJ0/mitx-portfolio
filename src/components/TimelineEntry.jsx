function TimelineEntry(props) {

  return(
    <div className="col py-2">
      <div className={props.highlight ? "card border-success shadow" : "card"}>
        <div className="card-body">
          <div className={props.highlight ? "float-end text-success" : "float-end text-muted"}>{ props.topright }</div>
            <h4 className={props.highlight ? "card-title text-success" : "card-title text-muted"}>{ props.topic }</h4>
            <p className="card-text">{ props.descr }</p>
            <img className="img-fluid" src={ props.image } width="32" height="32" />
          </div>
        </div>
    </div>
  )
}

export default TimelineEntry;
