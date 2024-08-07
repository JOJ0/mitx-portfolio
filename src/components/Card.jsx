export function Card(props) {
  return(
    <div className="card mb-3" width="10px">
      {props.header && (<div className="card-header">{props.header}</div>)}
      <div className="card-body">
        {props.language && (
          <div className="float-end text-dark">
            <img className="mt-0" src={props.language} width="20" height="20" />
          </div>
        )}

        {props.title && (<h5 className="card-title">{props.title}</h5>)}

        <p className="card-text">
          {props.text && (props.text)}
        </p>
        <p className="mt-o mb-0">
          {props.repo && (<a href={props.repo} className="btn btn-outline-secondary">Repo</a>)}
          {props.run && (<a href={props.run} className="btn btn-secondary">Run</a>)}
          {props.docs && (<a href={props.docs} className="btn btn-secondary">Docs</a>)}
          {props.website && (<a href={props.website} className="btn btn-dark">Website</a>)}
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
          docs={col.docs}
          website={col.website}
          members={col.members}
          language={col.language}
        />
      </div>
    );
  });
  return cols;
};


export default Card;
