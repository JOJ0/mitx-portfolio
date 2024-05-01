function TimelineEntry(props) {

  return(
        <div className="col py-2">

            <div className="card border-success shadow">
                <div className="card-body">
                    <div className="float-end text-success">{ props.topright }</div>
                    <h4 className="card-title text-success">{ props.topic }</h4>
                    <p className="card-text">{ props.descr }</p>
                </div>
            </div>
        </div>
  )
}

export default TimelineEntry;
