import { TimelineEntry, TimelineEntriesFactory } from './TimelineEntry.jsx';
import { TimelineBullet } from './TimelineBullet.jsx';

export const TimelineRow = (props) => {
  const filtered = props.data.filter((entry) => {
    // Handle year as string and int
    if (entry.year.includes(props.year) || entry.year.includes(parseInt(props.year))) {
      return true;
    };
    return false;
  });

  return (
    <div className="row">
      <div className="col-12">
        <div className="text-center flex-column d-sm-flex">
          <TimelineBullet caption={props.year} />
        </div>
      </div>
      <TimelineEntriesFactory entries={filtered} />
    </div>
  )
};

