import { TimelineEntry, TimelineEntriesFactory } from './TimelineEntry.jsx';
import { TimelineBullet } from './TimelineBullet.jsx';

export const TimelineRow = (props) => {
  const filtered = props.data.filter((entry) => {
    return entry.year == props.year;
  });

  return (
    <div className="row">
      <TimelineBullet caption={props.year} />
      <TimelineEntriesFactory entries={filtered} />
    </div>
  )
};

