import TimelineEntry from './TimelineEntry.jsx';
import TimelineBullet from './TimelineBullet.jsx';
import logo_ms from '~assets/microsoft.svg';
import logo_py from '~assets/python.svg';

const TimelineRow = (props) => {
  console.log("This is props:");
  console.log(props);
  const filtered = props.data.filter((entry) => {
    return entry.year == props.year;
  });
  console.log("This is filtered:");
  console.log(filtered);


  const Entries = props.filtered.map((entry, index) => {
    return (
          <TimelineEntry topic={entry.topic} image={entry.icon} />
    );
  });

  return (
    <div className="row" key='' >
      <TimelineBullet caption={props.year} />
      <Entries />
    </div>
  )
};

export default TimelineRow;
