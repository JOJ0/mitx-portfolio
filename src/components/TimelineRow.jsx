import { TimelineEntry, TimelineEntriesFactory } from './TimelineEntry.jsx';
import { TimelineBullet } from './TimelineBullet.jsx';

export const TimelineRow = (props) => {
  const filtered = props.data.filter((entry) => {
    // return entry.year == props.year;
    console.log("entry is:");
    console.log(entry)
    console.log("props.year is:");
    console.log(props.year)
    // accept str and int as filter year
    const filterYear = int(props.year);
    return entry.year.includes(filterYear);
  });

  return (
    <div className="row">
      <TimelineBullet caption={props.year} />
      <TimelineEntriesFactory entries={filtered} />
    </div>
  )
};

