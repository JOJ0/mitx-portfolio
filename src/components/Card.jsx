export function Card(props) {
  return(
    <div className="card mb-3" width="10px">
      {props.header && (<div className="card-header">{props.header}</div>)}
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        <p className="card-text">
          {props.text && (props.text)}
        </p>
        <p className="mt-o mb-0">
          {props.repo && (<a href={props.repo} class="btn btn-outline-secondary">Repo</a>)}
          {props.run && (<a href={props.run} class="btn btn-secondary">Run</a>)}
          {props.docs && (<a href={props.run} class="btn btn-secondary">Docs</a>)}
          {props.website && (<a href={props.website} class="btn btn-dark">Website</a>)}
        </p>
          {props.members && (<div className="card-status"><em>Members: {props.members}</em></div>)}
      </div>

    </div>
  )
}


export const CardColumns = (props) => {
  const cols = props.cardsList.map((col, index) => {
    return (
      <div key={index} className="col-6 col-sm-4 col-md-3">
        <Card
          title={col.title}
          text={col.text}
          repo={col.repo}
          run={col.run}
          language={col.language}
        />
      </div>
    );
  });
  return cols;
};


export default Card;
