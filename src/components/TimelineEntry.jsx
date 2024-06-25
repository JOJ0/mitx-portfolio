import logo_ms from '~assets/microsoft.svg';
import logo_py from '~assets/python.svg';
import logo_bat from '~assets/batch.png';

export function TimelineEntry(props) {
  return(
    <div className="col-auto py-2" key={props.key}>
      <div className={props.highlight ? "card card-timeline border-success shadow" : "card card-timeline"}>
        <img className="card-img-top" src={ props.image } width="32" />
        <div className="card-body p-2">
          <div className={props.highlight ? "float-end text-success" : "float-end text-muted"}>{ props.topright }</div>
            <h6 className={props.highlight ? "card-title card-title-timeline text-success text-center" : "card-title card-title-timeline text-muted text-center"}>{ props.topic }</h6>
          </div>
        </div>
    </div>
  )
}

export function TimelineEntriesFactory(props) {
  const sorted = props.entries.sort((a, b) => a.topic.localeCompare(b.topic));
  const entries = sorted.map((entry, index) => {
    return (
      <div className="card-deck">
      <TimelineEntry topic={entry.topic} image={entry.icon} key={index}/>
      </div>
    );
  });
  return entries;
}

