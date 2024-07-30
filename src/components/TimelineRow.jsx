import { TimelineEntry, TimelineEntriesFactory } from './TimelineEntry.jsx';
import { TimelineBullet } from './TimelineBullet.jsx';

export const TimelineRow = (props) => {
  const filtered = props.data.filter((entry) => {
    // return entry.year == props.year;
    console.log("entry is:");
    console.log(entry)
    console.log("props.year is:");
    console.log(props.year);
    
    // Handle year as string and int
    if (entry.year.includes(props.year) || entry.year.includes(parseInt(props.year))) {
      return true;
    };
 
    return false;
  });

  return (
    <div className="row">
      <div className="col-md-3 text-center flex-column d-sm-flex">
        <TimelineBullet caption={props.year} />
      </div>
      <TimelineEntriesFactory entries={filtered} />
    </div>
  )
};

