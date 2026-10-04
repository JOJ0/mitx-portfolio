import {TimelineRow} from './TimelineRow.jsx';


export const Timeline = (props) => {
    const rows = [];
    for (let y = props.from; y <= props.to; y++) {
        rows.push(<TimelineRow data={props.data} year={y} />);
    }
    const reverseRows = rows.slice().reverse();

    return (
        <>{reverseRows}</>
    );
}
